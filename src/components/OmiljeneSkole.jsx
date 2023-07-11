import React, { useState } from 'react'
 
import SkolaComponenta from './SkolaComponenta';

function OmiljeneSkole({skole,onAdd,onRemove }) {
 
  return (
    <div>
        {skole == null || skole=="undefined" || skole.lenght==0? 
          <p>Niste odabrali ni jednu skolu</p>
        : 
        <div className='sveSkole'>
              
     
              
          {skole.map((t)=>(<SkolaComponenta key={t.id} skola={t}   onAdd={onAdd} onRemove={onRemove} ></SkolaComponenta>))}
                     
            
              
              

        </div>
        
        }
       
    </div>
  )
}

export default OmiljeneSkole;