import axios from "axios";
import React from "react";
 
import { Link } from "react-router-dom";
 
function NavBar({token}) {

  function handleLogout(){ 
     
    var config = {
      method: 'post',
      url: '/logout',
      headers: { 
        'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token")
        
      },
    };
    console.log(window.sessionStorage.getItem("auth_token"))
    
    axios(config)
    .then(function (response) {
     
      console.log(response);
     
      window.sessionStorage.setItem('auth_token',null); 
      window.sessionStorage.setItem('auth_name',null); 
      

    })
    .catch(function (error) {
     
      
      console.log(error);
      

    }); 
  }



  return (
    <div className="navbar">
      <Link to="/"  className="navbar-items" >Početna strana</Link>
       
        {token == null ?   //ako nije ulogovan moze da se uloguje ili registruje
            <>  
                <Link to="/login"  className="navbar-items" >Uloguj se  </Link>
                <Link to="/register"  className="navbar-items" >Registruj se  </Link>
               
               
                <Link  className="navbar-items" to="/kontakt"  >Kontakt  </Link>
             

             </> 
             :  //ako jeste ulologovan treba da vidimo da li je admin ili nije admin
             <>  
             
                {window.sessionStorage.getItem("auth_name")=='Admin'  ? 
                
                    <> 
                      <Link to="/admin"  className="navbar-items" >Dashboard </Link>
                      <Link to="/admin/inbox"  className="navbar-items" >Inbox </Link>
                      <Link to="/admin/skole"  className="navbar-items" >Skole </Link>

                    </>
                :  
                    <>
                    <Link to="/zakazi"  className="navbar-items" >Zakazi </Link>
                    <Link to="/skole"  className="navbar-items" >Skole </Link>
                    <Link to="/skole/omiljene"  className="navbar-items" >Moje omiljene skole </Link>

                   
                    </>
                
               
                }
                 <a href="/" className="navbar-items" onClick={handleLogout}> Odjavi se </a>
                
             </>
              
        }
        
       

 
    </div>
  );
}
export default NavBar;