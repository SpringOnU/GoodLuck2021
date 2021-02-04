## 一、Vue => 渐进式 javascript 框架
2. 官网：[https://cn.vuejs.org/v2/guide/]()  or [https://vuejs.bootcss.com/guide/]()
2. 优点：
   + 易用（熟悉HTML、CSS、js知识后，可快速上手）
   + 灵活（库和框架之间自如伸缩）
   + 高效（20kb运行大小）



## 二、Vue基本使用
### 代码部分

```html
<div id="app">
     <div>{{msg}}</div>	<!-- 1.提供标签用于填充数据 插值表达式--> 
     <div>{{1+2}}</div>
     <div>{{msg+'----'+'123'}}</div>
</div>
 
 <script type="text/javascript" src="js/vue.js"></script>	<!-- 2.引入 vue.js 库文件 -->
 <script type="text/javascript">
      var vm = new Vue({ // 3.使用 vue语法做功能
       el:'#app', 
          // el:告诉vue,你要把这个数据填充到什么位置
          // #app:严格的id选择器
       data: {  // data:用于提供数据
        msg:'hello vue'
       }
      }); //用于存储vue的实例
 </script>
```
### 浏览器显示部分

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20200820210457861.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NpbmNlU3ByaW5nT25V,size_16,color_FFFFFF,t_70#pic_center)

### 1. 基本使用步骤：

+ 提供标签用于填充数据
+ 引入 vue.js 库文件
+ 使用 vue语法做功能
+ 把vue提供的数据填充到标签里面

### 2. HelloWorld 细节分析

#### 1). 实例参数分析：

- **el** : 元素的挂载位置（关联），值可以是css或者dom
- **data** : 模型数据（值是一个对象）

#### 2). {{插值表达式}}用法：

- 将数据填充到HTML标签中

- 支持**基本的运算** （加减拼凑···都可以

  

## 三、模板语法概述
## 1. 前端渲染：

把数据填充到HTML标签中。

## 2. 前端渲染方式：

- **原生js**拼接字符串（不利于维护）
- 使用**前端模板引擎**（art-template）
- 使用**vue**特有的模板语法
##  3. 模板语法概览

- 差值表达式
- 指令
- 事件绑定
- 属性绑定
- 样式绑定
- 分支循环结构

## 四、指令
## 1. v-clock => 闪动问题

原理 ：先通过样式隐藏 再替换 替换好了再显示出来

+ css

```css
[v-cloak] {
  display: none;
}
```

+ html

```html
<div v-cloak>{{msg}}</div>
```

## 2. v-text => 直接显示文本

```html
<div v-text='msg'></div>
```

## 3. v-html 可以使用标签

```html
<div v-html='msg'></div>  <!-- msg:'<h1>html</h1>' -->
```

## 4. v-pre显示原始代码



