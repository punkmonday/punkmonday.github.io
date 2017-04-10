---
published: false
layout: post
author: punkmonday
title: teamspeaker3 server 安装
tags:
  - java
  - centos
categories:
  - linux
---
```sh
cd /home/ts3srv/
wget http://dl.4players.de/ts/releases/3.0.13.6/teamspeak3-server_linux_amd64-3.0.13.6.tar.bz2
tar jxvf teamspeak3-server_linux_amd64-3.0.13.6.tar.bz2
cd /home/ts3srv/teamspeak3-server_linux_amd64
./ts3server_startscript.sh start
```

Once your server starts up you will see it output something like this. Be sure to write your Server Query Admin Account down as it will not be shown again. An easy way to copy it would be to select it all and copy it to a text file.

```
------------------------------------------------------------------
                      I M P O R T A N T
------------------------------------------------------------------
              Server Query Admin Acccount created
         loginname= "serveradmin", password= "ostsOuyX"
------------------------------------------------------------------


------------------------------------------------------------------
                      I M P O R T A N T
------------------------------------------------------------------
      ServerAdmin privilege key created, please use it to gain
      serveradmin rights for your virtualserver. please
      also check the doc/privilegekey_guide.txt for details.

       token=A3Omx+Yy0mKtNMZ7UOa2cLbkEWyB5fwgwLcT5C+A
------------------------------------------------------------------
```

add auto startup
```
crontab -e
@reboot /home/ts3srv/teamspeak3-server_linux_amd64/ts3server_startscript.sh start


```