---
layout: post
title: "2019开始学习C语言"
comments: true
---

最近终于有点时间了，打算认真学一些C语言。C代码需要先编译成一个二进制的可执行文件才能运行，于是按照VS Code的官方[教程](https://code.visualstudio.com/docs/cpp/config-linux){:target="_blank"}配置了C/C++的相关环境。编程，调试和输出结果一步到位，让学习过程更高效一些。

打算从[《The C Programming Language》](https://en.wikipedia.org/wiki/The_C_Programming_Language){:target="_blank"}开始入门，照着书敲了第一章的第一个例子`hello.c`代码，结果报错了。

```c
#include <stdio.h> // include information about standard library

main() // define a Junction named main that receives no argument values
{ // statements oj mainare enclosed in braces
	printf("hello, world\n"); // maincalls libraryJunction printf to print this sequence of characters; \n represents the newline character
}
```

下面执行`cc hello.c`编译，看到报错内容为

```
hello.c:3:1: warning: return type defaults to ‘int’ [-Wimplicit-int]
 main()
 ^~~~
```

原因是从C99标准开始，`no type specifiers`被移除了。这本书里用的是是C89标准，具体详见[The C89 Draft
\- 3.5.2 Type specifiers](http://port70.net/~nsz/c/c89/c89-draft.html#3.5.2){:target="_blank"}

好吧，现在查询一下`cc`用的是哪个标准，执行如下命令，可查看`cc`默认定义的预编译宏：

```sh
cc -E -dM - </dev/null | grep "STDC_VERSION"
#define __STDC_VERSION__ 201112L
```

当前的计算机是`Ubuntu18.04`，默认使用的是C11标准。

>熟知的C标准大概有三种: c90( or c89), c99, c11. 分别于1990年, 1999年, 2011年发布。原来的ANSI C标准(X3.159-1989)在1989年获得批准, 并在1990年发布. 之后(1990年)被批准为ISO标准(ISO/IEC 9899:1990). C89和C90在技术上没有区别。

好吧，开始解决问题，上面的代码要正常工作，有两个方案:

**１．按照C11标准修改代码**

```c
#include <stdio.h>

int main()
{
	printf("hello, world\n");
	return 0;
}
```

就可以正常输出了。

**2. 使用C89或C90标准**

```sh
cc -std=c89 hello.c // 或者cc -std=c90 hello.c
```

也可以正常输出了。

补充材料：[Difference between CC, gcc and g++?](https://stackoverflow.com/questions/1516609/difference-between-cc-gcc-and-g)

在Linux操作系统中`cc`通过软连接，链接到`gcc`的。所以在Linux使用`cc`和`gcc`效果是一样的。

```sh
which cc gcc
/usr/bin/cc
/usr/bin/gcc

realpath /usr/bin/cc /usr/bin/gcc //　软链接指向的最终源文件
/usr/bin/x86_64-linux-gnu-gcc-7
/usr/bin/x86_64-linux-gnu-gcc-7
```

写一个`Hello, World`好累。

<!-- ### C语言基本类型

下面列出了C语言中所有的基本类型和所占字节数。

```c
#include <stdio.h>

int main()
{  
    int char_length = sizeof(char);
    int unsigned_char_length = sizeof(unsigned char);
    int signed_char_length = sizeof(signed char);
    int int_length = sizeof(int);
    int unsigned_int_length = sizeof(unsigned int);
    int short_length = sizeof(short);
    int unsigned_short_length = sizeof(unsigned short);
    int long_length = sizeof(long);
    int unsigned_long_length = sizeof(unsigned long);
   
    printf("char=%d\nunsigned char=%d\nsigned char=%d\nint=%d\nunsigned int=%d\nshort=%d\nunsigned short=%d\nlong=%d\nunsigned long=%d\n", char_length, unsigned_char_length, signed_char_length, int_length, unsigned_int_length, short_length, unsigned_short_length, long_length, unsigned_long_length);
   
    return 0;
}
```
>`sizeof`计算数据类型或变量长度，即所占字节数(Bytes)。 -->

**参考文献：**

- [1] [C 语言教程](https://www.runoob.com/cprogramming/c-tutorial.html){:target="_blank"}
- [2] [K&R2 solutions](https://clc-wiki.net/wiki/K&R2_solutions){:target="_blank"}