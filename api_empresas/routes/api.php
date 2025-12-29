<?php

use App\Http\Controllers\empresasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::patch('/empresas/{id}', [empresasController::class, 'update_by_id']);

Route::patch('/empresas', [empresasController::class, 'update_by_name']);

Route::delete('/empresas/{id}',  [empresasController::class, 'delete_by_id']);

Route::delete('/empresas',  [empresasController::class, 'delete_by_name']);

