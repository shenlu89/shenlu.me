---
layout: post
title: "从进程的概念开始说起"
categories: [Computer]
tags: [cs101, thread, process, concurrency, parallelism]
---

最近研究了一下浏览器的工作原理，涉及到很多概念，比如，进程，线程，并发，并行，同步，异步等等。利用国庆假期将这些概念综合的梳理了一下。

>In computing, a process is the instance of a computer program that is being executed by one or many threads.

这是[Wikipedia](https://en.wikipedia.org/wiki/Process_(computing)){:target="_blank"}上有关进程的解释，还有就是课本上的经典概念，“进程是资源分配的最小单位，线程是CPU调度的最小单位。”
看完这些，脑子里就一句话，“这都什么啊？”

### 什么是进程

在计算机科学中，进程是正在运行的程序的实例（an instance of a computer program that is being executed）。程序是一堆指令和数据的集合，当一个程序开始运行，这个程序的一个进程(实例)就产生了。当这个程序一旦退出，有关这个程序的进程(实例)也就结束了。所以，进程是一个动态的状态，它的生命周期就是一个被执行程序的开始和结束。进程是资源分配的最小单位，这里的资源既有时间，又有空间。

>进程和程序是独立的概念。即使同一个程序执行多次，创建的进程也是完全不同的，占用的资源也都是独立。

### 进程状态

在计算机上的每个应用软件本质都是一个程序。比如，我现在一边写在**Sublime Text**上写笔记，一遍使用**Chrome**查阅资料。从直觉上说，两个程序正同时在我的笔记本电脑上工作，但在微观上，这两个程序的进程是并发

也可以说进程是对一个CPU工作时间段的描述。

![](./assets/images/computing-cycles-normalize-to-seconds-latency.png)

### CPU利用率

CPU利用率=$1－p^{n}$

一个进程等待I/O操作的时间与其停留在内存中的时间比为p，内存中同时有n个进程。


In the traditional Unix model, when a process needs something performed by another entity, it forks a child process and lets the child perform the processing. Most network servers under Unix are written this way, as we have seen in our concurrent server examples: The parent accepts the connection, forks a child, and the child handles the client.

While this paradigm has served well for many years, there are problems with fork:

fork is expensive. Memory is copied from the parent to the child, all descriptors are duplicated in the child, and so on. Current implementations use a technique called copy-on-write, which avoids a copy of the parent's data space to the child until the child needs its own copy. But, regardless of this optimization, fork is expensive.

IPC is required to pass information between the parent and child after the fork. Passing information from the parent to the child before the fork is easy, since the child starts with a copy of the parent's data space and with a copy of all the parent's descriptors. But, returning information from the child to the parent takes more work.

Threads help with both problems. Threads are sometimes called lightweight processes since a thread is "lighter weight" than a process. That is, thread creation can be 10–100 times faster than process creation.

All threads within a process share the same global memory. This makes the sharing of information easy between the threads, but along with this simplicity comes the problem of synchronization.

More than just the global variables are shared. All threads within a process share the following:

Process instructions

Most data

Open files (e.g., descriptors)

Signal handlers and signal dispositions

Current working directory

User and group IDs

But each thread has its own

Thread ID

Set of registers, including program counter and stack pointer

Stack (for local variables and return addresses)

errno

Signal mask

Priority

### 什么是线程


## 并发和并行

### 什么是并发

### 什么是并行

## 多线程和多进程

![](./assets/images/45950680-6d096f00-c033-11e8-9a75-f83629bc4c84.png)

**参考文献：**

- [1] [Process (computing)](https://en.wikipedia.org/wiki/Process_(computing)){:target="_blank"}
- [2] [Unix Network Programming](http://www.masterraghu.com/subjects/np/introduction/unix_network_programming_v1.3/ch26lev1sec1.html)