<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class AuthTest extends TestCase
{
    //if (Tests\TestCase::$blRefreshDB){
        use RefreshDatabase;
    //}
    
    //public $cemail = 'papi@chulo.fr';
    //public $cpassword = 'aA0!'; //Make sure that this password respects the current password validation criterias. ATM: Min 4 characters with at least one of each: lower/uppercase, number, special

    /**
     * A basic feature test example.
     *
     * @return void
     */

    public function create_user ($email = "", $password = "", $username = "") {
        //$this->withoutExceptionHandling();//debug

        //dump("Before email: ", $email);
        //dump("Before password: ", $password);
        //dump("Before username: ", $username);

        $email = $email === "" ? 'papi@chulo.fr' : $email;
        $password = $password === "" ? 'aA0!' : $password; //Make sure that this password respects the current password validation criterias. ATM: Min 4 characters with at least one of each: lower/uppercase, number, special
        $anteAt = substr(
                        $email,
                        0,
                        strpos($email, "@")
                        );
        //dump("anteAt: ", $anteAt);
        //dd("anteAt: ", $anteAt);
        $username = $username === "" ? $anteAt : $username;

        //dump("After email: ", $email);
        //dump("After password: ", $password);
        //dump("After username: ", $username);

        $response = $this->post('/api/auth/register', [
            'username' => $username,
            'email' => $email,
            'email_confirmation' => $email,
            'password' => $password,
            'password_confirmation' => $password
        ]);
        return array(
                    "value" => $response,
                    "email" => $email,
                    "password" => $password,
                    "username" => $username
                    );
    }

    public function test_a_new_user_can_be_stored_in_db () {
        //$this->withoutExceptionHandling();//debug
        $response = $this->create_user();
        $response["value"] ->assertOk();
        $this->assertCount(1,User::all());
    }

    public function test_a_user_can_login () {

        //$this->withoutExceptionHandling();//debug

        //Create the user
        $user = $this->create_user();

        //Login the user
        $response = $this->post('/api/auth/login', [
            'email' => $user["email"],
            'password' => $user["password"]
        ]);
        $response->assertOk();
    }
}
