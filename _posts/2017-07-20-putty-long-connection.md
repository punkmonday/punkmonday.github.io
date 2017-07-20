---
published: true
layout: post
title: putty保持长连接设置
author: punkmonday
tags:
  - linux
  - putty
categories:
  - linux
---
PuTTY的设置方法是：在Connection里面有个Seconds between keepaliaves。这里就是每间隔指定的秒数，就给服务器发送一个空的数据包，来保持连接。以免登录的主机那边在长时间没接到数据后，会自动断开SSH的连接。默认是0，就是不打开这个功能。 

所以，如果想不让PuTTY自动断开，把这个数值设置成60即可。

另外你也许还要更改ssh服务器的配置文件/etc/ssh/sshd_config
　　ClientAliveInterval指定了服务器端向客户端请求消息的时间间隔, 默认是0，不发送。而ClientAliveInterval 60表示每分钟发送一次，然后客户端响应，这样就保持长连接了。这里比较怪的地方是：不是客户端主动发起保持连接的请求(如FTerm, CTerm等),而是需要服务器先主动。
　　另外，至于ClientAliveCountMax，使用默认值3即可。ClientAliveCountMax表示服务器发出请求后客户端没有响应的次数达到一定值，就自动断开，正常情况下，客户端不会不响应。
改完服务器记得保存后记得重启ssh服务。
