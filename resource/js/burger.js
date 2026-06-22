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

let burger__portfolio = false;

document.querySelector('#burger__portfolio-btn').onclick = function(){
	if(burger__portfolio === true){
		document.getElementById('burger__portfolio-btn').querySelector('i').style.rotate = '0deg'

		setTimeout(() => {document.getElementById('bpi__8').style.transform = 'translateX(-100%)'})
		setTimeout(() => {document.getElementById('bpi__7').style.transform = 'translateX(-100%)'}, 37)
		setTimeout(() => {document.getElementById('bpi__6').style.transform = 'translateX(-100%)'}, 74)
		setTimeout(() => {document.getElementById('bpi__5').style.transform = 'translateX(-100%)'; document.getElementById('burger__portfolio').style.height = '0%'}, 111)
		setTimeout(() => {document.getElementById('bpi__4').style.transform = 'translateX(-100%)'}, 148)
		setTimeout(() => {document.getElementById('bpi__3').style.transform = 'translateX(-100%)'}, 185)
		setTimeout(() => {document.getElementById('bpi__2').style.transform = 'translateX(-100%)'}, 222)
		setTimeout(() => {document.getElementById('bpi__1').style.transform = 'translateX(-100%)'}, 259)

		setTimeout(() => {document.getElementById('burger__portfolio').style.display = 'none'}, 300)

		burger__portfolio = false
	}else{
		document.getElementById('burger__portfolio').style.display = 'flex'
		document.getElementById('burger__portfolio-btn').querySelector('i').style.rotate = '-180deg'

		setTimeout(() => {document.getElementById('burger__portfolio').style.height = '100%'})

		setTimeout(() => {document.getElementById('bpi__1').style.transform = 'translateX(0%)'})
		setTimeout(() => {document.getElementById('bpi__2').style.transform = 'translateX(0%)'}, 37)
		setTimeout(() => {document.getElementById('bpi__3').style.transform = 'translateX(0%)'}, 74)
		setTimeout(() => {document.getElementById('bpi__4').style.transform = 'translateX(0%)'}, 111)
		setTimeout(() => {document.getElementById('bpi__5').style.transform = 'translateX(0%)'}, 148)
		setTimeout(() => {document.getElementById('bpi__6').style.transform = 'translateX(0%)'}, 185)
		setTimeout(() => {document.getElementById('bpi__7').style.transform = 'translateX(0%)'}, 222)
		setTimeout(() => {document.getElementById('bpi__8').style.transform = 'translateX(0%)'}, 259)

		burger__portfolio = true


	};

};