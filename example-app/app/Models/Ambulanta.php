<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ambulanta extends Model
{
    use HasFactory;

    protected $fillable = [
        'adresa',
        'kapacitet',
        'radno_vreme',
        'opstina_id'
      ];
    public function opstina()
    {
        return $this->belongsTo(Opstina::class);
    }

 
}
