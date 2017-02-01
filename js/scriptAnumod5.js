var canvas = document.getElementById("canvas");
canvas.width=1300;
canvas.height=600;
var context = canvas.getContext("2d");
context.fillStyle="black";

/*
document.addEventListener("DOMContentLoaded", render, false);
            var xposition;
			var yposition;
      
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
var have= new Array();
//var bits=document.cookie.split("=");

//alert(bits[0]);
var health=phpvar;
//alert(health);
var keyfunction=true;
  
var id =null;
var keys= [];
speed=10;
var patient_picked=0;
var patient_saved=0;
var count=0;
var c=60;
//var health=100;

/*var cube = {
	id:"one",
x: 450,
y: 570,
width: 20,
height: 20
};

var cube1 = {
	id:"two",
x: 850,
y: 150,
width: 20,
height: 20
};

var cube2 = {
	id:"three",
x: 1090,
y: 560,
width: 20,
height: 20
};
*/

var img = new Image();
img.src = "images/pat3.png";
img.xpos = 10;
img.ypos = 200;
img.width =60;
img.height =60;

var img1 = new Image();
img1.src = "images/pat3.png";
img1.xpos = 320;
img1.ypos = 90;
img1.width =60;
img1.height =60;

var img2 = new Image();
img2.src = "images/pat3.png";
img2.xpos = 360;
img2.ypos = 280;
img2.width =60;
img2.height =60;

var img3 = new Image();
img3.src = "images/pat3.png";
img3.xpos = 50;
img3.ypos = 550;
img3.width =60;
img3.height =60;

var img4 = new Image();
img4.src = "images/pat3.png";
img4.xpos = 600;
img4.ypos =560;
img4.width =60;
img4.height =60;

var img5 = new Image();
img5.src = "images/pat3.png";
img5.xpos = 830;
img5.ypos = 70;
img5.width =60;
img5.height =60;

var img6 = new Image();
img6.src = "images/pat3.png";
img6.xpos = 1160;
img6.ypos = 290;
img6.width =60;
img6.height =60;

var img7 = new Image();
img7.src = "images/pat3.png";
img7.xpos = 920;
img7.ypos = 540;
img7.width =60;
img7.height =60;

var img8 = new Image();
img8.src = "images/pat3.png";
img8.xpos = 950;
img8.ypos = 290;
img8.width =60;
img8.height =60;

var img9 = new Image();
img9.src = "images/pat3.png";
img9.xpos = 1170;
img9.ypos = 120;
img9.width =60;
img9.height =60;

var obimg = new Image();
obimg.src = "images/obstacle1.png";
obimg.xpos = 5;
obimg.ypos = 430;
obimg.width =80;
obimg.height =80;

var toimg = new Image();
toimg.src = "images/health.jpg";
toimg.xpos = 1000;
toimg.ypos = 560;
toimg.width =40;
toimg.height =40;

var obimg1 = new Image();
obimg1.src = "images/obstacle1.png";
obimg1.xpos = 320;
obimg1.ypos = 205;
obimg1.width =100;
obimg1.height =80;

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
 
 var cube7={
 	x:img7.xpos,
 	y:img7.ypos,
 	width:img7.width,
 	height:img7.height
 };
 var cube8={
 	x:img8.xpos,
 	y:img8.ypos,
 	width:img8.width,
 	height:img8.height
 };
 var cube9={
 	x:img9.xpos,
 	y:img9.ypos,
 	width:img9.width,
 	height:img9.height
 };

var tools={
 	x:toimg.xpos,
 	y:toimg.ypos,
 	width:toimg.width,
 	height:toimg.height
 };

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
var collidedpatient7=0;
var collidedpatient8=0;
var collidedpatient9=0;
var toolcollide=0;


window.addEventListener("keydown", function(e){
keys[e.keyCode] = true;
}, false);

window.addEventListener("keyup", function(e){
delete keys[e.keyCode];
}, false);

var player = new Sprite("images/finalsprite.png");
player.x= 600;
player.y= 255;



var audio = new Audio('sounds/ambulance.m4a');
var collision_audio = new Audio('sounds/collision.mp3');
var game_over = new Audio('sounds/ambulance.m4a');
//game_over.play(); put this game over in the place where the timer stops
var pick_up = new Audio('sounds/ambulance.m4a');
//pick_up.play(); put pick up in the place where the ambulance collides with the patient
var drop = new Audio('sounds/109662__grunz__success.wav');
//drop.play(); put drop where the ambulance drops the patient



function timedCount() {
   // context.fillText(c,60,30);
    if(c>0 && patient_saved<10 && health>0){
	c = c - 1;
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
       document.getElementById("p1").innerHTML="<font color='#3cb9d5'; style='font-family:Georgia'>YOU SAVED : </font>"+patient_saved+"<font color='#3cb9d5'; style='font-family:Georgia'> PATIIENTS <br> YOUR SCORE : </font>"+(patient_saved*30)+"<br><br>G A M E &nbsp&nbsp&nbsp O V E R<br>";
		console.log("crashed");
		
		document.getElementById("overlay").style.visibility="visible";
		
		submit_score(patient_saved,c,health);
	
				gamefinish(patient_saved,c,health);
		
		
		
	keyfunction= false;
	}
	else if(c==0)
	{   document.getElementById("p2").innerHTML="<font color='#3cb9d5'; style='font-family:Georgia'>YOU SAVED : </font>"+patient_saved+"<font color='#3cb9d5'; style='font-family:Georgia'> PATIIENTS <br> YOUR SCORE : </font>"+(patient_saved*30)+"<br><br>G A M E &nbsp&nbsp&nbsp O V E R<br>";
		
		document.getElementById("overlay1").style.visibility="visible";
		submit_score(patient_saved,c,health);
		gamefinish(patient_saved,c,health);
	}
	else if(patient_saved==10 && c>0 && health>0)
	{   document.getElementById("p3").innerHTML="<font color='#3cb9d5'; style='font-family:Georgia'>YOU SAVED : </font>"+patient_saved+"<font color='#3cb9d5'; style='font-family:Georgia'> PATIIENTS <br> YOUR SCORE : </font>"+(patient_saved*30)+"<br><br>G O O D &nbsp&nbspJ O B"
		   
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
if  ((player.x>500 && player.x<700 && player.y>250 && player.y<350)
		|| (player.x>0 && player.x<1200 && player.y> 250 && player.y <350)
         || (player.x>280 && player.x<375 && player.y>350 && player.y<470)
		 || (player.x>0 && player.x<800 && player.y>400 && player.y<475)
		 || (player.x>690 && player.x<800 && player.y>445 && player.y<580)
		 || (player.x>0 && player.x<800 && player.y>550 && player.y<600)
		 || (player.x>0 && player.x<30 && player.y>420 && player.y<600)
		 || (player.x>870 && player.x<1030 && player.y>260 && player.y<600)
		 || (player.x>1090 && player.x<1200 && player.y>260 && player.y<600)
		 || (player.x>900 && player.x<1200 && player.y>550 && player.y<600)
		 || (player.x>0 && player.x<360 && player.y>40 && player.y<100)
		 || (player.x>280 && player.x<=360 && player.y>40 && player.y<350)
		 || (player.x>0 && player.x<20 && player.y>40 && player.y<350)
		 || (player.x>800 && player.x<1200 && player.y>50 && player.y<100)
		 || (player.x>785 && player.x<=865 && player.y>50 && player.y<350)
		 || (player.x>1130 && player.x<1200 && player.y>50 && player.y<350)

	 )


	{
		audio.play();
		player.drawAnimated(player.x,player.y,[6,7,8,6],context);	

	player.y-=speed;}

  else{ 
	if(health>0){hlth();}
if(health==0 || health<0)
	{
		document.getElementById("overlay").style.visibility="visible";
	}	

	}
	
}
	
if(keys[40]) //down
 {
if   ((player.x>500 && player.x<700 && player.y>240 && player.y<305)
		 || (player.x>0 && player.x<1200 && player.y> 240 && player.y <305)
	|| (player.x>280 && player.x<375 && player.y>300 && player.y<430)
	|| (player.x>5 && player.x<800 && player.y>380 && player.y<430)
	|| (player.x>690 && player.x<800 && player.y>400 && player.y<560)
	|| (player.x>0 && player.x<800 && player.y>530 && player.y<560)
	|| (player.x>5 && player.x<30 && player.y>400 && player.y<560)
	|| (player.x>870 && player.x<1040 && player.y>250 && player.y<560)
	|| (player.x>1090 && player.x<1200 && player.y>250 && player.y<560)
	|| (player.x>900 && player.x<1200 && player.y>530 && player.y<560)
	|| (player.x>0 && player.x<400 && player.y>10 && player.y<50)
	|| (player.x>280 && player.x<400 && player.y>10 && player.y<250)
	|| (player.x>0 && player.x<20 && player.y>10 && player.y<305)
	|| (player.x>800 && player.x<1200 && player.y>10 && player.y<50)
	|| (player.x>785 && player.x<865 && player.y>10 && player.y<250)
	|| (player.x>1130 && player.x<1200 && player.y>10 && player.y<250)) 
	
	{
		audio.play();
	player.drawAnimated(player.x,player.y,[0,1,2,0],context);
	
	player.y+=speed;
	}


   else{ 
	if(health>0){hlth();}
if(health==0 || health<0)
	{
		document.getElementById("overlay").style.visibility="visible";
	}	
	
	}

 }
 
	
if(keys[37]) //left
	{
	if((player.x>505 && player.x<700 && player.y>230 && player.y<320)
		|| (player.x>10 && player.x<1200 && player.y> 240 && player.y <320)
		|| (player.x>295 && player.x<=370 && player.y>320 && player.y<450)
		|| (player.x>10 && player.x<800 && player.y>380 && player.y<450)
		|| (player.x>705 && player.x<800 && player.y>450 && player.y<600)
		|| (player.x>10 && player.x<800 && player.y>530 && player.y<600)
		|| (player.x>10 && player.x<50 && player.y>400 && player.y<600)
		|| (player.x>895 && player.x<1050 && player.y>240 && player.y<600)
		|| (player.x>1105 && player.x<1200 && player.y>260 && player.y<600)
		|| (player.x>910 && player.x<1200 && player.y>530 && player.y<600)
		|| (player.x>10 && player.x<400 && player.y>10 && player.y<75)
		|| (player.x>290 && player.x<400 && player.y>10 && player.y<250)
		|| (player.x>10 && player.x<20 && player.y>10 && player.y<250)
		|| (player.x>790 && player.x<1200 && player.y>10 && player.y<75)
		|| (player.x>790 && player.x<900 && player.y>10 && player.y<250)
		|| (player.x>1140 && player.x<1200 && player.y>10 && player.y<250))
		
		
		
		{
			audio.play();
		player.drawAnimated(player.x,player.y,[3,4,5,3],context);
	
		player.x-=speed;}
	
else{ 
	if(health>0){hlth();}
if(health==0  || health<0)
	{
		document.getElementById("overlay").style.visibility="visible";
	}
	}
	}
	
	
if(keys[39]) //right
{
if ((player.x>500 && player.x<675 && player.y>240 && player.y<320)
	 || (player.x>0 && player.x<1155 && player.y> 240 && player.y <320)
 || (player.x>280 && player.x<360&& player.y>320 && player.y<475)
 || (player.x>0 && player.x<760 && player.y>380 && player.y<450)
 || (player.x>690 && player.x<760 && player.y>450 && player.y<600)
 || (player.x>0 && player.x<760 && player.y>530 && player.y<600)
 || (player.x>0 && player.x<10 && player.y>400 && player.y<600)
 || (player.x>850 && player.x<1015 && player.y>250 && player.y<600)
 || (player.x>1090 && player.x<1155 && player.y>260 && player.y<600)
 || (player.x>900 && player.x<1155 && player.y>530 && player.y<600)
 || (player.x>0 && player.x<355 && player.y>10 && player.y<75)
 || (player.x>260 && player.x<355 && player.y>10 && player.y<250)
 || (player.x>0 && player.x<10 && player.y>10 && player.y<250)
 || (player.x>760 && player.x<1155 && player.y>10 && player.y<75)
 || (player.x>760 && player.x<=855 && player.y>10 && player.y<250)
 || (player.x>1130 && player.x<1155 && player.y>10 && player.y<250))
 
 
	
	{
		audio.play();
		player.drawAnimated(player.x,player.y,[9,10,11,9],context);
		
	player.x+=speed;
	}

   else{ 
	if(health>0){hlth();}
	
	if(health==0 || health<0)
	{
		document.getElementById("overlay").style.visibility="visible";
	}
	}

}
}

else 
{
	stopCount();
	context.fillStyle="Yellow";
}


if((patient_picked==10) && (c>0) && (health>0))
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
 else{collidedpatient3=0; } 
}	
if(collision(player, cube4)) {console.log("collision");
	if(patient_picked>=0 && patient_picked<3)
	{patient_picked++;cube4.x= 0;cube4.y= 0;cube4.width=0;cube4.height=0;collidedpatient4=1;}
else{collidedpatient4=0; } 
}	
	if(collision(player, cube5)) {console.log("collision");
	if(patient_picked>=0 && patient_picked<3)
	{patient_picked++;cube5.x= 0;cube5.y= 0;cube5.width=0;cube5.height=0;collidedpatient5=1;}
else{collidedpatient4=0; } 
}	
if(collision(player, cube6)) {console.log("collision");
	if(patient_picked>=0 && patient_picked<3)
	{patient_picked++;cube6.x= 0;cube6.y= 0;cube6.width=0;cube6.height=0;collidedpatient6=1;}
else{collidedpatient6=0; } 
}	
if(collision(player, cube7)) {console.log("collision");
	if(patient_picked>=0 && patient_picked<3)
	{patient_picked++;cube7.x= 0;cube7.y= 0;cube7.width=0;cube7.height=0;collidedpatient7=1;}
else{collidedpatient7=0; } 
}	
if(collision(player, cube8)) {console.log("collision");
	if(patient_picked>=0 && patient_picked<3)
	{patient_picked++;cube8.x= 0;cube8.y= 0;cube8.width=0;cube8.height=0;collidedpatient8=1;}
else{collidedpatient8=0; } 
}	
if(collision(player, cube9)) {console.log("collision");
	if(patient_picked>=0 && patient_picked<3)
	{patient_picked++;cube9.x= 0;cube9.y= 0;cube9.width=0;cube9.height=0;collidedpatient9=1;}
else{collidedpatient9=0; } 
}
if(collision(player, tools)) {console.log("collision");
	 health = health + 10;toolcollide=1;tools.x= 0;tools.y= 0;tools.width=0;tools.height=0;
}
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
	
	health = health - 10; 
	collision_audio.play();
player.y+=20;
console.log("collision");
	}
	if (keys[40])
	{
		health = health - 10; 
		collision_audio.play();
player.y-=20;
console.log("collision");
		
	}
	if (keys [37])
	{
health = health - 10; 
collision_audio.play();
player.x+=20;
console.log("collision");
	}
	if (keys[39])
	{
		health = health - 10; 
		collision_audio.play();
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
	
context.clearRect(0,0,canvas.width,50);
context.fillRect(player.x,player.y,player.width,player.height);


/*context.fillRect(cube.x,cube.y,cube.width,cube.height);
context.fillRect(cube1.x,cube1.y,cube1.width,cube1.height);
context.fillRect(cube2.x,cube2.y,cube2.width,cube2.height);
*/


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
if(!collidedpatient7)
context.drawImage(img7,img7.xpos,img7.ypos,img7.width,img7.height);
if(!collidedpatient8)
context.drawImage(img8,img8.xpos,img8.ypos,img8.width,img8.height);
if(!collidedpatient9)
context.drawImage(img9,img9.xpos,img9.ypos,img9.width,img9.height);
if(!toolcollide)
context.drawImage(toimg,toimg.xpos,toimg.ypos,toimg.width,toimg.height);

context.drawImage(obimg,obimg.xpos,obimg.ypos,obimg.width,obimg.height);
context.drawImage(obimg1,obimg1.xpos,obimg1.ypos,obimg1.width,obimg1.height);
/*context.beginPath();

			context.moveTo(0,250);
			context.lineTo(200,250);
			context.lineTo(200,150);
			context.lineTo(400,150);
			context.lineTo(400,250);
			context.lineTo(480,250);
			context.lineTo(480,50);
			context.lineTo(1200,50);
			context.lineTo(1200,350);
			context.lineTo(1000,350);
			context.lineTo(1000,600);
			context.lineTo(150,600);
			context.lineTo(150,350);
			context.lineTo(400,350);
			context.lineTo(400,300);
			context.lineTo(0,300);
			context.lineTo(0,250);
			context.stroke();
			
			context.strokeRect(600,100, 550, 50);
			context.strokeRect(1000,250,150, 50);
			context.strokeRect(600,200, 200, 250);
			context.strokeRect(200,450, 280, 100);
	
			context.closePath
*/
			context.font="bold 25px verdana";
			context.fillText("Patients Picked: "+patient_picked,10,30);
			context.fillText("Time left: "+c,900,30);
			context.fillText("Health: "+health+"%",480,30);
			context.fillText("Patients saved: "+patient_saved,470,70);
			
			if(player.x>500 && player.x<700 && player.y>235 && player.y<335)
			{
				if(patient_picked>0 && patient_picked<=3)
			{ drop.play();
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


xhttp.open("GET", "dump5.php?score="+patient_saved+"&time="+time+"&health="+health, false);
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
	//alert("gamefinish runned")
  }
};


xhttp.open("GET", "final.php?level="+5, false);
xhttp.send();




}