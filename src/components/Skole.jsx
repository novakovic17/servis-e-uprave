import React, { useState } from 'react'
 
import SkolaComponenta from './SkolaComponenta';

function Skole({skole,onAdd,onRemove }) {
    const [sort, setSort] = useState(true);
    function sortAsc(){
      
      setSort(true);
    }
    function sortDesc(){
      
      setSort(false);
    }
  return (
    <div>
         <button className="sortbtn btn" onClick={sortAsc}>Sortiraj rastuće</button>
        <button className="sortbtn btn" onClick={sortDesc}>Sortiraj opadajuće</button>
        <div className='sveSkole'>
              
        {sort===true?
              <>
                {skole.sort((a, b) => a.bodovi < b.bodovi ? -1 : 1).map((t)=>(<SkolaComponenta key={t.id} skola={t}   onAdd={onAdd} onRemove={onRemove} ></SkolaComponenta>))}
               
                     
                     
              </>
              :
              <>
                {skole.sort((a, b) => a.bodovi> b.bodovi ? -1 : 1).map((t)=>(<SkolaComponenta key={t.id} skola={t}   onAdd={onAdd} onRemove={onRemove} ></SkolaComponenta>))}

              </>
            }
            
              
              
              
              

        </div>
    </div>
  )
}

export default Skole;