---
published: false
---

## 实体自包含的设计模式思考

```java
public class Case{
	private List<Case> cases;
}
```
## 或者状态模式:

```java
public class Case{
	@OneToMany
	private List<CaseState> states;
}

public class CaseState{
	@OneToone
	private Case case
}
```