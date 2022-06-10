<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\UserController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});

Route::controller(AdminController::class)->group(function () {
    Route::post('additem', 'addItem');
    Route::post('addcategory', 'addCategory');
    Route::post('deleteitem', 'deleteItem');

});

Route::controller(ItemController::class)->group(function () {
    Route::get('/getitems/{id?}', 'getAllItems');
    

});

Route::controller(UserController::class)->group(function () {
    Route::post('/getinfo', 'getInfo');
    Route::post('/editprofile', 'editProfile');
    Route::post('/addfavorite', 'addFavorite');

});