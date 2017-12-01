---
published: true
layout: post
title: 为什么要设计值对象
author: punkmonday
tags:
  - ddd
categories:
  - ddd
---
## 因为vo(值对象)有行为

虽然可以直接简化为多个String的泛对象,但这部分原本的领域逻辑就泄露到包含他的实体里,导致领域的概念发生破坏,值对象的存在就是保证模型的概念完整性,和容纳本该属于这个VO的业务逻辑(行为)

```
class MonetaryValue implements Serializable {
	private BigDecimal amount;
    private String currency;
    // private setter method, init by constructor
    
    public MonetaryValue(BigDecimal anAmount, String aCurrency) {
    	this.setAmount(anAmount);
        this.setCurrency(aCurrency);
    }
    
    //包含的其他业务逻辑,不应该分散到其他地方,只有安放在值对象里比较合理
    
    
}
```
