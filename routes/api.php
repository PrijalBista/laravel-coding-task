<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/register', [App\Http\Controllers\Api\Customer\AuthController::class, 'register']);
    Route::post('/login', [App\Http\Controllers\Api\Customer\AuthController::class, 'login']);
    Route::post('/refresh', [App\Http\Controllers\Api\Customer\AuthController::class, 'refresh']);
    Route::post('/logout', [App\Http\Controllers\Api\Customer\AuthController::class, 'logout']);
    Route::get('/user', [App\Http\Controllers\Api\Customer\AuthController::class, 'userProfile']);
});


Route::middleware('auth:api')->apiResource('company', 'App\Http\Controllers\Api\Customer\CompanyController');