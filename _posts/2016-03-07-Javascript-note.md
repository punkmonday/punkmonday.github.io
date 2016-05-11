---
published: true
layout: post
title: Javascript函数和函数表达式
author: punkmonday
categories: 
  - java
tags: 
  - javascript
---



javacript是对象语言,没有类,function是一个对象,可以声明和作为表达式来用:

作为声明:

```
function func(){console.log("hello")}
```

作为表达式:

```
//具名表达式
var a = function func(){ console.log("hello world")};

//将function赋值给a ,function为匿名表达式
var a = function(){ console.log("hello")};

//直接执行表达式,function语句需要用括号括起来
(function(){ console.log("hello world") })();

//直接执行表达式,带参数
(function(a,b){ console.log(a+b)})(1,2); //return 3;
```

函数声明和函数表达式的区别:

```
alert(foo); // function foo() {}
alert(bar); // undefined
function foo() {}
var bar = function bar_fn() {};
alert(foo); // function foo() {}
alert(bar); // function bar_fn() {}
```

JavaScript 引擎执行以上代码的顺序可能是这样的：

创建变量 foo 和 bar，并将它们都赋值为 undefined。
创建函数 foo 的函数体，并将其赋值给变量 foo。
执行前面的两个 alert。
创建函数 bar_fn，并将其赋值给 bar。
执行后面的两个 alert。

对象字面量

```
var person = { name:"hello",age: 20, sayhi: function(name){ console.log( name )}}
```

函数作为对象参数传递

```
function func(test){
	test();
}

function test(){ console.log("hello") }

func(test); //return hello;

function test2(name){ console.log(name) }

function func2(data,test2){
	test2(data);
}

func2("hello", test2);
```

函数作为构造函数

```
function a(){console.log("a");}

var aa =new a();

var bb =new function(){console.log("bb");}
这里相当于
var bb = new 匿名类(){console.log("bb");}
```

所以函数这样都是可以的

```
var c  = function(){
			console.log("cc");
		}

		c();

		var b = new c();

		console.log(b);
```
