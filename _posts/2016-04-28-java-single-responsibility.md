---
published: true
layout: post
author: punkmonday
categories: 
  - java
tags: 
  - java
  - desgin pattern
title: java单一职责思考
---
java单一职责强调类在职责上的单一和统一,相对反模式是god class(上帝类),极端的上帝类将所有的逻辑全部封装到一个庞大的类里,导致设计的class缺乏灵活性,僵化,不容易重用,反之,职责单一的极简类,虽有功能不是很强大,但是一个类只完成一个职责,职责越通用,类越容易被重用,这样小类组成的API就具有强大的通用性和灵活度,看似逻辑是内聚和分散的,但是通过再编程,就可以组成完全不同的软件(object),封装好的API经过不同的组合,又可以开发出不同的API和框架
所以单一职责原则是简化开发的有力武器.