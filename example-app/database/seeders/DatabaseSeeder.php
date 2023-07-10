<?php

namespace Database\Seeders;

use App\Models\Ambulanta;
use App\Models\Opstina;
use App\Models\Skola;
use App\Models\User;
use App\Models\Vakcina;
use App\Models\Zakazivanje;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
       Skola::truncate();
      Opstina::truncate();
      Vakcina::truncate();
       (new OpstinaSeeder())->run();
       (new VakcinaSeeder())->run();
       User::factory(10)->create();
       $admin = new User();
       $admin->name="Admin";
       $admin->email="admin@gmail.com";
       $admin->password= Hash::make("admin");
       $admin->admin = 1;
       $admin->save();
        Ambulanta::factory(5)->create();
        Zakazivanje::factory(5)->create();

        $sk1= new Skola();
        $sk1->naziv = "Deseta gimnazija Mihajlo Pupin";
        $sk1->adresa = "Antifasisticke borbe 1a"; 
        $sk1->bodovi = 95;
        $sk1->image="https://obrazovanje.omladina.net/wp-content/uploads/2013/02/deseta-beogradska-gimnazija-mihajlo-pupin1.jpg";
        $sk1->opstina_id = 2;
        $sk1->broj_ucenika = 600;
        $sk1->save();

        $sk4= new Skola();
        $sk4->naziv = "Deveta gimnazija Mihailop Petrovic Alas";
        $sk4->adresa = "Goce Delceva 41"; 
        $sk4->image="http://ocdn.eu/images/pulscms/Mjc7MDA_/e96226b29d97356956187eaffd66b810.png";

        $sk4->bodovi = 75;
        $sk4->opstina_id = 2;
        $sk4->broj_ucenika = 550;
        $sk4->save();

        $sk2= new Skola();
        $sk2->naziv = "Zemunska gimnazija";
        $sk2->adresa = "Gradski park 1"; 
        $sk2->bodovi = 95;
        $sk2->image="https://beogradskonasledje.rs/wp-content/uploads/2021/06/DSC0123.jpg";
        $sk2->opstina_id = 2;
        $sk2->broj_ucenika = 400;
        $sk2->save();

        $sk3= new Skola();
        $sk3->naziv = "Politehnicka skola";
        $sk3->adresa = "Antifasisticke borbe 1a"; 
        $sk3->image="https://www.novosti.rs/upload/images/2019b/12/26n/00-%20B-Dzodan-fb.jpg";
        $sk3->bodovi = 48;
        $sk3->opstina_id = 2;
        $sk3->broj_ucenika = 300;
        $sk3->save();

    }
}
