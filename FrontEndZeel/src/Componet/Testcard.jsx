import React from 'react'
import '../Componet/CSS/Tested.css'

function Testcard() {
  return (
    <>
      <div class="shell">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="wsk-cp-product">
                <div class="wsk-cp-img">
                  <img
                    src="https://3.bp.blogspot.com/-eDeTttUjHxI/WVSvmI-552I/AAAAAAAAAKw/0T3LN6jABKMyEkTRUUQMFxpe6PLvtcMMwCPcBGAYYCw/s1600/001-culture-clash-matthew-gianoulis.jpg"
                    alt="Product"
                    class="img-responsive"
                  />
                </div>
                <div class="wsk-cp-text">
                  <div class="category">
                    <span>Ethnic</span>
                  </div>
                  <div class="title-product">
                    <h3>My face not my heart</h3>
                  </div>
                  <div class="description-prod">
                    <p>
                      Description Product tell me how to change playlist height
                      size like 600px in html5 player. player good work now
                      check this link
                    </p>
                  </div>
                  <div class="card-footer">
                    <div class="wcf-left">
                      <span class="price">Rp500.000</span>
                    </div>
                    <div class="wcf-right">
                      <a href="#" class="buy-btn">
                        <i class="zmdi zmdi-shopping-basket"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
         </div>
      </div>
    </>
  );
}

export default Testcard