'use client'
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import * as Icon from '@phosphor-icons/react';
import Image from "next/image";
import Link from 'next/link';
import 'swiper/css/bundle';

const Slider = () => {
    return (
        <>
            <div className='slider-block relative'>
                <div className='prev-arrow items-center justify-content'>
                    <Icon.CaretLeft className='text-white heading6' weight='bold'/>
                </div>

                <div className='slider-main '>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.prev-arrow',
                            nextEl: '.next-arrow'
                        }}
                        loop={true}
                        pagination={{clickable: true}}
                        speed={400}
                        modules={[Pagination, Autoplay, Navigation]}
                        className='h-full relative'
                        autoplay={{
                            delay: 3000
                        }}
                    >
                        <SwiperSlide>
                            <div className='slider-item slider-first'>
                                <div className='bg-img'>
                                    <Image
                                        src={'/images/slider/one.jpg'}
                                        width={4000}
                                        height={3000}
                                        priority={true}
                                        alt='slider1'
                                        className='h-full w-full object-cover'
                                    />
                                </div>

                                <div className='container'>
                                    <div className='text-content flex-column-between'>
                                        <div className='heading2'>
                                            <div className='relative overflow-hidden'>
                                                <span className='block relative overflow-hidden'>Simplify and Secure</span>
                                                <span className='block absolute top-0 left-0 w-full h-full'>Simplify and Secure</span>
                                            </div>

                                            <div className='relative overflow-hidden'>
                                                <span className='block relative overflow-hidden'>Our Solution</span>
                                                <span
                                                    className='block absolute top-0 left-0 w-full h-full'>Our Solution</span>
                                            </div>
                                        </div>
                                        <div className='body mt-3 text-secondary'>
                                            Effortlessly streamline your workflow while ensuring top-notch security. <br/>
                                            Experience innovation, speed, and reliability—built just for you.
                                        </div>
                                        <div className='button-block md:mt-10 !mt-6'>
                                            <Link href='/service' className='button-main bg-blue-700 text-white hover:bg-blue-500'>Discover Now</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='slider-item slider-first'>
                                <div className='bg-img'>
                                    <Image
                                        src={'/images/slider/two.jpg'}
                                        width={4000}
                                        height={3000}
                                        priority={true}
                                        alt='slider1'
                                        className='h-full w-full object-cover'
                                    />
                                </div>

                                <div className='container'>
                                    <div className='text-content flex-column-between'>
                                        <div className='heading2'>
                                            <div className='relative overflow-hidden'>
                                                <span className='block relative overflow-hidden'>Easy to Use</span>
                                                <span className='block absolute top-0 left-0 w-full h-full'>Easy to Use</span>
                                            </div>

                                            <div className='relative overflow-hidden'>
                                                <span className='block relative overflow-hidden'>Our Solution</span>
                                                <span
                                                    className='block absolute top-0 left-0 w-full h-full'>Our Solution</span>
                                            </div>
                                        </div>
                                        <div className='body mt-3 text-secondary'>
                                            Effortlessly streamline your workflow while ensuring top-notch security. <br/>
                                            Experience innovation, speed, and reliability—built just for you.
                                        </div>
                                        <div className='button-block md:mt-10 !mt-6'>
                                            <Link href='/service' className='button-main bg-blue-700 text-white hover:bg-blue-500'>Discover Now</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className='next-arrow items-center justify-content'>
                    <Icon.CaretRight className='text-white heading6' weight='bold'/>
                </div>

            </div>
        </>
    );
};

export default Slider;