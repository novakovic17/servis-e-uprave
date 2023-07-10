<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skola extends Model
{
    use HasFactory;
    protected $fillable = [
        'naziv',
        'adresa',
        'bodovi',
        'opstina_id',
        'image',

        'broj_ucenika'
      ];

      public function opstina()
      {
        return $this->belongsTo(Opstina::class);
      }
}
