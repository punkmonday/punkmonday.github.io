---
published: true
layout: post
title: bat shift命令用法
author: punkmonday
tags:
  - bat
  - windows
categories:
  - linux
---
basic

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
) else ( ::注意这个地方不能换行,否则无法识别else语句
  goto B
)
::标签A A后需要换行,不换行会被作为表前端名称字符串 比如 : A echo "true" 
:A
echo "true"
goto end
::标签B
:B
echo "false"
goto end
```

example of shift

```
@echo off
rem MYCOPY.BAT copies any number of files
rem to a directory.
rem The command uses the following syntax:
rem mycopy dir file1 file2 ...
set todir=%1
:getfile
shift
if "%1"=="" goto end
copy %1 %todir%
goto getfile
:end
set todir=
echo All done
```
