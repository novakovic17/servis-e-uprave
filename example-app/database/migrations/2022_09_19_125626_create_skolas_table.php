<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSkolasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('skolas', function (Blueprint $table) {
            $table->id();
            $table->string('naziv');
            $table->string('adresa');
            $table->string('image');

            $table->integer('bodovi');
            $table->integer('broj_ucenika');
            $table->foreignId('opstina_id');
            $table->integer('omiljena')->default(0);

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
        Schema::dropIfExists('skolas');
    }
}
