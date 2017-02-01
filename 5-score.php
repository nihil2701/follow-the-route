<!doctype html>
<?php
session_start();
if ((!isset($_SESSION['tek_emailid']) && empty($_SESSION['tek_emailid']))
  && (!isset($_SESSION['tek_emailid']) && empty($_SESSION['tek_emailid']))) {
  header('Location: /login/');
}
?>
<?php $user=$_SESSION['tek_emailid']; ?>

<!--[if lt IE 7 ]> <html class="ie ie6 no-js" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 no-js" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 no-js" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 no-js" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="en"><!--<![endif]-->

<head>

  <meta charset="utf-8">
  
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>Follow The Route</title>
  
  <meta name="title" content="">
  <meta name="description" content="">
  
  <meta name="google-site-verification" content=""> <!-- http://google.com/webmasters -->

  <meta name="author" content="Your Name Here">
  <meta name="Copyright" content="Copyright Your Name Here 2012. All Rights Reserved.">

  <link rel="shortcut icon" href="favicon.ico">

  <link rel="stylesheet" href="css/mosaic.css">
  <link rel="stylesheet" href="css/bootstrap.css">
  <!--Main Stylesheet-->
  <link rel="stylesheet" href="css/style.css">

  <link href='http://fonts.googleapis.com/css?family=Luckiest+Guy|Bitter:700|Open+Sans:400,600,600italic' rel='stylesheet' type='text/css'>
  <!--Load Modernizr, all other scripts are on the footer-->
  <script src="js/modernizr-1.7.min.js"></script>

</head>

<body id="games">

<!--Header Section-->
<header>
  <div class="container_16 clearfix">

      <h1 class="grid_7" id="logo"><a href="#"><img src="css/images/logo2.png" alt="" width="310" height="62"/></a></h1>

      <nav id="main_nav" class="bitter grid_9">
        <ul>
          <li><a href="index.php">Play</a></li>
          <li><a href="2-story.php">Story</a></li>
          <li><a href="3-control.php">Controls</a></li>
          <li><a href="4-rule.php">Rule</a></li>
          <li class="active"><a href="5-score.php">Score</a></li>
        </ul>
      </nav>

  </div><!--//container-->
</header>
<!--//Header Section-->


<div class="slider">
  <div class="slide slide-1">
    <img src="css/images/placeholders/slider_1.jpg" alt=""/>
  </div>
  <div class="slide slide-2">
    <img src="css/images/placeholders/slider_2.jpg" alt=""/>
  </div>
  <div class="slide slide-3">
    <img src="css/images/placeholders/slider_3.jpg" alt=""/>
  </div>
</div>

<div id="sep_bg"></div>

<section id="main">
  <div class="container_16 clearfix">

    <h2 class="luck grid_16">Scores!</h2>

    <div class="clear"></div><div class="big_sep"></div><div class="clear"></div>

      <div id="contact-form" class="grid_8">

        <div id="fields">
          <h2 class="luck grid_16">Leaderboard</h2>
		  <ol>
		   <?php 
		   include 'connect.php';
		    $sql="SELECT * FROM leaderboard ";
			
			
					echo "<br><br><br><table id='leader'><tr><td>RANK</td> <td>&nbsp&nbsp</td> <td>USERNAME</td> <td>&nbsp&nbsp</td> <td>SCORE</td></tr>";
					
					$res=mysql_query($sql) OR die(mysql_error);
					$i=1;
				//echo "<br><br><table><tr><td> RANK </td> <td>&nbsp&nbsp</td> <td> USERNAME </td> <td>&nbsp&nbsp</td> <td> SCORE </td></tr>";
					while ($row = mysql_fetch_assoc($res)){
					echo "<tr><td align='center'> ".$i."</td> <td>&nbsp&nbsp</td> <td align='center'> ".$row['tek_emailid']."</td> <td>&nbsp&nbsp</td> <td align='center'>".$row['tek_total_score']."</td></tr>";
					$i=$i+1;}
				echo"</table>"
			?>
		  </ol>
         
        </div>
        <div id="note" class="osans-s"></div>

      </div><!--//contact-form-->

    <aside class="grid_7 push_1">
      <div class="address">
      <h2 class="luck grid_16">Dashboard</h2>
		  <ol>
		   <?php 
		    $sql="SELECT * FROM main WHERE tek_emailid='$user'";
			
			
					echo "<br><br><br><table border='1'><td>USERNAME</td> <td>&nbsp&nbsp</td> <td>SCORE</td></tr>";
					
					$res=mysql_query($sql) OR die(mysql_error);
					$row=mysql_fetch_assoc($res);
					$score=$row['tek_score'];
					echo "<tr><td align='center'>".$row['tek_emailid']."</td> <td>&nbsp&nbsp</td> <td align='center'>".$score."</td>" ;
					
					echo"</table><br><br>"
			?>
		  </ol>
		  
	  </div>
    </aside>

  </div><!--container_16-->
</section>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script>window.jQuery || document.write("<script src='js/jquery-1.8.2.min.js'>\x3C/script>")</script>


<script src="js/jquery.watermark.min.js"></script>
<script src="js/mosaic.1.0.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.tweet.js"></script>
<!-- Our custom functions -->
<script src="js/functions.js"></script>

<!-- Asynchronous google analytics; this is the official snippet.
   Replace UA-XXXXXX-XX with your site's ID and uncomment to enable.
   
<script>

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXXX-XX']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
-->
  
</body>
</html>