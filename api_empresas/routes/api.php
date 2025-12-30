<?php

use App\Http\Controllers\empresasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::patch('/empresas/{id}', [empresasController::class, 'update_by_id']);

Route::patch('/empresas/cif/{cif}', [empresasController::class, 'update_by_cif']);

Route::delete('/empresas/{id}',  [empresasController::class, 'delete_by_id']);

Route::delete('/empresas/cif/{cif}',  [empresasController::class, 'delete_by_cif']);

