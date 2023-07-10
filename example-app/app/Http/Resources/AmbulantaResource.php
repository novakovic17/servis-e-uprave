<?php

namespace App\Http\Resources;

use App\Models\Opstina;
use Illuminate\Http\Resources\Json\JsonResource;

class AmbulantaResource extends JsonResource
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
            'adresa' => $this->resource->adresa,
            'kapacitet' => $this->resource->kapacitet,
            'radno_vreme' =>$this->resource->radno_vreme,
            'opstina' =>Opstina::find($this->resource->opstina_id) ,

            
        ];
    }
}
