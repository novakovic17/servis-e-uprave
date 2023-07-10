import React, { useEffect } from 'react';
import './RegisterPageStyle.css';
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function RegisterPage() {
    const [userData,setUserData]=useState({
        email:"",
        name:"",
        phone:"",
        birthdate:"",
        password:"",
        mesto:"",
        jmbg:"",
        br_lk:"",
        opstina_id:1,
        adresa_prebivalista:"",
        opstina_rodjenja:""
    });

    const [drzave, setDrzave] = useState([]);
    useEffect(() => {
        axios({
          method: "GET",
          url:
            "https://restcountries.com/v3.1/all",
        })
          .then((response) => {
            console.log(response.data[0].name.common);
            setDrzave(response.data);
            
          })
          .catch((error) => {
            console.log(error);
         });
     }, []);

    function handleInput(e){ //fja koja se poziva prilikom eventa e
        //console.log(e); //probaj
        //kada korisnik unese username i pass hocemo da setujemo te vrednosti u userData
        let newUserData = userData; //postavimo usera da mu ime bude "" i da mu pass bude ""
        //e.target.value; predstavlja vrednost koju korisnik unese u polje
        newUserData[e.target.name]=e.target.value;
        console.log(newUserData);
        //console.log(newUserData);//probaj
        setUserData(newUserData); //podatke koje smo pokupili iz forme sada upisujemo u polje userData
        //te podatke sada treba da saljemo laravelu, ali to radimo kada korisnik submituje formu
    }
    let navigate = useNavigate();
    function handleRegister(e){
             
            e.preventDefault();   
            axios
                .post("http://127.0.0.1:8000/api/register", userData )
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
                                <h2 className="title">Registruj zaposlenog</h2>
                                <form onSubmit={handleRegister}>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Name" name="name" required onInput={handleInput}/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3 js-datepicker" type="text" placeholder="Birthdate" name="birthdate"required onInput={handleInput}/>
                                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>
                                    
                                    <div className="input-group">
                                        <input className="input--style-3" type="email" placeholder="Email" name="email" id="emailR"  required onInput={handleInput}/>
                                    </div>
                                
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Phone" name="phone"required onInput={handleInput}/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="password" placeholder="Password" name="password"required onInput={handleInput}/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Jmbg" name="jmbg "required onInput={handleInput}/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Drzavljanstvo" name="drzavljanstvo "required onInput={handleInput}/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Broj licne karte" name="br_lk "required onInput={handleInput}/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Adresa prebivalista" name="adresa_prebivalista "required onInput={handleInput}/>
                                    </div>
                                    <div className="input-group">
                                        <select  className="input--style-3" name="opstina_id" id="opstina_id"    onInput={handleInput}>
                                                 <option  className="input--style-3" value="1" >Vozdovac</option> 
                                                 <option  className="input--style-3" value="2" >Zemun</option> 
                                                 <option  className="input--style-3" value="3" >Novi Beograd</option> 
                                                 <option  className="input--style-3" value="4" >Cukarica</option> 

                                            

                                        </select>
                                    </div>
                                  <div className="input-group">
                                      <select  className="input--style-3" name="mesto" id="mesto"    onInput={handleInput}>
                                            {drzave.map((d)=><option  className="input--style-3" value={d.name.common} key={d.name.common}  >{d.name.common} </option> )}
                                         
                                          

                                      </select>
                                  
                                  </div>
                                    <div className="p-t-10">
                                        <button className="btn btn--pill btn--green" type="submit" id="register" name="register" >Submit</button>
                                    </div>
                                    <br/><br/>
                                    <p><a href="/login"  className='tekstForme'>I already have an account!</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default RegisterPage;
