window.onload =function(){
	var e1 =document.getElementById('open');
	var e2 =document.getElementById('panel');
	var e3 =document.getElementById('yellow');
	var e4 =document.getElementById('blue');
	var e5 =document.getElementById('red');

	var e9 =document.getElementById('kuan1');
	var e10 =document.getElementById('kuan2');
	var e11 =document.getElementById('kuan3');

	var e12 =document.getElementById('gao1');
	var e13 =document.getElementById('gao2');
	var e14 =document.getElementById('gao3');

	var e6 =document.getElementById('reset');
	var e7 =document.getElementById('commit');
	var e8 =document.getElementById('changediv');

	var change ='red';



	var width1='50';

	var height1='50';

	e1.onclick =function(){
		e2.style.display ='block';
	}
	e3.onclick =function(){
		change ='yellow';
	}
	e4.onclick =function(){
		change ='blue';
	}
	e5.onclick =function(){
		change ='red';
	}
	e6.onclick =function(){
		e8.style.background ='red';
		e8.style.width =width1+"px";
		e8.style.height =height1+"px";

		e2.style.display ='none';
	}
	e7.onclick =function(){
		e8.style.background =change;

		e8.style.width=width+"px";

		e8.style.height=height+"px";


		e2.style.display ='none';
	}

	e9.onclick = function(){

      width=100;


	}

	e10.onclick = function(){

      width=200;


	}
	e11.onclick = function(){

      width=300;


	}
	e12.onclick = function(){

      height=100;


	}
	e13.onclick = function(){

      height=200;


	}
	e14.onclick = function(){

      height=300;


	}
}