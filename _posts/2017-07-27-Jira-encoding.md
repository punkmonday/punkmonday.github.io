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

参考:

[JIRA Knowledge Base JIRA Application internationalisation and encoding troubleshooting](https://confluence.atlassian.com/jirakb/jira-application-internationalisation-and-encoding-troubleshooting-203394762.html)

[Setting properties and options on startup](https://confluence.atlassian.com/adminjiraserver070/setting-properties-and-options-on-startup-749383528.html)
