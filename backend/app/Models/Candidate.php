<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    protected $fillable = ['name'];

    public function schedule()
    {
        return $this->belongsToMany(Schedules::class, 'candidate_schedule', 'candidate_id', 'schedule_id');
    }
}
