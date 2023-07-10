<?php

namespace Database\Seeders;

use App\Models\Vakcina;
use Illuminate\Database\Seeder;

class VakcinaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $v1= new Vakcina();
        $v1->naziv_vakcine = "Pfizer"; 
        $v1->save();

        $v2= new Vakcina();
        $v2->naziv_vakcine = "Sputnjik"; 
        $v2->save();


        $v3= new Vakcina();
        $v3->naziv_vakcine = "Sinopharm"; 
        $v3->save();


        $v4= new Vakcina();
        $v4->naziv_vakcine = "Astra Zeneca"; 
        $v4->save();
    }
}
