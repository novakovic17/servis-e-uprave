<?php

namespace App\Http\Resources;

use App\Models\Ambulanta;
use App\Models\User;
use App\Models\Vakcina;
use Illuminate\Http\Resources\Json\JsonResource;

class ZakazivanjeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return  
        [
            'id' => $this->resource->id,
            'datum' => $this->resource->datum,
            'ambulanta' =>new AmbulantaResource(Ambulanta::find( $this->resource->ambulanta_id)),
            'user' =>new UserResource(User::find($this->resource->user_id)) ,
            'vakcina' =>Vakcina::find($this->resource->vakcina_id) ,

            
        ];
    }
}
