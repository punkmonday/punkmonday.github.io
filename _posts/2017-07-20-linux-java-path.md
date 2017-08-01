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


JAVA_HOME=/usr/java/jdk1.8.0_144
export JAVA_HOME
PATH=$JAVA_HOME/bin:$PATH
export PATH
```

tips: /etc/profile是所有用户登录系统都要执行的文件,全局环境变量通常设置在这里,如果之前安装过open_jdk,有可能/user/bin/java依然是openjdk的java,需要使用alternatives切换java

```
## java ##
alternatives --install /usr/bin/java java /usr/java/jdk1.8.0_144/bin/java 200000
## 切换java使用新版的jdk
alternatives --config java
```

参考:

[Install Oracle Java JDK 8 On CentOS 7/6.5/6.4](https://www.unixmen.com/install-oracle-java-jdk-8-centos-76-56-4/)
