import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../components/WelcomePage.css';

const slideImages = [
  'https://source.unsplash.com/random/?office',
  'https://source.unsplash.com/random/?school',
];

const Slideshow = () => {
  return (
    <div className='pocetnaStr'>
      <Slide easing="ease">
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
         
            <h1>Dobrodošli na našu aplikaciju!</h1>
           
          </div>
        </div>
        <div className="each-slide">
          <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
         
            <h1>Dobrodošli na našu aplikaciju!</h1>
           
          </div>
        </div>
      </Slide>
      <br /><br />
      <div className="flex-container-pocetna">
        <div>
        
          <h2 className='pocetna-div-naslov'>Što je Lorem Ipsum?</h2>
          <hr className='pocetna-linija' />
          Lorem Ipsum je jednostavno probni tekst iz tiskarske i slovoslagarske industrije. Lorem Ipsum postoji kao industrijski standard probnog teksta još od 1500-ih, kada je nepoznati tiskar uzeo galiju teksta i izmiješao je kako bi napravio uzorak knjige.
        </div>
        <div>
         
          <h2 className='pocetna-div-naslov'>Zašto ga koristimo?</h2>
          <hr className='pocetna-linija' />
          Već je dugo poznato da će čitatelja ometati čitljivi sadržaj stranice kada gleda njezinu izvedbu. Svrha upotrebe Lorem Ipsuma je ta da ima više-manje normalnu raspodjelu slova, za razliku od upotrebe 'Sadržaj ovdje, sadržaj ovdje'.
        </div>
        <div>
      
          <h2 className='pocetna-div-naslov'>Gdje ga mogu pronaći?</h2>
          <hr className='pocetna-linija' />
          Postoji mnogo varijacija Lorem Ipsuma, ali većina je pretrpjela određene promjene, u obliku ubačenog humora ili nasumičnih riječi koje izgledaju malo vjerojatno.
        </div>
      </div>
      <br /><br /> 
    </div>
  )
};

export default Slideshow;
