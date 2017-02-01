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

$flag;
$email=$user;

$sql1="SELECT * FROM level2 WHERE tek_emailid='$email'";
$result1=mysql_query($sql1) or die(mysql_error());
if(mysql_num_rows($result1))
{
$flag=1;	
	
}
else{
	
	$flag=0;
}
//$row=mysql_fetch_assoc($result1);
$cl=2;
$multiply=20;
$patients_saved=$_GET['score'];
$score=$patients_saved*$multiply;
$mega=$score;
$time=$_GET['time'];
$health=$_GET['health'];

echo $flag."  ".$patients_saved." ".$time."  ".$health;



  if($flag==1)
 {
	 
	 $sql="select tek_patients_saved,tek_time  from level2 where tek_emailid ='$email'";
	 $result=mysql_query($sql)or die(mysql_error());
	 if(mysql_num_rows($result)==1)
	 {
		 $rows=mysql_fetch_array($result);
		 
	 }

	 if($patients_saved==$rows[0])
	 {
		if($time>$rows[1])
        {
			$sql2="UPDATE level2 SET tek_score='$score',tek_health='$health' ,tek_time='$time', tek_patients_saved='$patients_saved'
	       WHERE tek_emailid ='$email'";
           $result2=mysql_query($sql2) or die(mysql_error());
           if(mysql_affected_rows()==1)
           echo "level 2 same score with better time updated"."<br>";
           else
           echo "level 2 same score but less time : not updated"."<br>";
			
			
		} 			
		 
		 
		 
	 }
	 else
     {		 
     if($patients_saved > $rows[0])
	 {
		
        
			$sql2="UPDATE level2 SET tek_score='$score',tek_health='$health' ,tek_time='$time', tek_patients_saved='$patients_saved'
	       WHERE tek_emailid ='$email'";
           $result2=mysql_query($sql2) or die(mysql_error());
           if(mysql_affected_rows()==1)
           echo "level new score updated";
           else
           echo "level new score not updated"."<br>";
			
			
					
		 
		 
		 
	 }
	 else
     echo "less patients saved from previous trial"."<br>";		 
	 
	 }
/*	 
	$sql2="UPDATE level1 SET tek_score='$score',tek_health='$health' ,tek_time='$time', tek_patients_saved='$patients_saved'
	       WHERE tek_emailid ='$email' AND  tek_time <'$time' ";
 $result2=mysql_query($sql2) or die(mysql_error());
 if(mysql_affected_rows()==1)
  echo "level 1 updated";
else
echo "level 1 not updated";	

 
 

*/
 }
 
 
else
{
$sql2 = "INSERT INTO level2 (tek_emailid,tek_patients_saved,tek_time,tek_health,tek_score) VALUES ('$email','$patients_saved','$time','$health','$score')";
$result2=mysql_query($sql2)or die(mysql_error());
if(mysql_affected_rows()==1)
echo "new user inserted";
else
echo "error: new user not inserted";	

}

?>