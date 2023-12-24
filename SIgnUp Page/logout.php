<?php 

session_start();

session_destroy();

header("Locastion: index.php");

exit;