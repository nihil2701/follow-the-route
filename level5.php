<!DOCTYPE html>
<?php
session_start();
if ((!isset($_SESSION['tek_emailid']) && empty($_SESSION['tek_emailid']))
  && (!isset($_SESSION['tek_emailid']) && empty($_SESSION['tek_emailid']))) {
  header('Location: /login/');
}
?>
<?php $user=$_SESSION['tek_emailid']; ?>
<html lang="en">
<head>
<title>Follow The Route</title>
</head>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

<body style="background:#141213">
<style>
#canvas
{
border: 2px solid white;
margin:19.5px;
}

#popup
        {  
			
            width:500px;
            height:250px;
            border:2px solid #30c38c;
			
            top:30%;
            position:relative;
            margin: 0 auto;
            background-image: url(images/i_background.jpg);
            background-size : 100% 100%;
            
            -moz-border-radius: 10px;
                 border-radius: 10px;
                 opacity:1;
        }

#overlay
        {
            position:absolute;
            top:0px;
            visibility:hidden;
            
            background:rgba(0,0,0,0.6);
			z-index:5;
            left:0px;
            height:100%;
            width:100%;
            text-align:center;
		}

#overlay:target
        {
            visibility:visible;
            -webkit-animation: fade 800ms ease;
		}
#overlay:target > #popup
        {
            
             -webkit-animation: moveFromBottom 400ms ease;
        }
 @-webkit-keyframes fade
        {
            from 
			{
                opacity: 0;
            }
            to 
			{
				opacity: 1;        
            }
        }
        
 @-webkit-keyframes moveFromBottom
        {
            from {
               
               
                -webkit-transform: scale(.5);
                opacity: 0;
            }
            to {
                
                -webkit-transform: scale(1);
                opacity: 1;        
            }
        }


.close_button_1
            {
                position:absolute;
                cursor:pointer;
                border:none;
                margin-top:10px;
				
			}

.close_button_2
            {
                position:absolute;
                cursor:pointer;
                border:none;
                margin-top:10px;
				
            }

#popup1
        {  

            width:500px;
            height:300px;
            border:2px solid #30c38c;
			
			top:30%;
            position:relative;
            margin: 0 auto;
            background-image: url(images/i_background.jpg);
            background-size : 100% 100%;
            -moz-border-radius: 10px;
                 border-radius: 10px;
                 opacity:1;
                
        }

#overlay1
        {
            position:absolute;
            top:0px;
            visibility:hidden;
            
            background:rgba(0,0,0,0.6);
            z-index:5;
            left:0px;
            height:100%;
            width:100%;
            text-align:center;
        }

#overlay1:target
        {
            visibility:visible;
            -webkit-animation: fade 400ms ease;
}
#overlay1:target > #popup
        {
            
             -webkit-animation: moveFromBottom 400ms ease;
        }
 @-webkit-keyframes fade
        {
            from {
               
               
                
                opacity: 0;
            }
            to {
                
                
                opacity: 1;        
            }
        }
        
 @-webkit-keyframes moveFromBottom
        {
            from {
               
               
                -webkit-transform: scale(.5);
                opacity: 0;
            }
            to {
                
                -webkit-transform: scale(1);
                opacity: 1;        
            }
        }


.close_button_1
            {
                position:absolute;
                right:400px;
                cursor:pointer;
                border:none;
                margin-top:30px;
				width:80px;

            }

.close_button_2
            {
                position:absolute;
                right:30px;
                cursor:pointer;
                border:none;
                margin-top:30px;
				width:80px;

            }

#popup2
        {  

            width:500px;
            height:300px;
            border:2px solid #30c38c;
			
			top:30%;
            position:relative;
            margin: 0 auto;
            background-image: url(images/i_background.jpg);
            background-size : 100% 100%;
            
            -moz-border-radius: 10px;
                 border-radius: 10px;
                 opacity:1;
                
        }

#overlay2
        {
            position:absolute;
            top:0px;
            visibility:hidden;
            
            background:rgba(0,0,0,0.6);
            z-index:5;
            left:0px;
            height:100%;
            width:100%;
            text-align:center;
        }

#overlay2:target
        {
            visibility:visible;
            -webkit-animation: fade 400ms ease;
}
#overlay2:target > #popup
        {
            
             -webkit-animation: moveFromBottom 400ms ease;
        }
 @-webkit-keyframes fade
        {
            from {
               
               
                
                opacity: 0;
            }
            to {
                
                
                opacity: 1;        
            }
        }
        
 @-webkit-keyframes moveFromBottom
        {
            from {
               
               
                -webkit-transform: scale(.5);
                opacity: 0;
            }
            to {
                
                -webkit-transform: scale(1);
                opacity: 1;        
            }
        }


.close_button_1
            {
                position:absolute;
                right:400px;
                cursor:pointer;
                border:none;
                margin-top:30px;
				width:80px;
            }

.close_button_2
            {
                position:absolute;
                right:30px;
                cursor:pointer;
                border:none;
                margin-top:30px;
				width:80px; 
            }
</style>

<style type="text/css" media="screen">
    canvas, img { display:block; margin:1em auto; border:1px solid black; }
    canvas { background:url(images/level5.png) }
  </style>

<div> 	
<canvas id="canvas" width ="1300" height="600">This text is displayed if your browser does not support HTML5 canvas.
</canvas>
</div>

<div id="overlay">
<div id="popup">
            

<l><font style="font-size: 24px; font-family:'EamesBookItalic','Georgia',serif; color: #3cb9d5"><br>AMBULANCE &nbsp CRASHED !!</font></l>
<p align="center" id="p1" style="font-size: 20px; font-family:Algerian; color: red">G A M E &nbsp&nbsp&nbsp O V E R</p>
<a href="index.php"><img class="close_button_1" src="images/giveup.png" style="right:310px; top:165px;"/></a>
<a href="level1.php"><img class="close_button_2" src="images/retry.png" style="right:100px; top:165px;"/></a>

</div>
</div>


<div id="overlay1">
<div id="popup1">

<l><font style="font-size: 24px; font-family:'EamesBookItalic','Georgia',serif; color: #3cb9d5"><br>OOPS ! YOU&nbsp RAN&nbsp OUT&nbsp OF&nbsp TIME !</font></l>
<p align="center" id="p2" style="font-size: 20px; font-family:Algerian; color: red">G A M E &nbsp&nbsp&nbsp O V E R</p>
<a href="index.php"><img class="close_button_1" src="images/giveup.png" style="right:310px"/></a>
<a href="level1.php"><img class="close_button_2" src="images/retry.png" style="right:100px"/></a>

</div>
</div>


<div id="overlay2">
<div id="popup2">

<l><font style="font-size: 24px; font-family:'EamesBookItalic','Georgia',serif; color: #3cb9d5"><br>LEVEL &nbspCOMPLETED !</font></l>
<p align="center" id="p3" style="font-size: 23px; font-family:'EamesBookItalic','Georgia',serif; color: #3af9b5">C O N G R A T U L A T I O N S !!</p>
<a href="index.php"><img class="close_button_1" src="images/Back.gif" style="right:210px"/></a>

</div>
</div>



</body>

<meta charset="UTF-8"/>
<title>Follow The Route</title>
<?php include'connect.php';
$sql="SELECT * FROM level4 WHERE tek_emailid='$user'";
$res=mysql_query($sql) or die(mysql_error());
$row=mysql_fetch_assoc($res);

$health=$row['tek_health'];

?>
<script >
var phpvar=<?php echo '"'.$health.'"'?>;
//document.cookie="health="+phpvar;
//var health=document.cookie;
</script>
<script src="js/player.js"></script>
<script src="js/scriptAnumod5.js"></script>

</html>