var canvas = document.getElementById("canvas");
canvas.width=1300;
canvas.height=600;
var context = canvas.getContext("2d");
context.fillStyle="black";
/*
context.beginPath();
document.addEventListener("DOMContentLoaded", render, false);
            var xposition;
			var yposition;
      var toolcollide=0;
        window.addEventListener("mousedown", getPosition, false);
		
      

      function getPosition(event)
      {
        var x = new Number();
        var y = new Number();
        var canvas = document.getElementById("canvas");

        if (event.x != undefined && event.y != undefined)
        {
          x = event.x;
          y = event.y;
        }
        else // Firefox method to get the position
        {
          x = event.clientX + document.body.scrollLeft +
              document.documentElement.scrollLeft;
          y = event.clientY + document.body.scrollTop +
              document.documentElement.scrollTop;
        }alert(""+(x-20)+","+(y-20));
	  }
	*/  

var keyfunction=true;
	  
var have= new Array();
	//  var bits=document.cookie.split("=");

//alert(bits[0]);
var health=phpvar;
//alert(health);
var id =null;
var keys= [];
speed=10;
var patient_picked=0;
var patient_saved=0;
count=0;
var c=50;

//var health=100;

/*var cube = {
	id:"one",
x: 450,
y: 570,
width: 20,
height: 20,
dead: false,
deadTime: 100
};

var cube1 = {
	id:"two",
x: 850,
y: 150,
width: 20,
height: 20,
dead: false,
deadTime: 100
};

var cube2 = {
	id:"three",
x: 1090,
y: 560,
width: 20,
height: 20,
dead: false,
deadTime: 100
};
var cube4 = {
	id:"four",
x: 1000,
y: 570,
width: 20,
height: 20,
dead: false,
deadTime: 100
};
var cube5 = {
	id:"five",
x: 450,
y: 260,
width: 20,
height: 20,
dead: false,
deadTime: 100
};
var cube6 = {
	id:"six",
x: 1050,
y: 480,
width: 20,
height: 20,
dead: false,
deadTime: 100
};
var cube7 = {
	id:"seven",
x: 490,
y: 900,
width: 20,
height: 20,
dead: false,
deadTime: 100
};*/
var img = new Image();
img.src = "images/pat3.png";
img.xpos = 1150;
img.ypos = 80;
img.width =60;
img.height =60;

var img1 = new Image();
img1.src = "images/pat3.png";
img1.xpos = 850;
img1.ypos = 150;
img1.width =60;
img1.height =60;

var img2 = new Image();
img2.src = "images/pat3.png";
img2.xpos = 1090;
img2.ypos = 560;
img2.width =60;
img2.height =60;

var img3 = new Image();
img3.src = "images/pat3.png";
img3.xpos = 670;
img3.ypos = 320;
img3.width =60;
img3.height =60;

var img4 = new Image();
img4.src = "images/pat3.png";
img4.xpos = 840;
img4.ypos = 560;
img4.width =60;
img4.height =60;

var img5 = new Image();
img5.src = "images/pat3.png";
img5.xpos = 220;
img5.ypos = 540;
img5.width =60;
img5.height =60;

var img6 = new Image();
img6.src = "images/pat3.png";
img6.xpos = 480;
img6.ypos = 70;
img6.width =60;
img6.height =60;

  var obimg = new Image();
obimg.src = "images/obstacle1.png";
obimg.xpos = 900;
obimg.ypos = 300;
obimg.width =80;
obimg.height =80;

  var obimg1 = new Image();
obimg1.src = "images/obstacle1.png";
obimg1.xpos = 1120;
obimg1.ypos = 270;
obimg1.width =80;
obimg1.height =80;


/*var toimg = new Image();
toimg.src = "health.jpg";
toimg.xpos = 1000;
toimg.ypos = 200;
toimg.width =40;
toimg.height =40;

*/
 
 var cube={
 	x:img.xpos,
 	y:img.ypos,
 	width:img.width,
 	height:img.height
 };
  var cube1={
 	x:img1.xpos,
 	y:img1.ypos,
 	width:img1.width,
 	height:img1.height
 };
 var cube2={
 	x:img2.xpos,
 	y:img2.ypos,
 	width:img2.width,
 	height:img2.height
 };
  var cube3={
 	x:img3.xpos,
 	y:img3.ypos,
 	width:img3.width,
 	height:img3.height
 };
  var cube4={
 	x:img4.xpos,
 	y:img4.ypos,
 	width:img4.width,
 	height:img4.height
 };
  var cube5={
 	x:img5.xpos,
 	y:img5.ypos,
 	width:img5.width,
 	height:img5.height
 };
  var cube6={
 	x:img6.xpos,
 	y:img6.ypos,
 	width:img6.width,
 	height:img6.height
 };
/*var tools={
 	x:toimg.xpos,
 	y:toimg.ypos,
 	width:toimg.width,
 	height:toimg.height
 };
*/
var obstacle={
 	x:obimg.xpos,
 	y:obimg.ypos,
 	width:obimg.width,
 	height:obimg.height
 };

 var obstacle1={
 	x:obimg1.xpos,
 	y:obimg1.ypos,
 	width:obimg1.width,
 	height:obimg1.height
 };

 
 
var collidedpatient=0;
var collidedpatient1=0;
var collidedpatient2=0;
var collidedpatient3=0;
var collidedpatient4=0;
var collidedpatient5=0;
var collidedpatient6=0;

var audio = new Audio('sounds/ambulance.m4a');
var coll = new Audio('sounds/collision2.wav');
//collison
var game_over = new Audio('sounds/ambulance.m4a');
//game_over.play(); put this game over in the place where the timer stops
var pick_up = new Audio('sounds/ambulance.m4a');
//pick_up.play(); put pick up in the place where the ambulance collides with the patient
var drop = new Audio('sounds/109662__grunz__success.wav');
//drop.play(); put drop where the ambulance drops the patient


window.addEventListener("keydown", function(e){
keys[e.keyCode] = true;
}, false);

window.addEventListener("keyup", function(e){
delete keys[e.keyCode];
}, false);
//var counter;

var player = new Sprite("images/finalsprite.png");
player.x = 20;
player.y= 255;

function timedCount() {
   // context.fillText(c,60,30);
    if(c>0 && patient_saved<7 && health>0){
	c = c - 1;
	context.clearRect(0,0,canvas.width,25);
	 t = setTimeout(function(){ timedCount() }, 1000);
	 }
	else{
		stopCount();
   // t = setTimeout(function(){ timedCount() }, 1000);
		
	}
}


function startCount() {
    if (!timer_is_on  ) {
        timer_is_on = 1;
        
		timedCount();
		
    }
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
	keyfunction= false;
	
	if(health==0 || health<0)
	{   
       document.getElementById("p1").innerHTML="<font color='#3cb9d5'; style='font-family:Georgia'>YOU SAVED : </font>"
	   +patient_saved+"<font color='#3cb9d5'; style='font-family:Georgia'> PATIIENTS <br> YOUR SCORE : </font>"
	   +(patient_saved*30)+"<br><br>G A M E &nbsp&nbsp&nbsp O V E R<br>";
		console.log("crashed");
		
		document.getElementById("overlay").style.visibility="visible";
		
		submit_score(patient_saved,c,health);
	
				gamefinish(patient_saved,c,health);
		
		
	keyfunction= false;
	}
	else if(c==0)
	{   document.getElementById("p2").innerHTML="<font color='#3cb9d5'; style='font-family:Georgia'>YOU SAVED : </font>"
+patient_saved+"<font color='#3cb9d5'; style='font-family:Georgia'> PATIIENTS <br> YOUR SCORE : </font>"
+(patient_saved*30)+"<br><br>G A M E &nbsp&nbsp&nbsp O V E R<br>";
		
		document.getElementById("overlay1").style.visibility="visible";
		submit_score(patient_saved,c,health);
		gamefinish(patient_saved,c,health);
	}
	else if(patient_saved==3 && c>0 && health>0)
	{   document.getElementById("p3").innerHTML="<font color='#3cb9d5'; style='font-family:Georgia'>YOU SAVED : </font>"
+patient_saved+"<font color='#3cb9d5'; style='font-family:Georgia'> PATIIENTS <br> YOUR SCORE : </font>"
+(patient_saved*30)+"<br><br>G O O D &nbsp&nbspJ O B"
		   
		document.getElementById("overlay2").style.visibility="visible";
		
		submit_score(patient_saved,c,health);
		
	}
	
}




function update()
{
	
if(keyfunction==true)
{	
	
	
	
	if(keys[38]) //up
{
	if ((player.x>0 && player.x<450 && player.y>240 && player.y<300)
		|| (player.x>450 && player.x<560 && player.y>250 && player.y<310)
	|| (player.x>430 && player.x<570 && player.y>30 && player.y<260)
	|| (player.x>430 && player.x<1200 && player.y>20 && player.y<100)
	|| (player.x>780 && player.x<880 && player.y>20 && player.y<250)
	|| (player.x>500 && player.x<1100 && player.y>190 && player.y<250)
	|| (player.x>1070 && player.x<1200 && player.y>20 && player.y<350)
	|| (player.x>430 && player.x<1200 && player.y>290 && player.y<350)
	|| (player.x>180 && player.x<970 && player.y>350 && player.y<400)
	|| (player.x>180 && player.x<320 && player.y>350 && player.y<600)
	|| (player.x>180 && player.x<860 && player.y>550 && player.y<600)
	|| (player.x>870 && player.x<970 && player.y>300 && player.y<600)
	|| (player.x>870 && player.x<1200 && player.y>420 && player.y<470)
	|| (player.x>1030 && player.x<1120 && player.y>420 && player.y<600)
	
	)
		
{
player.drawAnimated(player.x,player.y,[6,7,8,6],context);	
audio.play();
player.y-=speed;}

else{ 
	if(health>0)
hlth();
if(health==0 || health<0)
	{
		document.getElementById("overlay").style.visibility="visible";
	}
}

}
	
else if(keys[40]) //down
 {
	 if((player.x>0 && player.x<450 && player.y>220 && player.y<260)
		 || (player.x>450 && player.x<560 && player.y>220 && player.y<310)
	 || (player.x>430 && player.x<570 && player.y>0 && player.y<230)
	 || (player.x>430 && player.x<1200 && player.y>0 && player.y<60)
	 || (player.x>780 && player.x<880 && player.y>0 && player.y<200)
	 || (player.x>500 && player.x<1100 && player.y>170 && player.y<200)
	 || (player.x>1070 && player.x<1200 && player.y>0 && player.y<310)
	 || (player.x>430 && player.x<1200 && player.y>270 && player.y<310)
	 || (player.x>180 && player.x<970 && player.y>310 && player.y<350)
	 || (player.x>180 && player.x<320 && player.y>330 && player.y<555)
	  || (player.x>180 && player.x<860 && player.y>510 && player.y<555)
	  || (player.x>870 && player.x<970 && player.y>300 && player.y<555)
	  || (player.x>870 && player.x<1200 && player.y>400 && player.y<430)
	  || (player.x>1030 && player.x<1120 && player.y>400 && player.y<555)
	 )
{  player.drawAnimated(player.x,player.y,[0,1,2,0],context);
audio.play();
player.y+=speed;
}
else{ 
	if(health>0)
hlth();

if(health==0 || health<0)
	{
		document.getElementById("overlay").style.visibility="visible";
	}
}




 }
	
else if(keys[37]) //left
	{
	if((player.x>10 && player.x<600 && player.y>220 && player.y<280)
		|| (player.x>450 && player.x<600 && player.y>220 && player.y<260)
	|| (player.x>450 && player.x<600 && player.y>0 && player.y<230)
	|| (player.x>450 && player.x<1200 && player.y>0 && player.y<70)
	|| (player.x>800 && player.x<880 && player.y>0 && player.y<230)
	|| (player.x>500 && player.x<1100 && player.y>180 && player.y<210)
	|| (player.x>1090 && player.x<1200 && player.y>0 && player.y<320)
	|| (player.x>450 && player.x<1200 && player.y>270 && player.y<320)
	|| (player.x>200 && player.x<1000 && player.y>330 && player.y<360)
	|| (player.x>200 && player.x<350 && player.y>330 && player.y<600)
	|| (player.x>200 && player.x<1000 && player.y>510 && player.y<600)
	|| (player.x>890 && player.x<1000 && player.y>300 && player.y<600)
	|| (player.x>890 && player.x<1200 && player.y>400 && player.y<440)
	|| (player.x>1050 && player.x<1150 && player.y>420 && player.y<600))
	{	
	player.drawAnimated(player.x,player.y,[3,4,5,3],context);
	audio.play();
	player.x-=speed;}
	
else{ 
	if(health>0)
hlth();
if(health==0 || health<0)
	{
		document.getElementById("overlay").style.visibility="visible";
	}
	}
	}
	
	
else if(keys[39]) //right
{
	if((player.x>0 && player.x<550 && player.y>220 && player.y<280)
		|| (player.x>450 && player.x<550 && player.y>220 && player.y<260)
	|| (player.x>430 && player.x<560 && player.y>0 && player.y<230)
	|| (player.x>430 && player.x<1160 && player.y>0 && player.y<70)
	|| (player.x>780 && player.x<860 && player.y>0 && player.y<230)
	|| (player.x>500 && player.x<1100 && player.y>180 && player.y<210)
	|| (player.x>1060 && player.x<1160 && player.y>0 && player.y<320)
	|| (player.x>430 && player.x<1160 && player.y>270 && player.y<320)
	|| (player.x>180 && player.x<960 && player.y>310 && player.y<360)
	|| (player.x>180 && player.x<310 && player.y>330 && player.y<600)
	|| (player.x>180 && player.x<960 && player.y>510 && player.y<600)
	|| (player.x>870 && player.x<960 && player.y>300 && player.y<600)
	|| (player.x>870 && player.x<1160 && player.y>400 && player.y<440)
	|| (player.x>1030 && player.x<1110 && player.y>420 && player.y<600)
	|| (player.x>1030 && player.x<1110 && player.y>420 && player.y<600))


	{player.drawAnimated(player.x,player.y,[9,10,11,9],context);
	audio.play();
	player.x+=speed;}

else{ 
	if(health>0)
hlth();

if(health==0 || health<0)
	{
		document.getElementById("overlay").style.visibility="visible";
	}
}


}
}

if((patient_saved==7) && (c>0) && (health>0))
{
		stopCount();
		
}



if(player.x <0) {player.x=0};
if(player.y <0) player.y=0;
if(player.x >= canvas.width - player.width) {player.x=canvas.width - player.width;
}
if(player.y >= canvas.height - player.height) player.y=canvas.height - player.height ; 

if(collision(player, cube)) {console.log("collision");
	  if(patient_picked>=0 && patient_picked<3)
	
{patient_picked++;cube.x= 0;cube.y= 0;cube.width=0;cube.height=0;collidedpatient=1;}
  
  else{collidedpatient=0; } 
}
if(collision(player, cube1)) {console.log("collision");
	 if(patient_picked>=0 && patient_picked<3)
	 {patient_picked++;cube1.x= 0;cube1.y= 0;cube1.width=0;cube1.height=0;collidedpatient1=1;}
 
 else{collidedpatient1=0; } 
}
if(collision(player, cube2)) {console.log("collision");
	 if(patient_picked>=0 && patient_picked<3)
	 {patient_picked++;cube2.x= 0;cube2.y= 0;cube2.width=0;cube2.height=0;collidedpatient2=1;}
 else{collidedpatient2=0; } 
}	

if(collision(player, cube3)) {console.log("collision");
	 if(patient_picked>=0 && patient_picked<3)
	 {patient_picked++;cube3.x= 0;cube3.y= 0;cube3.width=0;cube3.height=0;collidedpatient3=1;}
 else{collidedpatient3=0;} 
}	
if(collision(player, cube4)) {console.log("collision");
	if(patient_picked>=0 && patient_picked<3)
	{patient_picked++;cube4.x= 0;cube4.y= 0;cube4.width=0;cube4.height=0;collidedpatient4=1;}
else{collidedpatient4=0; } 
}	
	if(collision(player, cube5)) {console.log("collision");
	if(patient_picked>=0 && patient_picked<3)
	{patient_picked++;cube5.x= 0;cube5.y= 0;cube4.width=0;cube5.height=0;collidedpatient5=1;}
else{collidedpatient5=0;} 
}	
if(collision(player, cube6)) {console.log("collision");
	if(patient_picked>=0 && patient_picked<3)
	{patient_picked++;cube6.x= 0;cube6.y= 0;cube4.width=0;cube6.height=0;collidedpatient6=1;}
else{collidedpatient6=0;} 
}	
	/*if(collision(player, tools)) {console.log("collision");
	 health = health + 5 ;toolcollide=1;tools.x= 0;tools.y= 0;tools.width=0;tools.height=0;
}
*/

if(collision(player, obstacle)) {console.log("collision");
{ 
if(health>0)
hlth();

if(health==0 || health<0)
	{
		document.getElementById("overlay").style.visibility="visible";
	}}
}

if(collision(player, obstacle1)) {console.log("collision");
{ 
if(health>0)
hlth();

if(health==0 || health<0)
	{
		document.getElementById("overlay").style.visibility="visible";
	}}
}


}																																																																																																										

function hlth()
{
	if(keys[38])
	{
	coll.play();
	health = health - 10; 
	
player.y+=20;
console.log("collision");
	}
	if (keys[40])
	{coll.play();
		health = health - 10; 

player.y-=20;
console.log("collision");
		
	}
	if (keys [37])
	{coll.play();
health = health - 10; 

player.x+=20;
console.log("collision");
	}
	if (keys[39])
	{coll.play();
		health = health - 10; 
		
player.x-=20;
console.log("collision");
	}
}



var timer_is_on=0;
var t;

function render()
{
	
if(keys[37] ||keys[38] ||keys[39] ||keys[40] )
{startCount();}
update();
	
context.clearRect(0,0,canvas.width,20);
//context.clearRect(0,0,600,50);
context.fillRect(player.x,player.y,player.width,player.height);
//context.fillRect(cube.x,cube.y,cube.width,cube.height);
//context.fillRect(cube.x,cube.y,cube1.width,cube1.height);

if(!collidedpatient)
context.drawImage(img,img.xpos,img.ypos,img.width,img.height);
if(!collidedpatient1)
context.drawImage(img1,img1.xpos,img1.ypos,img1.width,img1.height);
if(!collidedpatient2)
context.drawImage(img2,img2.xpos,img2.ypos,img2.width,img2.height);
if(!collidedpatient3)
context.drawImage(img3,img3.xpos,img3.ypos,img3.width,img3.height);
if(!collidedpatient4)
context.drawImage(img4,img4.xpos,img4.ypos,img4.width,img4.height);
if(!collidedpatient5)
context.drawImage(img5,img5.xpos,img5.ypos,img5.width,img5.height);
if(!collidedpatient6)
context.drawImage(img6,img6.xpos,img6.ypos,img6.width,img6.height);

/*if(!toolcollide)
context.drawImage(toimg,toimg.xpos,toimg.ypos,toimg.width,toimg.height);
*/


context.drawImage(obimg,obimg.xpos,obimg.ypos,obimg.width,obimg.height);
context.drawImage(obimg1,obimg1.xpos,obimg1.ypos,obimg1.width,obimg1.height);

/*context.fillRect(cube2.x,cube2.y,cube2.width,cube2.height);
context.fillRect(cube4.x,cube4.y,cube4.width,cube4.height);
context.fillRect(cube5.x,cube5.y,cube5.width,cube5.height);
context.fillRect(cube6.x,cube6.y,cube6.width,cube6.height);
	context.fillRect(cube7.x,cube7.y,cube7.width,cube7.height);*/
/*
			context.moveTo(0,250);
			context.lineTo(200,250);
			context.lineTo(200,150);
			context.lineTo(400,150);
			context.lineTo(400,250);
			context.lineTo(450,250);
			context.lineTo(450,25);
			context.lineTo(1200,25);
			context.lineTo(1200,350);
			context.lineTo(1000,350);
	        context.lineTo(1000,420);
			context.lineTo(1200,420);
			context.lineTo(1200,470);
			context.lineTo(1150,470);
			context.lineTo(1150,600);
			context.lineTo(1050,600);
			context.lineTo(1050,470);
			context.lineTo(1000,470);
			context.lineTo(1000,600);
			context.lineTo(200,600);
			context.lineTo(200,350);
			context.lineTo(450,350);
			context.lineTo(450,300);
			context.lineTo(0,300);
			context.lineTo(0,250);
			context.stroke();
			
			context.strokeRect(600,100, 200, 100);
			context.strokeRect(600,250, 500, 50);
			context.strokeRect(900,100, 200, 100);
			context.strokeRect(350,400, 550, 150);
			context.closePath();
	
*/	
			context.font="bold 20px verdana";
			context.fillText("Patients Picked: "+patient_picked,10,20);
			context.fillText("Time left: "+c,220,20);
			context.fillText("Health: "+health+"%",370,20);
				context.fillText("Patients saved: "+patient_saved,180,80);
		

if(player.x>200 && player.x<400 && player.y>200 && player.y<250)
			{
				if(patient_picked>0 && patient_picked<=3)
			{
				drop.play();
				count=patient_picked;
				patient_picked=0;
				patient_saved=patient_saved+count;
				//context.fillStyle="blue";
			}
			}
			
			
			}


		


function collision(first, second)
{ if(second.xpos && second.ypos)
	{second.x=second.xpos;
	second.y=second.ypos;}
	return !(first.x > second.x + second.width || first.x + 50 <= second.x || first.y >= second.y + second.height || first.y + 50 <= second.y);
//return !(first.x+first.width>second.x && first.x<=second.x+50 && first.y+first.height>=second.y && first.y<=second.y+50);
	
	}

setInterval(function()
{
render();
},1500/30);



function submit_score(patient_saved,time,health)
{

//alert("submit score called");
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {

    //document.getElementById("demo").innerHTML = xhttp.responseText;
  
    //alert(xhttp.responseText);
  }
};


xhttp.open("GET", "dump3.php?score="+patient_saved+"&time="+time+"&health="+health, false);
xhttp.send();




}

function gamefinish()
{

//alert("submit score called");
var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {

    //document.getElementById("demo").innerHTML = xhttp.responseText;
  
    //alert(xhttp.responseText);
  }
};


xhttp.open("GET", "final.php?level="+3, false);
xhttp.send();
//alert("final.php called");




}