<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <x-navbar />
</head>
<body>
    <h1>All Information About Devices</h1>

    @foreach ($devices as $device)
    <li> {{ $device}}  </li>
    @endforeach

    <h1>Only Names Of Devices</h1>

    @foreach ($devices as $device)

    <li> {{ $device->name}}  </li>

    @endforeach

    <h1>Only Description Of Devices</h1>

    @foreach ($devices as $device)

    <li> {{ $device->description}}  </li>

    @endforeach
</body>
</html>