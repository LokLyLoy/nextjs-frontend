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
                <div className='container'>
                    <ul className='menu-nav-mobile h-full pt-1 pb-1'>
                        <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 cursor-pointer'>
                            <a className='nav-link-mobile flex items-center justify-between' href='/'>
                                <span className='body2 font-bold'>Home</span>
                            </a>
                        </li>
                        <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 cursor-pointer'>
                            <a className='nav-link-mobile flex items-center justify-between' href='/about'>
                                <span className='body2 font-bold'>About Us</span>
                            </a>
                        </li>
                        <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 cursor-pointer'>
                            <a className='nav-link-mobile flex items-center justify-between' href='/service'>
                                <span className='body2 font-bold'>Services</span>
                            </a>
                        </li>
                        <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 cursor-pointer'>
                            <a className='nav-link-mobile flex items-center justify-between' href='/case-studies'>
                                <span className='body2 font-bold'>Case Studies</span>
                            </a>
                        </li>
                        <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 cursor-pointer'>
                            <a className='nav-link-mobile flex items-center justify-between' href='/blog'>
                                <span className='body2 font-bold'>Blog</span>
                            </a>
                        </li>
                        <li className='nav-item-mobile h-full flex-column gap-2 pt-2 pl-3 pr-3 pb-2 cursor-pointer'>
                            <a className='nav-link-mobile flex items-center justify-between' href='/contact'>
                                <span className='body2 font-bold'>Contact Us</span>
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
