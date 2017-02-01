<?php
session_start();
if ((!isset($_SESSION['tek_emailid']) && empty($_SESSION['tek_emailid']))
  && (!isset($_SESSION['tek_emailid']) && empty($_SESSION['tek_emailid']))) {
  header('Location: /login/');
}
?>
<?php $user=$_SESSION['tek_emailid']; ?>
<?php 
include 'connect.php';
//include 'commoncode.php';
$total_time=0;
$total_score=0;
$total_patients=0;
$current_level=0;
$megapoints=0;
$level=$_GET['level'];
switch($level)
{
case 5:
$sql1="SELECT * FROM level5 WHERE tek_emailid='$user'";
$result1=mysql_query($sql1) or die(mysql_error());
$row1=mysql_fetch_assoc($result1);
$total_score+=$row1['tek_score'];
$total_time+=$row1['tek_time'];
$total_patients+=$row1['tek_patients_saved'];
//$current_level+=$row1['tek_current_level'];
//$megapoints+=$row1['tek_megapoints'];

case 4:
$sql2="SELECT * FROM level4 WHERE tek_emailid='$user'";
$result2=mysql_query($sql2) or die(mysql_error());
$row2=mysql_fetch_assoc($result2);
$total_score+=$row2['tek_score'];
$total_time+=$row2['tek_time'];
$total_patients+=$row2['tek_patients_saved'];
//$current_level+=$row2['tek_current_level'];
//$megapoints+=$row2['tek_megapoints'];

case 3:
$sql3="SELECT * FROM level3 WHERE tek_emailid='$user'";
$result3=mysql_query($sql3) or die(mysql_error());
$row3=mysql_fetch_assoc($result3);
$total_score+=$row3['tek_score'];
$total_time+=$row3['tek_time'];
$total_patients+=$row3['tek_patients_saved'];
//$current_level+=$row3['tek_current_level'];
//$megapoints+=$row3['tek_megapoints'];


case 2: 
$sql4="SELECT * FROM level2 WHERE tek_emailid='$user'";
$result4=mysql_query($sql4) or die(mysql_error());
$row4=mysql_fetch_assoc($result4);
$total_score+=$row4['tek_score'];
$total_time+=$row4['tek_time'];
$total_patients+=$row4['tek_patients_saved'];
//$current_level+=$row4['tek_current_level'];
//$megapoints+=$row4['tek_megapoints'];

case 1:
$sql5="SELECT * FROM level1 WHERE tek_emailid='$user'";
$result5=mysql_query($sql5) or die(mysql_error());
$row5=mysql_fetch_assoc($result5);
$total_score+=$row5['tek_score'];
$total_time+=$row5['tek_time'];
$total_patients+=$row5['tek_patients_saved'];
//$current_level+=$row5['tek_current_level'];
//$megapoints+=$row5['tek_megapoints'];

break;
}
$sql6="SELECT * FROM main WHERE tek_emailid='$user'";
$result6=mysql_query($sql6) or die(mysql_error());

if(mysql_num_rows($result6)!=1)
{   //alert("inserting into main");
	$sql8="INSERT INTO main VALUES('$user','$total_patients','$total_time','$total_score','$level')";
	$result8=mysql_query($sql8) or die(mysql_error());
	if(mysql_affected_rows()==1)
		echo "new data inserted in main";
	
	$sql11="INSERT INTO leaderboard VALUES('$user','$total_score','$total_time')";
	$result11=mysql_query($sql11) or die(mysql_error());
	if(mysql_affected_rows()==1)
		echo "inserted";
	
}
else
{     echo $user;
	$sql7="UPDATE leaderboard SET tek_total_score='$total_score',tek_total_time='$total_time'
				WHERE tek_emailid='$user' AND $total_score > tek_total_score ";
	mysql_query($sql7)or die(mysql_error());
	if(mysql_affected_rows()==1)
	echo "leaderboard updated";	
    else
	echo "leader board not updated";	
$sql12="UPDATE main SET tek_score='$total_score',tek_time='$total_time',tek_patients_saved='$total_patients',tek_current_level='$level' 
				WHERE tek_emailid='$user' AND $total_score > tek_score " ;
	mysql_query($sql12)or die(mysql_error());
	if(mysql_affected_rows()==1)
	echo "main updated";
    else
	echo "main not updated";	
}


/*switch($level)
{
case 1:if($row5['played'] == 0 && $row6['tek_current_level']< '$level')SendScore("follow_the_route",$megapoints,$user);
							$sqls="UPDATE level1 SET played = 1 WHERE tek_emailid= '$user'";
							$results=mysql_query($sqls) or die(mysql_error());
							break;
case 2:if($row4['played'] == 0 && $row6['tek_current_level']< '$level')SendScore("follow_the_route",$megapoints,$user);
							$sqls="UPDATE level2 SET played = 1 WHERE tek_emailid= '$user'";
							$results=mysql_query($sqls) or die(mysql_error());break;
case 3:if($row3['played'] == 0 && $row6['tek_current_level']< '$level')SendScore("follow_the_route",$megapoints,$user);
							$sqls="UPDATE level3 SET played = 1 WHERE tek_emailid= '$user'";
							$results=mysql_query($sqls) or die(mysql_error());break;
case 4:if($row2['played'] == 0 && $row6['tek_current_level']< '$level')SendScore("follow_the_route",$megapoints,$user);
							$sqls="UPDATE level4 SET played = 1 WHERE tek_emailid= '$user'";
							$results=mysql_query($sqls) or die(mysql_error());break;
case 5:if($row1['played'] == 0 && $row6['tek_current_level']< '$level')SendScore("follow_the_route",$megapoints,$user);
							$sqls="UPDATE level5 SET played = 1 WHERE tek_emailid= '$user'";
							$results=mysql_query($sqls) or die(mysql_error());break;
}
?>
*/