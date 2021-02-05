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