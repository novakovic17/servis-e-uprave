import React, { useEffect } from 'react';
import './RegisterPageStyle.css';
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Zakazi({ambulante,vakcine}) {
    const [zakaziData, setZakaziData]=useState({
        user_id: window.sessionStorage.getItem("auth_id"),
        ambulanta_id:1,
        vakcina_id:1,
        datum:"2022-6-6", 
    });

 

    function handleInput(e){ //fja koja se poziva prilikom eventa e
        //console.log(e); //probaj
        //kada korisnik unese username i pass hocemo da setujemo te vrednosti u userData
        let newData = zakaziData; //postavimo usera da mu ime bude "" i da mu pass bude ""
        //e.target.value; predstavlja vrednost koju korisnik unese u polje
        newData[e.target.name]=e.target.value;
        console.log(newData);
        //console.log(newUserData);//probaj
        setZakaziData(newData); //podatke koje smo pokupili iz forme sada upisujemo u polje userData
        //te podatke sada treba da saljemo laravelu, ali to radimo kada korisnik submituje formu
    }
    let navigate = useNavigate();
    function handleZakazi(e){
             
            e.preventDefault();   
            axios
                .post("http://127.0.0.1:8000/api/zakazivanja", zakaziData )
                .then((res)=>{  
                    console.log(res.data);
                     
                     navigate("/");
                })
                .catch(function (error) {
                    if (error.response) {
                      // Request made and server responded
                      console.log(error.response.data);
                      console.log(error.response.status);
                      console.log(error.response.headers);
                    } else if (error.request) {
                      // The request was made but no response was received
                      console.log(error.request);
                    } else {
                      // Something happened in setting up the request that triggered an Error
                      console.log('Error', error.message);
                    }
                
                  });
    }
    return (
        <div className='register'>
            <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
                <div className="wrapper wrapper--w780">
                    <div className="card card-3">
                        <div className="card-heading"></div>
                            <div className="card-body">
                                <h2 className="title">Zakazi termin</h2>
                                <form onSubmit={handleZakazi}>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Name" name="name" defaultValue={ window.sessionStorage.getItem("auth_id")}/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3 js-datepicker" type="text" placeholder="Datum" name="datum"required onInput={handleInput}/>
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>
                                    
   
                  
                                    <div className="input-group">
                                        <select  className="input--style-3" name="vakcina_id" id="vakcina_id"    onInput={handleInput}>
                                            {vakcine.map((a)=><option  className="input--style-3" value={a.id} >{a.naziv_vakcine} </option>  )}
                                              
                                        </select>
                                    </div>
                                    <div className="input-group">
                                        <select  className="input--style-3" name="ambulanta_id" id="ambulanta_id"    onInput={handleInput}>
                                            {ambulante.map((a)=><option  className="input--style-3" value={a.id} >{a.adresa}</option>  )}
                                              
                                        </select>
                                    </div>
                                    <div className="p-t-10">
                                        <button className="btn btn--pill btn--green" type="submit" id="register" name="register" >Submit</button>
                                    </div>
                                    <br/><br/>
                                 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default Zakazi;
