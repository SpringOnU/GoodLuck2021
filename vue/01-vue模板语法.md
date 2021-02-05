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

## 5. v-once只编译一次

后续信息不需要再修改 有助于提高性能

就是在控制器中 使用vm.msg可以改变页面中msg的值 但是如果给他加上v-once就只能是他最初编译出来的 不能再修好了

## 6. 数据响应式 

数据的变化导致页面内容的变化 

# 五、 双向数据绑定

## 1. v-model 双向绑定

```html
    <div id="app">
        <div>{{msg}}</div>
        <div>
            <input type="text" v-model='msg'>  <!-- 页面影响数据 通过修改input中的值 可以直接影响到上面插值表达式中的值 -->
        </div>
    </div>

    <script type="text/javascript" src="js/vue.js"></script>
    <script type="text/javascript">
        var vm = new Vue({
        el:'#app', 
        data: {
            msg:'hello'
        }
        });
    </script>
```

## 2. MVVM（model view View-Model）

model数据

view视图 模板 dom

View-Model 结合

## 3. 事件绑定

### 1). v-on :

> https://cn.vuejs.org/v2/api/#v-on

```html
<button v-on:click='num++'>{{num}}</button>
```

```html
<button @click='num++'>{{num}}</button>
```

函数形式

```html
    <div id="app">
        <div>
            <button v-on:click='handle'>{{num}}</button>
        </div>
    </div>

    <script type="text/javascript" src="js/vue.js"></script>
    <script type="text/javascript">
        var vm = new Vue({
        el:'#app', 
        data: {
            num: 0
        },
        methods: {
            handle: function() {
                this.num++;     // this是vue的实例对象
            }
        }
        });
    </script>
```

接收事件对象

+ 事件对象必须是参数传递的最后一个，且事件对象的名称必须是`$event`

```html
    <div id="app">
        <div>
            <button v-on:click='handle(123, $event)'>{{num}}</button>
        </div>
    </div>

    <script type="text/javascript" src="js/vue.js"></script>
    <script type="text/javascript">
        var vm = new Vue({
        el:'#app', 
        data: {
            num: 0
        },
        methods: {
            handle: function(a, event) {
                console.log(a);     // 123
                console.log(event.target.tagName);      // BUTTON
                console.log(event.target.innerHTML);        // 0
                this.num++;     // this是vue的实例对象
            }
        }
        });
```

#### (1). 事件修饰符

+ 阻止冒泡`@click.stop`

```html
    <div id="app">
            <div>{{num}}</div>
            <div @click='handle0()'>
                <button @click.stop='handle1()'>点击1</button>
            </div>
    </div>

    <script type="text/javascript" src="js/vue.js"></script>
    <script type="text/javascript">
            var vm = new Vue({
            el:'#app', 
            data: {
                num: 0
            },
            methods: {
                handle0: function() {
                    this.num++;
                },
                handle1: function() {

                }
            }
            });
    </script>
```

+ 阻止默认行为`.prevent`

```html
<a href="http://www.baidu.com" v-on:click.prevent='handle2'>百度</a>	<!-- 阻止跳转 -->	
```

#### (2). 按键修饰符

> https://cn.vuejs.org/v2/guide/events.html#%E6%8C%89%E9%94%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6

+ 回车键 `@keyup.enter`

```html
    <div id="app">
        <div>
            用户名：<input @keyup.enter='handle1' v-model='name'>
            <button @click='handle1'>点击1</button>
        </div>
    </div>

    <script type="text/javascript" src="js/vue.js"></script>
    <script type="text/javascript">
        var vm = new Vue({
        el:'#app', 
        data: {
            name: ''
        },
        methods: {
            handle1: function() {
                console.log(this.name);
            }
        }
        });
```

+ 删除键 `@keyup.delete`

+ 自定义按键修饰符 `Vue.config.keys.f1=112`

```html
    <div id="app">
            <div>
                    用户名：<input @keyup='handle1' v-model='name'>
            </div>
    </div>

    <script type="text/javascript" src="js/vue.js"></script>
    <script type="text/javascript">
            var vm = new Vue({
            el:'#app', 
            data: {
                name: ''
            },
            methods: {
                handle1: function(event) {
                    console.log(event.keyCode);
                }
            }
            });
    </script>
```

