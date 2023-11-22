import React from 'react'
import './feature-item-section.css'
import { featureItems, featureItemsCard, featureItemsSpecification } from './feature-dummy-data'

const FeatureItemSection = () => {
    return (
        <div>
            <section className="connected_smart_sec text-center mt-5">
                <div className="container-fluid container-lg">
                    <h2 className="main_heading connect_smart darkgray-color font-poppins fs-36 fw-600 fst-normal line-height-30">
                        Connesso, Intelligente, Resistente
                    </h2>
                    <div className="row  feature-items">
                        {featureItems.map((item) => {
                            return (
                                <>
                                    <div key={item.id} className="col-sm-6 col-lg-6">
                                        <div className="connected_smart_inner d-flex">
                                            <div className="icon_wrapper rounded-circle d-flex align-items-center justify-content-center"><img
                                                src={item?.icon} alt="verstile-icon" /></div>
                                            <div className="connected_text_info">
                                                <h4 className='black-color font-poppins fs-20 fst-normal fw-600 line-height-16'>{item?.title}</h4>
                                                <p className='darkgray-color font-poppins fs-18 fst-normal fw-400 line-height-23'>{item?.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )

                        })}
                    </div>
                </div>

            </section>

            <section className="Why_SIRE  text-center">
                <div className="container-fluid container-lg">
                    <h2 className="main_heading Why_SIRE_main_heading darkgray-color font-poppins fs-36 fst-normal fw-600 line-height-30">
                        Perchè S.I.R.E.
                    </h2>
                    <div className="row gy-4 justify-content-sm-center">

                        {featureItemsCard.map((item) => {
                            return (
                                <>
                                    <div key={item.id} className="col-sm-6 col-md-4 mt-5">
                                        <div className="card  h-100 d-flex align-items-center flex-column Why_SIRE_card align-items-center ">
                                            <div className="card_icon_wrapper">
                                                <img src={item.icon} className="card-img-top" alt="icon" />
                                            </div>
                                            <div className="card-body Why_SIRE_card_body p-0">
                                                <h5 className=" darkgray-color font-poppins text-center fs-24 fst-normal fw-600 line-height-50">{item.title}</h5>
                                                <p className="darkgray-color font-poppins text-center fs-16  fst-normal fw-400 line-height-26">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>

            </section>

            <section className="why_sire_subsection text-center mt-5">
                <div className="container-fluid container-lg">
                    <div className="row gy-4">

                        {featureItemsSpecification.map((item) => {
                            return (
                                <>
                                    <div key={item.id} className="col-sm-6 col-lg-3">
                                        <div className="card  Why_SIRE_subsection_card  h-100 d-flex align-items-center flex-column align-items-center ">
                                            <div className="why_sire_subsection_icon_wrapper">
                                                <img src={item.icon} className="card-img-top" alt="icon" />
                                            </div>
                                            <div className="card-body Why_SIRE_subsection_card_body p-0">
                                                <h5 className="darkgray-color text-center font-poppins text-center fs-24 fst-normal fw-600 line-height-24">{item?.title}</h5>
                                                <p className="lightgray-color text-center font-poppins fs-16 fst-normal fw-400 line-height-24">{item?.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>

            </section>

        </div>
    )
}

export default FeatureItemSection