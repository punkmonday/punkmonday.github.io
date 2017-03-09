---
published: false
---
```java
public class Person{
	public void sayHello(){
		System.out.println("hello this is p");
	}
}

public class Demo{
	public void say(Person p){
		p.sayHello();
	}

	public static void main(String[] args){
		Demo d =new Demo();
		d.say(new Person());
	}
}

public class DemoUtil{
	public static void say(Person p){
		p.sayHello();
	}

	public static void main(String[] args){
		DemoUtil.say(new Person());
	}
}

public class DemoE{

	private Person p;

	public void setPerson(Person p){
		this.p = p;
	}

	public void say(){
		p.sayHello();
	}

	public static void main(String[] args){
		DemoE d =new DemoE();
		d.setPerson(new Person());
		d.say();
	}
}
```

以上代码都是同一个功能,只是设计上的区别,依赖关系(DemoUtil)只是需要传递一个对象来完成一个过程,没有状态,关联关系(DemoE),会维持一个状态,封装了成员的状态,后续的方法依然会使用成员进行其他操作.