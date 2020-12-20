/*
	display:
*/

/*1.点击鼠标 显示内容
	1）获取元素
	2）控制鼠标点击事件
	3）设置css属性

*/

//封装一个代替getElementById的方法
function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

var aList=document.querySelectorAll('.nav-list h2'),
    aHide=document.querySelectorAll('.hide'),
    aIcon=document.querySelectorAll('.nav-list i');

var lastIndex=0;//上一次点击的下标

for(var i=0;i<aList.length;i++){
	/*自定义事件*/
	aList[i].index=i;	//增加了一个属性 用于保存i
	aList[i].isClick=false;		//定义一个开关，判断自己是否被点击
	/*
		aList[0].index = 0;
		aList[1].index = 1;
	*/
	aList[i].onclick=function(){
		if(this.isClick){//this.isClick == true;  我被点击了
			aHide[this.index].style.height='0';
			aList[this.index].className='';
			aIcon[this.index].className='';
			this.isClick=false;//我当前处于未点击状态
		}
		else{	//没有被点击
			
			/*清除上一次样式*/
		aHide[lastIndex].style.height='0';
		aList[lastIndex].className='';
		aIcon[lastIndex].className='';

		/*设置当前样式*/
		aHide[this.index].style.height='245px';
		aList[this.index].className='on';
		aIcon[this.index].className='on';
		this.isClick=true;	//我现在被点击了
		lastIndex=this.index; 	//保存上一次的下标

		}


		
	}
}


/*点击当前 清除上一次样式 设置当前样式*/



































