---
published: true
layout: post
categories: java
author: punkmonday
tags: 
  - linux
title: linux打包编译安装源代码
---


> 安装\*.tar.gz\*.tar.bz2的文件(bz2比gz压缩效率更高,花费时间更多)

1. tar

```shell
#创建打包文件
tar cvf fileName.tar fileName
#创建打包文件并压缩gzip
tar zcvf fileName.tar.gz fileName
#创建打包文件并压缩bzip2
tar jcvf fileName.tar.bz2 fileName
#查看打包文件
tar tf fileName.tar
#提取文件
tar xvf fileName.tar
#解压并提取文件到当前目录
tar zxvf fileName.tar.gz
tar jxvf fileName.tar.bz2
#解压并提取文件到指定目录
tar zxvf fileName.tar.gz /home/dir
tar jxvf fileName.tar.bz2 /home/dir
```
2. \./configure make make install

```shell
#解压之后运行,./configure检测环境配置,make编译源代码制作软件,make install安装软件

./configure
make 
make install
```
