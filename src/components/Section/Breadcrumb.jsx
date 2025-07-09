'use client'
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react"

const Breadcrumb = ({ link, img, desc, title }) => {
    return (
        <div className="relative w-screen lg:h-[280px] sm:h-[300px] h-[320px]">
            <div className="absolute inset-0 z-[-1]">
                <Image
                    src={img}
                    alt="banner"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className='container relative h-full flex items-center'>
                <div className='heading-nav flex items-center gap-1 absolute top-8 left-4 !py-2 !px-4 rounded-full bg-line bg-slate-600'>
                    <Link href='/' className='hover:underline caption1 text-white'>
                        Home
                    </Link>
                    <Icon.CaretDoubleRight className='text-white caption1'/>
                    <div className='caption1 text-white'>{link}</div>
                </div>

                <div className='text-nav xl:w-1/2 md:w-3/5 !mt-8'>
                    <div className='heading3 text-white'>{title}</div>

                    <div className='sub-heading !my-4 text-white font-normal'>{desc}</div>
                </div>
            </div>

        </div>
    );
};

export default Breadcrumb;
