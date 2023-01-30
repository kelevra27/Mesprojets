<div>
    <!-- 
  <options=bold>“ Let all your things have their places; let each part of your business have its time. ”</>
  <fg=gray>— Benjamin Franklin</>
 -->
 <a href="/"> Home</a> |
 <a href="/devices"> Devices</a> |
 <a href="/devices/create"> DeviceCreate</a> |
 <a href="/signup"> Signup</a> |
 <a href="/signin"> Signin</a><br>
 <h2><?php echo(storage_path()); ?></h2>
 <h2><?php 
 $path = storage_path();
 for ($i=0;$i<3;$i++) {
    $slashPos = strrpos($path,"/");
    $path = substr($path,0,$slashPos);
 }
 $path .= "/yowl/src/assets/";
 
 echo($path); ?></h2>
 <h3><?php echo(env('APP_URL')); ?></h3>
</div>  