Simple 5 steps to change the context

Step1: Rename the folder ROOT dir to yours own context name(Example: liferay)

Step2: Rename file ROOT.xml to liferay.xml in %LIFERAY-HOME%\conf\Catalina\localhost

Step3: Create empty Directory/Folder ROOT in %LIFERAY-HOME%\webapps\

Step4:

Original Code

```

<Context path="" crossContext="true">

    ......
        ....................
</Context>
```

Modified Code

```

<Context path="/liferay" crossContext="true">

    ......
        ....................
</Context>
```



Step5: Create file portal-ext.properties in %LIFERAY-HOME%\webapps\liferay\WEB_INF\classes\

copy paste the below code

portal.ctx=/liferay