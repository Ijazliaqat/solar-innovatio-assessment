import React from 'react'
import './subscription-section.css'
import NewsLetterSVG from '../../assets/newsletter-send.svg'

const SubscriptionSection = () => {
  return (
    <div>

      <section className="news_letter_section mt-5">
        <div className="container-fluid container-lg">
          <div className="row">
            <div className="col-md-7 col-lg-8">
              <h4 className="text-white font-poppins fs-24 fst-normal fw-600 line-height-19">Subscribe for Newsletter</h4>
              <p className="news_letter_text text-white font-poppins fs-16 fst-normal fw-400 line-height-18">Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci maecenas
                tortor odio</p>
            </div>
            <div className="col-md-5 col-lg-4 d-flex align-items-center">
              <div className="newsLwtter_input_wrapper rounded-pill position-relative w-100">
                <input type="text" className="form-control newsLwtter_input  rounded-pill" placeholder="Inserisci la tua email" />
                <button className="Send_icon_wrapper rounded-circle d-flex align-items-center justify-content-center ">
                  <img src={NewsLetterSVG} alt="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </section >

    </div >
  )
}

export default SubscriptionSection