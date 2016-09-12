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
```
plink -t -pw password sessionname remotecommand
```

bat注意

```
@echo off 
::关闭回显并隐藏此语句
set a=100 
::中间不能有空格,变量赋值
if %a%==100 ( echo "true" ) else echo "false" 
::if语句单行写法括号不允许省略,否则出错
if %a%==100 echo "true 
::此处不加else没问题,加了else报错
::多行写法
if %a%==100 (
  goto A
) else (
  goto B
)
::标签A
:A
echo "true"
goto end
::标签B
:B
echo "false"
goto end
```
