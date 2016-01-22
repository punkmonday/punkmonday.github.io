---
published: false
layout: post
title: php+apache环境安装
categories: java
author: punkmonday
tags: 
  - php
---

# 系统环境

* windows7
* php5.6.17
* apache2.4

注意php和apache2.4需要安装相应的windows visual c++ 2012 redistributeable runtime

# apache install

1. down http://www.apachehaus.com/cgi-bin/download.plx
2. 解压apache2.4 修改/Apache24/conf/httpd.conf
```
Define SRVROOT "D:/yourpath/PHP/Apache24" //修改为apache所在目录
ServerRoot "${SRVROOT}" //不需要修改
```
3. 运行cmd,如果没有报错,可以访问localhost,说明apache安装成功
```
cd yourApachepath/bin
httpd
```

# php install
1. down http://www.php.net/downloads.php
2. 解压/php/ 将php.ini-development 复制改为php.ini
3. open /Apache24/conf/httpd.conf 添加:
```
# 
LoadModule php5_module "C:/php/php5apache2.dll"
AddHandler application/x-httpd-php .php

# 配置 php.ini 的路径
PHPIniDir "C:/php"

```
4.打开mysql支持扩展extensions,open/php/php.ini
```
; Directory in which the loadable extensions (modules) reside.
; http://php.net/extension-dir
; extension_dir = "./"
; On windows:
extension_dir = "D:/yourPath/PHP/php-5.6.17-Win32-VC11-x64/ext"
```
```
extension=php_curl.dll
extension=php_gd2.dll
extension=php_mbstring.dll
extension=php_mysql.dll
extension=php_mysqli.dll
extension=php_pdo_mysql.dll
extension=php_xmlrpc.dll
```