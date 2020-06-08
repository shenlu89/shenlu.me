---
layout: post
title: "优雅的使用SSH登录服务器"
categories: [Web, Security]
tags: [asymmertirc encryption, password, symmertirc encryption]
---

搞过生信的都应该使用过SSH登录云端服务器，之前的操作也只是Google一下，跟着别人的流程走，没有深究其背后的原理是什么。今天配置了一个SSH无密码登录，顺便了解了一下背后的原理。

## 密码和口令

平常我们登录的银行账户，社交账号，个人电脑的时候，都会让我们输入密码。但其实严格的说这些并不是密码，而是口令。但如果口令通过某种信息编码方式转换成另一种只有通信双方能够读懂的信息，这时候口令就变成了密码。例如，客户端通过HTTP文发送不经处理的“密码”文本信息，这时候的“密码”就是口令。但如果浏览器端通过HTTPS先对这个口令进行加密再发送到服务器，服务器可以在解密后得到之前原本的口令信息，这个经过加密的被发送的口令才是密码。

## 对称加密和非对称加密

### 对称加密

对称加密(Symmetric Cryptography)是指加解密过程中所使用的密钥是相同的。对称加密是最快速、最简单的一种加密方式，加密(Encryption)与解密(Decryption)用的是同样的密钥(Secret Key)。对称加密有很多种算法，由于它效率很高，所以被广泛使用在很多加密协议的核心当中。但如何管理和分配对称加密的密钥是一个难点。例如，如何把密钥发送到需要解密你的消息的人的手里，在发送密钥的过程中，密钥有很大的风险会被黑客们拦截。现实中通常的做法是将对称加密的密钥进行非对称加密，然后传送给需要它的人。

### 非对称加密

非对称加密(Asymmetric Cryptography)是指的是加密，解密过程中使用一对密钥:公开密钥(Public Key)和私有密钥(Private Key), 公钥负责加密，私钥负责解密。通信双方必须交换彼此的公开密钥才能进行数据的加解密。

### 对称加密和非对称加密混合使用

对称加密的加密与解密使用的是同样的密钥，所以速度快，但由于需要将密钥在网络传输，所以安全性不高。非对称加密使用了一对密钥，公钥与私钥，所以安全性高，但加密与解密速度慢。解决办法是将对称加密的密钥使用非对称加密的公钥进行加密，然后发送出去，接收方使用私钥进行解密得到对称加密的密钥，然后双方可以使用对称加密来进行沟通。HTTPS使用的就是这种混合加密。

引用一篇文章的例子<sup>[1]</sup>：

1. Alice需要在银行的网站做一笔交易，她的浏览器首先生成了一个随机数作为对称密钥。
2. Alice的浏览器向银行的网站请求公钥。
3. 银行将公钥发送给Alice。
4. Alice的浏览器使用银行的公钥将自己的对称密钥加密。
5. Alice的浏览器将加密后的对称密钥发送给银行。
7. 银行使用私钥解密得到Alice浏览器的对称密钥。
8. Alice与银行可以使用对称密钥来对沟通的内容进行加密与解密了。

![](./assets/images/v2-2689d8cc84a3e40211d1a01534dd9045_720w.jpg)

## SSH登录实战

SSH(Secure Shell)是一种加密的网络传输协议，其目的是在不安全的网络中为网络服务提供安全的传输环境。

SSH服务会在系统的用户目录下生成一个`.ssh`的文件夹，文件夹下一般会有以下几个文件：

1. config : 配置文件，可以为远程主机配置host、登录端口、默认登录用户等，方便用户使用
2. known_hosts : 记录本机访问过的服务端所提供的host key，下次访问相同主机时会核对host key，如不匹配会发出警告
3. id_rsa : 保存本机的私钥
4. id_rsa.pub : 保存本机的公钥
5. authorized_keys : 本机作为服务端所保存的已授权客户端的公钥

### 密码登录

SSH密码登录应用了非对称加密的原理，即使公钥在传输过程中被截获也没有关系，因为公钥加密的口令只能通过秘钥解密，这种机制保障了建立SSH链接的安全性。

**验证过程:**

1. 服务器在收到来自客户端的SSH登录请求后，发送公钥(Public Key)给客户端。
2. 客户端收到请求后，将公钥信息保存到`known host`列表中。然后提示用户输入服务器密码（这时的“密码”还是口令）
3. 确认完成输入后，使用从服务器传来的公钥(Public Key)将口令加密成密码，然后将密码传给服务器端。
4. 服务器再通过秘钥(Private Key)解密密码得到口令信息。如果和服务器中设置的口令信息一致，则建立SSH链接，允许用户登录使用服务器。

### 密码登录过程

输入登录命令`ssh username@ip_address`,如下

```sh
ssh lus@128.xx.57.xxx
The authenticity of host '123.57.51.127 (123.57.51.127)' can't be established.
ECDSA key fingerprint is SHA256:ZzPA0kLfqzaq...+PLRkK0yyONMG6IDhfrGS+Rs.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '128.xx.57.xxx' (ECDSA) to the list of known hosts.
root@128.xx.57.xxx's password: 
```

为了保证访问的远程主机是真正的目标主机，防止IP劫持等中间人攻击(Man-in-the-middle attack)的出现(具体手段为拦截登录请求，向客户端提供伪造的服务端公钥，并在获取密文密码后通过假公钥对应的私钥解密为明文，然后使用明文密码对真正的服务端主机进行攻击)，客户端在初次访问远程主机时会获取远程主机的公钥指纹`host key`(会提示无法确认主机真实性，询问是否连接)。输入yes确认后，远程主机的公钥指纹会被添加到本机`.ssh`目录下的`known_hosts`文件中，以后访问远程主机时会先通过对比`host key`确保是同一主机。

```sh
tail -1 ${HOME}/.ssh/known_hosts
|1|QXCCf7G4h9FVHoD0doq34T3hRs4=|AbczK9i/xPr0NUsvP81QHPr1vZk= ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBKIDifH/7y4ToycmZN/2p6GDZJgeySBTeL...KT7lFjQ0FHl+7xyoG1iZQZqssrVJq8FghFI=
```

下次登录时，就不会再有上面的询问提示了。

```sh
sed -i '$d' ~/.ssh/known_hosts # 删除文件最后一行
```

但如果删除刚刚添加的公钥，再登录这个服务，你又会看到和之前一样的询问提示。

但这样登录也挺麻烦的，因为用户后面可能需要记忆大量的用户名，IP地址和密码。当前用户可以通过配置`~/.ssh/config`文件可以简化SSH的登录操作。

```sh
Host example                       # 关键词
    HostName host-ip-address       # 主机地址
    User root                      # 用户名
    # Port 22                      # 指定端口
```

只要执行`ssh example`，输入口令，确认后就可以登录目标服务器了。但密码还是要输入，还是有点麻烦。

>SSH在全局系统的配置要在`/etc/ssh/ssh_config`文件中进行。

### 证书登录

使用SSH证书登录，登录目标服务器就不需要再输入密码了。

### 证书登录过程

**验证过程:**

1. 客户端事先生成本机的公钥(Public Key)和私钥(Private Key)，并把公钥(Public Key)追加到服务端主机的`authorized_keys`文件中
2. 客户端发出登录请求，服务端在`authorized_keys`中匹配该客户端对应的公钥(Public Key)
3. 服务端生成随机数，并使用客户端的公钥(Public Key)进行加密，然后把密文发送给客户端
4. 客户端通过本机私钥解密密文获得随机数
5. 客户端利用随机数和会话密钥(Session Key)通过MD5生成摘要Digest，并发送给服务端
6. 服务端使用同样的算法生成另一份Digest
7. 服务端对比生成的Digest和客户端发送过来的Digest，返回登录结果

上面提及到证书登录的前提是把公钥(Public Key)放到目标主机中，下面是详细的过程：

客户端执行`ssh-keygen`命令，会在用户目录下的`.ssh`文件夹下生成`id_rsa`和`id_rsa.pub`两个文件，其中`id_rsa`为私钥文件，`id_rsa.pub`为公钥文件。

```sh
ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/test/.ssh/id_rsa): /home/test/.ssh/id_rsa.test
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/test/.ssh/id_rsa.test.
Your public key has been saved in /home/test/.ssh/id_rsa.test.pub.
The key fingerprint is:
91:cb:1d:45:65:27:76:cc:66:02:4d:e5:1f:c4:64:6d liam@localhost
The key's randomart image is:
+--[ RSA 2048]----+
|         .o.*o*=.|
|        .o o.=== |
|        +  E .o.=|
|       . =     +o|
|        S  o    .|
|                 |
|                 |
|                 |
|                 |
+-----------------+
```

然后执行`ssh-copy-id`将`~/.ssh/id_rsa`对应的公钥，交付给`example@host-ip-address`。在这个过程中，我们需要输入用户`example`在远程主机`host-ip-address`上的口令。

>注意，参数`-i`，指定了需要交付的密钥。若是省略`-i`参数，则`ssh-copy-id`会将默认的密钥`~/.ssh/id_rsa`对应的公钥交付给远程主机。

```sh
ssh-copy-id -i ~/.ssh/id_rsa example@host-ip-address
```

执行完这个命令后，公钥文件的内容就自动追加到服务端主机的`~/.ssh`目录下的`authorized_keys`
中。

```sh
tail -1 ~/.ssh/authorized_keys
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC5SMF55fnv3BgKREcTTlp97s49A1QuyOXRcKRBkMyOtBzT7OkAUPSxaRRh0/CHPZ4UTKVI9iDLbGiGJRRe8hmF68K/aEww4tzv8i8+G3DwQtE9yKGvAMBJIx/fHkkRyUHE9xI7bIkqseF8UjoMR6lxq/niBsYIAgcwY6trbYnbrrO0TAELTB2Wr19mf36WPF/jt3nneoZHjpq10vZNLiiOCcF7Dguyoe0QTQz4M0dbEB9NoDrGtcxRTn9ewKK6WQVQkVmc10LfrdfmSPVU90PclCPuCZK0MbFbeV63sR84ljcaeqb3p/5fD6ylzWHXmhGMgSsqw/IlJ6dNv74qdcFr a@shen-lenovo-yoga-710-15ikb example@host-ip-address
```

查看目标主机和客户端上的公钥是否一致

```sh
tail -1 ~/.ssh/authorized_keys | md5sum
04e6cad72dfd1c9f8ce262dcd1e6432c  -

tail -1 ~/.ssh/id_rsa.pub | md5sum
04e6cad72dfd1c9f8ce262dcd1e6432c  -
```

接着，再配置`~/.ssh/config`文件，添加`IdentityFile ~/.ssh/id_rsa`参数，如下：

```sh
Host example                       # 关键词
    HostName host-ip-address       # 主机地址
    User root                      # 用户名
    IdentityFile ~/.ssh/id_rsa     # 认证文件
    # Port 22                      # 指定端口
```

然后就可以通过`ssh example`无密码登录了，完成后如果发现不能免密登录，可执行`systemctl restart sshd`命令，重启服务端的SSH服务后再尝试。

这时候`scp`命令也可以无密使用了

```sh
scp -r example:~/host/dir .
```

>`scp`是`secure copy`的缩写，用于`Linux`之间复制文件和目录。`scp`是`Linux`系统下基于`ssh`登陆进行安全的远程文件拷贝命令。

出于安全性考虑，远程主机上的相关文件必须限制除当前用户之外的权限。`.ssh`目录权限必须不高于`700`，`authorized_keys`文件权限必须不高于`600`。当然，对于安全性的更多考虑，可以增加禁止root用户登录、禁用密码登录等设置。行了，应该够用了。

**参考文献：**

- [1] [关于对称加密/非对称加密的理解](https://zhuanlan.zhihu.com/p/125518960){:target="_blank"}
- [2] [理解SSH服务的原理](https://www.0x0f0f.com/linux/about-secure-shell/about-secure-shell/){:target="_blank"}
- [3] [SSH隧道加密技术](http://za-kaddafi.org/bypassing/zh/31){:target="_blank"}
- [4] [SSH隧道技术](https://www.jianshu.com/p/f2156c444fd6){:target="_blank"}