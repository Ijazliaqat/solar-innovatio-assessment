import React from "react";
import "./faqs-contact-section.css";
import LocationSvg from "../../assets/location-icon.svg";
import EmailSvg from "../../assets/email-icon.svg";
import PhoneSvg from "../../assets/phone-icon.svg";

const FaqsContactSection = () => {
  return (
    <div>
      <section className="frequentlty_asked_question_section">
        <div className="container-fluid container-lg">
          <h2 className="main_heading frequently_asked_main_heading position-relative text-center font-poppins fs-33 fw-600 fst-normal line-height-50">
            Frequently Asked Questions
          </h2>
          <div
            className="accordion accordion-flush faq_accordion accordion-flush"
            id="accordionFlushExample"
          >
            <div className="accordion-item mt-5">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed font-poppins fs-16 fst-normal fw-500"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Dove si monta S.I.R.E.?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body px-0 pb-0">
                  <p className="mb-0 darkgray-color font-poppins fs-14 fw-400 line-height-24">
                    S.I.R.E. può essere montato come una tenda sul balcone o
                    come pensilina sulla vetrina, porta, finestra{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed font-poppins fs-16 fst-normal fw-500"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Chi monta l’impianto S.I.R.E.?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body px-0 pb-0">
                  <p className="mb-0 font-poppins fs-14 fw-400 line-height-24">
                    S.I.R.E. può essere montato come una tenda sul balcone o
                    come pensilina sulla vetrina, porta, finestra{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed font-poppins fs-16 fst-normal fw-500"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Quanto tempo impiega l’installazione?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body px-0 pb-0">
                  <p className="mb-0 font-poppins fs-14 fw-400 line-height-24">
                    S.I.R.E. può essere montato come una tenda sul balcone o
                    come pensilina sulla vetrina, porta, finestra{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFoure">
                <button
                  className="accordion-button collapsed font-poppins fs-16 fst-normal fw-500"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFoure"
                  aria-expanded="false"
                  aria-controls="flush-collapseFoure"
                >
                  E’ necessario richiedere autorizzazioni al condominio?
                </button>
              </h2>
              <div
                id="flush-collapseFoure"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFoure"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body px-0 pb-0">
                  <p className="mb-0 font-poppins fs-14 fw-400 line-height-24">
                    S.I.R.E. può essere montato come una tenda sul balcone o
                    come pensilina sulla vetrina, porta, finestra{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed font-poppins fs-16 fst-normal fw-500"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  L’impianto è garantito?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body px-0 pb-0">
                  <p className="mb-0 font-poppins fs-14 fw-400 line-height-24">
                    S.I.R.E. può essere montato come una tenda sul balcone o
                    come pensilina sulla vetrina, porta, finestra{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSix">
                <button
                  className="accordion-button collapsed font-poppins fs-16 fst-normal fw-500"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  E’ necessario predisporre pratiche per il GSE?
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body px-0 pb-0">
                  <p className="mb-0 font-poppins fs-14 fw-400 line-height-24">
                    S.I.R.E. può essere montato come una tenda sul balcone o
                    come pensilina sulla vetrina, porta, finestra{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSeven">
                <button
                  className="accordion-button collapsed font-poppins fs-16 fst-normal fw-500"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSeven"
                  aria-expanded="false"
                  aria-controls="flush-collapseSeven"
                >
                  E’ possibile usufruire di bonus fiscali?
                </button>
              </h2>
              <div
                id="flush-collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingSeven"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body px-0 pb-0">
                  <p className="mb-0 font-poppins fs-14 fw-400 line-height-24">
                    S.I.R.E. può essere montato come una tenda sul balcone o
                    come pensilina sulla vetrina, porta, finestra{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="button_wrapper text-center">
            <button
              type="button"
              className="btn primary-bg-color fs-16 fw-500 text-white font-poppins line-height-13 py-2"
            >
              Collegati al sole
            </button>
          </div>
        </div>
      </section>

      <section className="frequentlty_asked_question_section ">
        <div className="container-fluid container-lg">
          <h2 className="main_heading contact_section text-center darkgray-color font-poppins fs-36 fst-normal fw-600 line-height-30">
            CONTATTACI
          </h2>
          <div className="row gy-4">
            <div className="col-md-5 col-lg-4">
              <div className="contact_addres_box h-100">
                <div className="addres_singel_wrapper d-flex align-items-start">
                  <div className="me-3">
                    <img src={LocationSvg} alt="" />
                  </div>
                  <p className="address_single_text mb-0 lightgray-color fst-normal font-poppins fs-16 fw-400 line-height-21">
                    Leo dui fermentum tristique urna tellus eget amet aliquam.
                    Id vitae orci
                  </p>
                </div>
                <div className="addres_singel_wrapper d-flex align-items-start">
                  <div className="me-3">
                    <img src={EmailSvg} alt="email icon" />
                  </div>
                  <p className="address_single_text mb-0 lightgray-color fst-normal font-poppins fs-16 fw-400 line-height-21">
                    email@email.com
                    <br />
                    support@email.com{" "}
                  </p>
                </div>
                <div className="addres_singel_wrapper d-flex align-items-start">
                  <div className="me-3">
                    <img src={PhoneSvg} alt="phone" />
                  </div>
                  <p className="address_single_text mb-0 lightgray-color fst-normal font-poppins fs-16 fw-400 line-height-21">
                    +29 98595 8998
                  </p>
                </div>
                <hr />
                <p className="Message_note darkgray-color fs-16  font-poppins fw-400 line-height-21 fst-normal">
                  We Will get back to you within 24 hours. Or Call us Now
                </p>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="contact_addres_box h-100">
                <div className="row gy-3">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      aria-label="First name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                    />
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      aria-label="Email"
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      className="form-control textarea "
                      placeholder="Message"
                      id="message"
                    ></textarea>
                  </div>
                  <div className="col-lg-12 text-end ">
                    <button
                      type="button"
                      className=" text-uppercase btn primary-bg-color fs-16 fw-500 text-white font-poppins line-height-13 py-2 px-4"
                    >
                      send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqsContactSection;
