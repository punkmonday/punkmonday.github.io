---
published: true
layot: post
title: 集成jira账号到confluence fisheye注意事项
author: punkmonday
tags:
  - java
categories:
  - java
---
安装atlassian crucible时,注意admin账号可能无法登陆,这个时候需要访问以下URL进入设置

```
http://<FISHEYE_HOST>:8060/admin/login-default.do
```

集成主要原理是要设置confluence和fisheye的user directory,和jira usermanagement里的user server
user server等同于对外开放server,让confluence等app来同步,confluence需要配置user dir同步jira的用户数据

需要注意的是confluence和其他APP,都有自己的groups,只有在相应groups的用户才有权限登录系统,所以需要在jira里的groups里也配置confluence的groups,例如:confluence-users confluence-administratos,然后加入jira的用户,confluence再同步users,jira的用户才能登陆的到系统

参见:

[connectiing to crowd or jira for user management](https://confluence.atlassian.com/doc/connecting-to-crowd-or-jira-for-user-management-229838465.html "connectiing to crowd or jira for user management")

[connecting to jira for user management](https://confluence.atlassian.com/fisheye/connecting-to-jira-for-user-management-812223142.html)