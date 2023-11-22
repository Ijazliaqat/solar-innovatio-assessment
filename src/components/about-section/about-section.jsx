import React from "react";
import "./about-section.css";
import UserProfile1 from '../../assets/Testoni-Cristian.png'
import UserProfile2 from '../../assets/Gavioli.png'
import UserProfile3 from '../../assets/Massimo.png'
import { userCards } from "./about-dummy-data";

const AboutSection = () => {
    return (
        <div>
            <section className="testimonial_section py-5 position-relative text-center">
                <div className="container-fluid container-lg">
                    <h2 className="main_heading font-poppins fs-36 fst-normal fw-600 line-height-30 text-uppercase  exta_style_img">
                        Chi Siamo
                    </h2>
                    <p className="testimonial_text darkgray-color text-center font-poppins fst-normal fw-400 line-height-26">
                        Solar Innovatio è una PMI innovativa italiana specializzata nella
                        progettazione e realizzazione di sistemi fotovoltaici intelligenti.
                        Solar Innovatio unisce alla decennale esperienza maturata nel
                        panorama italiano nell'ambito delle soluzioni fotovoltaiche un
                        approccio ingegneristico, innovativo, digitale alla principale fonte
                        di energia rinnovabile.
                    </p>
                    <div className="row g-3 justify-content-sm-center mt-4">
                        {userCards.map((item) => {
                            return (
                                <>
                                    <div key={item.id} className="col-sm-6 col-md-4">
                                        <div className="h-100 d-flex align-items-center flex-column testimonial">
                                            <div className="card_imag_wrapper">
                                                <img
                                                    src={item.img}
                                                    className="card-img-top"
                                                    alt="Gavioli"
                                                />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="darkgray-color text-center font-poppins fs-20 fst-normal fw-500 line-height-22">{item.title}</h5>
                                                <p className=" lightgray-color text-center font-poppins fs-14 fst-normal fw-400 line-height-20">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <p className="testimonial_quote px-3">
                        Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una
                        componente di una soluzione ingegneristica più completa che
                        comprende sensoristiche avanzate e l'integrazione con i sistemi
                        domotici di casa.
                    </p>
                    <span className="autor_name">Cristian Testoni</span>
                </div>
            </section>
        </div>
    );
};

export default AboutSection;
