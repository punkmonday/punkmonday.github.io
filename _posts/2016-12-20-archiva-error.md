---
published: false
layout: post
title: 'archiva 2.2 无法下载仓库已有的jar,解决方法'
author: punkmonday
categories:
  - java
tags:
  - java
  - archiva
publish: true
---
## archiva 2.2 无法下载已存在的jar,报错500

```
Caused by: java.lang.IllegalArgumentException: Not a valid artifact path in a Maven 2 repository, filename 'css.common-2.0.1.jar' doesn't start with artifact ID 'com.liferay.frontend.css.common'
```

archiva仓库有jar,但是无法下载,是因为下载到仓库的jar不符合archiva规范,导致无法下载,需要把jar重新通过archiva http界面上传,并生成pom,就可以下载了.