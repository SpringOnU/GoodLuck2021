function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

var index=0,
	timer=null,
	pics=byId("banner").getElementsByTagName("div"),
	len=pics.length;
	function slideImg(){
	var main=byId("main");
	main.onmouseout=function(){
		 clearInterval(timer);
			timer=setInterval(function(){
			index++;
			if(index>=len){
				index=0;
			}
			changeImg();
		},3000);
	}
	main.onmouseout();
}


function changeImg(){
	for(var i=0;i<len;i++){
		pics[i].style.display="none";
	}
	pics[index].style.display='block';
}

slideImg();