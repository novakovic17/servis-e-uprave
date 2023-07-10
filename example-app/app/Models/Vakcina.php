<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vakcina extends Model
{
    use HasFactory;
    protected $fillable = [
        'naziv_vakcine', 
    ];




}
