<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\model\Users;

class UsersController extends Controller
{
    public function index(){
        return view("welcome");
    }
 
}
