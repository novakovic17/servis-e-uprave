<?php

namespace Database\Factories;

use App\Models\Opstina;
use Illuminate\Database\Eloquent\Factories\Factory;

class AmbulantaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'adresa' => $this->faker->address(),
            'kapacitet' => random_int(50,500),
            'radno_vreme'=> "00:00",
            'opstina_id'=> random_int(1,Opstina::count()),
           
        ];
    }
}
