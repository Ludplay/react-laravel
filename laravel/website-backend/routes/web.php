<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonController;

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
});

//Route::get('/', 'PersonController@allOrFiltered');
Route::get('/people', [PersonController::class, 'allOrFiltered']);
Route::get('/people/{id}', [PersonController::class, 'byId']);
Route::post('/people', [PersonController::class, 'store']);

