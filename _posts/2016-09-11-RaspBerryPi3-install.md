---
published: false
layout: post
title: Raspberry pi 3 安装日志
author: punkmonday
tags:
  - linux
  - raspberray
categories:
  - linux
---
```
version: Raspberry pi3 Model B
power: 5v/2.5a
storage: 32g micro SD
```
按照WIKI安装

接入网络，先用有线接上router,然后SSH pi@raspberry ip地址，密码：raspberry
在SSH链接WIFI:

```sh
sudo iwlist wlan0 scan #扫描WIFI，记录essid

sudo vi /etc/wpa_supplicant/wpa_supplicant.conf #添加wifi配置

最后一行输入，保存
network={
    ssid="The_ESSID_from_earlier"
    psk="Your_wifi_password"
}

sudo ifdown wlan0 #关闭wlan0
sudo ifup wlan0 #开启wlan0
sudo reboot #重启respberry

ssh pi@raspberry_pi_3_address passwd:raspberry

ifconfig wlan0 
#如果看到有IP地址，说明WIFI已经链接并获取到IP地址，下次就不需要使用有线连接，直接可以通过这个IP SSH登录
```