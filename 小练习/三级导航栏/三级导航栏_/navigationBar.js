function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

var login=byId("login"),
	log=byId("log"),
	log2=byId("log2"),
	blog=byId("blog"),
	p=byId("p"),
	all=byId("all"),
	banner=byId("banner"),
	logon=byId("logon"),
	loging=byId("loging"),
	submit=byId("submit"),
	name=byId("name"),

	title1=byId("title1"),
	title2=byId("title2"),
	title3=byId("title3"),
	title=all.getElementsByClassName("s-title"),
	lenT=title.length,

	box1=byId("box1"),
	box2=byId("box2"),
	box3=byId("box3"),
	box4=byId("box4"),
	box5=byId("box5"),
	box6=byId("box6"),
	box=all.getElementsByClassName("content"),
	lenB=box.length,

	index=0,
	pics=byId("banner").getElementsByTagName("img"),
	prev=byId("prev"),
	next=byId("next"),
	lenP=pics.length;

	title1.onclick=function(){
		if (p.innerHTML=='博客首页') {
						for(var i=0;i<lenT;i++){
						title[i].classList.remove("active2");
					}
					
					title1.classList.add("active2");

					for(var j=0;j<lenB;j++){
						box[j].classList.add("none");
						box[j].classList.remove("block");
					}

					box1.classList.remove("none");
					box1.classList.add("block");
		}

		if (p.innerHTML=='视频教程') {
			for(var i=0;i<lenT;i++){
						title[i].classList.remove("active2");
					}
					
					title1.classList.add("active2");

					for(var j=0;j<lenB;j++){
						box[j].classList.add("none");
						box[j].classList.remove("block");
					}

					box4.classList.remove("none");
					box4.classList.add("block");
		}
	}

	title2.onclick=function(){
					if (p.innerHTML=='博客首页') {
						for(var i=0;i<lenT;i++){
						title[i].classList.remove("active2");
					}
					
					title2.classList.add("active2");

					for(var j=0;j<lenB;j++){
						box[j].classList.add("none");
						box[j].classList.remove("block");
					}

					box2.classList.remove("none");
					box2.classList.add("block");
		}

		if (p.innerHTML=='视频教程') {
			for(var i=0;i<lenT;i++){
						title[i].classList.remove("active2");
					}
					
					title2.classList.add("active2");

					for(var j=0;j<lenB;j++){
						box[j].classList.add("none");
						box[j].classList.remove("block");
					}

					box5.classList.remove("none");
					box5.classList.add("block");
		}
	}

	title3.onclick=function(){
		if (p.innerHTML=='博客首页') {
							for(var i=0;i<lenT;i++){
							title[i].classList.remove("active2");
						}
						
						title3.classList.add("active2");

						for(var j=0;j<lenB;j++){
							box[j].classList.add("none");
							box[j].classList.remove("block");
						}

						box3.classList.remove("none");
						box3.classList.add("block");
		}

		if (p.innerHTML=='视频教程') {
			for(var i=0;i<lenT;i++){
						title[i].classList.remove("active2");
					}
					
					title3.classList.add("active2");

					for(var j=0;j<lenB;j++){
						box[j].classList.add("none");
						box[j].classList.remove("block");
					}

					box6.classList.remove("none");
					box6.classList.add("block");
		}
	}



video.onclick=function(){
	p.innerHTML='视频教程';
	title1.innerHTML='入门教程';
	title2.innerHTML='进阶教程';
	title3.innerHTML='视频投稿';
	video.classList.add("active");
	blog.classList.remove("active");


		for(var i=0;i<lenT;i++){
			title[i].classList.remove("active2");
		}
		
		title1.classList.add("active2");

		for(var j=0;j<lenB;j++){
			box[j].classList.add("none");
			box[j].classList.remove("block");
		}

		box4.classList.remove("none");
		box4.classList.add("block");
}

blog.onclick=function(){
	p.innerHTML='博客首页';
	title1.innerHTML='热门推荐';
	title2.innerHTML='博客分类';
	title3.innerHTML='优秀案例';
	
	blog.classList.add("active");
	video.classList.remove("active");
		
		for(var i=0;i<lenT;i++){
			title[i].classList.remove("active2");
		}
		
		title1.classList.add("active2");

		for(var j=0;j<lenB;j++){
			box[j].classList.add("none");
			box[j].classList.remove("block");
		}

		box1.classList.remove("none");
		box1.classList.add("block");
}

function slideImg(){
	var banner= byId("banner");
	banner.onmouseover = function(){
		if(timer) 
			clearInterval(timer);
	}

	banner.onmouseout=function(){
		timer=setInterval(function(){
			index++;
			if(index>=lenP){
				index=0;
			}
			changeImg();
		},2000);
	}
}

function changeImg(){
	for(var i=0;i<lenP;i++){
		pics[i].style.display='none';
	}
	pics[index].style.display='block';

}

slideImg();
banner.onmouseout();


	next.onclick=function(){
		index++;
		if(index>=lenP)
		{
			index=0;
		}
		changeImg(index);
	}

	prev.onclick=function(){
		index--;
		if(index<0)
		{
			index=2;
		}
		changeImg(index);
	}

function changeImg(){
	for(var c=0;c<lenP;c++){
		pics[c].style.display='none';
	}
	pics[index].style.display='block';

}


logon.onclick=function(){
	loging.innerHTML="账号注册:";
	account.innerHTML="设置账号:";
	number.innerHTML="设置密码:";
	submit.value="注册";
	logon.innerHTML=" ";
}

submit.onclick=function(){
	log.style.display='none';
	log2.classList.remove("none");
	log2.classList.add("block");

	var a = document.form.name.value;
	log2.innerHTML="用户："+a;
}









