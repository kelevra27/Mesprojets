<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        schema::create('ads', function(Blueprint $table){
            $table->id("id");
            $table->timestamps();
            $table->string("id_user");
            $table->string("title");
            $table->string("category");
            $table->string("description");
            $table->string("photo");
            $table->integer("price");
            $table->string("location");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ads');
    }
};
