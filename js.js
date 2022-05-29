// let- kluchove slovo
// q- zmina
// =znak prisvouvannia
// "Hello- info jaka prisvovuetsia"

// ----------------------
// let 1-ne pravilno
// let 1q-ne pravilno
// let w w- ne pravilno

// ----------------------
// let q1 pravilno
// let w_w pravilno





// var q= "Hello";
// let w= "afaf";

// var r="qwerty"
// let c='qwertz'
// q=30;
// w=140;

// let e=q+w
// alert(q)
// alert(w)
// alert(e)
// alert(r)
// alert(c)

// let q= "Hello";// -text
// let q1="140";//- text
// let w=10; //- int 
// let e= 10.5;// int
// let r = true; //logic
// let t = false; //logic
// alert(q+r) ;//hello true
// alert(q1+w);//14010
// alert(q+t);//hellofalse
// alert(w+r);//11
// alert(w+t);//10


// let a =140
// let b=200
// let c= a+b
// let d = b-a
// let e = a-b
// let r= a*b
// let h= a/b
// let y= b/a

// alert(c)
// alert(d)
// alert(e)
// alert(r)
// alert(h)
// alert(y)

// if
// < > 
// <= >= 

// 2<10 false
// 4<=4 true
// 3==0 false
// 20<38 true
// alert (5!=5)-false
// alert (6!=5)-true
// if(){

// }else{}
//  --------
// if(){

// }
// ----------
// if () {

// }else if () {

// }

// else{

// }
// ---------

// let y=0;
// if(y==0){
// 	alert("=)")
// }
// else if (y==10){
// 	alert("=P")
// }
// else if (y==20){
// 	alert("=*")
// }
// else{
// 	alert("=(")
// }


// let a= 1;
// let b= 2;
//  --- 1
//  if (a==0){
//  	alert("virno")
//  }
//  else{
//  	alert("ne virno")
//  }
//  ---2
//  if (a>0){
//  	alert("virno")
//  }
//  else{
//  	alert("false")
//  }
//  ---3
//  if (a<0){
//  	alert("virno")
//  }
//  else{
//  	alert("false")
//  }
//  ----4
//  if (a<=0){
//  	alert("virno")
//  }
//  else{
//  	alert("false")
//  }
//  ---5
//  if (a>=0){
//  	alert("virno")
//  }
//  else{
//  	alert("false")
//  }
//  ----6
//  if (a==0){
//  	alert("true")
//  }
//  else{
//  	alert("false")
//  }
//  ----7
// if (a<0){
// 	if(a<5){
// 		alert("virno")
// 	}
// 	else{
// 		alert("false")
// 	}
// }
// else{
// 	alert("false")
// }
//  -----8
//  if (a==2){
//  	alert(a+7)
//  }
//  else if (a==0){
//  	alert(a+10)
//  }
//  else{
// 	alert(a/10)
//  }
//  ----9

//  if (a<=1){
//  	if (b>=3){
//  		alert("virno")
//  	}
//  	else{
//  		alert("false")
//  	}
// }

// else{
// 	alert("false")
// }
// let s=20;
// if (s==20){
//     if (s<20) {
//         alert("true")
//     }
//     else{
//         alert("false")
//     }
// }
// else{
//         alert("false")
//     }


// let a=30;
// if(a>10){
//     if(a<50){
//         let d=3
//         alert(d*a)
//     }
//     else{
//         alert("false")
//     }
// }
// else{
//         alert("false")
//     }



// let r=100;
// if (s==100){
//     alert("=)")
// }
// else if (s==200) {
//         alert("=)")
//     }
// else{
//         alert("=(")
//     }


// &&- and

// t && t = t 
// t && f = f 


// let q = 10 ;
// if( q>0 && q<50){
//     alert("=)")
// }
// else{
//     alert("=(")
// }
// let q=30;
// let y=200;
// if(q>50 && y<100){
//     alert("=)")
// }else{
//     alert("=(")
// }
// 
// t || t = t 
// t || f = t
// f || f = f
// 
// let t = 10;
// if(t==0 || t==10){
//     alert("=)")
// }
// else{
//     alert("=(")
// }

// !(t)=f
// !(f)=t
// let q=0;
// if(!(q==0)){
//     alert("=)")
// }else{
//     alert("=(")
// }
// let a = 0;
// let b = 1;
// if(a<1 || a==1 && b>3 || b==3){
//     alert(b+a)
// }
// else{
//     alert(b-a)
// }
// ----------------
// if(a>2 && a<11 || b>6 && b<14 || b==6 && b<14 ){
//     alert("t")
// }
// else{
//     alert("f")
// }
// ------------------
// if(a>0 && a<=10 ){
//     alert("1")
// }
// else if(a>10 && a<=20) {
//     alert("2")
// }
// else if(a>20 && a<=31)   {
//     alert("3")
// }

// else{
//     alert("nevirno")
// }
// ---------------

// if(a==12 || a==1 ||  a==2 ){
//     alert("1")
// }
// else if(a==3 || a==4 ||  a==5 ) {
//     alert("2")
// }
// else if(a==6 || a==7 ||  a==8 )   {
//     alert("3")
// }
// else if(a==9 || a==10 ||  a==11 )   {
//     alert("4")
// }
// else{
//     alert("nevirno")
// }

addEventListener("load",() => { // "load" is safe but "DOMContentLoaded" starts earlier
        var index = 0;
        const slides = document.querySelectorAll(".slides");
        const classHide = "slides-hidden", count = slides.length;
        nextSlide();
        function nextSlide() {
            slides[(index ++) % count].classList.add(classHide);
            slides[index % count].classList.remove(classHide);
            setTimeout(nextSlide, 3000);
        }
    });

function listener(e) {
  var l = document.createElement("li");
  switch(e.type) {
    case "animationstart":
      l.innerHTML = "Started: elapsed time is " + e.elapsedTime;
      break;
    case "animationend":
      l.innerHTML = "Ended: elapsed time is " + e.elapsedTime;
      break;
    case "animationiteration":
      l.innerHTML = "New loop started at time " + e.elapsedTime;
      break;
  }
  document.getElementById("output").appendChild(l);
}