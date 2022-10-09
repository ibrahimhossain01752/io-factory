import React from 'react';
import bitmap from './../../assets/Bitmap.png';
import bitmap1 from './../../assets/Bitmap (1).png';
import bitmap2 from './../../assets/Bitmap (2).png';
import bitmap3 from './../../assets/Bitmap (3).png';
import bitmap4 from './../../assets/Bitmap (4).png';
import './Banner.css';

const Banner = () => {
    return (
        <div class="container">
            <p class="text-center mt-4">V A R I E T I E S</p>
            <hr class="horizontal11 mx-auto"/>
                <div class="row ">
                <div class="col-md-6">
                <figure class="card w-100 h-100">
                        <img class="card3-image w-100 h-100 " src={bitmap} alt="" />
                        <figcaption class="card-caption">
                            <h6 class="card-title mt-2">Pizza is a savory dish of Italian origin</h6>
                            <p class="card-snippet">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            <hr class="horizontal2"/>
                           <div class="low">
                           <button class="explore px-2">Explore <i class="bi bi-chevron-compact-right greter"></i></button>
                           <span class="star"><i class="bi bi-star-fill "></i> Rated</span>
                           </div>

                            {/* <a href="#" class="card-button fw-700">Read more<i class="fas fa-arrow-right"></i></a> */}
                        </figcaption>
                    </figure>
                </div>
                <div class="col-md-6">
               
                    <div class="row row-cols-1 row-cols-md-2 g-4 ">
                    <div class="col">
  <figure class="card w-100 h-100">
                        <img class="card3-image w-100 h-100" src={bitmap1} alt="" />
                        <figcaption class="card-captio">
                            <h6 class="card-title1 mt-2">Crispy French Fries</h6>
                            <p class="card-snippe">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <hr class="horizontal3"/>
                           <div class="low1">
                           <button class="explore1 px-2 btn btn-text-primary">Explore <i class="bi bi-chevron-compact-right greter"></i></button>
                           <span class="star1"><i class="bi bi-star-fill "></i> Rated</span>
                           </div>

                            {/* <a href="#" class="card-button fw-700">Read more<i class="fas fa-arrow-right"></i></a> */}
                        </figcaption>
                    </figure>
  </div>
  <div class="col">
  <figure class="card w-100 h-100">
                        <img class="card3-image w-100 h-100" src={bitmap2} alt="" />
                        <figcaption class="card-captio">
                            <h6 class="card-title1 mt-2">Paneer Tikka</h6>
                            <p class="card-snippe">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <hr class="horizontal3"/>
                           <div class="low1">
                           <button class="explore1 px-2 btn btn-text-primary">Explore <i class="bi bi-chevron-compact-right greter"></i></button>
                           <span class="star1"><i class="bi bi-star-fill "></i> Rated</span>
                           </div>

                            {/* <a href="#" class="card-button fw-700">Read more<i class="fas fa-arrow-right"></i></a> */}
                        </figcaption>
                    </figure>
  </div>
  <div class="col">
  <figure class="card w-100 h-100">
                        <img class="card3-image w-100 h-100" src={bitmap3} alt="" />
                        <figcaption class="card-captio33">
                            <h6 class="card-title1 mt-2">Macaroon</h6>
                            <p class="card-snippe">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <hr class="horizontal3"/>
                           <div class="low1">
                           <button class="explore2 px-2 btn btn-text-primary">Explore <i class="bi bi-chevron-compact-right greter"></i></button>
                           <span class="star2"><i class="bi bi-star-fill "></i> Rated</span>
                           </div>

                            {/* <a href="#" class="card-button fw-700">Read more<i class="fas fa-arrow-right"></i></a> */}
                        </figcaption>
                    </figure>
  </div>
  <div class="col">
  <figure class="card w-100 h-100">
                        <img class="card3-image w-100 h-100" src={bitmap4} alt="" />
                        <figcaption class="card-captio">
                            <h6 class="card-title1 mt-2">Doughnut</h6>
                            <p class="card-snippe">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <hr class="horizontal3"/>
                           <div class="low1">
                           <button class="explore1 px-2 btn btn-text-primary">Explore <i class="bi bi-chevron-compact-right greter"></i></button>
                           <span class="star1"><i class="bi bi-star-fill "></i> Rated</span>
                           </div>

                            {/* <a href="#" class="card-button fw-700">Read more<i class="fas fa-arrow-right"></i></a> */}
                        </figcaption>
                    </figure>
  </div>
                    </div>

                </div>
                </div>
        </div>
    );
};

export default Banner;