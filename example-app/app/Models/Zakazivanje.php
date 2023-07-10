<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Zakazivanje extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'ambulanta_id',
        'vakcina_id',
        'datum'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function ambulanta()
    {
        return $this->belongsTo(Ambulanta::class);
    }

    public function vakcina()
    {
        return $this->belongsTo(Vakcina::class);
    }
}
