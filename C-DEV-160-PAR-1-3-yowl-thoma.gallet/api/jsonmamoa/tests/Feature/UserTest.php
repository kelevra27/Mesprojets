<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class UserTest extends TestCase
{
    
    use RefreshDatabase;

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

    public function update_user_email ($_user, $_newEmail) {
        //if ($_user->email === $_newEmail){throw new Exception ("New email can't be identical to old password!");} // /!\ check old vs new password should be realized in controller ! With hash function
        //dump("_user->email: ", $_user->email);
        //dump("_newemail: ", $_newEmail);
        
        $endPoint = '/api/users/' . $_user->id;
        //dump("endPoint: ", $endPoint);

        $response = $this->put($endPoint, [
            'email' => $_newEmail,
            'email_confirmation' => $_newEmail
        ]);
        return array(
                    "value" => $response,
                    "email_old" => $_user->email,
                    "email_new" => $_newEmail
                    );
    }

    public function delete_user ($_user) {
        $endPoint = '/api/users/' . $_user->id;
        //dump("endPoint: ", $endPoint);

        $response = $this->delete($endPoint);
        return array(
                    "value" => $response
                    );
    }

    public function get_user ($_user) {
        $endPoint = '/api/users/' . $_user->id;
        //dump("endPoint: ", $endPoint);

        //$response = $this->get($endPoint);

        $response = $this->json('get', $endPoint);
        //dd(json_decode($response->getContent()));
        $data = json_decode($response->getContent(),true);

        return array(
                    "response" => $response,
                    "data" => $data
                    );
    }

    public function get_all_users () {
        $endPoint = '/api/users/';
        //dump("endPoint: ", $endPoint);

        //$response = $this->get($endPoint);

        $response = $this->json('get', $endPoint);
        //dd(json_decode($response->getContent()));
        $data = json_decode($response->getContent());

        return array(
                    "response" => $response,
                    "data" => $data
                    );
    }

    public function test_a_user_can_be_updated () {
        //$this->withoutExceptionHandling();//debug
        //dump("######################################################################Hey, it's me, test_a_user_can_be_updated !: ");
        //dump("All users before: ", User::all());
        $user = $this->create_user();
        //dump("All users after: ", User::all());
        //dd($user);
        $cuser = User::where("email",$user["email"])->firstOrFail();

        $newEmail = "papi@chulo.new"; //Make sure the email is valid, including domain extension .fr .com etc
        $userUpdt = $this->update_user_email ($cuser, $newEmail);
        $userUpdt["value"]->assertOk();
        //dump("userUpdt[value]: ", $userUpdt["value"]);
        $cuserUpdt = User::where("id",$cuser->id)->firstOrFail(); 

        //dump("cuser->email: ", $cuser->email);
        //dd("cuserUpdt->email: ", $cuserUpdt->email);
        $this->assertFalse($cuser->email === $cuserUpdt->email);
        // $response["value"] ->assertOk();
        // $this->assertCount(1,User::all());
    }

    public function test_a_user_can_be_deleted () {
        //$this->withoutExceptionHandling();//debug
        //dump("######################################################################Hey, it's me, test_a_user_can_be_deleted !: ");
        //dump("All users before: ", User::all());
        $user = $this->create_user();
        //dump("All users after: ", User::all());
        $cuser = User::where("email",$user["email"])->firstOrFail();
        $this->assertCount(1, User::all());

        $response = $this->delete_user ($cuser);
        $response["value"]->assertOk();
        $this->assertCount(0, User::all());
    }
    
    public function test_a_user_can_be_displayed () {
        //$this->withoutExceptionHandling();//debug
        //dump("######################################################################Hey, it's me, test_a_user_can_be_displayed !: ");
        
        //dump("All users before user1: ", User::all());
        $user = $this->create_user();
        //dump("All users after user1: ", User::all());
        $cuser = User::where("email",$user["email"])->firstOrFail();


        //dump("All users before user2: ", User::all());
        $user2 = $this->create_user("tomato.las@ketchup.com", "qQ0!");
        //dump("All users after user2: ", User::all());
        //dd($user2);
        $cuser2 = User::where("email",$user2["email"])->firstOrFail();

        //dump("All users before user3: ", User::all());
        $user3 = $this->create_user("dora@explore.com", "dD0!", "Sac.a.dos");
        //dump("All users after user3: ", User::all());
        //dd($user3);
        $cuser3 = User::where("email",$user3["email"])->firstOrFail();

        $users = $this->get_user($cuser3);

        $users["response"]->assertOk();
        //$jsObject = json_encode($users["response"]["user"]);
        //$jsObject = "{'user':" . $jsObject . "}";
        //dd($users["response"]);
        //dd($users["response"]["user"]);
        //$users = $this->get_all_users();
        //dd($users["response"]["users"]);
        //$users["response"]["user"]->assertJsonCount(1, 'user');
        //json_decode(json_encode($users["response"]["user"]))->assertJsonCount(1, 'user');
        //$this->assertCount(1,$users["response"]["user"]);


        $keysArr = array("id","username","email","admin");
        foreach ($keysArr as $key){
            $this->assertArrayHasKey($key, $users["response"]["user"]);
        }
        
        //$this->assertArrayHasKey("username", $users["response"]["user"]);
    }

    public function test_all_users_can_be_displayed () {
        //$this->withoutExceptionHandling();//debug
        //dump("######################################################################Hey, it's me, test_all_users_can_be_displayed !: ");
        //dump("All users before user1: ", User::all());
        $user = $this->create_user();
        //dump("All users after user1: ", User::all());
        $cuser = User::where("email",$user["email"])->firstOrFail();


        //dump("All users before user2: ", User::all());
        $user2 = $this->create_user("tomato.las@ketchup.com", "qQ0!");
        //dump("All users after user2: ", User::all());
        //dd($user2);
        $cuser2 = User::where("email",$user2["email"])->firstOrFail();

        //dump("All users before user3: ", User::all());
        $user3 = $this->create_user("dora@explore.com", "dD0!", "Sac.a.dos");
        //dump("All users after user3: ", User::all());
        //dd($user3);
        $cuser3 = User::where("email",$user3["email"])->firstOrFail();

        $users = $this->get_all_users();

        $users["response"]->assertOk();
        //dump($users["response"]);
        $users["response"]->assertJsonCount(3, 'users');
    }
}
