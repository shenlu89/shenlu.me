---
layout: post
title: "Linux管理用户权限实战"
mathjax: false
categories: [Linux]
tags: [permissions]
---

>*Understanding Linux permissions and how to control which users have access to files is a fundamental skill for systems administration.*<sup>[1]</sup> <span style="text-align: right; width:100%; display: block;">— Alex Juarez</span>

前几天买了一台华为云（Ubuntu18.04），在控制台设置了初始用户是root和密码。但是直接使用root操作太危险了，而且如果是团队协作，需要将不同的成员归组，设置对应的操作权限。

## 用户账户:

Linux是一个多用户的系统，我们可以多个用户同时登陆Linux。账户实质上就是一个用户在系统上的标识。也就是说，我们创建的用户，这个用户的信息由不同的文件来保存着。

- 普通用户账户：在系统上的任务是进行普通工作
- 超级用户账户（或管理员账户）：在系统上的任务是对普通用户和整个系统进行管理。

### 用户管理

用户管理常用到三个命令`useradd`，`usermod`，`userdel`

### 创建新用户

现在系统默认的用户是`root`用户（管理员账户），`root`有整个系统的管理权限，可直接使用`useradd`添加新的普通用户账户。

```sh
useradd -m username
```

### 设置用户密码

在`root`用户下，输入`passwd username`，确认后输入要设置的密码。

```sh
passwd username
[sudo] password for username: 
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
```

这样，一个新的`username`用户和用户目录`/home/username`就生成了。


### 切换用户

如果要切换到刚刚创建的用户环境，可以通过`su`命令

```sh
su useranme
```

但是如果在`username`用户环境切换回`root`账号，就要输入刚刚设置过的密码，才能进入。

```sh
sudo su root
[sudo] password for username: 
```

但现在`username`并不在`sudo`组中，需要回到`root`账号，添加`username`到`sudo`组中才能生效。

## 组账户

组是用户的集合，分为：

- 主组（初始组）: 用户登录系统时的组。
- 附加组: 登录后可切换的其他组

```sh
usermod -aG sudo username
```
>`-a`代表追加`username`到`sudo`组，而不将用户从其他组中移除。

这时候`username`就可以通过`sudo su`切换到`root`账户或者使用`sudo`权限了，比如安装软件或使用管理员权限操作系统，修改文件等等。

## 用户账户文件地址:

上面也说了，账户的实质上就是用户在系统上的标识，这些标识是用文件保存起来的，位置如下：

- 用户名和`UID`被保存在`/etc/passwd`文件中，文件权限 (-rw-r--r--)
- 组和`GID`被保存在`/etc/group`文件中，文件权限(-r--------)
- 用户口令(密码)被保存在`/etc/shadow`文件中  ，文件权限(-rw-r--r-- )
- 组口令被保存在`/etc/gshadow`文件中 ，文件权限 (-r--------)

## Linux用户管理命令集合

### 用户管理

- useradd -m <用户账号名>: 创建<用户账号>和<用户账号>目录
- usermod -G <组账号名> <用户账号名>: 设置<用户账号>的<组账号>
- usermod -Ga <组账号名> <用户账号名>: 追加<用户账号>到<组账号>
- userdel -r <用户账号名>: 删除用户和账号目录

### 组管理

- groupadd
- groupmod
- groupdel

### 批量管理用户

- newusers: 成批添加/更新一组账户
- chpasswd: 成批更新用户的口令

### 组成员管理：

- gpasswd -d <用户账号名> <组账号名>: 从标准组中删除用户


### 口令维护(禁用、恢复和删除用户口令)：

- passwd <用户账号名>: 设置用户口令
- passwd -l <用户账号名>: 禁用用户账户口令
- passwd -u <用户账号名>: 恢复用户账户口令
- passwd -S <用户账号名>: 查看用户账户口令状态
- passwd -d <用户账号名>: 清除用户账户口令

### 权限设置

- chown <属主> <文件或目录>
- chown <属主>:<属组> <文件或目录>
- chown :<属组> <文件或目录> （相当于 chgrp 命令，专门修改属组）

>-R ：递归修改权限

### 权限解读

![](./assets/images/unix_dir.png)


**参考文献：**

- [1] [Linux permissions 101](https://opensource.com/article/19/8/linux-permissions-101)
- [2] [Linux用户和权限管理看了你就会用啦](https://juejin.im/post/5b1e69dcf265da6e0d7a347e)