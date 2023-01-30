<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Rules\isValidPassword;


class AuthController extends Controller
{
    /**
     * Create User
     * @param Request $request
     * @return User
     */
    public function createUser(Request $request){

        try{
        //Validated
        $validateUser = Validator::make($request->all(),
        [
            // "username" => "required|unique:users,username",
            // "email" => "required|email|unique:users,email",
            // "password" => "required"
            'username' => 'required|unique:users,username',
            'email' => 'required|confirmed|email:rfc,dns|unique:users,email',
            'password' => ['required','confirmed', new isValidPassword]
        ]);
       
        if ($validateUser->fails()){
            return response()->json([
                'status' => false,
                'message' => 'validation error',
                'errors' => $validateUser->errors()
            ], 401);
        }
            $user = new User;

            $user->username = $request->username;
            if($request->email == $request->email_confirmation){
                $user->email = $request->email;
            }//else{
            //    $user->email = 'Yo, Emails do not match';
            //}
            if($request->password == $request->password_confirmation){
                $user->password = Hash::make($request->password);
            }//else{
            //    $user->email = 'Yo, Password do not match';
            //}
            //$user->admin= 1;
            $user->save();
        
        return response()->json([
            'status' => true,
            'message' => 'User Created Successfully'
        ], 200);

        }catch(\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
        
    }

    /**
    * Login The User
    * @param Request $request
    *@return User
    */
    public function loginUser(Request $request)
    {
        try {
            $validateUser = Validator::make($request->all(),
            [
                "email" => "required",
                "password" => "required"
            ]);
        
            if ($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
        }
        if(!Auth::attempt($request->only(['email', 'password']))){
                return response()->json([
                    'status' => false,
                    'message' => 'Email & Password does not match with our record'
                ], 401);
            }

        $user = User::where('email', $request->email)->first();

        return response()->json([
            'status' => true,
            'message' => 'User Logged is Successfully'
        ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
