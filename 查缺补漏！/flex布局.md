以下内容参照>http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
```html
.box{
  display: flex;
}
```

```css
.box{
  display: inline-flex;
}
```



Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。

<img src="E:\EPInterest\查缺补漏！\img\bg2015071004.png"  />

# 容器属性

# 1. **flex-direction**   `项目的排列方向`

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

![](E:\EPInterest\查缺补漏！\img\bg2015071005.png)

>**`row`（默认值）：主轴为水平方向，起点在左端。**
>
>**`row-reverse`：主轴为水平方向，起点在右端。**
>
>**`column`：主轴为垂直方向，起点在上沿。**
>
>**`column-reverse`：主轴为垂直方向，起点在下沿。**

# 2. **flex-wrap**  `一条轴线排不下，如何换行`

```css
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

![](E:\EPInterest\查缺补漏！\img\bg2015071007.png)

![](E:\EPInterest\查缺补漏！\img\bg2015071008.jpg)

![](E:\EPInterest\查缺补漏！\img\bg2015071009.jpg)

# 3. **flex-flow**  `flex-direction属性和flex-wrap属性的简写`

默认值为`row nowrap`。

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

# 4. **justify-content**`在主轴上的对齐方式。`

![](E:\EPInterest\查缺补漏！\img\bg2015071010.png)

# 5. **align-items**`在交叉轴上如何对齐`

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

![](E:\EPInterest\查缺补漏！\img\bg2015071011.png)

# 6. **align-content** `属性定义了多根轴线的对齐方式`

如果项目只有一根轴线，该属性不起作用。

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

![](E:\EPInterest\查缺补漏！\img\bg2015071012.png)

# 项目属性

这个就是自己设置这些的数值 然后他会根据这个数值给你排序

# 1. **order**`项目的排列顺序`

数值越小，排列越靠前，默认为0。

```css
.item {
  order: <integer>;
}
```

![](E:\EPInterest\查缺补漏！\img\bg2015071013.png)

# 2. **flex-grow**`放大比例`

默认为0，即不放大。

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

![](E:\EPInterest\查缺补漏！\img\bg2015071014.png)

如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

# 3. **flex-shrink**`缩小比例`

默认为1，即如果空间不足，该项目将缩小。

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

![](E:\EPInterest\查缺补漏！\img\bg2015071015.jpg)

如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效

# 4. **flex-basis**`占据的主轴空间（main size）`

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

# 5. flex `flex-grow, flex-shrink和 flex-basis的简写`

默认值为`0 1 auto`。后两个属性可选。

```css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值：`auto` (`1 1 auto`) 和 none (`0 0 auto`)。

# 6. align-self `单个项目有与其他项目不一样的对齐方式`

可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

![](E:\EPInterest\查缺补漏！\img\bg2015071016.png)