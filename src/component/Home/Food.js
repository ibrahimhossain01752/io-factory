import React from 'react';
import './Food.css';
import elipse from './../../assets/Ellipse 2 (1).png';
import vector7 from './../../assets/Vector (7).png';


const Food = () => {
    return (
      <div className='banner-main11 text-white margin'>
        <p class="text-center mt-4 para5">F O O D   G U I D E</p>
            <hr class="horizontal11 mx-auto"/>
      <div className="banner-overlay33 margin">
      <div className="container col-md-12 col-sm-6">
          <div className="row">
        
              <div className="col-lg-4">
                  <div className="banner-content  text-md-start">
                  <div class="cad13 container" >
                    <div class="">
                      <img class="elipse1" src={elipse} alt="..."/> <img class="vector7 " src={vector7} alt="..."/>
                     <div class="vage">
                     <h6 class="vagetables">VEGETABLES</h6>
                     <p class="para1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                     </div>
                    </div>
                    <div class="casd2">
                      <img class="elipse1" src={elipse} alt="..."/> <img class="vector7 " src={vector7} alt="..."/>
                     <div class="vage">
                     <h6 class="vagetables">VEGETABLES</h6>
                     <p class="para1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                     </div>
                    </div>
                  <div>
               </div>
              </div>
                  </div>

              </div>
             
              <div className="col-lg-4"></div>
         
              <div className="col-lg-4">
              <div >
                  <div class="cad13 container" >
                    <div class="">
                      <img class="elipse2" src={elipse} alt="..."/> <img class="vector7 " src={vector7} alt="..."/>
                     <div class="vage">
                     <h6 class="vagetables1">VEGETABLES</h6>
                     <p class="para2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                     </div>
                    </div>
                    <div class="casd2">
                      <img class="elipse2" src={elipse} alt="..."/> <img class="vector7 " src={vector7} alt="..."/>
                     <div class="vage">
                     <h6 class="vagetables1">VEGETABLES</h6>
                     <p class="para2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                     </div>
                    </div>
                  <div>
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

export default Food;