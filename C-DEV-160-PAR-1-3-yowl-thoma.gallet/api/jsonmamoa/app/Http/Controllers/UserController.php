<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

use App\Rules\isValidPassword;

class UserController extends Controller
{
    //
    public function signin () {
        return view('auth.signin');
    }

    public function signup () {
        return view('auth.signup');
    }

    public function upload(Request $req){

        $req->validate([
            'username'=>'required',
            'email'=>'required|email:rfc,dns',
            'password'=> [
                'required',
                'confirmed',
                new isValidPassword(),
            ],

        ]);

        $data = new User();
        $data->username = $req->username;
        $data->email = $req->email;
        $data->password = $req->password;
        
        $data->save();

        return redirect()->back();
    }

    public function storeUser () {
        $user = new User();
        

    }
}
