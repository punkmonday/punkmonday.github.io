---
published: true
layout: post
author: punkmonday
categories: docker
tags:
  - docker
---


##docker学习笔记

docker相当于一个模拟游戏机，images就是其中的卡带，我们可以下载不同的卡带来玩游戏，只不过这个游戏能玩分布式WEBAPP，通常部署一个web app需要安装各种数据库，各种基础设施(tomcat....),添加相应的依赖lib,不小心，就掉进坑里，有了docker,我们可以烧制各种images,或者下载别人组装好的环境，保证了环境的一致，以后就不用担心环境对APP的影响了。

##docker 命令基本操作

sudo docker images 查看images

sudo docker ps 查看运行的container

sudo docker ps -a 查看所有的container(包括停止的）

sudo docker start container_id 启动container

sudo docker stop container_id

sudo docker rm container 删除停止的container

sudo docker rmi images_id 删除image

sudo docker run -d -p 8080:80 container_id  container的80端口映射到宿主8080端口（宿主可以通过localhost:8080访问）并在后台运行container

sudo docker run -it container_id -i参数是启动时显示一个伪终端，可以与container交互

sudo docker container prune //删除所有已经停止的容器

##dockerfile 命令简述
dockerfile和docker类似于JAVA与MAVEN的关系，通过一个pom(dockerfile)来配置和构建一个image，这样就不需要下载庞大的image，只需要写一个dockerfile，并用docker build命令执行dockerfile,生成一个image,方便开发者构建基于docker的程序,docker相关语法：

FROM ubuntu

MAINTAINER Michael Crosby <michael@crosbymichael.com>

RUN echo "deb http://archive.ubuntu.com/ubuntu precise main universe" > /etc/apt/sources.list

RUN apt-get update

RUN apt-get upgrade -y

＃private and public mapping
EXPOSE 80:8080

＃private only
EXPOSE 80

详见：[Dockerfile指令详解](http://seanlook.com/2014/11/17/dockerfile-introduction/ "Dockerfile指令详解")
