---
published: true
layout: post
title: "jsf2 converter加入之后,无法set到Managebean坑记录"
author: punkmonday
categories: java
tags: 
  - java
  - jsf2
  - liferay
---
jsf2一些控件加入converter之后,converter能返回值,但是无法set到ManagedBean里,是因为实体类里没有加入equals方法,一定要在实体类里加入equals方法
详细见:[stackoverflow](http://stackoverflow.com/questions/9069379/validation-error-value-is-not-valid)
