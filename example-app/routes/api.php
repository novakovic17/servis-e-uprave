<?php

use App\Http\Controllers\AmbulantaController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OpstinaController;
use App\Http\Controllers\PorukaController;
use App\Http\Controllers\SkolaController;
use App\Http\Controllers\VakcinaController;
use App\Http\Controllers\ZakazivanjeController;
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
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::get('vakcine/{id}', [VakcinaController::class, 'show']);
Route::get('vakcine', [VakcinaController::class, 'index']);

Route::get('opstine/{id}', [OpstinaController::class, 'show']);
Route::get('opstine', [OpstinaController::class, 'index']);

Route::get('ambulante/{id}', [AmbulantaController::class, 'show']);
Route::get('ambulante', [AmbulantaController::class, 'index']);

Route::put('ambulante/{id}', [AmbulantaController::class, 'update']);
Route::delete('ambulante/{id}', [AmbulantaController::class, 'destroy']); 
Route::post('ambulante', [AmbulantaController::class, 'store']);

 
Route::get('skole/{id}', [SkolaController::class, 'show']);
Route::get('skole', [SkolaController::class, 'index']);

Route::put('skole/{id}', [SkolaController::class, 'update']);
Route::delete('skole/{id}', [SkolaController::class, 'destroy']); 
Route::post('skole', [SkolaController::class, 'store']);






Route::get('zakazivanja/{id}', [ZakazivanjeController::class, 'show']);
Route::get('zakazivanja', [ZakazivanjeController::class, 'index']);
Route::post('zakazivanja', [ZakazivanjeController::class, 'store']);
Route::get('poruke',[PorukaController::class,'index']);  
Route::post('kontakt', [PorukaController::class, 'primiPoruku']); 
Route::group(['middleware' => ['auth:sanctum']], function () {   
    Route::get('/profiles', function (Request $request) {  
        return auth()->user();
    });

  
 
    
   
   
    Route::post('logout', [AuthController::class, 'logout']);  
  
});
Route::middleware(['auth:sanctum','isAPIAdmin'])->group(function(){  

    Route::get('/proveri', function(){
        return response()->json(['message'=>'Admin je ulogovan','status'=>200],200);
    });
    Route::post('logout', [AuthController::class, 'logout']);  
   

});