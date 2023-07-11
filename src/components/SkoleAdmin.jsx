import React, { useState } from 'react'
 
 
import { BsFillTrashFill, BsPencilFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function SkoleAdmin({skole,deleteskola,setIzmeniID}) {
    let navigate = useNavigate();
    function editSkola(id){
        setIzmeniID(id);
    
         navigate("/admin/izmeni/");
    }
  return (
     
    <div>
    <div className='skoleAdmin'>
            
            <table>
                <thead>
                    <tr><th>ID</th><th>NAZIV</th><th>ADRESA</th><th>BROJ UCENIKA</th><th>BODOVI</th><th>OBRISI</th><th>IZMENI</th></tr>
                </thead>
                <tbody>
                        {skole.map((p)=>(<tr key={p.id}><td>{p.id}</td><td>{p.naziv}</td><td>{p.adresa}</td><td>{p.broj_ucenika}</td><td>{p.bodovi}</td><td><button className="btn" onClick={() => deleteskola(p.id)}><BsFillTrashFill></BsFillTrashFill></button></td><td><button className="btn" onClick={() => editSkola(p.id)}><BsPencilFill></BsPencilFill></button></td></tr>))}
                </tbody>
            </table>
    </div>
    </div>
   
  )
}

export default SkoleAdmin;