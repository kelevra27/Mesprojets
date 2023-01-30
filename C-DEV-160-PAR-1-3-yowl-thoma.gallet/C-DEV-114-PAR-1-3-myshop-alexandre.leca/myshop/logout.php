<?php
include("sessionstart.php");
if(session_destroy())
  {
    
    header("Location: signin.php");
  }
?>