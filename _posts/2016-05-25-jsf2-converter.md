---
published: false
---
jsf2一些控件加入converter之后,converter能返回值,但是无法set到ManagedBean里,是因为实体类里没有加入equals方法,一定要在实体类里加入equals方法
详细见:http://stackoverflow.com/questions/9069379/validation-error-value-is-not-valid
