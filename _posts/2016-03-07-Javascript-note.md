---
published: false
layout: post
title: Javascript函数和函数表达式
author: punkmonday
categories: 
  - java
tags: 
  - javascript
---

javacript是对象语言,没有类,function也是一个对象,可以声明和作为表达式来用:

作为声明:

```
function func(){console.log("hello")}
```

作为表达式:

```
//具名表达式
var a = function func(){ console.log("hello world")};

//将function赋值给a ,后面的function为匿名表达式
var a = function(){ console.log("hello")};

//直接执行表达式,function语句需要用括号括起来
(function(){ console.log("hello world") })();

//直接执行表达式,带参数
(function(a,b){ console.log(a+b)})(1,2); //return 3;
```


