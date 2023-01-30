<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
//use App\Http\Controllers\DevicesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Route::get('/photoImport', function () {
    return view('photoImport');
});

Route::get('/devices',          'App\Http\Controllers\DevicesController@index');

Route::get('/devices/create',   'App\Http\Controllers\DevicesController@create');

Route::post('/devicesaction',   'App\Http\Controllers\DevicesController@storeDevice');


Route::get('/signin',          'App\Http\Controllers\UserController@signin');

Route::get('/signup',   'App\Http\Controllers\UserController@signup');

Route::post('/signup',   'App\Http\Controllers\UserController@upload');
