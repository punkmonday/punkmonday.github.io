---
published: true
layout: post
title: ubuntu 15.10上安装wn725n无线网卡驱动
tag: 
  - linux
  - tplink
categories: java
---



```shell
fff@fff-R478-R429:~$ uname -a
Linux fff-R478-R429 4.2.0-27-generic #32-Ubuntu SMP Fri Jan 22 04:49:08 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux
```



```shell

##安装过程如下

$git clone  http://github.com/lwfinger/rtl8188eu.git

$cd rtl8188eu

$make

$sudo make install

$sudo reboot

```
