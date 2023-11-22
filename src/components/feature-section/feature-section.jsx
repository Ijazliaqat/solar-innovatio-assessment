import React from 'react'
import SideImage from '../../assets/sideimg.png'
import './feature-section.css'

const FeatureSection = () => {
    return (
        <div>
            <section className="main_side_text_img_section ">
                <div className="container-fluid position-relative  container-lg">
                    <div className="row gy-4 align-items-center">
                        <div className="col-sm-6 col-lg-5">
                            <div className="image_section d-flex">
                                <img src={SideImage} alt="feature image" />
                            </div>
                        </div>
                        <div className="col-sm-6  col-lg-7">
                            <div className="text_section">
                                <h3 className="side_text_small_heading mb-3">S.I.R.E</h3>
                                <h2 className="main_heading  side_text_main">Smart Integrated Renewable Energy</h2>
                                <p className="side_text_SMALL">S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo per la produzione, conversione e gestione
                                    dell'energia solare, studiato specificatamente per installazioni all'interno di condomini.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default FeatureSection