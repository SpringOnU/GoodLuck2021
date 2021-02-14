# 一、表单操作

+ `number` 转化为数值

+ `trim` 去掉开始和结尾的空格

+ `lazy` 将input事件(直接验证)转化为change事件(失去焦点才验证)

v-model.number

v-model.trim

v-model.lazy

# 二、自定义指令 directive

https://cn.vuejs.org/v2/guide/custom-directive.html

## 1.  获取焦点

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

# 三、计算属性 computed

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

# 四、侦听器 watch

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

> 案例：侦听器应用

# 五、过滤器 filter

```html
  <div id="app">
    <input type="text" v-model='msg'>
    <div>{{msg | upper}}</div>
  </div>
  <script type="text/javascript" src="js/vue.js"></script>
  <script type="text/javascript">
    Vue.filter('upper', function(val) {
      return val.charAt(0).toUpperCase() + val.slice(1)
      // charAt(0) 选中第一个字符 toUpperCase 变成大写 slice(1) 从第二个字符开始到最后
    })
    var vm = new Vue({
      el: '#app',
      data: {
        msg: ''
      }
    })
```

```html
<div>{{msg | upper}}</div>
<div>{{msg | upper | lower }}</div>
<div v-bind:id = "id | format"></div>
    <div :abc = "msg | upper">123</div> <!-- abc自定义 -- >
```

另一种单独提出来

```js
    var vm = new Vue({
      el: '#app',
      data: {
        msg: ''
      },
      filters: {
        upper: function(val) {
          return val.charAt(0).toUpperCase() + val.slice(1);
        }
      }
    })
```



带参数

> 使用过滤器格式化日期

```html
<!-- 简版 -->    

	<div id="app">
        <div>{{date | format('yyyy-MM-dd')}}</div>
    </div>
    <script type="text/javascript" src="js/vue.js"></script>
    <script type="text/javascript">
    Vue.filter('format',  function(value, arg) {
        // console.log(arg);
        // return value;
        if(arg == 'yyyy-MM-dd'){
            var ret = '';
            ret += value.getFullYear() + '-' + value.getMonth() + '-' +value.getDate();
            return ret;
        }
    })
    var vm = new Vue({
        el: '#app',
        data: {
            date: new Date()
        }
    });
    </script>
```

# 六、生命周期

1. **挂载**（初始化相关属性
   +  `beforeCreate` 在实例初始化之后，数据观测和事件配置之前被调用。
   + `created` 在实例创建完成后被立即调用。
   + `beforeMount` 在挂载开始之前被调用。
   + `mounted` el被新创建的vm.$el替换，并挂载到实例上去之后调用该钩子。

2. **更新**（元素或组件
   + `beforeUpdate` 数据更新时调用，发生在虚拟DOM打补丁之前。
   + `updated` 由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子。
3. **销毁**（销毁相关属性，释放一些资源
   + `beforeDestroy` 实例销毁之前调用。
   + `destroyed` 实例销毁后调用。

![]()<img src="E:\EPInterest\vue\DAY2-vue常用特性\img\lifecycle.png" alt="lifecycle" style="zoom:50%;" />

# 七、数组相关api

**变异方法(修改原有数据)** 

- `push()` 把指定的值添加到数组

- `pop()` 删除 arrayObject 的最后一个元素，把数组长度减 1，返回它删除的元素的值

- `shift()` 把数组的第一个元素从其中删除，并返回第一个元素的值

  ```html
  <script type="text/javascript">
  
  var arr = new Array(3)
  arr[0] = "George"
  arr[1] = "John"
  arr[2] = "Thomas"
  
  document.write(arr + "<br />")
  document.write(arr.shift() + "<br />")
  document.write(arr)
  
  </script>
  ```

  输出：

  ```html
  George,John,Thomas
  George
  John,Thomas
  ```

- `unshift()` 把它的参数插入 arrayObject 的头部

- `splice()` 删除数组中指定元素 返回的是含有被删除的元素的数组

- `sort()`排序 按字母顺序对数组中的元素进行排序

- `reverse()` 反转

**替换数组(生成新的数组)** => 新建一个数组接收一下

+ `filter()`  通过检查指定数组中符合条件的所有元素

+ `concat()` 该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成

+ `slice()` 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。

  | start   | 必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。 |
  | ------- | ------------------------------------------------------------ |
  | **end** | **可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。** |

**响应式变化**

 ```js
Vue.set(vm.items, indexOfItem, newValue)

vm.$set(vm.items, indexOfItem, newValue)
/* Vue.set(vm.list, 2, lemon)	这就是真真的第二个 不从0开始数哈*/
/* Vue.set(vm.info, 'gender', 'female')	这就是真真的第二个 不从0开始数哈*/
 ```

参数一**`vm.item`**表示要处理的数组**名称**

参数二**`indexOfItem`**表示要处理的数组的**索引**

参数三**`newValue`**表示要处理的数组的**值**