<?php

namespace Database\Factories;

use App\Models\Ambulanta;
use App\Models\Opstina;
use App\Models\User;
use App\Models\Vakcina;
use Illuminate\Database\Eloquent\Factories\Factory;

class ZakazivanjeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'datum' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
            'vakcina_id' =>random_int(1,Vakcina::count()),
            'user_id'=> random_int(1,User::count()),
            'ambulanta_id'=> random_int(1,Ambulanta::count()),
           
        ];
    }
}
