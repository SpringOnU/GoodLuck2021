# 一、面向对象编程介绍
## 1. **两大编程思想**
- 面向过程：分析出解决问题的步骤，再按步骤解决问题。/**蛋炒饭**/
- 面向对象：把事务分解成一个个对象，然后由对象之间分工合作。（大型项目）->封装性、继承性、多态性/**盖浇饭**/

## 2. **面向过程和面向对象对比**
![面向过程和面向对象对比](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fccd71132bc448038d6389b61ff2868c~tplv-k3u1fbpfcp-zoom-1.image)
# 二、ES6中的类和对象
## 1. 面向对象
**思维特点：**
1. 抽取对象**共用**的属性和行为组织封装成一个**类**（模板）。
2. 对类进行**实例化**，获取类的**对象**。
## 2.对象
所有的事物都是对象。 

对象是由属性和方法组成的：
- 属性：事物的**特征**
- 方法：事物的**行为**

## 3. 类 class
可用<font color='red'>class关键字</font>声明一个类，之后以这个类来<font color='red'>**实例化对象**</。

**类**抽象了对象的公共部分，它**泛指**某一大类（class）。

**对象**特指某一个，通过实例化一个具体的对象。

## 4.创建类

**语法：**

```javascript
class name {
	//class body
    }
```
**创建实例：**

```javascript
 var xx= new name
```
 类必须使用new实例化对象

 ## 5. 类 constructor 构造函数
 用于传递参数，返回实例对象。通过new命令生成对象实例时，自动调用。如果没有显示实例，那么类内部会自动创建一个constructor()。

## 6. 类中添加方法
> 1. 类里面所有的函数不需要写function
> 2. 多个函数方法之间不需要添加逗号分隔


```javascript
        // 1. 创建类 class 创建一个明星类
        class Star{
            constructor(uname,age){
                this.uname = uname;
                this.age = age;
            }
            sing(song) {
            console.log(this.uname + song);
            }
        }

        // 2. 利用类生成对象 new
        var hcy = new Star('chunYoung',21);   //只要加了new就自动调用constructor
        var xhy = new Star('xiaGuo',23);
        console.log(hcy.uname);
        console.log(xhy.age);
        hcy.sing('6');
        xhy.sing('7');
```
![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fe7ed287c2824c889f8370a1b16390c0~tplv-k3u1fbpfcp-watermark.image)
# 三、类的继承
## 1.继承 extend
子类可以继承父类的一些属性和方法

**语法**：
```javascript
class Father{  //父类
}
class Son extends Father{  //子类
}
```

**例：**
```javascript
        class Father{
            constructor(){

            }
            money(){
                console.log(100);
            }

        }
        class Son extends Father{

        }

        var son = new Son();
        son.money();  //继承
```
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a670aa4ab63f432e865950c90321a192~tplv-k3u1fbpfcp-watermark.image)
## 2.super关键字
用于访问和调用父类对象上的函数，**可以调用父类的构造函数**，也可以调用父类的普通函数。
```javaScript
        class Father{
            constructor(x,y){
                this.x=x;
                this.y=y;
            }
            sum(){
                console.log(this.x + this.y);
            }
        }
        class Son extends Father{
            constructor(x,y){
                /* this.x=x;   这块运用的是子类的指向，而和上面的constructor不相同，父类的函数必须使用父类的constructor,出现错误
                this.y=y; */
                super(x,y);  //调用了父类上的构造函数
            }

        }
        var son = new Son(1,2);
        var son1 = new Son(11,22);
        son.sum();
        son1.sum();
```
输出3  33
1.//super关键字调用父类普通函数
```javascript
       //super关键字调用父类普通函数
       class Father{
           say(){
               return 'hey';
           }
       }
       class Son extends Father{
           say(){
               //console.log('we');
               console.log(super.say());
           }
       }
       var son = new Son();
       son.say();  //输出hey super().say就是引用了父类函数
```
2.//super关键字调用父类普通函数
```javascript
       //super关键字调用父类普通函数
       class Father{
           say(){
               return 'hey';
           }
       }
       class Son extends Father{
           say(){
               console.log('we');
           }
       }
       var son = new Son();
       son.say();  //输出we 就近原则
```
3.子类继承父类加法方法 同时扩展减法方法
```JavaScript
       //父类有加法方法
       class Father{
            constructor(x,y){
                this.x=x;
                this.y=y;
            }
            sum(){
                console.log(this.x + this.y);
            }
        }

        //子类继承父类加法方法 同时扩展减法方法
        class Son extends Father{
            constructor(x,y){
                //利用super调用父亲的构造函数
                //super必须在子类this之前调用
                super(x,y);
                this.x=x;
                this.y=y;
            }
            substract(){
                console.log(this.x-this.y);
            }

        }
        var son = new Son(5,3);
        son.substract();
        son.sum();  //不要忘记！！！！！！
```
**利用super调用父亲的构造函数**

**super必须在子类this之前调用**

# 四、类和对象三个注意点

1. 在Es6类中没有变量提升，所以必须先定义类，再通过类来实例化对象

2. 类里面共有的属性和方法必须加this来指引使用

```JavaScript
        class Star {
            constructor(uname,age){
             this.uname=uname;
             this.age=age;
 
             this.btn=document.querySelector('button');
             this.btn.onclick=this.sing;
 
        }
        sing(){
            console.log(this.uname);
            }
        }
        var hcy= new Star('');  //输出undefined
```

   ```JavaScript
       <button>点击</button>
    <script>
        var that;
        var _that;
        class Star {
            constructor(uname,age){
                //constructor 里面的this指向的是 创建的实例对象
                that=this;
                console.log(this);  //输出Star {}

             this.uname=uname;
             this.age=age;
 
             this.btn=document.querySelector('button');
             this.btn.onclick=this.sing;
 
        }
        sing() {
            //这里的sing方法里面的this指向的是 btn这个按钮 因为这个按钮调用了这个函数
            console.log(this); //输出<button>点击</button>

            console.log(this.uname);  //undefined 这个里面this指向的是btn 而btn里面是没有uname这个属性的
          				//输出undefined
            console.log(that.uname);  //that里面存储的是constructor里面的this 6就可以拿到了
            			//输出6
            }

        dance() {
            //这个dance里面的this指向的是实例对象hcy 因为hcy调用了这个函数
            _that=this;
            console.log(this);  //输出Star {uname: "6", age: undefined, btn: button}

        }
        }
        var hcy= new Star('6');
        console.log(that === hcy);   //输出ture
        hcy.dance();
        console.log(_that === hcy);   //输出true
     </script>
   ```
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0b3034da4e74cee865bcdf416c11606~tplv-k3u1fbpfcp-watermark.image)
