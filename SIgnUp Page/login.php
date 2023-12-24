<?php

$is_invalid =false;

if ( $_SERVER["REQUEST_METHOD"]==="POST") {

  $mysqli = require __DIR__ . "/database.php";

  $sql =sprintf("SELECT * FROM user1_db
             WHERE email = '%s'",
             $mysqli->real_escape_string($_POST["email"]));

  $result = $mysqli->query($sql);

  $user1_db = $result->fetch_assoc();

  if ($user1_db) {
    if (password_verify($_POST["password"],$user1_db["password_hash"]))  {
      session_start();

      session_regenerate_id();

      $_SESSION["user1_db_id"] = $user1_db["id"];

      header("Location: index.php");
      exit;
    } 
  }
  $is_invalid = true;
}
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Login</title>
    <meta charset="UTF-8">
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"> -->
  </head>
  <body>

    <h1>Login</h1>

    <?php if ($is_invalid): ?>
        <em>Invalid login</em>
    <?php endif; ?>

    <form method="post">
      <label for="email">email</label>
      <input type="email" name="email" id="email"
        value="<?= htmlspecialchars($_POST["email"] ?? "") ?>">

      <label for="password">Password</label>
      <input type="password" name="password" id="password">
      
      <button>Log in</button>
    </form>


  </body>
</html>

