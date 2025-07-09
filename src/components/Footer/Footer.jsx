'use client'
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react";

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div className='footer-block bg-slate-800 !pt-[60px]'>
            <div className='container'>
                <div className='flex max-lg:flex-col max-lg:items-start !gap-y-10 !pb-10'>
                    <div className='lg:w-1/4'>

                        <div className='footer-company-infor flex flex-col justify-between !gap-5'>
                            <Image
                                src='/images/myLogo.jpg'
                                alt='logo'
                                width={4000}
                                height={4000}
                                className='footer-logo !w-[60px]'
                            />

                            <div className='text caption1 text-white'>
                                We craft digital experiences with thoughtful design, clean code, and purposeful impact.
                                Built with passion, powered by creativity.
                            </div>
                        </div>

                        <div className='list-social flex items-center !gap-2 !mt-3'>
                            <Link
                                className='item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center'
                                href='https://www.facebook.com/ngor.pavly' target='_blank'>
                                <i className='icon-facebook text-sm'></i>
                            </Link>

                            <Link
                                className='item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center'
                                href='/'>
                                <i className='icon-twitter text-xs'></i>
                            </Link>

                            <Link
                                className='item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center'
                                href='/'>
                                <i className='icon-insta text-xs'></i>
                            </Link>

                            <Link
                                className='item rounded-full w-7 h-7 border-2 border-gray flex items-center justify-center'
                                href='/'>
                                <i className='icon-in text-xs'></i>
                            </Link>
                        </div>

                    </div>

                    <div className='lg:w-1/2'>
                        <div className='footer-navigate flex items-center justify-center !gap-20'>
                            <div className='footer-nav-item'>
                                <div className='item-heading text-button-sm text-white'>
                                    Quick Links
                                </div>
                                <ul className='list-nav !mt-1 text-white'>
                                    <li className='!mt-3'>
                                        <Link href='/'
                                              className='caption1 has-line-before line-white text-surface hover-underline'>
                                            About Us
                                        </Link>
                                    </li>
                                    <li className='!mt-3'>
                                        <Link href='/'
                                              className='caption1 has-line-before line-white text-surface hover-underline'>
                                            Services
                                        </Link>
                                    </li>
                                    <li className='!mt-3'>
                                        <Link href='/'
                                              className='caption1 has-line-before line-white text-surface hover-underline'>
                                            Case Studies
                                        </Link>
                                    </li>
                                    <li className='!mt-3'>
                                        <Link href='/'
                                              className='caption1 has-line-before line-white text-surface hover-underline'>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='footer-nav-item max-sm:hidden'>
                                <div className='item-heading text-button-sm text-white'>
                                    Pages
                                </div>
                                <ul className='list-nav !mt-1 text-white'>
                                    <li className='!mt-3'>
                                        <Link href='/'
                                              className='caption1 has-line-before line-white text-surface hover-underline'>
                                            About Us
                                        </Link>
                                    </li>
                                    <li className='!mt-3'>
                                        <Link href='/'
                                              className='caption1 has-line-before line-white text-surface hover-underline'>
                                            Services
                                        </Link>
                                    </li>
                                    <li className='!mt-3'>
                                        <Link href='/'
                                              className='caption1 has-line-before line-white text-surface hover-underline'>
                                            Case Studies
                                        </Link>
                                    </li>
                                    <li className='!mt-3'>
                                        <Link href='/'
                                              className='caption1 has-line-before line-white text-surface hover-underline'>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>

                            </div>

                            <div className='footer-nav-item'>
                                <div className='item-heading text-button-sm text-white'>
                                    Blog
                                </div>
                                <ul className='list-nav !mt-1 text-white'>
                                    <li className='!mt-3'>
                                        <Link href='/'
                                              className='caption1 has-line-before line-white text-surface hover-underline'>
                                            All Blog
                                        </Link>
                                    </li>
                                    <li className='!mt-3'>
                                        <Link href='/'
                                              className='caption1 has-line-before line-white text-surface hover-underline'>
                                            Services
                                        </Link>
                                    </li>
                                    <li className='!mt-3'>
                                        <Link href='/'
                                              className='caption1 has-line-before line-white text-surface hover-underline'>
                                            Case Studies
                                        </Link>
                                    </li>
                                    <li className='!mt-3'>
                                        <Link href='/'
                                              className='caption1 has-line-before line-white text-surface hover-underline'>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className='lg:w-1/4'>
                        <div className='company-contact'>
                            <div className='heading text-button-sm text-white'>
                                NewsLetter
                            </div>

                            <div className='!mt-3 flex items-start'>
                                <div className='text'>
                                    <div className='caption2 text-surface text-white'>
                                        Need Help? 24/7
                                    </div>
                                    <div className='fw-700 text-white !mt-1'>
                                        855-97-4496-431
                                    </div>
                                </div>
                            </div>

                            <div className='locate !mt-3 flex items-center gap-2'>
                                <Icon.MapPin className='text-white' weight='bold'/>
                                <div className='caption1 text-surface text-white'>
                                    #88, Stoeung Mean Chey, Phnom Penh, Cambodia
                                </div>
                            </div>
                        </div>

                        <form className='send-block !mt-5 flex items-center h-[45px] rounded-lg overflow-hidden text-black bg-white'>
                            <input className='caption1 text-secondary h-full w-full !pr-4 !pl-3' type="email" placeholder='Your Email Address' />
                            <button className='cursor-pointer flex items-center justify-center w-[45px] h-[45px] bg-blue-800 flex-shrink-0' type='submit'>
                                <Icon.PaperPlaneTilt className='text-white' />
                            </button>
                        </form>

                    </div>

                </div>

                <div className='border-line'>
                    <div className='footer-buttom flex items-center justify-between !pt-3 !pb-3'>
                        <div className='left-block flex items-center'>
                            <div className='copy-right text-surface caption1 text-white'>
                                @{year} LyCoding.
                                &copy; All Rights Reserved
                            </div>
                        </div>

                        <div className='nav-link flex items-center !gap-3 text-white'>
                            <a href='#' className='text-surface caption1 hover:underline'>Terms of Services</a>
                                <span className='caption1 text-surface'>|</span>
                            <a href='#' className='text-surface caption1 hover:underline'>Privacy Policy</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;