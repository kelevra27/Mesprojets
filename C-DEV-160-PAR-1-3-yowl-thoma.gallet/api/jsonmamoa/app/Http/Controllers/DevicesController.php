<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Device;

class DevicesController extends Controller
{
    //
    public function index(){

        $devices = Device::all();

        return view('devices.index',compact('devices'));
    }

    public function create(){
        return view('devices.create');
    }

    public function storeDevice(Request $request){

        $imgPath = Storage::disk("vue")->put('postsImg', $request->postImg);
        dd($imgPath);
        die();
        $device = new Device();

        $device->name = request('name');
        $device->description = request('description');
        $device->photo = request('file');

        $device->save();

        return redirect('/devices');

    }
}
