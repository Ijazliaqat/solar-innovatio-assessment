import React from 'react'
import NavBar from '../../components/nav-bar/nav-bar'
import BannerSection from '../../components/banner-section/banner-section'
import AboutSection from '../../components/about-section/about-section'
import FeatureSection from '../../components/feature-section/feature-section'
import FeatureItemSection from '../../components/feature-item-section/feature-item-section'
import InstallationSection from '../../components/installation-section/installation-section'
import FaqsContactSection from '../../components/faqs-contact-section/faqs-contact-section'
import SubscriptionSection from '../../components/subscription-section/subscription-section'
import Footer from '../../components/footer/footer'

const HomePage = () => {
    return (
        <>
            <NavBar />
            <BannerSection />
            <AboutSection />
            <FeatureSection />
            <FeatureItemSection />
            <InstallationSection />
            <FaqsContactSection />
            <SubscriptionSection />
            <Footer />
        </>
    )
}

export default HomePage