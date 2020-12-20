function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

var weibo=byId("weibo"),
	hot=byId("hot"),
	video=byId("video"),
	music=byId("music");

weibo.onmouseover=function(){
	weibo1.classList.remove("none");
	weibo1.classList.add("block");
}

hot.onmouseover=function(){
	hot1.classList.remove("none");
	hot1.classList.add("block");
}

video.onmouseover=function(){
	video1.classList.remove("none");
	video1.classList.add("block");
}

music.onmouseover=function(){
	music1.classList.remove("none");
	music1.classList.add("block");
}

weibo.onmouseout=function(){
	weibo1.classList.remove("block");
	weibo1.classList.add("none");
}

hot.onmouseout=function(){
	hot1.classList.remove("block");
	hot1.classList.add("none");
}

video.onmouseout=function(){
	video1.classList.remove("block");
	video1.classList.add("none");
}

music.onmouseout=function(){
	music1.classList.remove("none");
	music1.classList.add("none");
}

