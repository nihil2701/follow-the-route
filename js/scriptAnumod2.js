var canvas = document.getElementById("canvas");
canvas.width=1300;
canvas.height=600;
var context = canvas.getContext("2d");
context.fillStyle= "black";


/*context.beginPath();
document.addEventListener("DOMContentLoaded", render, false);
            var xpos;
			var ypos;

      var toolcollide=0;
        window.addEventListener("mousedown", getPosition, false);
		var obimg = new Image();



      

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

//alert(bits[1]);
var health=phpvar;
//alert(health);
var id =null;
var keys= [];
speed=10;
var patient_picked=0;
var patient_saved=0;
var count=0;
var c=25;


 /*var cube = {
	id:"one",
x: 1150,
y: 280,
colorDepth: "green",
width: 20,
height: 20
};

var cube1 = {
id:"two",
x: 600,
y: 500,
colorDepth: "green",
width: 20,
height: 20
};

var cube2 = {
	id:"three",
x: 1000,
y: 70,
colorDepth: "green",
width: 20,
height: 20
};

var cube4 = {
	id:"four",
x: 570,
y: 250,
colorDepth: "green",
width: 20,
height: 20
};
var cube5 = {
	id:"five",
x: 1020 ,
y: 540,
colorDepth: "green",
width: 20,
height: 20
};

*/
var img = new Image();
img.src = "images/pat3.png";
img.xpos = 560;
img.ypos = 80;
img.width =70;
img.height =70;

var img1 = new Image();
img1.src = "images/pat3.png";
img1.xpos = 1239;
img1.ypos = 430;
img1.width =70;
img1.height =70;

var img2 = new Image();
img2.src = "images/pat3.png";
img2.xpos = 890;
img2.ypos = 450;
img2.width =70;
img2.height =70;

var img3 = new Image();
img3.src = "images/pat3.png";
img3.xpos = 1000;
img3.ypos = 270;
img3.width =70;
img3.height =70;

var img4 = new Image();
img4.src = "images/pat3.png";
img4.xpos = 338;
img4.ypos = 550;
img4.width =70;
img4.height =70;

var obimg =new Image();
obimg.src = "images/obstacle1.png";
obimg.xpos = 770;
obimg.ypos = 450;
obimg.width =100;
obimg.height =100;

var obimg1 =new Image();
obimg1.src = "images/obstacle1.png";
obimg1.xpos = 470;
obimg1.ypos = 130;
obimg1.width =100;
obimg1.height =100;

var obimg2 =new Image();
obimg2.src = "images/obstacle1.png";
obimg2.xpos = 1180;
obimg2.ypos = 150;
obimg2.width =100;
obimg2.height =100;

var toimg = new Image();
toimg.src = "images/health.jpg";
toimg.xpos = 1240;
toimg.ypos = 70;
toimg.width =40;
toimg.height =40;




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

 var obstacle2={
 	x:obimg2.xpos,
 	y:obimg2.ypos,
 	width:obimg2.width,
 	height:obimg2.height
 };

var tools={
 	x:toimg.xpos,
 	y:toimg.ypos,
 	width:toimg.width,
 	height:toimg.height
 };
var collidedpatient=0;
var collidedpatient1=0;
var collidedpatient2=0;
var collidedpatient3=0;
var collidedpatient4=0;
var toolcollide=0;




var keyfunction=true;

var player = new Sprite("images/finalsprite.png");
player.x= 60;
player.y= 290;

var audio = new Audio('sounds/ambulance.m4a');
var coll = new Audio('sounds/collision2.wav');
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
	
function timedCount() {
   // context.fillText(c,60,30);
    if(c>0 && patient_saved<5 && health>0){
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
	timer_is_on = 1;
	
	keyfunction= false;
	if(health==0)
	{   
       document.getElementById("p1").innerHTML="<font color='#3cb9d5'; style='font-family:Georgia'>YOU SAVED : </font>"
	   +patient_saved+"<font color='#3cb9d5'; style='font-family:Georgia'> PATIIENTS <br> YOUR SCORE : </font>"
	   +(patient_saved*20)+"<br><br>G A M E &nbsp&nbsp&nbsp O V E R<br>";
		console.log("crashed");
		
		document.getElementById("overlay").style.visibility="visible";
		
		submit_score(patient_saved,c,health);
	
				gamefinish(patient_saved,c,health);
		
		
	keyfunction= false;
	}
	else if(c==0)
	{   document.getElementById("p2").innerHTML="<font color='#3cb9d5'; style='font-family:Georgia'>YOU SAVED : </font>"
+patient_saved+"<font color='#3cb9d5'; style='font-family:Georgia'> PATIIENTS <br> YOUR SCORE : </font>"
+(patient_saved*20)+"<br><br>G A M E &nbsp&nbsp&nbsp O V E R<br>";
		
		document.getElementById("overlay1").style.visibility="visible";
		submit_score(patient_saved,c,health);
		gamefinish(patient_saved,c,health);
	}
	else if(patient_saved==5 && c>0 && health>0)
	{   document.getElementById("p3").innerHTML="<font color='#3cb9d5'; style='font-family:Georgia'>YOU SAVED : </font>"
+patient_saved+"<font color='#3cb9d5'; style='font-family:Georgia'> PATIIENTS <br> YOUR SCORE : </font>"
+(patient_saved*20)+"<br><br>G O O D &nbsp&nbspJ O B"
		   
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
if ((player.x>0 && player.x<1280 && player.y>240 && player.y<320) || 
(player.x>430 && player.x<560 && player.y>40 && player.y<320)||
(player.x>430 && player.x<570 && player.y>300 && player.y<530)||
(player.x>430 && player.x<1280 && player.y>40 && player.y<120)||
(player.x>230 && player.x<1030 && player.y>440 && player.y<530)|| 
(player.x>960 && player.x<1280 && player.y>450 && player.y<530)||
(player.x>230 && player.x<380 && player.y>440 && player.y<580)||
(player.x>870 && player.x<1030 && player.y>520 && player.y<580)|| 
 (player.x>890 && player.x<1000 && player.y>40 && player.y<320)|| 
 (player.x>880 && player.x<1010 && player.y>300 && player.y<580) || 
(player.x>1140 && player.x<1280 && player.y>40 && player.y<320)|| 
(player.x>1150 && player.x<1280 && player.y>300 && player.y<580))
{
player.drawAnimated(player.x,player.y,[6,7,8,6],context);	
player.y-=speed;
audio.play();
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

else if(keys[40]) //down
 {
 if ((player.x>0 && player.x<1280 && player.y>230 && player.y<310) || 
(player.x>430 && player.x<550 && player.y>30 && player.y<310)||
(player.x>430 && player.x<570 && player.y>290 && player.y<520)||
 (player.x>430 && player.x<1280 && player.y>30 && player.y<100)||
 (player.x>230 && player.x<1030 && player.y>430 && player.y<520)|| 
(player.x>960 && player.x<1280 && player.y>440 && player.y<520) ||
 (player.x>230 && player.x<380 && player.y>430 && player.y<570)|| 
 (player.x>870 && player.x<1030 && player.y>510 && player.y<570)|| 
 (player.x>890 && player.x<1000 && player.y>30 && player.y<310)|| 
 (player.x>880 && player.x<1010 && player.y>290 && player.y<570)|| 
(player.x>1140 && player.x<1280 && player.y>30 && player.y<320)|| 
(player.x>1150 && player.x<1280 && player.y>290 && player.y<570))
{
	player.drawAnimated(player.x,player.y,[0,1,2,0],context);
audio.play();
 player.y+=speed;
}
else{ 
	if(health>0)
hlth();
if(health==0  || health<0)
	{
		document.getElementById("overlay").style.visibility="visible";
	}
}

}
	
else if(keys[37]) //left
{
if   ((player.x>15 && player.x<1280 && player.y>230 && player.y<320)||
	(player.x>440 && player.x<560 && player.y>30 && player.y<320)
	||(player.x>440 && player.x<570 && player.y>290 && player.y<530)|| 
(player.x>440 && player.x<1280 && player.y>30 && player.y<120) || 
(player.x>240 && player.x<1030&& player.y>430 && player.y<530)|| 
(player.x>960 && player.x<1280 && player.y>440 && player.y<530) ||
(player.x>240 && player.x<380 && player.y>430 && player.y<580)|| 
 (player.x>880 && player.x<1030 && player.y>510 && player.y<580)|| 
 (player.x>900 && player.x<1000 && player.y>30 && player.y<320)|| 
 (player.x>890 && player.x<1010 && player.y>290 && player.y<580)|| 
(player.x>1150 && player.x<1280 && player.y>30 && player.y<310)|| 
(player.x>1160 && player.x<1280 && player.y>290 && player.y<580))
	{

		player.drawAnimated(player.x,player.y,[3,4,5,3],context);
	audio.play();
	player.x-=speed;}	
else{ 
	if(health>0)
hlth();
if(health==0  || health<0)
	{
		document.getElementById("overlay").style.visibility="visible";
	}
}

	
	}
		
else if(keys[39]) //right
 {
if ((player.x>0 && player.x<1260 && player.y>230 && player.y<320)||
(player.x>430 && player.x<540 && player.y>30 && player.y<320)||
(player.x>430 && player.x<560 && player.y>290 && player.y<530) || 
(player.x>430 && player.x<1260 && player.y>30 && player.y<120)|| 
(player.x>230 && player.x<1020 && player.y>430 && player.y<530)|| 
(player.x>970 && player.x<1260 && player.y>440 && player.y<530) || 
 (player.x>230 && player.x<370 && player.y>430 && player.y<580)|| 
 (player.x>870 && player.x<1020 && player.y>510 && player.y<580)|| 
 (player.x>890 && player.x<990 && player.y>30 && player.y<320)|| 
 (player.x>880 && player.x<1000 && player.y>290 && player.y<580)|| 
(player.x>1140 && player.x<1260 && player.y>30 && player.y<320)|| 
(player.x>1150 && player.x<1260 && player.y>290 && player.y<580))
{
player.drawAnimated(player.x,player.y,[9,10,11,9],context);
audio.play();
player.x+=speed;}	


else{ 
	if(health>0)
hlth();
if(health==0  || health<0)
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

if((patient_picked==5) && (c>0) && (health>0))
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
  
  else{collidedpatient=0; } have.push(cube.one);
}
if(collision(player, cube1)) {console.log("collision");
	 if(patient_picked>=0 && patient_picked<3)
	 {patient_picked++;cube1.x= 0;cube1.y= 0;cube1.width=0;cube1.height=0;collidedpatient1=1;}
 
 else{collidedpatient1=0; } have.push(cube.two);
}
if(collision(player, cube2)) {console.log("collision");
	 if(patient_picked>=0 && patient_picked<3)
	 {patient_picked++;cube2.x= 0;cube2.y= 0;cube2.width=0;cube2.height=0;collidedpatient2=1;}
 else{collidedpatient2=0; } have.push(cube.three);
}	

if(collision(player, cube3)) {console.log("collision");
	 if(patient_picked>=0 && patient_picked<3)
	 {patient_picked++;cube3.x= 0;cube3.y= 0;cube3.width=0;cube3.height=0;collidedpatient3=1;}
 else{collidedpatient3=0; } have.push(cube.four);
}	
if(collision(player, cube4)) {console.log("collision");
	if(patient_picked>=0 && patient_picked<3)
	{patient_picked++;cube4.x= 0;cube4.y= 0;cube4.width=0;cube4.height=0;collidedpatient4=1;}
else{collidedpatient4=0; } have.push(cube.five);
}	
	if(collision(player, tools)) {console.log("collision");
	 health = health +10 ;toolcollide=1;tools.x= 0;tools.y= 0;tools.width=0;tools.height=0;
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

if(collision(player, obstacle2)) {console.log("collision");
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
	health = health - 5; 
	
player.y+=20;
console.log("collision");
	}
	if (keys[40])
	{coll.play();
		health = health - 5; 
		
player.y-=20;
console.log("collision");
		
	}
	if (keys [37])
	{coll.play();
health = health - 5; 

player.x+=20;
console.log("collision");
	}
	if (keys[39])
	{coll.play();
		health = health - 5; 
		
player.x-=20;
console.log("collision");
	}
}


var timer_is_on=0;
var t;
/*context.drawImage(start,40,275, 35,35);
*/

function render()
{ 


if(keys[37] ||keys[38] ||keys[39] ||keys[40] )
{startCount(); 
}
update();
//player.drawAnimated(player.x,player.y,[10,10,10,10],context);
context.clearRect(0,0,canvas.width,50);
//context.drawImage(start,40,290, 45,45);
//context.clearRect(40,290, 35,35);
context.fillRect(player.x,player.y,player.width,player.height);

/*context.fillRect(cube.x,cube.y,cube.width,cube.height);
context.fillRect(cube1.x,cube1.y,cube1.width,cube1.height);
context.fillRect(cube2.x,cube2.y,cube2.width,cube2.height);
context.fillRect(cube4.x,cube4.y,cube4.width,cube4.height);
context.fillRect(cube5.x,cube5.y,cube5.width,cube5.height);
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
if(!toolcollide)
context.drawImage(toimg,toimg.xpos,toimg.ypos,toimg.width,toimg.height);

context.drawImage(obimg,obimg.xpos,obimg.ypos,obimg.width,obimg.height);
context.drawImage(obimg1,obimg1.xpos,obimg1.ypos,obimg1.width,obimg1.height);
context.drawImage(obimg2,obimg2.xpos,obimg2.ypos,obimg2.width,obimg2.height);


/*context.beginPath();

			context.moveTo(1300,50);
			context.lineTo(450,50);
			context.lineTo(450,250);
			context.lineTo(350,250);
			context.lineTo(350,100);
			context.lineTo(150,100);
			context.lineTo(150,250);
			context.lineTo(0,250);
			context.stroke();

			context.strokeRect(1050,150, 100, 100);
			context.strokeRect(1050,350, 100, 100);

			context.strokeRect(600,150, 300, 100);
			context.strokeRect(600,350, 300, 100);

			context.moveTo(0,350);
			context.lineTo(450,350);
			context.lineTo(450,450);
			context.lineTo(250,450);
			context.lineTo(250,750);
			context.lineTo(1050,750);
			context.lineTo(1050,550);
			context.lineTo(1300,550);
			context.lineTo(1300,50);			

			context.stroke();			
			context.strokeRect(400,550, 500, 100);
			context.closePath
			
	*/		
			//context.arc(250,275,50,0,2*Math.PI);
			
			
			context.font="bold 25px verdana";
			context.fillText("Patients picked: "+patient_picked,20,30);
			context.fillText("Time left: "+c,800,30);
			context.fillText("Health: "+health+"%",410,30);
				context.fillText("Patients saved: "+patient_saved,120,80);
			
			if(player.x>150 && player.x<350 && player.y>250 && player.y<450)
			{
				if(patient_picked>0 && patient_picked<=3)
			{ 
		drop.play();
count= patient_picked;
patient_picked=0;
patient_saved=patient_saved + count;
			
				//context.fillStyle="blue";
			}
			}
			
			
			
			
			
		}
		



function finish(){
	
		if(player.x >1040 &&  player.y > 540)
		{ var xh=20;
			for(var i=0;i > have.length();i++)
			     context.drawRect(1250+xh,720,20,20);
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
},1000/30);

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


xhttp.open("GET", "dump2.php?score="+patient_saved+"&time="+time+"&health="+health, false);
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


xhttp.open("GET", "final.php?level="+2, false);
xhttp.send();




}