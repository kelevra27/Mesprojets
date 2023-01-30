<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Category;
use App\Models\User;

//@include('AuthTest');

class CategoryTest extends TestCase
{
    
    use RefreshDatabase;

    //************************************************************* */
    //Copy this function from the AuthTest.php file
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
    //************************************************************* */

    public function create_n_categories ($catNum, $start=1) {
        $catName = array("Home", "Duck", "Aily");

        //Create user
        $user = $this->create_user();
        $cuser = User::where("email",$user["email"])->firstOrFail();

        //Create categories
        for ($i=$start-1; $i<$catNum + $start -1; $i++) {
            $response = $this->post('/api/categories', [
                'name' => $catName[$i],
                'user_id' => $cuser->id,
            ]);
        }
        return $response;
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_create_a_category () {
        //$this->withoutExceptionHandling();//debug

        //Check there's at least one user
        //$this->assertGreaterThanOrEqual(1,User::all()->count());
        //Or create it
        // $user = $this->create_user();
        // $cuser = User::where("email",$user["email"])->firstOrFail();

        //Create a category
        // $response = $this->post('/api/categories', [
        //     'name' => 'Home1',
        //     'user_id' => $cuser->id,
        // ]);
        $response = $this->create_n_categories(1);
        $response->assertOk();
        $this->assertCount(1, Category::all());//where("name", "Home")->firstOrFail());
    }



    public function test_get_all_categories ()
    {
        //$this->withoutExceptionHandling();//debug

        //Check route is working
        $response = $this->get('/api/categories');
        $response->assertOk();

        //Create a category
            //Define category owner / creator
            // $user = $this->create_user();
            // $cuser = User::where("email",$user["email"])->firstOrFail();

            // //Create a first category
            // $response = $this->post('/api/categories', [
            //     'name' => 'Home',
            //     'user_id' => $cuser->id,
            // ]);
            // //Create a second category
            // $response = $this->post('/api/categories', [
            //     'name' => 'Ducks',
            //     'user_id' => $cuser->id,
            // ]);

            //Create categories
            $this->create_n_categories(2,2);

        //Fetch all categories an check there's two
        //$this->assertCount(2, Category::all());//where("name", "Home")->firstOrFail());
        $response = $this->json('get', '/api/categories');
        //dd(json_decode($response->getContent()));
        $response->assertJsonCount(2, 'categories');
        

        //dd($response);

        //Check there's at least two categories
        //$this->assertGreaterThanOrEqual(2,Category::all()->count());
    }

    public function get_a_category_test () {
        //Check route is working
        $response = $this->get('/api/categories');
        $response->assertOk();

        //Create categories
            $category = $this->create_n_categories(2,2);
            //dd($category["category"]);
            //dd($category["category"]["id"]);

        //Fetch a category an check there's one
        $endPoint = '/api/categories/' . $category["category"]["id"];
        //dd($endPoint);
        $response = $this->json('get', $endPoint);
        $data = json_decode($response->getContent());
        
        dump($data->category);


        // if (array_key_exists("category", $data->category)){
        //     //a single category in data
        //     //dd($data);
        //     $arrKey = array("id","user_id","name");
        //     foreach ($arrKey as $key){
        //         $this->assertArrayHasKey($key, $users["response"]["user"]);
        //     }
        // }elseif (array_key_exists("categories", $data)){
        //     //Collection of categories in data
        // }else{
        //     //No category object in data
        // }
            $data->category->assertJsonHasKey();

        //dd(json_decode($response->getContent()));
        $response->assertJsonCount(2, 'categories');
    }

    // public function test_cannot_create_two_categories_with_same_name (){

    //     $response = $this->create_n_categories(1);
    //     dump("Create user1: ", $response);
    //     $this->assertStatus(23000, $this->create_n_categories(1));
    //     //$this->create_n_categories(1)->assertStatus(23000);
    //     //dd("Create user1 again: ", $response);
    //     //$response->assertOk();

    // }
}
