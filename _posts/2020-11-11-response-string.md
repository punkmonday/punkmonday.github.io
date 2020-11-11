---
published: true
author: punkmonday
layout: post
tags:
  - java
categories:
  - java
---
## Springboot controller返回String 自动叠加""处理办法

```
@GetMapping("/sayHello")
public String sayHello(String char){
	return "hello"
}
```

返回的数据会叠加""转义为"\"hello\"",处理方法：

```
@GetMapping(value="/sayHello",produces = "text/plain;charset=utf-8")
public String sayHello(String char){
	return "hello"
}
```
