## archiva 2.2 repo里有jar但是无法下载报错方案

```
Caused by: java.lang.IllegalArgumentException: Not a valid artifact path in a Maven 2 repository, filename 'css.common-2.0.1.jar' doesn't start with artifact ID 'com.liferay.frontend.css.common'

```

明明里面已经有common-2.0.1,确无法下载,报错500,实际是因为要下载的jar包不符合archiva的规范,导致不能下载,需要从maven repo里下载到jar之后,手动通过archiva界面上传到archiva并生成pom,就可以下载了
