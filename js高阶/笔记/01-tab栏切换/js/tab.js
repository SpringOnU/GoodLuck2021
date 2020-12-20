var that;
class Tab {
    constructor(id){
        //获取元素
        this.main=document.querySelector(id);

        //获取所有的li和section 可以成数组
        this.lis=this.main.querySelectorAll('li');  //导航栏
        this.sections=this.main.querySelectorAll('section');  //内容栏

        this.add=this.main.querySelector('.tabadd');

        // li的父元素
        this.ul=this.main.querySelector('.firstnav ul:first-child');  //cs3选择器
        // section的父元素
        this.fsection=this.main.querySelector('.tabscon');

        //最下面new了一下tab 就会自动调用
        this.init();  //记得加this
        //that里面保存了construction里面的this
        that = this ;
    }

    init(){
        //init 初始化操作，让相关元素绑定事件

        this.updateNode();  //重新编号调用

        this.add.onclick=this.addTab;

        for(var i = 0;i < this.lis.length; i++){
            this.lis[i].index = i;  //获取编号
            //给3个li都绑定点击事件
            this.lis[i].onclick = this.toggleTab; // 不要加小括号，加了的话就会直接调用了；
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }

    // 因为动态添加元素 再次获取所有的li和section
    updateNode(){
        this.lis=this.main.querySelectorAll("li");
        this.sections=this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.firstnav li span:first-child');
    }

    //1.切换功能
    toggleTab(){  // this指向的是这个函数的调用者 是this.lis调用的
       // console.log(this.index);
       that.clearClass();  //调用清除功能
       this.className = 'liactive';  //这里的this指向的是this.lis
       // this.sections[this.index].className = 'conactive';  //这里的this指向的是this.lis,lis下面并没有sections这个属性 -> 报错
       that.sections[this.index].className = 'conactive';
    }

    //清除li和section里面的所有类
    clearClass(){  // this指向的是这个函数的调用者 是this调用的
        for(var i=0;i<this.lis.length;i++){
            this.lis[i].className='';
            this.sections[i].className='';
        }
    }

    //2.添加功能
    addTab(){ 
        that.clearClass();//调用 移除

        var random = Math.random();  //生成一个随机数
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">测试 '+ random +'</section>';
        // 直接追加到父元素当中
        that.ul.insertAdjacentHTML('beforeend',li);  //追加到其余子元素的最后面 详情可参考网页：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML
        that.fsection.insertAdjacentHTML('beforeend',section);

        that.init();

    }

    //3.删除功能
    removeTab(e){
        // 添加一个事件对象
        e.stopPropagation();  // 阻止冒泡 冒泡时会随着关闭页面切换点击事件
        // x是没有索引号的 但是他的父元素有 只要拿到这个索引号即可
        // 点击x可以删除这个索引号对应的li和section
        var index = this.parentNode.index;  //拿到父元素的索引号
        //console.log(index);
        // 根据索引号删除 li 和section
        that.lis[index].remove();  // 直接调用删除
        that.sections[index].remove();

        that.init();  // 获取最新元素

        // 当我们删除的不是选中状态的li 让他的前一个li处于选中状态
        // 如果现在你有选定状态 为真 return 下面代码就不再执行
        if(document.querySelector('.liactive')) return;

        // 当我们删除了选中状态的这个li 使他前一个处于被选中状态
        index--;
        // click() 不需要用鼠标点，可以自己调用
        // && 回调函数 call back 如果前面为真 就调用后面
        that.lis[index] && that.lis[index].click();


    }
    
    //4.修改功能
    editTab(){
        var str = this.innerHTML;
        // 双击事件 ondblclick
        
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" value=""/>';
        var input = this.children[0];
        input.value = str ;
        input.select(); //文本框里面的文字处于选定出状态

        // 当我们离开文本框 就把文本框里面的值给span
        input.onblur = function(){
            this.parentNode.innerHTML = this.value;
        }

        // 按下回车 
        input.onkeyup= function(e){
            if(e.keyCode == 13) {
                // 手动调用表单失去标点事件 不需要离开鼠标再操作
                this.blur();
            }
        }
    }
}

var tab = new Tab('#tab');

