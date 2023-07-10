<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateZakazivanjesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('zakazivanjes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreignId('ambulanta_id');
            $table->foreignId('vakcina_id'); 
            $table->string('datum');

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
        Schema::dropIfExists('zakazivanjes');
    }
}
