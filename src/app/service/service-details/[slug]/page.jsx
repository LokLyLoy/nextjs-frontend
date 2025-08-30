import React from 'react';
import TopNav from "@/components/Header/TopNav/TopNav";
import Menu from "@/components/Header/Menu/Menu";
import Footer from "@/components/Footer/Footer";
import Partner from "@/components/Partner/Partner";
import Breadcrumb from "@/components/Section/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const Page = ({ slug }) => {
    return (
        <div className="overflow-x-hidden">
            <header id="header" className="shadow-sm">
                <TopNav />
                <Menu />
            </header>

            <main className="content">
                <Breadcrumb
                    link="Our Services Details"
                    img="/images/header.webp"
                    title="Our Services Details"
                    desc="At LokLy’s Management System, we offer a comprehensive suite of tools and services designed to streamline and simplify your business operations. Whether you’re running a retail shop, wholesale distributor, or service-based business, our system adapts to your needs."
                />

                <section className="content-detail-block lg:py-[100px] sm:py-16 !py-10">
                    <div className="container">
                        <div className="flex flex-col items-center xl:flex-row !gap-8">
                            <div className="w-full xl:w-3/4">
                                <div className="xl:pr-[80px]">
                                    <h3 className="heading3">
                                        Cryptocurrency Trading
                                    </h3>

                                    <div className="bg-img !mt-5 !mb-5">
                                        <Image
                                            width={5000}
                                            height={5000}
                                            src="/images/assessment.webp"
                                            alt="img"
                                            className="w-full h-full rounded-2xl shadow-md"
                                        />
                                    </div>

                                    <p className="body2 text-secondary !mt-4 leading-relaxed">
                                        Our platform is designed to deliver seamless performance and reliability, ensuring that every interaction feels intuitive and efficient. By combining modern technology with a user-focused approach, we create solutions that help businesses grow and adapt in an ever-changing digital landscape. Whether you’re managing data, engaging with clients, or streamlining operations, our tools are built to provide clarity, scalability, and long-term value.
                                    </p>
                                </div>
                            </div>

                            <aside className="w-full xl:w-1/4">
                                <div className="more-infor border border-line rounded-xl !py-8 !px-8">
                                    <h6 className="heading6 text-center">
                                        Our best services
                                    </h6>
                                    <p className="body3 text-secondary !mt-2">
                                        We provide reliable, innovative, and tailored solutions designed to meet your needs and deliver lasting value.
                                    </p>

                                    <nav className="list-nav !mt-5">

                                        <Link className='nav-item rounded-lg flex-between' href='/'>
                                            <div className='text-button text-secondary'>
                                                payment solution
                                            </div>
                                        </Link>

                                        <Link className='nav-item rounded-lg flex-between' href='/'>
                                            <div className='text-button text-secondary'>
                                                personal finance
                                            </div>
                                        </Link>

                                        <Link className='nav-item rounded-lg flex-between' href='/'>
                                            <div className='text-button text-secondary'>
                                                online banking
                                            </div>
                                        </Link>


                                        <Link className='nav-item rounded-lg flex-between' href='/'>
                                            <div className='text-button text-secondary'>
                                                financial planning
                                            </div>
                                        </Link>

                                    </nav>
                                </div>

                                <div className='ads-block rounded-lg md:mt-10 !mt-6 relative'>
                                    <div className='bg-img'>
                                        <Image width={5000} height={5000} src='/images/ads.webp' alt='ads'/>
                                    </div>

                                    <div className='text flex flex-col justify-between absolute left-0 top-0 w-full h-full !p-8'>
                                        <div className='title'>
                                            <div className='heading5 text-white'>
                                                Let's Talk
                                            </div>

                                            <div className='body3 text-white !mt-4'>
                                                Save time. Boost productivity. Grow faster.
                                            </div>
                                        </div>

                                        <div className='button-block md:mt-10 !mt-6 '>
                                            <Link className='button-main hover:bg-black hover:text-white inline-block bg-white text-button' href='/contact'>Contact Us</Link>
                                        </div>

                                    </div>
                                </div>

                            </aside>
                        </div>
                    </div>
                </section>
            </main>

            <Partner className="lg:mt-[100px] sm:mt-16 mt-10" />

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    );
};

export default Page;
