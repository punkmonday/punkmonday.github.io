---
published: true
layout: post
author: punkmonday
categories: 
  - linux
tags: 
  - ubuntu16
  - linux4.4
  - nvidia
  - brightness
title: ubuntu16.04安装专有nvidia显卡驱动之后，亮度调节失效解决方案
---
# ubuntu环境

- ubuntu16.04
- linux4.4 kernal
- samsung r429

用开源的xorg显卡驱动按fn + up fn + down都没有问题，但是切换到n卡就失效，以下解决方案：

```sh
#subl是sublime text
sudo subl /usr/share/X11/xorg.conf.d/20-nvidia.conf
```

如果为空，就说明没有这个文件，打开dash找到"NVIDIA X Server Settings"程序，找到 "X Server Display Configuration",点击"Save to X Configuration"保存n卡信息，然后打开备份的文件，滚动到Section "Device",复制以下内容，比如我的如下：

```sh
Section "Device"
    Identifier     "Device0"
    Driver         "nvidia"
    VendorName     "NVIDIA Corporation"
    BoardName      "GeForce 310M"
EndSection
```

然后在 EndSection前加上Option        "RegistryDwords" "EnableBrightnessControl=1"，最后就是：

```sh
Section "Device"
    Identifier     "Device0"
    Driver         "nvidia"
    VendorName     "NVIDIA Corporation"
    BoardName      "GeForce 310M"
    Option         "RegistryDwords" "EnableBrightnessControl=1"
EndSection
```

保存/usr/share/X11/xorg.conf.d/20-nvidia.conf 并重启，我的亲测生效。

