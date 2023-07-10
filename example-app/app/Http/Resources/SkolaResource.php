<?php

namespace App\Http\Resources;

use App\Models\Opstina;
use Illuminate\Http\Resources\Json\JsonResource;

class SkolaResource extends JsonResource
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
            'naziv' => $this->resource->naziv,
            'bodovi' =>$this->resource->bodovi,
            'broj_ucenika' =>$this->resource->broj_ucenika,
            'omiljena' =>$this->resource->omiljena,
            'image' =>$this->resource->image,

            'opstina' =>Opstina::find($this->resource->opstina_id) ,

            
        ];
    }
}
