---
published: true
layout: post
categories: Java
tags: 
  - alfresco5.0
title: alfresco重建库还原
---


1. 删除alf_data/conetentstore,alf_data/contentstore.deleted, alf_data/solr4 文件夹
2. 将库重新删除,重新建,名称相同
3. 重启alfresco5.0(运行建库script)