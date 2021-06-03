# 一、模块化

## 1. 遇到的问题

+ 命名冲突
+ 文件依赖

## 2. 解决方案

+ 模块化将单独功能封装到一个文件中，模块之间相互隔离，但是可以通过特定接口公开内部成员，也可以依赖别的模块

## 3. 优点

+ 方便重用，提高效率，有利于后期维护

# 二、浏览器端

+ AMD
+ CMD

# 三、服务器端

1. commonJS
   + 分为单文件模块和包
   + 导出：`modules.exports` `exports`
   + 导入： `require('')`

# 四、ES6

浏览器端和服务器端通用

+ js文件独立
+ 导入`import`
+ 导出`export`

## 1.export default 默认导出

```js
export default {
	...
}
```

​		只能用一次

## 2. export ... 按需导出

```js
export let m = 2;
```

​		可以用多次

## 3. import导入

`import m1,{...} form './js'`

m1是不指定名字的按需导出，{...}是默认导入

# 五、webpack

