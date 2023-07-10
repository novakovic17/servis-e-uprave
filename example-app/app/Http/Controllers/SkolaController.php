<?php

namespace App\Http\Controllers;

use App\Http\Resources\SkolaResource;
use App\Models\Skola;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SkolaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SkolaResource::collection(Skola::all());
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
                'adresa' =>  'required' , 
                'naziv' => 'required', 
                'broj_ucenika' => 'required',
                'bodovi' => 'required',

                
            ]
        );
        if ($validator->fails()) 
            return response()->json($validator->errors());
 
        $s = Skola::create([
                'adresa' =>   $request->adresa, 
                'naziv' => $request->naziv, 
                'broj_ucenika' =>  $request->broj_ucenika, 
                'opstina_id' =>  $request->opstina_id, 
                'bodovi' =>  $request->bodovi, 

                 
        ]);
        return response()->json(["Uspesno dodato",new SkolaResource($s)]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Skola  $skola
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        return new SkolaResource(Skola::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Skola  $skola
     * @return \Illuminate\Http\Response
     */
    public function edit(Skola $skola)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Skola  $skola
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $validator = Validator::make($request->all(), [
            'adresa' => 'string| ',
            'naziv' => '',
            'broj_ucenika' => '', 
           
            'bodovi' => 'integer', 

             
        ]);

        if ($validator->fails()) 
            return response()->json($validator->errors());

        $l=Skola::find($id);
        if($l){
            $l->adresa = $request->adresa;
            $l->naziv = $request->naziv;
            $l->broj_ucenika = $request->broj_ucenika;
            $l->opstina_id =1; 
            $l->bodovi = $request->bodovi; 

            
            $l->save();
            return response()->json(['Uspesno!', new SkolaResource($l)]);
        }else{
            return response()->json('Trazeni objekat ne postoji u bazi');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Skola  $skola
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $skola = Skola::find($id);
        if($skola){ 
            $skola->delete();
            return response()->json("uspesno obrisano!" );
        } else {

            return response()->json([
                'message' => 'Ne postoji u bazi.',
            ], 400);
        }
    }
}
