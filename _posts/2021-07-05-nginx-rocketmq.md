---
published: true
author: punkmonday
layout: post
tags:
  - java
categories:
  - java
title: nginx内网转发rocketmq sendDefaultImpl timeout
---
## nginx转发内网Docker rocketmq sendDefaultImpl call timeout

### 问题描述

主要原因是内网的rocketmq无法和客户端通信导致的,公司外网服务器只允许开放的端口号12000-13000,而rocketmq默认端口号10911不在范围内,需要改为12xxx-13000,并且nginx的转发的端口也要保持一致,既nginx到docker 12021(nginx) -> 12021(主机) -> 12021(docker),还有rocketmq的fastRemoting模式端口是listenPort - 2 也必须转发出去

### 操作步骤

本文docker部署脚本使用[foxiswho / docker-rocketmq](https://github.com/foxiswho/docker-rocketmq)

1. 修改/rmq/rmq/brokerconf/broker.conf, brokerIP1改为外网地址, listenPort改为12021
2. 修改docker-comopse.yml,broker端口映射 12019:12019 12021:12021
3. docker-compose down, 从新运行start.sh
4. ngin修改转发stream端口 12021 -> 12021  12019 -> 12019

### 参考脚本

docker-copose.yml

```
version: '3.5'

services:
  rmqnamesrv:
    image: foxiswho/rocketmq:4.8.0
#    image: registry.cn-hangzhou.aliyuncs.com/foxiswho/rocketmq:4.7.0
    container_name: rmqnamesrv
    ports:
      - 9876:9876
    volumes:
      - ./rmqs/logs:/home/rocketmq/logs
      - ./rmqs/store:/home/rocketmq/store
    environment:
      JAVA_OPT_EXT: "-Duser.home=/home/rocketmq -Xms512M -Xmx512M -Xmn128m"
    command: ["sh","mqnamesrv"]
    networks:
        rmq:
          aliases:
            - rmqnamesrv
  rmqbroker:
    image: foxiswho/rocketmq:4.8.0
#    image: registry.cn-hangzhou.aliyuncs.com/foxiswho/rocketmq:4.7.0
    container_name: rmqbroker
    ports:
      - 12019:12019
      - 12021:12021
    volumes:
      - ./rmq/logs:/home/rocketmq/logs
      - ./rmq/store:/home/rocketmq/store
      - ./rmq/brokerconf/broker.conf:/etc/rocketmq/broker.conf
    environment:
        JAVA_OPT_EXT: "-Duser.home=/home/rocketmq -Xms512M -Xmx512M -Xmn128m"
    command: ["sh","mqbroker","-c","/etc/rocketmq/broker.conf","-n","rmqnamesrv:9876","autoCreateTopicEnable=true"]
    depends_on:
      - rmqnamesrv
    networks:
      rmq:
        aliases:
          - rmqbroker

  rmqconsole:
    image: styletang/rocketmq-console-ng
    container_name: rmqconsole
    ports:
      - 8180:8080
    environment:
        JAVA_OPTS: "-Drocketmq.namesrv.addr=rmqnamesrv:9876 -Dcom.rocketmq.sendMessageWithVIPChannel=false"
    depends_on:
      - rmqnamesrv
    networks:
      rmq:
        aliases:
          - rmqconsole

networks:
  rmq:
    name: rmq
    driver: bridge
```

broker.conf

```
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.


#所属集群名字
brokerClusterName=DefaultCluster

#broker名字，注意此处不同的配置文件填写的不一样，如果在broker-a.properties使用:broker-a,
#在broker-b.properties使用:broker-b
brokerName=broker-a

#0 表示Master，>0 表示Slave
brokerId=0

#nameServer地址，分号分割
#namesrvAddr=rocketmq-nameserver1:9876;rocketmq-nameserver2:9876
namesrvAddr=rmqnamesrv:9876

#启动IP,如果 docker 报 com.alibaba.rocketmq.remoting.exception.RemotingConnectException: connect to <192.168.0.120:10909> failed
# 解决方式1 加上一句producer.setVipChannelEnabled(false);，解决方式2 brokerIP1 设置宿主机IP，不要使用docker 内部IP
brokerIP1=10.10.13.68

#在发送消息时，自动创建服务器不存在的topic，默认创建的队列数
defaultTopicQueueNums=4

#是否允许 Broker 自动创建Topic，建议线下开启，线上关闭 ！！！这里仔细看是false，false，false
#原因下篇博客见~ 哈哈哈哈
autoCreateTopicEnable=true

#是否允许 Broker 自动创建订阅组，建议线下开启，线上关闭
autoCreateSubscriptionGroup=true

#Broker 对外服务的监听端口
listenPort=12021

#删除文件时间点，默认凌晨4点
deleteWhen=04

#文件保留时间，默认48小时
fileReservedTime=120

#commitLog每个文件的大小默认1G
mapedFileSizeCommitLog=1073741824

#ConsumeQueue每个文件默认存30W条，根据业务情况调整
mapedFileSizeConsumeQueue=300000

#destroyMapedFileIntervalForcibly=120000
#redeleteHangedFileInterval=120000
#检测物理文件磁盘空间
diskMaxUsedSpaceRatio=88
#存储路径
#storePathRootDir=/home/ztztdata/rocketmq-all-4.1.0-incubating/store
#commitLog 存储路径
#storePathCommitLog=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/commitlog
#消费队列存储
#storePathConsumeQueue=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/consumequeue
#消息索引存储路径
#storePathIndex=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/index
#checkpoint 文件存储路径
#storeCheckpoint=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/checkpoint
#abort 文件存储路径
#abortFile=/home/ztztdata/rocketmq-all-4.1.0-incubating/store/abort
#限制的消息大小
maxMessageSize=65536

#flushCommitLogLeastPages=4
#flushConsumeQueueLeastPages=2
#flushCommitLogThoroughInterval=10000
#flushConsumeQueueThoroughInterval=60000

#Broker 的角色
#- ASYNC_MASTER 异步复制Master
#- SYNC_MASTER 同步双写Master
#- SLAVE
brokerRole=ASYNC_MASTER

#刷盘方式
#- ASYNC_FLUSH 异步刷盘
#- SYNC_FLUSH 同步刷盘
flushDiskType=ASYNC_FLUSH

#发消息线程池数量
#sendMessageThreadPoolNums=128
#拉消息线程池数量
#pullMessageThreadPoolNums=128

```

nginx

```
    upstream mq12021 {
        server 10.2.0.4:12021 weight=5 max_fails=3 fail_timeout=30s;
    }
    server {
        listen 12021;
        proxy_pass mq12021;
        proxy_timeout 600s;
        proxy_connect_timeout 30s;
    }
    upstream mq12019 {
        server 10.2.0.4:12019 weight=5 max_fails=3 fail_timeout=30s;
    }
    server {
        listen 12019;
        proxy_pass mq12019;
        proxy_timeout 600s;
        proxy_connect_timeout 30s;
    
```
