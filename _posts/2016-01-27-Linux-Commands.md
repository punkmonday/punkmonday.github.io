---
published: false
layout: post
categories: java
author: punkmonday
tags: 
  - linux
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
```
2. ./configure make make install


