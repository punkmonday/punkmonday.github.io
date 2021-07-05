---
published: false
author: punkmonday
layout: post
tags:
  - java
categories:
  - java
---
## nginx转发内网Docker rocketmq sendDefaultImpl call timeout

### 问题描述

主要原因是内网的rocketmq无法和客户端通信导致的,公司外网服务器只允许开放的端口号12000-13000,而rocketmq默认端口号10911不在范围内,需要改为12xxx-13000,并且nginx的转发的端口也要保持一致,既nginx到docker 12021(nginx) -> 12021(主机) -> 12021(docker),还有rocketmq的fastRemoting模式端口是listenPort - 2 也必须转发出去

### 操作步骤

本文docker部署脚本使用[foxiswho / docker-rocketmq](https://github.com/foxiswho/docker-rocketmq)

1. 修改/rmq/rmq/brokerconf/brocker.conf, brokerIP1改为外网地址, listenPort改为12021
2. 修改docker-comopse.yml,broker端口映射 12019:12019 12021:12021
3. docker-compose down, 从新运行start.sh
4. ngin修改转发端口stream 12021 -> 内网12021 12019 -> 12019
