import React from 'react'
import './banner-section.css'

const BannerSection = () => {
    return (
        <div className=''>
            <section className="banner_section d-flex align-items-center justify-content-center flex-column">
                <h1 className="banner_header text-white fs-64 fst-normal font-poppins line-height-56 fw-700 text-center">Il tuo accesso al sole</h1>
                <p className="font-poppins text-white fs-24 fst-normal fw-500 line-height-33 text-center">Sistemi fotovoltaici intelligenti ad uso residenziale, anche in assenza di tetto. <br />  La tua
                    fonte d'energia, gratuita e sostenibile</p>
            </section>
        </div>
    )
}

export default BannerSection