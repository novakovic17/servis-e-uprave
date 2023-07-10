<?php

namespace App\Http\Controllers;

use App\Http\Resources\AmbulantaResource;
use App\Models\Ambulanta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AmbulantaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return AmbulantaResource::collection(Ambulanta::all());
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
                'kapacitet' => 'required', 
                'radno_vreme' => 'required',
                'opstina_id' => 'required', 

            ]
        );
        if ($validator->fails()) 
            return response()->json($validator->errors());
 
        $s = Ambulanta::create([
                'adresa' =>   $request->adresa, 
                'kapacitet' => $request->kapacitet, 
                'radno_vreme' =>  $request->radno_vreme, 
                'opstina_id' =>  $request->opstina_id, 
                 
        ]);
        return response()->json(["Uspesno dodato",new AmbulantaResource($s)]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ambulanta  $ambulanta
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new AmbulantaResource(Ambulanta::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ambulanta  $ambulanta
     * @return \Illuminate\Http\Response
     */
    public function edit(Ambulanta $ambulanta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ambulanta  $ambulanta
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'adresa' => 'string| ',
            'kapacitet' => 'integer',
            'radno_vreme' => '', 
            'opstina_id' => 'integer', 
             
        ]);

        if ($validator->fails()) 
            return response()->json($validator->errors());

        $l=Ambulanta::find($id);
        if($l){
            $l->adresa = $request->adresa;
            $l->kapacitet = $request->kapacitet;
            $l->radno_vreme = $request->radno_vreme;
            $l->opstina_id = $request->opstina_id; 
            
            $l->save();
            return response()->json(['User uspesno izmenjeno!', new AmbulantaResource($l)]);
        }else{
            return response()->json('Trazeni objekat ne postoji u bazi');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ambulanta  $ambulanta
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        $amb = Ambulanta::find($id);
        if($amb){ 
            $amb->delete();
            return response()->json("uspesno obrisano!" );
        } else {

            return response()->json([
                'message' => 'Ne postoji u bazi.',
            ], 400);
        }
    }
}
