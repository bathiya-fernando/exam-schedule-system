<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Schedules extends Model
{
    protected $fillable = ['title', 'status', 'datetime', 'language', 'country', 'latitude', 'longitude'];

    protected $casts = [
        'datetime' => 'datetime',
        'latitude' => 'float',
        'longitude' => 'float',
    ];

    public function candidates()
    {
        // return $this->hasMany(Candidate::class, 'schedule_id', 'id');
        return $this->belongsToMany(Candidate::class, 'candidate_schedule', 'schedule_id', 'candidate_id');
    }
}
