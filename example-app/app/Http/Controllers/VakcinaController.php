<?php

namespace App\Http\Controllers;

use App\Models\Vakcina;
use Illuminate\Http\Request;

class VakcinaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Vakcina::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vakcina  $vakcina
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       return Vakcina::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Vakcina  $vakcina
     * @return \Illuminate\Http\Response
     */
    public function edit(Vakcina $vakcina)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vakcina  $vakcina
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vakcina $vakcina)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vakcina  $vakcina
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vakcina $vakcina)
    {
        //
    }
}
