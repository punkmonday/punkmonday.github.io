---
published: true
layout: post
author: punkdmonday
title: putty命令行工具plink日志
tags:
  - putty
  - plink
categories:
  - linux
---
plink是putty项目下的一个putty的cmdline版本,可以使用脚本方式连接SSH,使用时注意如果需要运行sudo命令,需要加入-t启动pty模式

exp
```sh
plink -t -pw password sessionname remotecommand
```
