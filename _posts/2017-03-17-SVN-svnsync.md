---
published: false
layout: post
title: SVN svnsync远程同步库
author: punkmonday
tags:
  - java
categories:
  - java
---
源地址(需要同步):http://ccc.ccc.com/svn/project  
目标地址(同步到此地址):/var/home/user/repo/project  
(操作在目标server)

### windows:  
修改/var/home/user/repo/project/hooks/pre-revprop-change.tmpl 为pre-revprop-change.bat 内容只留下exit 0

### linux:
修改/var/home/user/repo/project/hooks/pre-revprop-change.tmpl 为pre-revprop-change 内容只留下exit 0

cli: 

```sh
#过程中需要输入用户名和密码
svnsync init file:///var/home/user/repo/project/ http://ccc.ccc.com/svn/project
# 以后的同步使用这段代码进行
svnsync sync file:///var/home/user/repo/project
```

## 注意  
sync有两种方式:  
1.新建repo然后sync  

```sh
#初始化svn版本库(类似git init)
svnadmin create
```
2.直接copy 源repo之后sync

copy源repo之后同步要注意init repo的时候加参数--allow-non-empty

```sh
svnsync init --allow-non-empty file:///E:\Repositories\project https://ccc.ccc.com/svn/project/
```