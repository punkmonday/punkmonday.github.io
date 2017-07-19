---
published: true
layout: post
title: nginx+bitbucket server 组件https服务
author: punkmonday
tag:
  - nginx
  - bitbucket
categories:
  - nginx
---
## 简要步骤

1.nginx配置好ssl 443端口,使用gencrt.sh生成证书,并配置好自签证书

```
sudo nginx -s reload
```

2.bitbucket server调整好相关的参数,在$BITBUCKET_HOME/shared/bitbucket.properties添加443端口参数

3.重启服务

## 参考

[Securing Bitbucket Server with Tomcat using SSL](https://confluence.atlassian.com/bitbucketserver/securing-bitbucket-server-with-tomcat-using-ssl-776640127.html)

[给Nginx配置一个自签名的SSL证书](https://www.liaoxuefeng.com/article/0014189023237367e8d42829de24b6eaf893ca47df4fb5e000)
