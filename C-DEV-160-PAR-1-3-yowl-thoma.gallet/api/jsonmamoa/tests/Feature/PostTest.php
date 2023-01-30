<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Category;
use App\Models\Post;

class PostTest extends TestCase
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


    //************************************************************* */
    //Copy this function from the CategoryTest.php file
    public function create_n_categories ($catNum, $start=1, $_user="") {
        $catName = array("Home", "Duck", "Aily");

        //Create user
        if ($_user === "") {
            $user = $this->create_user();
            $cuser = User::where("email",$user["email"])->firstOrFail();
        }else{
            $cuser = $_user;
        }

        //Create categories
        for ($i=$start-1; $i<$catNum + $start -1; $i++) {
            $response = $this->post('/api/categories', [
                "name" => $catName[$i],
                "user_id" => $cuser->id,
            ]);
        }
        $respArr = array(
                    "value" => $response,
                    "name" => $catName[$catNum + $start -1 -1]
                    );
        //dd($respArr["name"]);
        return $respArr;
                    
    }
    //************************************************************* */

    public function create_n_posts ($postNum, $start=1) {
        $postArr = array(
            array(
                "name" => "This is not the best post in the world",
                "description" => "This is just a tribute"
            ),
            array(
                "name" => "Ich bin Ausländer",
                "description" => "C'est c'est c'est c'est la vie!"
            ),
            array(
                "name" => "C'est un beau roman",
                "description" => "Une belle histoire"
            ),
            array(
                "name" => "Love me tenders,",
                "description" => "Love frites too"
            )
            );

        //Create user
        $user = $this->create_user();
        $cuser = User::where("email",$user["email"])->firstOrFail();
        //dd($cuser);

        //Create category
        $category = $this->create_n_categories(1, 1, $cuser);
        //dd($category["name"]);
        $ccategory = Category::where("name",$category["name"])->firstOrFail();
        //dump("ccategory: ", $ccategory);

        //Create posts
        for ($i=$start-1; $i<$postNum + $start -1; $i++) {
            $response = $this->post('/api/posts', [
                "name" => $postArr[$i]["name"],
                "description" => $postArr[$i]["description"],
                "user_id" => $cuser->id,
                "category_id" => $ccategory->id,
            ]);
            // dump("postArr[i][name]: ", $postArr[$i]["name"]);
            // dump("postArr[i][description]: ", $postArr[$i]["description"]);
            // dump("cuser->id: ", $cuser->id);
            // dump("ccategory->id: ", $ccategory->id);
        }
        //dd();
        //dump("postArr[i]['name']: ", $postArr[$i]["name"]);
        //dump("postArr[i]['description']: ", $postArr[$i]["description"]);
        return $response;
    }

    public function test_get_posts_route_is_working (){
        $response = $this->get('/api/posts');
        $response->assertOk();
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_post_posts_route_create_a_post ()
    {
        //$this->withoutExceptionHandling();//debug

        $response = $this->create_n_posts(1);
        $response->assertOk();
        $this->assertCount(1, Post::all());

    }

    public function test_get_all_posts (){

        //$this->withoutExceptionHandling();//debug

        //Create posts
        $this->create_n_posts(3,2);

        //Fetch all posts an check there's two
        $response = $this->json('get', '/api/posts');
        //dd(json_decode($response->getContent()));
        $response->assertJsonCount(3, 'posts');
        //dd($response);

    }

}
