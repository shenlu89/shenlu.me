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

如果要切换到刚刚创建的用户环境，可以通过`su`命令切换账户。

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

### 添加用户到组账户

```sh
usermod -aG sudo username
```
>`-a`代表追加`username`到`sudo`组，而不将用户从其他组中移除。

这时候`username`就可以通过`sudo su`切换到`root`账户或者使用`sudo`权限了，比如安装软件或使用管理员权限操作系统，修改文件等等。

### 删除用户

执行如下命令，用户`username`和用户目录`/home/lus`会一并删除。

```sh
userdel -r username
```

## 用户账户文件地址:

上面也说了，账户的实质上就是用户在系统上的标识，这些标识是用文件保存起来的，位置如下：

- 用户名和`UID`被保存在`/etc/passwd`文件中，文件权限 (-rw-r--r--)
- 组和`GID`被保存在`/etc/group`文件中，文件权限(-r--------)
- 用户口令(密码)被保存在`/etc/shadow`文件中  ，文件权限(-rw-r--r-- )
- 组口令被保存在`/etc/gshadow`文件中 ，文件权限 (-r--------)

## Linux用户管理命令集合

### 用户管理

- useradd -m `<username>`: 创建<用户账号>和<用户账号>目录
- usermod -G `<groupname>` `<username>`: 设置<用户账号>的<组账号>
- usermod -Ga `<groupname>` `<username>`: 追加<用户账号>到<组账号>
- userdel -r `<username>`: 删除用户和账号目录

### 组管理

- groupadd
- groupmod
- groupdel

### 批量管理用户

- newusers: 成批添加/更新一组账户
- chpasswd: 成批更新用户的口令

### 组成员管理：

- gpasswd -d `<username>` `<groupname>`: 从标准组中删除用户


### 口令维护(禁用、恢复和删除用户口令)：

- passwd `<username>`: 设置用户口令
- passwd -l `<username>`: 禁用用户账户口令
- passwd -u `<username>`: 恢复用户账户口令
- passwd -S `<username>`: 查看用户账户口令状态
- passwd -d `<username>`: 清除用户账户口令

### 权限设置

- chown `<username>` `<file ||directory>`
- chown `<username>`:`<groupname>` `<file ||directory>`
- chown :`<groupname>` `<file || directory>` （相当于 chgrp 命令，专门修改属组）

>-R ：递归修改权限

### 权限解读

如果在用户目录下执行`ll`，就会看到如上的输出结果。其中`permissions`下面的第一个字段编码描述了文件和目录权限代表的对象类型：

- `-`: 文件
- `d`: 目录
- `l`: 链接
- `c`: 字符型设备
- `b`: 块设备
- `n`: 网络设备

![](./assets/images/unix_dir.png)


| 权限 | 二进制 | 八进制 | 描述 |
|:--- |:---:|:---:|:---:|
| `---` | 000 | 0 | 无权限 |
| `--x` | 001 | 1 | 只有执行权限 |
| `-w-` | 010 | 2 | 只有写入权限 |
| `-wx` | 011 | 3	| 写和执行权限 |
| `r--` | 100 | 4 | 读权限 |
| `r-x` | 101 | 5 | 读取和执行的权限 |
| `rw-` | 110 | 6	| 读取的写入的权限 |
| `rwx` | 111 | 7	| 所有权限 |

之后有3组三字符的编码。每一组定义了3种访问权限：

- `r`: 可读(read)
- `w`: 可写(write)
- `x`: 可执行(execute)

若没有某种权限，在该权限位会出现单破折线`-`。这3组权限分别对应对象的3个安全级别：

- 属主(users)
- 属组(groups)
- 其他用户(others)

**参考文献：**

- [1] [Linux permissions 101](https://opensource.com/article/19/8/linux-permissions-101)
- [2] [Linux用户和权限管理看了你就会用啦](https://juejin.im/post/5b1e69dcf265da6e0d7a347e)
- [3] [理解Linux文件权限](https://www.jianshu.com/p/8566a74e77be)