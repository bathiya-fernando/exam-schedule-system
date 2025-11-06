<?php 

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ScheduleController;

Route::get('/schedules', [ScheduleController::class, 'index']);
Route::get('/schedules/{id}', [ScheduleController::class, 'show']);
Route::put('/schedules/{id}/progress', [ScheduleController::class, 'progressStatus']);
