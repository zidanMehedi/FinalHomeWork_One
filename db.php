<?php
	function getCon()
	{
		$con = mysqli_connect('localhost','root','','webproject');
		return $con;
	}
?>