---
title: "信息分析十期：Week 6 必修作业：分析学术数据集"
date: "2022-05-19"
course: "信息分析十期"
---

#  week6 作业


## 结果:
我用Bibliometrix处理journal of cryptology 数据集，结果如下图

600多篇虽然量级比1万少了很多，但也能分析出来数据。
04年的时候是一个引用高峰
![127.0.0.13156](https://s2.loli.net/2022/05/18/pR8dHfUjYl7DGuk.png)

从这个图能看出来，从2009年之后，论文的产量增长率明显增高了。这个和中本聪发布比特币白皮书之后加密相关的东西火起来的时间点也是吻合的。
![127.0.0.13156](https://s2.loli.net/2022/05/18/DXohg2KTQ1qZcuC.png)


LINDELL Y，HAZAY C这两个作者明显影响力高一点。

![127.0.0.13156](https://s2.loli.net/2022/05/18/dGC64mkjcrRznvo.png)
但在本地引用中第二名和第三名换人了。
![127.0.0.13156](https://s2.loli.net/2022/05/18/W58AGHmOxuFezY3.png)
这个是最相关的大学，感觉都不是很知名。
第三名是以色列的特拉维夫大学，前两名就不认识叻。斯坦福在第20名。
![127.0.0.13156](https://s2.loli.net/2022/05/18/aJfeuRv36Abh8t9.png)
![127.0.0.13156](https://s2.loli.net/2022/05/18/r2sCVi3IjYBAh4a.png)

![127.0.0.13156](https://s2.loli.net/2022/05/18/2Bgo9nOdZMT35cS.png)
![127.0.0.13156](https://s2.loli.net/2022/05/18/9BbqhogMGRFSidN.png)


![127.0.0.13156](https://s2.loli.net/2022/05/18/SyODFrK7RxVQmai.png)



![127.0.0.13156](https://s2.loli.net/2022/05/18/PDS3KVxzgnBAqQ4.png)



![127.0.0.13156](https://s2.loli.net/2022/05/18/Ci81rdSn94Mpazx.png)


![127.0.0.13156](https://s2.loli.net/2022/05/18/OV38FT9k4AjEMi1.png)


![127.0.0.13156](https://s2.loli.net/2022/05/18/OV38FT9k4AjEMi1.png)

这些关键词也确实是说明加密技术使用，关注的话题是安全、计算性能、计算、加密等这些话题。

这个clustering 按照documents无法生成，但是其他的可以
![127.0.0.13156](https://s2.loli.net/2022/05/18/mP36ZMrLYFAtCaJ.png)
按照作者，也是生成了4块。

![127.0.0.13156](https://s2.loli.net/2022/05/18/UMxlgvpDPQm7ir8.png)


![127.0.0.13156](https://s2.loli.net/2022/05/18/SDL1pvFtaBY93yH.png)


这是把领域换成abstract的图
![127.0.0.13156](https://s2.loli.net/2022/05/18/yjO7VSZX3GdwW6c.png)


主题图这个比较有价值，现在区块链技术的一大瓶颈和难题就是性能问题，是图中绿色圆相关的话题。
![127.0.0.13156](https://s2.loli.net/2022/05/18/aKJCZtAfYUF2zwQ.png)




## 过程:
近期想了解加密货币和区块链技术及相关知识。所以准备找找相关期刊看下。

打开semantic scholar 搜了下crypto，看发布的文章主要属于什么分类和领域。根据搜索结果和经验。加密货币是数学里的应用数学的加密学，经济学，计算机工程学三者交叉的领域。主要还是在数学、计算机科学这个领域下。

区块链技术和互联网技术一样，也分为协议层，中间层和应用层。想先从协议层来了解一下。这个行当里能够写底层协议的人，可能是这个领域最有价值的人才了。

对于我这个新手来说，想先了解底层的技术和协议设计的关键点是什么。找一本主要讨论密码学相关的杂志先入手。

按分类去看加密应该属于哪个分类，这是谷歌学术里。应该属于计算机安全和密码学，但是在这个列表下找到的影响力大的都是大会。打算换个渠道
![](https://s2.loli.net/2022/05/18/uzeGHL8dfECNcto.jpg)
https://scholar.google.es/citations?view_op=top_venues&hl=en&vq=eng_computersecuritycryptography

![](https://s2.loli.net/2022/05/18/unkMFclEDoPI7wr.jpg)


在期刊排名网站搜了下 crypto 和 cryptology, 
![SJR - Journal Search](https://s2.loli.net/2022/05/18/gEG6Wr1Zq9bcKYV.png)

![SJR - Journal Search](https://s2.loli.net/2022/05/18/HBmiEXcCThytMYG.png)


再从网页的分类里从上往下看榜单前面有没有加密学相关的，可能是因为这是一个小众的领域，在数学和计算机工程的大类的子类榜单里很难出现加密这种垂直的期刊。
![Journal Rankings on Applied Mathematics](https://s2.loli.net/2022/05/18/68Fdepc1hYaIn7C.png)


所以最后决定就选用  这本期刊。
这本期刊虽然有30年了，但是wos上只有600+文章，不过可以先用这个练一下手，跑通一下这个过程。

![Journal of Cryptology](https://s2.loli.net/2022/05/18/cw7SQ3tGvYKg4Xf.png)


虽然横跨30年，只有640篇文章。
![JOURNAL OF CRYPTOLOGY Publication Titles – 640 – Web of Science C](https://s2.loli.net/2022/05/18/DzYgC4TIsLq5hlU.png)

导入biblometrix

## 思考：
我复现了Bibliometrix分析数据集的流程，发现
- 有一个BUG,只要插拔外接显示器这一个看起来跟biblomatrix的过程，会让biblomatrix死机。
- 它的使用体验其实很不错了。

## 复盘:
### 完成作业过程中有哪些疑惑
### 知识点清单：对哪些知识点有了新的认识
### 好习惯清单：有哪些好的工具、网站、求解习惯可以列入自己的清单，或者别的同学的好的复盘习惯
### 参考对比同学的作业，有哪些改进点？建议点评上一位同学的作业。










