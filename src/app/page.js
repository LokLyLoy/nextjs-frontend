import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Slider from "@/components/Slider/Slider";
import React from "react";
import Service from "@/components/Service/Service";
import serviceData from '@/data/service.json';
import PaymentGateway from "@/components/PaymentGateway/PaymentGateway";
import CasesStudy from "@/components/CasesStudy/CasesStudy";
import PaymentGatewayTwo from "@/components/PaymentGateway/PaymentGatewayTwo";
import FormRequest from "@/components/FormRequest/FormRequest";
import Testimonial from "@/components/Testimonial/Testimonial";
import Blog from "@/components/Blog/Blog";
import blogData from "@/data/blog.json";
import Partner from "@/components/Partner/Partner";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>

      <main className='content'>
        <Slider/>
        <Service data={serviceData}/>
        <PaymentGateway/>
        <CasesStudy/>
        <PaymentGatewayTwo/>
        <FormRequest/>
        <Testimonial/>
        <Blog data={blogData}/>
      </main>

      <Partner className="lg:mt-[100px] sm:mt-16 !mt-10"/>

      <footer id='footer'>
          <Footer/>
      </footer>
    </div>
  );
};

export default page;
