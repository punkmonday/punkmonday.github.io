---
published: true
layout: post
title: jira link到ssl的bitbucket server注意事项
author: punkmonday
tags:
  - bitbucket
  - jira
  - fisheye
categories:
  - java
---
# 问题描述:

jira fisheye 建立application link到https(SSL)的bitbucket server,oauth握手失败

# 解决方案:

把bitbucket server的证书导出,再导入到jira or fisheye的服务器,需要导入到jdk下的/jre/lib/security/cacerts下面

# 参考

[Problem creating an Application Link from JIRA to a HTTPS Bitbucket Server (or vice-versa)](https://confluence.atlassian.com/bitbucketserverkb/problem-creating-an-application-link-from-jira-to-a-https-bitbucket-server-or-vice-versa-779171870.html)

[Keystore change passwords](https://stackoverflow.com/questions/2889238/keystore-change-passwords)

[Unable to Connect to SSL Services due to PKIX Path Building Failed](https://confluence.atlassian.com/kb/unable-to-connect-to-ssl-services-due-to-pkix-path-building-failed-779355358.html)

[Connecting to SSL services](https://confluence.atlassian.com/kb/connecting-to-ssl-services-802171215.html)
