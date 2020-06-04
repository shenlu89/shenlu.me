---
layout: post
title: "R语言吐槽第一弹：等号(=)，还是箭头(<-)"
mathjax: true
categories: [Programming]
tags: [R]
---

>*"The best thing about R is that it was developed by statisticians. The worst thing about R is that...it was developed by statisticians."* <span style="text-align: right; width:100%; display: block;">— Bo Cowgill, Google, Inc</span>


R语言是我自学的第一门计算机语言，虽然接触最早，但用的最不好。因为R是一个面向统计学的高级语言 (statistics-oriented programming language)，有自己独特的数据类型和语法设计。不但在其他语言中难以被借鉴，而且还要记一堆只有在R里才能用到的参数。

比如今天要说的赋值符号。在绝大部分语言里，简单一个等号(=)就完事了，而在R里竟然用箭头符(<-)实现。更可怕的是，在很多场景中等号和箭头可以达到相同的效果，我<del>TM</del>真是服了。最近把概率论和数理统计㕛拾起来了，又要用R了，怒查了一下箭头(<-)和等号(=)在R中的区别，结束个困扰我的问题。

引用R-manual里[Assignment Operators](https://stat.ethz.ch/R-manual/R-patched/library/base/html/assignOps.html){:target="_blank"}对等号和箭头有一段解释。

>There are three different assignment operators: two of them have leftwards and rightwards forms.

>The operators <- and = assign into the environment in which they are evaluated. The operator <- can be used anywhere, whereas the operator = is only allowed at the top level (e.g., in the complete expression typed at the command prompt) or as one of the subexpressions in a braced list of expressions.

根据我的理解，通俗的解释一下上面这段话的意思。

### 1. 赋值和传参：

在大多数编程语言中，等号(=)的作用有两个：赋值和传参。等号(=)可以作为赋值变量的工具，也可在函数(Function)中发挥传递参数的作用。比如：

```r
> a = 2 #变量赋值
> a
[1] 2
> read.table("fileName", header = TRUE) #传递参数
```

但箭头就不是这样了，它只有一个功能，赋值。假设所有的情况下，只用等号(=)。那么在作用域中，等号(=)就是赋值，但在函数方程中设置参数时，等号(=)的作用又变成了传参。而如果你在设置参数的时候使用了箭头(<-)，那么你会发现在全局变量里，会多出一个和参数名相同的赋值的变量，占用命名空间，导致歧义和出错的可能。比如：

```r
> b <- 2 #变量赋值
> b
[1] 2
> read.table("fileName", header <- TRUE) #变量赋值
> header
[1] TRUE
```

### 2. 方向性

但是箭头(<-)也不是一无是处。它有一个等号(=)不具备的能力：双向赋值。既然是箭头，那就一定有方向。在R语言中，箭头符号不但可以像等号一样向左赋值，而且向右也可以赋值。比如：

```r
> b <- 2 #变量赋值
> b
[1] 2
> 3 -> a #变量赋值
> a
[1] 3
```

这个功能，我感觉没啥卵用，不利于代码的阅读和维护，但是设计者这么设计一定有他的道理，反正我搞不懂。

### 3. 优先级

当等号与箭头同时存在的时候，<-的优先级=要高于等号，例如连续赋值时

```r
x = y = 5
x <- y <- 5
> x
[1] 5
> y
[1] 5
```

但如果混用，搞不清赋值的优先级，就会出现问题：

```r
x <- y = 5 // Error in (x <- y) = 5 : object 'x' not found
x = y <- 5
> x
[1] 5
> y
[1] 5
```

上面的代码报错，原因是如果先使用箭头(<-)，后使用等号(=)，箭头(<-)会先得到解析，轮到等号(=)的时候就找不到要赋值的对象了。

所以R赋值最好还是用箭头(<-)。好吧，到此为止，应该够用了。

**参考文献：**

- [Assignment Operators](https://stat.ethz.ch/R-manual/R-patched/library/base/html/assignOps.html)
