<?php

namespace App\Http\Controllers;

use App\Http\Resources\ZakazivanjeResource;
use App\Models\Zakazivanje;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ZakazivanjeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ZakazivanjeResource::collection(Zakazivanje::all());
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
        $validator = Validator::make(
            $request->all(),
            [
                'user_id' =>  'required' , 
                'datum' => 'required', 
                'ambulanta_id' => 'required',
                'vakcina_id' => 'required', 

            ]
        );
        if ($validator->fails()) 
            return response()->json($validator->errors());
 
        $s = Zakazivanje::create([
                'user_id' =>   $request->user_id, 
                'datum' => $request->datum, 
                'ambulanta_id' =>  $request->ambulanta_id, 
                'vakcina_id' =>  $request->vakcina_id, 
                 
        ]);
        return response()->json(["Uspesno dodato",new ZakazivanjeResource($s)]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Zakazivanje  $zakazivanje
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ZakazivanjeResource(Zakazivanje::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Zakazivanje  $zakazivanje
     * @return \Illuminate\Http\Response
     */
    public function edit(Zakazivanje $zakazivanje)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Zakazivanje  $zakazivanje
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Zakazivanje $zakazivanje)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Zakazivanje  $zakazivanje
     * @return \Illuminate\Http\Response
     */
    public function destroy(Zakazivanje $zakazivanje)
    {
        //
    }
}
