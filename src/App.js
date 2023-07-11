 
import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import NavBar from './components/Navbar';
import Slideshow from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Kontakt from './components/Kontaks';
import Footer from './components/Footer';

import NotFound from './components/NotFound';
import AdminDashboard from './components/AdminDashboard';
import Inbox from './components/Inbox';
import SkoleAdmin from './components/SkoleAdmin';
import Izmeni from './components/Izmeni';
import OmiljeneSkole from './components/OmiljeneSkole';
import Skole from './components/Skole';
import Zakazi from './components/Zakazi';

 
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

function App() {
  const[token,setToken] = useState();
  const [poruke,setPoruke] = useState([]); 
  const [ambulante,setAmbulante] = useState([]); 
  const [vakcine,setVakcine] = useState([]); 
  const [zakazivanja,setZakazivanja] = useState([]); 
  const [skole,setSkole] = useState([]); 
  const [omiljene, setOmiljene] = useState([]);
  const [izmenaID, setIzmenaID] = useState(0); 
  function addToken(auth_token){
    setToken(auth_token);
}

useEffect(() => {
  const getRandomLists2 = async () => {
    try {
      const res = await axiosInstance.get( "http://127.0.0.1:8000/api/poruke",
        {
          headers: {
            token:
              "Bearer " +
              ( window.sessionStorage.getItem("auth_token")),
          },
        }
      );
      setPoruke(res.data);
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };
  getRandomLists2();
}, [ axiosInstance]);
useEffect(() => {
  const getRandomLists6 = async () => {
    try {
      const res = await axiosInstance.get( "http://127.0.0.1:8000/api/skole",
        {
          headers: {
            token:
              "Bearer " +
              ( window.sessionStorage.getItem("auth_token")),
          },
        }
      );
      setSkole(res.data.data);
      console.log(res.data.data)
    } catch (err) {
      console.log(err);
    }
  };
  getRandomLists6();
}, [ axiosInstance]);
useEffect(() => {
  const getRandomLists5 = async () => {
    try {
      const res = await axiosInstance.get( "http://127.0.0.1:8000/api/zakazivanja",
        {
          headers: {
            token:
              "Bearer " +
              ( window.sessionStorage.getItem("auth_token")),
          },
        }
      );
      setZakazivanja(res.data.data);
      console.log(res.data.data)
    } catch (err) {
      console.log(err);
    }
  };
  getRandomLists5();
}, [ axiosInstance]);

useEffect(() => {
  const getRandomLists3 = async () => {
    try {
      const res = await axiosInstance.get( "http://127.0.0.1:8000/api/ambulante",
        {
          headers: {
            token:
              "Bearer " +
              ( window.sessionStorage.getItem("auth_token")),
          },
        }
      );
      setAmbulante(res.data.data);
      console.log(res.data.data)
    } catch (err) {
      console.log(err);
    }
  };
  getRandomLists3();
}, [ axiosInstance]);

useEffect(() => {
  const getRandomLists1 = async () => {
    try {
      const res = await axiosInstance.get( "http://127.0.0.1:8000/api/vakcine",
        {
          headers: {
            token:
              "Bearer " +
              ( window.sessionStorage.getItem("auth_token")),
          },
        }
      );
      setVakcine(res.data);
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };
  getRandomLists1();
}, [ axiosInstance]);

function refresh() {
  let niz = skole.filter((p) => p.omiljena > 0);
  setOmiljene(niz);
  console.log(omiljene)
}
 
function addSkola( id) {
 
  console.log(id)
  skole.forEach((p) => {
    if (p.id == id) {
      p.omiljena=1;
      
       
    }
  });
  refresh();

}
  
function removeSKola( id) {
   
 
   
 
  skole.forEach((p) => {
      if (p.id == id) {
         p.omiljena=0;
      }
    });
    refresh();
   
}
function deleteSkola(id){
  
  axios
  .delete("http://127.0.0.1:8000/api/skole/"+id,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
  .then((res)=>{  
      console.log(res.data);
      const token = window.sessionStorage.getItem('auth_token');
      window. location. reload();
      window.sessionStorage.set('auth_token',token);
       
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
function postaviIDZaIzmenu(id){
  setIzmenaID(id);
}

  return (
    <BrowserRouter className="App">
      

     
    <NavBar token={token}  ></NavBar>
  

    <Routes>
    <Route   path="/"  element={<Slideshow></Slideshow>}
        
      />
      
      
      
      
       <Route   path="/login"  element={<LoginPage addToken={addToken} />}/>
       <Route   path="/register"  element={<RegisterPage  />}/>
       <Route   path="/logout"  element={<LoginPage  />}/> 
       <Route path="/kontakt" element={ <Kontakt></Kontakt>}></Route>
       <Route path="/zakazi" element={ <Zakazi ambulante={ambulante} vakcine={vakcine}></Zakazi>}></Route>

       <Route path="/skole" element={ <Skole skole={skole} onRemove={removeSKola} onAdd={addSkola}></Skole>}></Route>
        

       <Route path="/skole/omiljene" element={ <OmiljeneSkole skole={omiljene} onRemove={removeSKola} onAdd={addSkola}></OmiljeneSkole>}></Route>

       <Route path="/admin/inbox" element={ <Inbox poruke={poruke} ></Inbox>}></Route>
       <Route path="/admin/skole" element={ <SkoleAdmin skole={skole} deleteskola={deleteSkola} setIzmeniID={postaviIDZaIzmenu}></SkoleAdmin>}></Route>
       <Route path="/admin/izmeni" element={ <Izmeni id={izmenaID} ></Izmeni>}></Route>
       <Route path="/admin" element={ <AdminDashboard zakazivanja={zakazivanja} vakcine={vakcine}></AdminDashboard>}></Route>
  
 
 
       <Route path="/*" element={<NotFound></NotFound>}/>
        
    </Routes>
    <Footer></Footer>
 
</BrowserRouter>
  );
}

export default App;
