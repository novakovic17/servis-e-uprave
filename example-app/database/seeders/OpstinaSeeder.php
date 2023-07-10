<?php

namespace Database\Seeders;

use App\Models\Opstina;
use Illuminate\Database\Seeder;

class OpstinaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $o1 = new Opstina();
        $o1->naziv_opstine="Savski venac";
        $o1->postanski_kod="11000";
        $o1->save();

        $o1 = new Opstina();
        $o1->naziv_opstine="Stari grad";
        $o1->postanski_kod="11000";
        $o1->save();

        $o1 = new Opstina();
        $o1->naziv_opstine="Vracar";
        $o1->postanski_kod="11000";
        $o1->save();

        $o1 = new Opstina();
        $o1->naziv_opstine="Vozdovac";
        $o1->postanski_kod="11010";
        $o1->save();

        $o2 = new Opstina();
        $o2->naziv_opstine="Zvezdara";
        $o2->postanski_kod="11050";
        $o2->save();

        $o2 = new Opstina();
        $o2->naziv_opstine="Palilula";
        $o2->postanski_kod="11060";
        $o2->save();

        $o3 = new Opstina();
        $o3->naziv_opstine="Novi Beograd";
        $o3->postanski_kod="11070";
        $o3->save();

        $o3 = new Opstina();
        $o3->naziv_opstine="Zemun";
        $o3->postanski_kod="11080";
        $o3->save();

        $o3 = new Opstina();
        $o3->naziv_opstine="Rakovica";
        $o3->postanski_kod="11090";
        $o3->save();

        $o4 = new Opstina();
        $o4->naziv_opstine="Cukarica";
        $o4->postanski_kod="11030";
        $o4->save();
    }
}
