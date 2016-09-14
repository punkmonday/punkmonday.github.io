---
published: false
layout: post
title: bat shift命令用法
author: punkmonday
tags:
  - bat
  - windows
categories:
  - linux
---
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