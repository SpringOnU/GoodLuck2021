# 一、表单操作

+ `number` 转化为数值

+ `trim` 去掉开始和结尾的空格

+ `lazy` 将input事件(直接验证)转化为change事件(失去焦点才验证)

v-model.number

v-model.trim

v-model.lazy

# 二、 自定义指令

https://cn.vuejs.org/v2/guide/custom-directive.html

// 获取焦点

```js
    Vue.directive('focus', {  
      /* focus自定义名字 v-balabala 
        directive 固定
        inserted 固定*/
      inserted: function(el) {
        // el:指令所绑定的元素
        el.focus(); // 直接默认就定位到输入框
      }
    });
```

```html
<input type="text" v-focus>
```

// 带参数指令

```html
  <div id="app">
    <input type="text" v-color='msg'>
  </div>
  <script type="text/javascript" src="js/vue.js"></script>
  <script type="text/javascript">

    Vue.directive('color', { 
      bind: function(el, binding){  // binding形参 可以改名
        // 根据指令参数设定背景色
        // console.log(binding.value); // hi
        el.style.backgroundColor = binding.value.color;
      }
    });
    var vm = new Vue({
      el: '#app',
      data: {
        msg: {
          color: 'red'
        }
      },
      methods: {
      }
    });
  </script>
```

// 局部指令

组件中接收`directives`选项

```js
      directives: {
      color: {
        bind: function(el, binding){
            el.style.backgroundColor = binding.value.color;
        }
      }
```

# 三、计算属性

// computed

```html
  <div id="app">
    <div>{{msg}}</div>
    <div>{{reverseString}}</div>
  </div>
  <script type="text/javascript" src="js/vue.js"></script>
  <script type="text/javascript">
    var vm = new Vue({
      el: '#app',
      data: {
        msg: 'hello'
      },
      computed: {
        reverseString: function(){
          return this.msg.split('').reverse().join('');
        }
      }
    });
```

计算和方法 区别：是否缓存 同样的内容控制台只输出一次

# 四、侦听器

数据变化较大时执行异步或开销较大

```html
  <div id="app">
    <div>
      <span>名：</span>
      <span>
        <input type="text" v-model='firstName'>
      </span>
    </div>
    <div>
      <span>姓：</span>
      <span>
        <input type="text" v-model='lastName'>
      </span>
    </div>
    <div>{{fullName}}</div>
  </div>
  <script type="text/javascript" src="js/vue.js"></script>
  <script type="text/javascript">
    /*
      侦听器
    */
    var vm = new Vue({
      el: '#app',
      data: {
        firstName: 'Jim',
        lastName: 'Green',
        // fullName: 'Jim Green'
      },
      computed: { // 计算属性
        fullName: function() {
          return this.firstName + ' ' + this.lastName;
        }
      },
      watch: {  //侦听器
        // firstName: function(val) {    // firstName：第一个属性名的名字
        //   this.fullName = val + ' ' + this.lastName;
        // },
        // lastName: function(val) {    // lastName：第一个属性名的名字
        //   this.fullName = this.firstName + ' ' + val;
        // }

      }
    });
  </script>
```

