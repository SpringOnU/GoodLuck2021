### 1. 标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同？

盒子模型就是 元素在网页中的实际占位，有两种：**标准盒子模型**和**IE盒子模型**

1. **标准(W3C)盒子模型(`box-sizing:context-box`)：**<font color= 'red'>内容content</font>+填充padding+边框border+边界margin

   宽高height/width指的是 **content** 的宽高 padding+border不会再撑大盒子了

2. **低版本IE盒子模型(`box-sizing:border-box`)：**<font color= 'red'>内容（content+padding+border）</font>+ 边界margin，

   宽高height/width指的是 **content+padding+border** 部分的宽高

### 2.BFC（Block Formatting Context）“块级格式化范围”。

+ **定位方案：**

1. 内部的 Box 会在垂直方向上一个接一个放置。
2. Box 垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。
3. 每个元素的 margin box 的左边，与包含块 border box 的左边相接触。
4. BFC 的区域不会与 float box 重叠。
5. BFC 是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
6. 计算 BFC 的高度时，浮动元素也会参与计算。

+ **满足下列条件之一就可触发 BFC**

1. **根元素**，即 html
2. float 的值不为none（默认）
3. overflow 的值不为 visible（默认）
4. display 的值为 **inline-block**、**table-cell**、**table-caption**
5. **position** 的值为 absolute 或 fixed

### 3. 清除浮动（**解决父元素因为子级元素浮动引起的内部高度为0的问题**）

**清除浮动的方法（最常用的4种）**

1. <font size='5px'>**clear：both；**</font>

额外标签法：在最后一个浮动标签后，新加一个标签，给其设置clear：both；

```js
.clear{

        clear:both;

    }
```

+ ​	 优点：通俗易懂，方便 
+ 缺点：添加无意义标签，语义化差

2. <font size='5px'>父元素添加**overflow:hidden**</font>

   父级添加overflow属性（父元素添加overflow:hidden）

+ 优点：代码简洁

+ 缺点：内容增多的时候容易造成不会自动换行导致内容被隐藏掉，无法显示要溢出的元素