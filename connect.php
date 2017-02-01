<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'tk16_follow-the-route');
define('DB_USER','root');
define('DB_PASSWORD','admin');

$con=mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) ;
if(!$con) die("Failed to connect to MySQL: " . mysql_error());
$db=mysql_select_db(DB_NAME,$con) or die("Failed to connect to MySQL: " . mysql_error());


?> 
