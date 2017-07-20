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
JAVA_HOME=/usr/java/jdk1.8.131
export JAVA_HOME
PATH=$JAVA_HOME/bin:$PATH
export PATH
```