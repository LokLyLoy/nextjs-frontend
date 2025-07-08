'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import {usePathname} from "next/navigation";
import * as Icon from "@phosphor-icons/react";
// import * as Icon from '@phosphor-icons/react/dist/ssr';

const Menu = () => {

    const [fixedHeader, setFixedHeader] = useState(false);
    const pathname = usePathname();

    const [openMenuMobile, setOpenMenuMobile] = useState(false);


  return (
<>
    <div className={`header-menu bg-white ${fixedHeader ? 'fixed': ''} `}>
        <div className='container flex items-center justify-between h-20'>
            <Link className='menu-left-block border-2 border-solid border-blue-600 shadow-lg' href={'/'}>
                <Image
                    src={'/images/myLogo.jpg'}
                    width={200}
                    height={100}
                    alt={'logo'}
                    priority={true}
                    className='w-[65px] max-sm:w-[40px] '
                />

            </Link>

            <div className='menu-center-block h-full'>
                <ul className='menu-nav flex items-center xl:gap-2 h-full'>
                    <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/' ? 'active' : ''}`}>
                        <Link className='nav-link text-title items-center gap-1' href={'/'}>
                            <span>Home</span>
                        </Link>
                    </li>

                    <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/about' ? 'active' : ''}`}>
                        <Link className='nav-link text-title items-center gap-1' href={'/about'}>
                            <span>About Us</span>
                        </Link>
                    </li>

                    <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/service' ? 'active' : ''}`}>
                        <Link className='nav-link text-title items-center gap-1' href={'/'}>
                            <span>Our Services</span>
                        </Link>
                    </li>

                    <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/case-studies' ? 'active' : ''}`}>
                        <Link className='nav-link text-title items-center gap-1' href={'/'}>
                            <span>Case Studies</span>
                        </Link>
                    </li>

                    <li className={`nav-item h-full flex items-center justify-center home ${pathname === '/blog' ? 'active' : ''}`}>
                        <Link className='nav-link text-title items-center gap-1' href={'/'}>
                            <span>Blog</span>
                        </Link>
                    </li>

                    <li className={`nav-item h-full flex items-center justify-center home ${pathname === 'contact-us' ? 'active' : ''}`}>
                        <Link className='nav-link text-title items-center gap-1' href={'/'}>
                            <span>Contact Us</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='menu-right-block flex items-center'>
                <div className='icon-call'>
                    <i className='icon-phone-call text-4xl'></i>
                </div>
                <div className='text !ml-3'>
                    <div className='text caption1'>Free Consultancy</div>
                    <div className='number text-button'>+855 97 4496 431</div>
                </div>
                <div className='menu-humburger hidden cursor-pointer' onClick={()=>setOpenMenuMobile(!openMenuMobile)}>
                    <Icon.List className='text-2xl' weight='bold'/>
                </div>

            </div>

        </div>

        <div id='menu-mobile-block' className={`${openMenuMobile && 'open'}`}>
            <div className='menu-mobile-main'>
                <div className="container mx-auto !px-4 !py-4">
                    <ul className="menu-nav-mobile flex flex-col divide-y divide-gray-200 rounded-md overflow-hidden shadow-sm bg-white">
                        <li className="nav-item-mobile">
                            <a
                                className="nav-link-mobile flex items-center justify-between !px-4 !py-3 hover:bg-gray-100 transition-all"
                                href="/"
                            >
                                <span className="text-base font-semibold text-gray-800">Home</span>
                                <Icon.CaretRight className='text-2xl text-gray-800' weight='bold'/>
                            </a>
                        </li>
                        <li className="nav-item-mobile">
                            <a
                                className="nav-link-mobile flex items-center justify-between !px-4 !py-3 hover:bg-gray-100 transition-all"
                                href="/about"
                            >
                                <span className="text-base font-semibold text-gray-800">About Us</span>
                                <Icon.CaretRight className='text-2xl text-gray-800' weight='bold'/>
                            </a>
                        </li>
                        <li className="nav-item-mobile">
                            <a
                                className="nav-link-mobile flex items-center justify-between !px-4 !py-3 hover:bg-gray-100 transition-all"
                                href="/service"
                            >
                                <span className="text-base font-semibold text-gray-800">Services</span>
                                <Icon.CaretRight className='text-2xl text-gray-800' weight='bold'/>
                            </a>
                        </li>
                        <li className="nav-item-mobile">
                            <a
                                className="nav-link-mobile flex items-center justify-between !px-4 !py-3 hover:bg-gray-100 transition-all"
                                href="/case-studies"
                            >
                                <span className="text-base font-semibold text-gray-800">Case Studies</span>
                                <Icon.CaretRight className='text-2xl text-gray-800' weight='bold'/>
                            </a>
                        </li>
                        <li className="nav-item-mobile">
                            <a
                                className="nav-link-mobile flex items-center justify-between !px-4 !py-3 hover:bg-gray-100 transition-all"
                                href="/blog"
                            >
                                <span className="text-base font-semibold text-gray-800">Blog</span>
                                <Icon.CaretRight className='text-2xl text-gray-800' weight='bold'/>
                            </a>
                        </li>
                        <li className="nav-item-mobile">
                            <a
                                className="nav-link-mobile flex items-center justify-between !px-4 !py-3 hover:bg-gray-100 transition-all"
                                href="/contact"
                            >
                                <span className="text-base font-semibold text-gray-800">Contact Us</span>
                                <Icon.CaretRight className='text-2xl text-gray-800' weight='bold'/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</>
  );
};

export default Menu;
