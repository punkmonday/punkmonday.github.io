---
published: true
layout: post
title: linux上设置java环境变量
author: punkmonday
tags:
  - java
categories:
  - java
---
```
$: sudo vim /etc/profile


JAVA_HOME=/usr/java/jdk1.8.0_131
export JAVA_HOME
PATH=$JAVA_HOME/bin:$PATH
export PATH
```

tips: /etc/profile是所有用户登录系统都要执行的文件,全局环境变量通常设置在这里