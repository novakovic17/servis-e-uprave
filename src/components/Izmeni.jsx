import React, { useEffect } from 'react'; 
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
   

function Izmeni({id}) {
 
    const [productData,setProductData]=useState({
    

        id:id 

    });
    useEffect(() => {
        const getRandomLists2 = async () => {
          try {
            const res = await axiosInstance.get( "http://127.0.0.1:8000/api/skole/"+id,
              {
                headers: {
                  token:
                    "Bearer " +
                    ( window.sessionStorage.getItem("auth_token")),
                },
              }
            );
            console.log(res.data.data);
            setProductData(res.data.data);
          } catch (error) {
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
          }
        };
        getRandomLists2();
      }, [ axiosInstance]);
 
    function handleInput(e){  
        let newProductData = productData;  
        
        newProductData[e.target.name]=e.target.value;
        
        setProductData(newProductData);
        console.log(newProductData);
       
    }
    let navigate = useNavigate();
 
 
    function azuriraj(e){
        e.preventDefault();   
        axios
            .put("http://127.0.0.1:8000/api/skole/"+id, productData,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
            .then((res)=>{  
                console.log(res.data);
                 alert("USPESNO")
                 navigate("/admin");
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
    <div className='login'>
    <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div className="wrapper wrapper--w780">
            <div className="card card-3">
                <div className="card-heading"></div>
                <div className="card-body">
                    <h2 className="title">Izmeni</h2>
                    <form onSubmit={azuriraj} >                          
                                              
                        <div className="input-group">
                            <input 
                                className="input--style-3" 
                                type="text" 
                                placeholder="Naziv" 
                                name="naziv"
                                onInput={handleInput} defaultValue={productData.naziv}
                            />
                        </div>
                        
                        <div className="input-group">
                            <input className="input--style-3" type="text" placeholder="adresa" name="adresa"  onInput={handleInput} defaultValue={productData.adresa}/>
                        </div>
                        <div className="input-group">
                            <input className="input--style-3" type="text" placeholder="bodovi" name="bodovi"  onInput={handleInput}  defaultValue={productData.bodovi}/>
                        </div>
                        <div className="input-group">
                            <input className="input--style-3" type="text" placeholder="Slika (URL)" name="image"  onInput={handleInput}  defaultValue={productData.image}/>
                        </div>

                        <div>
                        <div className="input-group">
                            <input className="input--style-3" type="text" placeholder="broj ucenika" name="broj_ucenika"  onInput={handleInput}  defaultValue={productData.broj_ucenika}/>
                        </div>
                         
                   
                 </div>
                 <div className="p-t-10">
                            <button className="btn btn--pill btn--green" type="submit" id="login" name="login">Submit</button>
                        </div>
                        
                       
                </form>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Izmeni