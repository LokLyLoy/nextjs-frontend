'use client'
import React, {useRef} from 'react';
import {useInView} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import * as Icon from '@phosphor-icons/react'

const PaymentGatewayTwo = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
    <>
        <section className='payment-gateway-one style-second lg:mt-[100px] sm:mt-16 !mt-10' ref={ref}>
            <div className='container'>
                <div className='content flex items-center !gap-8'>
                    <div className='w-full xl:w-5/12 flex flex-col !gap-y-6'>
                        <h3 className='heading3'>Payment Gateway Services</h3>
                        <div className='body3 text-secondary'>Fast, Secure, and Seamless Transactions – Accept payments
                            globally with our cutting-edge payment gateway. Multiple payment methods, real-time
                            processing, and top-tier security for businesses of all sizes.
                        </div>

                        <div className='button-block'>
                            <Link href='/'
                                  className='button-main bg-black hover:bg-white !text-white bg-blue !rounded-full hover:shadow-xl'>
                                Get Started
                            </Link>

                        </div>
                    </div>

                    <div className='w-11/12 xl:w-7/12'>
                        <div className='right !pl-10' style={{transform: isInView ? "none" : 'translateY(60px)', opacity: isInView ? 1 : 0, transition: 'all 0.7s cubic-bezier(0.17, 0.55, 1) 0.3s'}}>
                            <div className='bg-img'>
                                <Image
                                    width={5000}
                                    height={5000}
                                    src='/images/gateway2-bg.webp'
                                    alt='img'
                                    className='w-full'
                                />

                            </div>
                            <div className='feature-item !py-4 !px-6 rounded-2xl bg-white inline-flex items-center !gap-4 box-shadow'>
                                <i className='icon-list text-2xl bg-orange-300 !p-4 rounded-2xl bg-red-400'></i>
                                <div className='text'>
                                    <div className='heading7'>2K+</div>
                                    <div className='heading7 text-secondary'>Projects</div>
                                </div>
                            </div>

                            <div className='feature-item !py-4 !px-6 rounded-2xl bg-white inline-flex items-center !gap-4 box-shadow'>
                                <Icon.Star weight='bold' className='text-yellow-600 text-4xl'/>
                                <div className='text'>
                                    <div className='heading7'>4.8</div>
                                    <div className='heading7 text-secondary'>Satisfaction</div>
                                </div>
                            </div>

                            <div className='feature-item !py-4 !px-6 rounded-2xl bg-white inline-flex items-center !gap-4 box-shadow'>
                                <Icon.Users weight='bold' className='text-red-800 text-4xl'/>
                                <div className='text'>
                                    <div className='heading7'>10 Years+</div>
                                    <div className='heading7 text-secondary'>Experience</div>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </section>
    </>
    );
};

export default PaymentGatewayTwo;