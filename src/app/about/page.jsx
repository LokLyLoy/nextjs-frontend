import React from 'react';
import TopNav from "@/components/Header/TopNav/TopNav";
import Menu from "@/components/Header/Menu/Menu";
import Partner from "@/components/Partner/Partner";
import Footer from "@/components/Footer/Footer";
import Breadcrumb from "@/components/Section/Breadcrumb";
import AboutSection from "@/components/Section/AboutSection";
import Service from "@/components/Service/Service";
import serviceData from '@/data/service.json';
import Counter from "@/components/Section/Counter";

const Page = () => {
    return (
    <div className='overflow-x-hidden'>
        <header id="header">
            <TopNav />
            <Menu />
        </header>

        <main className='content'>
            <Breadcrumb
                link="About Us"
                img="/images/header.webp"
                title="About Us"
                desc="At LyCoding, we build smart, user-friendly solutions to help businesses work better. Our mission is to simplify operations through modern technology, clear design, and reliable support. Whether you're starting out or scaling up, we're here to help you grow"
            />
            <AboutSection/>
            <Counter className="lg:pb-[50px] sm:pb-16 !pb-10"/>
            <Service data={serviceData}/>
        </main>

        <Partner className="lg:mt-[100px] sm:mt-16 !mt-10"/>

        <footer id='footer'>
            <Footer/>
        </footer>

    </div>
    );
};

export default Page;