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

```

