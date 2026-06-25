let burger = false;

document.getElementById('nav-icon6').onclick = function(){
	if(burger === true){
		document.getElementById('nav-icon6').classList.toggle('open')
		document.getElementById('burger').classList.toggle('open')
		document.querySelector('body').style.overflow = 'visible'
		burger = false;
	}else{
		document.getElementById('nav-icon6').classList.toggle('open')
		document.getElementById('burger').classList.toggle('open')
		document.querySelector('body').style.overflow = 'hidden'
		burger = true;
	};
};
