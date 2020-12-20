function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

window.onload=function(){

	var btn=document.getElementById("btn"),
		fir=document.getElementById("fir"),
		sec=document.getElementById("sec"),
		thi=document.getElementById("thi");
		DeFir=document.getElementById("DeFir"),
		DeSec=document.getElementById("DeSec"),
		DEThi=document.getElementById("DEThi"),
		input=document.getElementById("input");

		
			btn.onclick=function(){
				fir.value=input.value;
				input.value="";


			btn.onclick=function(){
				sec.value=input.value;
				input.value="";

			btn.onclick=function(){
				thi.value=input.value;
				input.value="";

			}
			}
			}

		
	

	DeFir.onclick=function(){
		document.getElementById("fir").value="";
	}
	DeSec.onclick=function(){
		document.getElementById("sec").value="";
	}
	DeThi.onclick=function(){
		document.getElementById("thi").value="";
	}
	
}