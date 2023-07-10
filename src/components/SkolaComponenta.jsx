import React from 'react'
import {BsPlusLg, BsDashLg} from "react-icons/bs"

function SkolaComponenta({skola,onAdd,onRemove}) {
  return (
    <div className="card">
     
    <div className="card-header" >
         <img className='card-img-top'  src ={skola.image}   /> 
    </div>
    <div className="card-body">
     
        
        <h4 className = "naslovKartice">  {skola.naziv}   </h4>
        <hr />
        <h6 className="opisProizvoda"> 
        
        <br /><br /> <b>  Adresa: </b> {skola.adresa} 
       
        <br /><br /> <b>  Broj Ucenika:</b> {skola.broj_ucenika} 
         
        <br /><br /> <b>  Bodovi:</b> {skola.bodovi} 
         </h6>
         
         <button
                  className="btn"
                  onClick={() => onAdd( skola.id)}
                >
                <BsPlusLg />
              </button>
              <button 
                className="btn"
                onClick={() => onRemove( skola.id)}>
                <BsDashLg />
            </button>
        
    </div> 
</div>
  )
}

export default SkolaComponenta