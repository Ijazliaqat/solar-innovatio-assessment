import React from 'react'
import './footer.css'
import FooterLogo from '../../assets/footerLogo.png'
import FerybrandLogo from '../../assets/ferybrand.png'
import FacebookSvg from '../../assets/fb.svg'
import InstagramSvg from '../../assets/insta.svg'
import TwitterSvg from '../../assets/twiter.svg'
import LocationSvg from '../../assets/location-white.svg'
import MessageSvg from '../../assets/message-white.svg'
import PhoneSvg from '../../assets/phone-white.svg'

const Footer = () => {
    return (
        <div>

            <footer className="footer_section">
                <div className="container-fluid container-lg">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer_logo">
                                <img src={FooterLogo} alt="logo" />
                            </div>
                            <p className="footer_description font-poppins fs-16 fst-normal fw-400 line-height-23">Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci
                                maecenas tortor odio Leo dui fermentum tristique urna tellus eget amet aliquam.</p>
                            <div className="brands d-flex align-items-center justify-content-lg-between justify-content-start  flex-wrap ">
                                <div className="brand_wrapper">
                                    <img src={FerybrandLogo} alt="brand logo" />
                                </div>
                                <div className="brand_wrapper">
                                    <img src={FerybrandLogo} alt="brand" />
                                </div>
                                <div className="brand_wrapper">
                                    <img src={FerybrandLogo} alt="brand logo svg" />
                                </div>
                                <div className="brand_wrapper">
                                    <img src={FerybrandLogo} alt="brand img" />
                                </div>
                                <div className="brand_wrapper">
                                    <img src={FerybrandLogo} alt="brand svg" />
                                </div>
                                <div className="brand_wrapper">
                                    <img src={FerybrandLogo} alt="brand log" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <h6 className="Quick_links_heading center_colums_heading font-poppins fs-16  fst-normal fw-600 line-height-15">Quick Links</h6>
                            <ul className="quick_links_list center_colums ">
                                <li><a href="/home" className='font-poppins fs-16  fst-normal fw-500 line-height-12'>Home</a></li>
                                <li><a href="/chi-siamo" className='font-poppins fs-16  fst-normal fw-500 line-height-12'>Chi Siamo</a></li>
                                <li><a href="/features" className='font-poppins fs-16  fst-normal fw-500 line-height-12'>S.I.R.E</a></li>
                                <li><a href="/sire" className='font-poppins fs-16  fst-normal fw-500 line-height-12'>SIRE Features</a></li>
                                <li><a href="/products" className='font-poppins fs-16  fst-normal fw-500 line-height-12'>Why SIRE</a></li>
                                <li><a href="/" className='font-poppins fs-16  fst-normal fw-500 line-height-12'>SIRE Product</a></li>
                                <li><a href="/works" className='font-poppins fs-16  fst-normal fw-500 line-height-12'>How it Works</a></li>
                            </ul>
                        </div>
                        <div className=" col-sm-6 col-lg-3">
                            <h6 className="Quick_links_heading center_colums_heading font-poppins fs-16  fst-normal fw-600 line-height-15">Useful Links</h6>
                            <ul className="quick_links_list center_colums ">
                                <li><a href="/help" className='font-poppins fs-16  fst-normal fw-500 line-height-12'>Help Center</a></li>
                                <li><a href="/privacy" className='font-poppins fs-16  fst-normal fw-500 line-height-12'>Privacy Policy</a></li>
                                <li><a href="/terms" className='font-poppins fs-16  fst-normal fw-500 line-height-12'>Terms & Condition</a></li>
                                <li><a href="/faqs" className='font-poppins fs-16  fst-normal fw-500 line-height-12'>FAQ</a></li>
                            </ul>
                            <h6 className="Quick_links_heading center_colums_heading font-poppins fs-16  fst-normal fw-600 line-height-15">Documents</h6>
                            <ul className="quick_links_list center_colums">
                                <li><a href="/linked" className='font-poppins fs-16  fst-normal fw-500 line-height-12'>Lindked Here</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <h6 className="Quick_links_heading font-poppins fs-16  fst-normal fw-600 line-height-15">Contact Us</h6>
                            <div className="addres_singel_wrapper d-flex align-items-start">
                                <div className="me-3 footer_icon_wrapper"><img id="#my-svg" src={LocationSvg} alt="icon" />
                                </div>
                                <p className="address_single_text footer_add_text mb-0 ">Leo dui fermentum tristique urna tellus eget amet
                                    aliquam. Id vitae
                                    orci</p>
                            </div>
                            <div className="addres_singel_wrapper d-flex align-items-start">
                                <div className="me-3 footer_icon_wrapper"><img src={MessageSvg} alt="icon" /></div>
                                <p className="address_single_text footer_add_text mb-0">email@email.com<br />support@email.com </p>
                            </div>
                            <div className="addres_singel_wrapper d-flex align-items-start">
                                <div className="me-3 footer_icon_wrapper"><img src={PhoneSvg} alt="icon" /></div>
                                <p className="address_single_text footer_add_text mb-0">+29 98595 8998</p>
                            </div>
                        </div>
                    </div>
                    <hr className="footer_divider" />
                        <div className="bottom_footer_info d-flex align-items-center justify-content-between">
                            <p className="copyWight_text font-poppins fst-14  fst-normal fw-400">All Rights Reserved</p>
                            <div className="social_icon_wrapper d-flex align-items-center justify-content-between">
                                <div className="social_icon_wraper">
                                    <a href="/facebook">
                                        <img src={FacebookSvg} alt="Facbook icon" />
                                    </a>
                                </div>
                                <div className="social_icon_wraper">
                                    <a href="/instagram">
                                        <img src={InstagramSvg} alt="Instagram icon" />
                                    </a>
                                </div>
                                <div className="social_icon_wraper">
                                    <a href="/twitter">
                                        <img src={TwitterSvg} alt="Twitter icon" />
                                    </a>
                                </div>
                            </div>
                        </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer