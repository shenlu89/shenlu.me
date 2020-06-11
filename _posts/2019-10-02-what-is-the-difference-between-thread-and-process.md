---
layout: post
title: "从一个进程开始说起"
categories: [Computer]
tags: [cs101, thread, process, concurrency, parallelism]
---

最近研究了一下浏览器的工作原理，涉及到很多概念，比如，进程，线程，并发，并行，同步，异步等等。利用国庆假期将这些概念综合的梳理了一下。

>In computing, a process is the instance of a computer program that is being executed by one or many threads.

这是[Wikipedia](https://en.wikipedia.org/wiki/Process_(computing)){:target="_blank"}上有关进程的解释，还有就是课本上的经典概念，“进程是资源分配的最小单位，线程是CPU调度的最小单位。”
看完这些，脑子里就一句话，“这都什么啊？”

### 什么是进程

进程是正在运行的程序的实例（an instance of a computer program that is being executed）。那么一个程序是怎么执行的？

一个计算机程序是存放在硬盘中，程序开始执行时，首先要将硬盘内的程序读取到内存，无论这个程序之前是用什么语言写成的，读到内存里就已经是二进制数据了，包含了这个程序需要CPU执行的指令。寄存器将内存中的二进制指令载入，帮助CPU在上一个指令完成之前，暂时保留下一个要处理的指令，每个指令CPU中的运算器和控制器进行数学和逻辑运算。


![](./assets/images/computing-cycles-normalize-to-seconds-latency.png)

### 什么是线程




**参考文献：**

- [1] [Process (computing)](https://en.wikipedia.org/wiki/Process_(computing)){:target="_blank"}