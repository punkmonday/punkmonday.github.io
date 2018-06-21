---
published: true
layout: post
author: punkmonday
title: 单机使用docker-machine搭建docker集群
tags:
  - docker
categories:
  - docker
---
## 安装docker

```sh
$ sudo dnf remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
                  
$ sudo dnf -y install dnf-plugins-core
$ sudo dnf config-manager \
    --add-repo \
    https://download.docker.com/linux/fedora/docker-ce.repo
$ sudo dnf install docker-ce
$ dnf list docker-ce  --showduplicates | sort -r
$ sudo systemctl start docker
$ sudo docker run hello-world
```

使用脚本安装

```sh
$ curl -fsSL get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh
```

卸载

```sh
$ sudo dnf remove docker-ce

Images, containers, volumes, or customized configuration files on your host are not automatically removed. To delete all images, containers, and volumes:

$ sudo rm -rf /var/lib/docker


```


## 安装docker-machine

```sh
$ base=https://github.com/docker/machine/releases/download/v0.14.0 &&
  curl -L $base/docker-machine-$(uname -s)-$(uname -m) >/tmp/docker-machine &&
  sudo install /tmp/docker-machine /usr/local/bin/docker-machine
$ docker-machine -v

```

## 安装kvm driver

[docker-machine-kvm](https://github.com/dhiltgen/docker-machine-kvm/releases "docker-machine-kvm")

```sh
curl -L https://github.com/dhiltgen/docker-machine-kvm/releases/download/v0.10.0/docker-machine-driver-kvm-centos7 > /usr/local/bin/docker-machine-driver-kvm \ 
  chmod +x /usr/local/bin/docker-machine-driver-kvm
```

## 组装集群

```sh
docker-machine create -d kvm -name master
docker-machine create -d kvm -name slave1
docker-machine create -d kvm -name slave2
docker-machine create -d kvm -name slave3

docker-machine ssh master 
//初始化 master节点为manager
docker swarm init --advertise-addr 192.168.99.100
//分别进入slave节点,加入master
ocker swarm join --token SWMTKN-1-1uzft9zcrd5cl7eva4gr4ptgrs1gc252483ey19xfphcuxc8ta-evsmmj7b7kleh7yoezjutzuu2 192.168.99.100:2377
//进入master节点,查看node
docker node ls 
//创建服务
docker service create --replicas 2 -d -p 8080:80 --name mynginx registry.docker-cn.com/library/nginx
//查看创建的服务
docker service ls
docker service ps mynginx
//使用浏览器可以查看到各个节点上的nginx,表示集群安装完成
//服务扩容为3个实例
docker service scale mynginx=3
```

