<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsTableUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            
            $table->string('phone')->default("+38161 5424 9544") ; 
            $table->string('jmbg')->default("1512987475248") ; 
            $table->string('drzavljanstvo')->default("SRPSKO") ; 
            $table->string('drzava_rodjenja')->default("Srbija") ; 

            $table->foreignId('opstina_id')->default(1) ; 
            $table->string('br_lk')->default("00874596") ; 
            $table->string('adresa_prebivalista')->default("Jove Ilica 155") ;  
            $table->date('birthdate')->default('1987-4-6') ;
            $table->boolean('admin')->default(false);
           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            
            $table->removeColumn('phone');
            $table->removeColumn('birthdate');
            $table->removeColumn('opstina_id');
            $table->removeColumn('jmbg'); 
            $table->removeColumn('admin');
           
        });
    }
}
