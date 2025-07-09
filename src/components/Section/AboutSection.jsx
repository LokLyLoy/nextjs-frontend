'use client'
import React from 'react';
import Image from "next/image";
import * as Icon from '@phosphor-icons/react'

const AboutSection = () => {
    return (
        <div className='about-block lg:py-[100px] sm:py-16 !py-10 bg-white'>
            <div className='container'>
                <div className='row flex max-lg:flex-col lg:items-center gap-y-6'>
                    <div className='w-full lg:w-1/2'>
                        <div className='bg-img w-full overflow-hidden rounded-3xl'>
                            <Image
                                src='/images/assessment.webp'
                                alt=''
                                width={4000}
                                height={4000}
                                className='w-full h-full block'
                            />
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 flex flex-col [@media(min-width:1024px)]:!pl-20 items-center'>
                        <div className='heading3'>Financial Management</div>

                        <div className='nav-infor !mt-8'>
                            <div className='title text-secondary !mt-4'>
                                Our financial management system helps businesses take control of their finances with ease and accuracy. From tracking income and expenses to generating detailed reports, our tools simplify budgeting, forecasting, and decision-making. Whether you're managing daily transactions or long-term planning, we provide the insights you need to grow with confidence and stability.
                            </div>
                        </div>

                        <div className='button-block flex items-center gap-3 md:mt-10 !mt-6 !pb-2'>
                            <a href='#' className='button-main text-white bg-blue-800 hover:bg-black text-button !rounded-full'>
                                Get Started
                            </a>

                            <a href='#' className='button-main text-on-surface hover:bg-black hover:text-white hover:border-transparent bg-white text-button !rounded-full border-2 border-blue-800 !flex relative items-center gap-2'>
                                <Icon.Phone className='hover:text-white'/>
                                +855-97 4496 431
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutSection;