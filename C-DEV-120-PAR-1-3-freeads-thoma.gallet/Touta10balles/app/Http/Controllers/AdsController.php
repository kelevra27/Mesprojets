<?php

namespace App\Http\Controllers;
use App\Models\Ads;
use Illuminate\Http\Request;
use App\Http\Requests\AdsStore;

class AdsController extends Controller
{
    public function create(){
       
        return view("newAds");
    }

   
    public function store(AdsStore $request){
        $ads = new Ads;
        $ads->title = $request->title;
        $ads->category = $request->category;
        $ads->id_user =  auth()->user()->id;
        $ads->description = $request->description;
        $ads->photo = $request->photo;
        $ads->price = $request->price;
        $ads->location = $request->location;
 
        $ads->save();
        return response("CA MARCHE");
        
    }
}
