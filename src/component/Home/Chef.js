import React from 'react';
import image4 from'./../../assets/image 4.png';
import image3 from './../../assets/image 3.png';
import image5 from './../../assets/image 5.png';
import './Chef.css';

const Chef = () => {
    return (
        <div>
            <p class="text-center mt-4">T O P   C H E F S</p>
            <hr class="horizontal11 mx-auto"/>
            <div className='banner-main text-white '>
        <div className="banner-overlay">
        <div className="container col-md-12 col-sm-6 g-4 mb-5">
            <div className="row">
                
                <div className="col-lg-4 mb-3">
                    <div className="banner-content text-center text-md-start">
                       <div class="mx-5">
                            <img class="first-image" src={image4} alt="..."/>
                            
                       </div>
                       <div>
                       <h6 class="text-start">Eileen Johnson</h6>
                       <p class="fw ">Executive Chef, USA</p>
                       </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="banner-content text-center text-md-start">
                    <div class="card3">
                    <div class="card-body">
                        <div>
                            <img class="image3" src={image3} alt="..."/>
                        </div>
                        <h5 class="card-title33 text-center">Robert Downey Jr</h5>
                        <p class="card-text33 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                       
                    </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 mx-auto">
                    <div className="banner-content text-center text-md-start images3">
                   
                       <div class="mx-5">
                            <img class="first-image" src={image5} alt="..."/>
                            
                       </div>
                       <div>
                       <h6 class="text-start">Amanda Dority</h6>
                       <p class="fw ">Sous Chef, India</p>
                       </div>
                    
                    </div>
                </div>
                
            </div>
        </div>
        </div>
    </div> 
        </div>
    );
};

export default Chef;