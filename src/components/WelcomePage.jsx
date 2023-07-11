import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
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
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
             
            </div>
          </div>
 
        </Slide>
        <br /><br />
        <div className="flex-container-pocetna">
                        <div>
                            <h2 className='pocetna-div-naslov'>What is Lorem Ipsum?</h2>
                            <hr className='pocetna-linija'/>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div> 
                        
                        <div>
                            <h2 className='pocetna-div-naslov'>Why do we use it?</h2>
                            <hr className='pocetna-linija'/>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                        </div>
                        
                        <div >
                            <h2 className='pocetna-div-naslov'>Where can I get some?</h2>                            
                            <hr className='pocetna-linija'/>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </div>
                     
             

            </div>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    )
};

export default Slideshow;