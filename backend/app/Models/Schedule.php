<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Schedule extends Model
{
    public $incrementing = false;
    protected $fillable = ['id', 'title', 'status', 'datetime', 'language', 'country', 'latitude', 'longitude'];

    protected $casts = [
        'datetime' => 'datetime',
        'latitude' => 'float',
        'longitude' => 'float',
    ];

    public function candidates(): HasMany
    {
        return $this->hasMany(Candidate::class, 'schedule_id', 'id');
    }
}
