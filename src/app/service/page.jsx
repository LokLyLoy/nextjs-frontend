import React from 'react';
import TopNav from "@/components/Header/TopNav/TopNav";
import Menu from "@/components/Header/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import Partner from "@/components/Partner/Partner";
import Breadcrumb from "@/components/Section/Breadcrumb";
import AboutSection from "@/components/Section/AboutSection";
import Counter from "@/components/Section/Counter";
import Service from "@/components/Service/Service";
import serviceData from "@/data/service.json";
import Image from "next/image";

const Page = () => {
    return (
        <div className='overflow-x-hidden'>
            <header id="header">
                <TopNav />
                <Menu/>
            </header>

            <main className='content'>
                <Breadcrumb
                    link="Our Services"
                    img="/images/header.webp"
                    title="Our Services"
                    desc="At LokLy’s Management System, we offer a comprehensive suite of tools and services designed to streamline and simplify your business operations. Whether you’re running a retail shop, wholesale distributor, or service-based business, our system adapts to your needs."
                />

                <div className='!mt-[100px] !mb-10'>
                    <div className='container'>
                        <div className='flex gap-8 max-lg:flex-col-reverse'>
                            <div className='w-full lg:w-1/2 flex flex-col justify-between gap-5 !pr-10 text-center'>

                                <div className='heading3'>
                                    Our Services
                                    <div className='body2 text-secondary !mt-4'>
                                        At <strong>Lok Ly</strong>, we offer a suite of powerful, user-friendly tools designed to help businesses manage operations efficiently. From inventory tracking and sales reporting to financial management and customer insights, our platform is built to simplify your daily workflow. Whether you're a small business or a growing enterprise, our goal is to provide reliable solutions that save time, reduce errors, and support smarter decisions. With responsive support and continuous improvements, we’re here to help your business thrive.
                                    </div>
                                </div>

                            </div>

                            <div className='w-full lg:w-1/2'>
                                <div className='bg-img w-full overflow-hidden rounded-xl'>
                                    <Image
                                        src='/images/assessment.webp'
                                        alt='img'
                                        width={5000}
                                        height={5000}
                                        className='w-full h-full block'
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Counter className="lg:pb-[50px] sm:pb-16 !pb-10"/>
                <Service data={serviceData}/>
            </main>

            <Partner className="lg:mt-[100px] sm:mt-16 !mt-10"/>

            <footer className='footer'>
                <Footer/>
            </footer>
        </div>
    );
};

export default Page;