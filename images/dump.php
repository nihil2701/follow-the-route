<?php
include 'connect.php';

$flag;
$email='pri';

$sql1="SELECT * FROM level1 WHERE tek_emailid='$email'";
$result1=mysql_query($sql1) or die(mysql_error());
if(mysql_num_rows($result1))
{
$flag=1;	
	
}
else{
	
	$flag=0;
}
//$row=mysql_fetch_assoc($result1);
$cl=1;
$multiply=10;
$patients_saved=$_GET['score'];
$score=$patients_saved*$multiply;
$mega=$score;
$time=$_GET['time'];
$health=$_GET['health'];

echo $flag."  ".$patients_saved." ".$time."  ".$health;



  if($flag==1)
 {
	$sql2="UPDATE level1 SET tek_score='$score',tek_health='$health' ,tek_time='$time', tek_patients_saved='$patients_saved'
	       WHERE tek_emailid ='$email' AND  tek_time <'$time' ";
 $result2=mysql_query($sql2) or die(mysql_error());
 if(mysql_affected_rows()==1)
  echo "level 1 updated";
else
echo "level 1 not updated";	

 
 
}
else
{
$sql2 = "INSERT INTO level1 (tek_emailid,tek_patients_saved,tek_time,tek_health,tek_score,tek_current_level,tek_megapoints) VALUES ('$email','$patients_saved','$time','$health','$score','$cl','$score')";
$result2=mysql_query($sql2)or die(mysql_error());
if(mysql_affected_rows()==1)
echo "new user inserted";
else
echo "error: new user not inserted";	

}

?>