<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SharkController;

Route::inertia('/', 'Home')->name('home');
Route::resource('sharks', SharkController::class);
