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

                <section className="content-detail-block lg:py-[100px] sm:py-16 !py-10 bg-gray-50">
                    <div className="container">
                        <div className="flex flex-col xl:flex-row !gap-10">

                            {/* Main Content */}
                            <div className="w-full xl:w-3/4">
                                <div className="xl:!pr-16">
                                    <h3 className="heading3 font-bold text-gray-900">
                                        Cryptocurrency Trading
                                    </h3>

                                    <div className="bg-img !mt-6 !mb-6">
                                        <Image
                                            width={1600}
                                            height={900}
                                            src="/images/assessment.webp"
                                            alt="Cryptocurrency Trading"
                                            className="w-full h-auto rounded-2xl shadow-lg object-cover"
                                        />
                                    </div>

                                    <p className="body2 text-secondary !mt-4 leading-relaxed">
                                        Our platform is designed to deliver seamless performance and
                                        reliability, ensuring that every interaction feels intuitive
                                        and efficient. By combining modern technology with a
                                        user-focused approach, we create solutions that help businesses
                                        grow and adapt in an ever-changing digital landscape.
                                        Whether you’re managing data, engaging with clients, or
                                        streamlining operations, our tools are built to provide clarity,
                                        scalability, and long-term value.
                                    </p>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <aside className="w-full xl:w-1/4 flex flex-col !gap-8">

                                {/* Services */}
                                <div className="border border-line rounded-2xl !p-8 shadow-sm bg-white">
                                    <h6 className="heading6 text-center font-semibold text-gray-800">
                                        Our Best Services
                                    </h6>
                                    <p className="body3 text-secondary !mt-2 text-center">
                                        Reliable, innovative, and tailored solutions designed to meet
                                        your needs and deliver lasting value.
                                    </p>

                                    <nav className="grid !mt-6 !gap-3">
                                        {[
                                            { title: "Payment Solution", href: "/" },
                                            { title: "Personal Finance", href: "/" },
                                            { title: "Online Banking", href: "/" },
                                            { title: "Financial Planning", href: "/" },
                                        ].map((item, idx) => (
                                            <Link
                                                key={idx}
                                                href={item.href}
                                                className="nav-item !px-4 !py-3 rounded-lg bg-gray-100 hover:bg-primary hover:text-white transition text-button text-secondary"
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </nav>
                                </div>

                                {/* CTA Block */}
                                <div className="relative rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        width={800}
                                        height={500}
                                        src="/images/ads.webp"
                                        alt="Contact Us"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 !p-8 flex flex-col justify-between">
                                        <div>
                                            <h5 className="heading5 text-white font-semibold">
                                                Let's Talk
                                            </h5>
                                            <p className="body3 text-gray-200 !mt-3">
                                                Save time. Boost productivity. Grow faster.
                                            </p>
                                        </div>
                                        <div className="!mt-6">
                                            <Link
                                                href="/contact"
                                                className="button-main bg-white text-black hover:bg-primary hover:text-white transition inline-block !px-6 !py-3 rounded-lg shadow"
                                            >
                                                Contact Us
                                            </Link>
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
