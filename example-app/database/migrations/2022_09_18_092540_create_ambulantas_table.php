<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAmbulantasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ambulantas', function (Blueprint $table) {
            $table->id();
            $table->string('adresa');
            $table->integer('kapacitet');
            $table->string('radno_vreme');
            $table->foreignId('opstina_id');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ambulantas');
    }
}
