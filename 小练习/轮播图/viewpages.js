function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

var index=0,
	timer=null,
	pics=byId("banner").getElementsByTagName("img"),
	len=pics.length;

function slideImg(){
	var banner= byId("banner");
	banner.onmouseover = function(){
		if(timer) 
			clearInterval(timer);
	}

	banner.onmouseout=function(){
		timer=setInterval(function(){
			index++;
			if(index>=len){
				index=0;
			}
			changeImg();
		},2000);
	}
}

function changeImg(){
	for(var i=0;i<len;i++){
		pics[i].style.display='none';
	}
	pics[index].style.display='block';

}

slideImg();
banner.onmouseout();