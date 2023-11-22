import React from 'react'
import './installation-section.css'
import CardImage1 from '../../assets/chose-sire-card-img.png'
import CardImage2 from '../../assets/full-sire_img.png'
import SubCardImage1 from '../../assets/why-sire-sub-card-icon2.svg'
import SubCardImage2 from '../../assets/family-icon.svg'
import { installationDummyData } from './installation-dummy-data'

const InstallationSection = () => {
    return (
        <div>
            <section className="choose_your_SIRE mt-5 ">
                <div className="container-fluid container-lg">
                    <h2 className="main_heading choose_your_SIRE_main_heading text-center darkgray-color font-poppins fs-36 fst-normal fw-600 line-height-30">Scegli il tuo SIRE</h2>
                    <div className="row gy-4">
                        <div className="col-md-6 ">
                            <div className="card h-100 chose_your_sire_card">
                                <div className="choose_your_SIRE_card_img_wrapper">
                                    <img src={CardImage1} className="card-img-top" alt="card" />
                                </div>
                                <div className="card-body choose_your_sire_body">
                                    <h5 className="card-title font-poppins fst-normal fs-24 fw-600 line-height-20">S.I.R.E Direct</h5>
                                    <ul className="chose_sire_list">
                                        <li className="list_item lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">Sistema Plugin</li>
                                        <li className="list_item lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">Struttura meccanizzata in poliuera e sensoristica intelligente</li>
                                        <li className="list_item lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">Pannelli alta efficienza da 1KW</li>
                                        <li className="list_item lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">Inverter e conne ssione aII'impianto domestico</li>
                                        <li className="list_item lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">App di controllo e gesti one</li>
                                    </ul>
                                    <h6 className="card_second_title darkgray-color font-inter fs-16 fst-normal fw-500 line-height-13">CONSIGLIATO PER:</h6>
                                    <div className="recomended_for_card  d-flex align-items-center ">
                                        <div className="small_card_wrapper">
                                            <div className="icon_wraper rounded-circle d-flex align-items-center justify-content-center">
                                                <img src={SubCardImage1} alt="icon" />
                                            </div>
                                            <p className="small_card_name lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-17">Devices</p>
                                        </div>
                                        <div className="small_card_wrapper">
                                            <div className="icon_wraper rounded-circle d-flex align-items-center justify-content-center">
                                                <img src={SubCardImage2} alt="icon" />
                                            </div>
                                            <p className="small_card_name lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-17">Families</p>
                                        </div>
                                    </div>
                                    <div className="accordion accordion-flush" id="accordionExample">
                                        <div className="accordion-item card_inner_accordion">
                                            <h3 className="accordion-header" id="headingOne">
                                                <button className="accordion-button darkgray-color fst-normal font-poppins fs-16  fw-500 line-height-27 bg-white" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Scopri le caratteristiche tecniche
                                                </button>
                                            </h3>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body Card_inner_accordionBody">
                                                    <ul className="List">
                                                        <li className=" mb-2 lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">Te mpo di ricarica medio in estate</li>
                                                        <li className="mb-2 lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">Te mpo di ricarica medio in estate</li>
                                                        <li className="mb-2 lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">TBD Autonomia dalla rete elettrica.</li>
                                                        <li className="mb-2 lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">TBD Autonomia in casa di blackout.</li>
                                                        <li className="mb-2 lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">2gg Immissione di CO2 da 1.022 kg a SOO kg annui</li>
                                                        <li className="mb-2 lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">Te mpo di ricarica medio in estate.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card h-100 chose_your_sire_card">
                                <div className="choose_your_SIRE_card_img_wrapper">
                                    <img src={CardImage2} className="card-img-top" alt="card img" />
                                </div>
                                <div className="card-body choose_your_sire_body">
                                    <h5 className="card-title font-poppins fst-normal fs-24 fw-600 line-height-20">S.I.R.E Full</h5>
                                    <ul className="chose_sire_list">
                                        <li className="list_item lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">Struttura meccanizzata in poliuera e sensoristica intelligente</li>
                                        <li className="list_item lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">Pannelli alta efficienza da 1KW</li>
                                        <li className="list_item lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">Inverter e conne ssione aII'impianto domestico</li>
                                        <li className="list_item lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">App di controllo e gesti one</li>
                                    </ul>
                                    <h6 className="card_second_title darkgray-color font-inter fs-16 fst-normal fw-500 line-height-13">CONSIGLIATO PER:</h6>
                                    <div className="recomended_for_card  d-flex align-items-center ">
                                        <div className="small_card_wrapper">
                                            <div className="icon_wraper rounded-circle d-flex align-items-center justify-content-center">
                                                <img src={SubCardImage1} alt="icon" />
                                            </div>
                                            <p className="small_card_name lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-17">Devices</p>
                                        </div>
                                        <div className="small_card_wrapper">
                                            <div className="icon_wraper rounded-circle d-flex align-items-center justify-content-center">
                                                <img src={SubCardImage2} alt="icon" />
                                            </div>
                                            <p className="small_card_name lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-17">Families</p>
                                        </div>
                                    </div>
                                    <div className="accordion accordion-flush" id="accordionExample">
                                        <div className="accordion-item card_inner_accordion">
                                            <h3 className="accordion-header" id="headingOne">
                                                <button className="accordion-button darkgray-color fst-normal font-poppins fs-16  fw-500 line-height-27 bg-white" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                                    Scopri le caratteristiche tecniche
                                                </button>
                                            </h3>
                                            <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body Card_inner_accordionBody">
                                                    <ul className="List">
                                                        <li className="mb-2 lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">Siste ma 2 kW con accumuIo.</li>
                                                        <li className="mb-2 lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">Tempo di ricarica medio in estate is 5 ore e 30 minuti</li>
                                                        <li className="mb-2 lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">Te mpo di scarica a 16A is 8 ore.</li>
                                                        <li className="mb-2 lightgray-color font-poppins fs-16 fst-normal fw-400 line-height-10">Autonomia dalla rete eIettrica 62Po.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="connect_to_sun_sect text-center mt-5">
                <div className="container-fluid container-lg pt-5">
                    <h2 className="main_heading connect_to_sun_sect_main_heading text-center darkgray-color font-poppins fs-36 fst-normal fw-500 line-height-30">Connettiti al sole anche tu</h2>
                    <div className="row gy-4 Changed_border_style py-4">
                        {installationDummyData.map((item) => {
                            return (
                                <>
                                    <div key={item.id} className="col-sm-6 col-lg-3 colums " >
                                        <div className={`connet_to_sun_outer_wrapper ${item.className}`}>
                                            <div className="card connect_to_sun_card  h-100 d-flex align-items-center flex-column align-items-center ">
                                                <div className="card_icon_wrapper">
                                                    <img src={item.icon} className="card-img-top" alt="icon" />
                                                </div>
                                                <div className="card-body Why_SIRE_card_body connect_to_sun_body p-0">
                                                    <h5 className="card-title text-center font-inter fs-16 fst-normal fw-500 line-height-13 my-3">{item.title} </h5>
                                                    <p className="card-text text-center font-inter fs-14 fst-normal fw-400 line-height-17 ">{item.description}</p>
                                                </div>
                                            </div>
                                           { item.id===4 ? false : <img className='arrow_icon_wrapper d-none d-md-block darkgray-color' src={item?.arrowImage} alt="" />}
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        <div className="button_wrapper">
                            <button type="button" className="btn primary-bg-color fs-16 fw-500 text-white font-poppins line-height-13 py-2">Collegati al sole</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InstallationSection