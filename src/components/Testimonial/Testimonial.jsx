'use client'
import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import * as Icon from '@phosphor-icons/react';
import Image from "next/image";
import Link from 'next/link';
import 'swiper/css/bundle';

const Testimonial = () => {
    return (
    <>
        <div className='testimonial-block bg-slate-100'>
            <div className='container'>
                <div className='testimonial-main bg-surface lg:pt-20 sm:pt-16 !pt-10 lg:pb-12 !pb-8 sm:my-16 !my-10 lg:rounded-[40px] rounded-2xl flex items-center justify-center'>
                    <div className='content sm:w-2/3 !w-[85%]'>
                        <div className='heading3 text-center'>
                            Trusted By Professionals
                        </div>

                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1}
                            navigation={{
                                prevEl: '.prev-arrow',
                                nextEl: '.next-arrow'
                            }}
                            loop={true}
                            pagination={{clickable: true}}
                            speed={400}
                            modules={[Pagination, Autoplay, Navigation]}
                            className='h-full relative lg:mt-10 !mt-7'
                            autoplay={{
                                delay: 3000
                            }}
                        >
                            <SwiperSlide className='lg:pb-24 !px-20 !pb-20'>
                                <div className='text-2xl font-medium text-center'>
                                    {String.raw`"`}The team delivered a robust and scalable solution ahead of schedule. Communication was clear, and they handled every detail with precision. We’ll definitely collaborate again.{String.raw`"`}
                                </div>
                                <div className='text-button text-center mt-5'>
                                    — Sophia R., CTO at Finex Systems
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='lg:pb-24 !px-10'>
                                <div className='text-2xl font-medium text-center'>
                                    {String.raw`"`}I had zero tech experience, but they made the whole process easy. My site looks amazing, runs fast, and it even works on mobile perfectly. Couldn’t be happier!{String.raw`"`}
                                </div>
                                <div className='text-button text-center mt-5'>
                                    — Dave M., Small Business Owner
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='lg:pb-24 !px-20'>
                                <div className='text-2xl font-medium text-center'>
                                    {String.raw`"`}From backend architecture to frontend polish, they nailed it. Our app runs smoother than ever, and the UI is super intuitive now. Legit lifesavers.{String.raw`"`}
                                </div>
                                <div className='text-button text-center mt-5'>
                                    — Karan P., Product Manager at Flowmetrics
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>

                </div>
            </div>
        </div>

    </>
    );
};

export default Testimonial;