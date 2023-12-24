<?php

session_start();

if(isset($_SESSION["user1_db_id"])) {
  $mysqli = require __DIR__ . "/database.php";

  $sql = "SELECT * FROM user1_db
          WHERE id = {$_SESSION["user1_db_id"]}";

          $result = $mysqli->query($sql);

          $user1 = $result->fetch_assoc();
}

?>
<!DOCTYPE html>
<html>
  <head>
    <title>Home</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="">
  </head>
  <body>

    <h1>Home</h1>

    <?php if (isset($user1_db)): ?>

      <p>Login Successful <?= htmlspecialchars($user1_db["name"]) ?></p>

      <p><a href="loggout.php">Log out</a></p>
    <?php else: ?>
      
      <p><a href="login.php">Log in</a> or <a href="signup.php">sign up</a></p>

    <?php endif; ?>
    

      <button onclick="goBackToHomePage()"><a href="http://127.0.0.1:5500/afterscanpage.html">Go Bak to Homepage</a></button>
    <script>
      function goBackToHomePage(){
        window.loaction.href = '';
      }
    </script>
  </body>
</html>

