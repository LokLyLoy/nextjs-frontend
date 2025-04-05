'use client'
import React, {useRef} from 'react';
import {useInView} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import * as Icon from '@phosphor-icons/react'

const PaymentGateway = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
    <>
        <section className='payment-gateway-one style-first lg:mt-[100px] sm:mt-16 !mt-10 bg-surface relative bg-slate-300 !mb-10' >
            <div className='bg-img lg:absolute top-0 left-0 lg:w-1/2 w-full h-full flex-shrink-0'>
                <Image
                    src="/images/gateway1.webp"
                    alt='img'
                    width={5000}
                    height={5000}
                    className='w-full h-full object-cover'
                />
            </div>

            <div className='container w-full lg:py-[150px] !pt-14 !py-16'>
                <div className='w-full flex items-center lg:justify-end !ml-3' ref={ref}>
                    <div className='payment-infor lg:w-1/2 xl:pl-20 lg:pt-10' style={{transform: isInView ? "none" : 'translateY(60px)', opacity: isInView ? 1 : 0, transition: 'all 0.7s cubic-bezier(0.17, 0.55, 1) 0.3s'}}>
                        <div className='heading flex items-center !gap-4 max-lg:flex-wrap'>
                            <div className='flex items-center'>
                                <div className='img sm:w-12 !w-10 sm:h-12 !h-10 !rounded-full !overflow-hidden bg-line !p-0 !z-[3]'>
                                    <Image
                                        src="/images/myProfiile.jpg"
                                        alt='img'
                                        width={400}
                                        height={400}
                                        className='full h-full rounded-full'
                                    />
                                </div>
                                <div className='text-button text-secondary !ml-1'>
                                    Trusted By 100B+ People <br/>
                                    Around the Globe
                                </div>
                            </div>
                        </div>

                        <div className='text lg:mt-14 !mt-5'>
                            <h3 className='heading3'>Payment Gateway Services</h3>
                            <div className='body3 text-secondary lg:mt-4 !mt-4'>
                                We offer a seamless and secure payment experience for all transactions. Choose from a variety of trusted payment methods, including credit/debit cards, digital wallets, and bank transfers. Your payment details are encrypted and protected to ensure complete security.
                            </div>
                        </div>

                        <div className='button-block flex items-center max-sm:flex-wrap sm:gap-6 !gap-3 lg:mt-12 !mt-8 w-fit'>
                            <Link className='button-main box-shadow bg-blue-700 hover:bg-black text-white bg-blue whitespace-nowrap !rounded-full hover:shadow-xl' href='/'>Get Started</Link>

                            <div className='relative'>
                                <Link href='/'
                                      className='hover:shadow-xl button-main box-shadow hover:bg-black hover:text-white text-on-surface bg-white !flex !items-center !gap-2 !rounded-full relative !z-[1]'>
                                    <Icon.Phone className='text-xl' weight='fill'/>
                                    <span className='!whitespace-nowrap'>(855) 97 449 4931</span>
                                </Link>

                                <Image
                                    src='/images/component/gateway1-dot.png'
                                    className='absolute -right-12 w-[100px] h-auto top-1/2 -translate-y-1/2'
                                    width={4000}
                                    height={4000}
                                    alt="img"
                                />

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </section>
    </>
    );
};

export default PaymentGateway;