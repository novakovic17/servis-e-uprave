<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Opstina extends Model
{
    use HasFactory;
    protected $fillable = [
        'naziv_opstine',
        'postanski_kod', 
    ];

    public function gradjani()
    {
        return $this->hasMany(User::class);
    }
    public function ambulante()
    {
        return $this->hasMany(Ambulanta::class);
    }
    public function skole()
    {
        return $this->hasMany(Skola::class);
    }
}
