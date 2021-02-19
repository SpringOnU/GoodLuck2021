# Promise

异步编程的解决方案

+ 避免多层异步调用的嵌套问题
+ 提供简洁的api，更容易控制异步操作

```js
    var p = new Promise(function(resolve, reject) { // 这两个都是方法 都可以调用
      // 这里实现异步任务
      setTimeout(function() {
        var flag = true;
        if(flag) {
          // 正常情况
          resolve('hello');
        }else{
          reject('error');
        }
      }, 100);
      // p.then 接收
      p.then(function(data) { // 正确情况下 hello传给data
        console.log(data);
      },function(info) {  // 出错时 error传给info
        console.log(info);
      })
    })
```

