---
published: true
layout: post
title: shell脚本逻辑运算
author: punkmonday
tags:
  - linux
categories:
  - linux
---
shell脚本引号问题记录

```
#对于没有空格的字符，可以不加引号
#对于中间有空格的字符，需要加引号，否则就会被解析为一个完整的字符，导致判断错误
#建议都加上双引号
#[号后面加空格,type [可以看到[是一个内置命令等同于test命令,]是结束if判断
read a
read b
if [ $a -a $b ] #永远为true,因为$a -a $b被解析为了"$a -a $b"，字符永远不会为空
if ["$a" -a "$b"] #这样就符合逻辑运算结果了，先判断$a是否为空，在判断$b是否为空
#判空注意 ==号左右都有空格 [两边有空格
if [ "$1" == "" ]
then
	echo "null"
else 
	echo "$1"
fi
```
