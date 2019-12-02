<?php
	require_once('db.php');
	if(isset($_POST['get']))
	{
		echo "Error";
	}
	else
	{
		$name = $_POST['getName'];
		$email = $_POST['getEmail'];
		$uname = $_POST['getUname'];
		$pass = $_POST['getPass'];
		$day = $_POST['getDay'];
		$month = $_POST['getMonth'];
		$year = $_POST['getYear'];
		$gender = $_POST['getGender'];
		$degree = $_POST['getDegree'];
		$bg = $_POST['getBG'];
		$date = $day."-".$month."-".$year;
		$con=getCon();
		$sql="insert into test values('{$uname}','{$name}','{$email}','{$bg}','{$pass}','{$gender}','{$degree}','{$date}');";
		if(mysqli_query($con, $sql))
		{
			echo "Successful";
		}
		else
			echo "Error";
	}
?>