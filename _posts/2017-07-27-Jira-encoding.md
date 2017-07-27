---
published: true
layout: post
title: jira和confluence集成 乱码解决方案
author: punkmonday
tags:
  - jira
categories:
  - java
---
jira和confluence集成confluence里插入issue,但是在issue里查看confluence乱码

解决方案:
$JIRA_INSTALL_HOME/bin/setenv.sh修改:

```
JVM_SUPPORT_RECOMMENDED_ARGS="-Dfile.encoding=utf-8"
```
