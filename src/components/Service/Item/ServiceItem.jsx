import React from 'react';
import Link from "next/link";

const ServiceItem = ({data, number}) => {

    return (
    <div className='service-item !p-8 bg-white rounded-lg border border-line hover-box-shadow'>
        <Link href={'/service/service-details/[slug]'} as={`/service/service-details/${data.title.toLowerCase().replace(/ /g, '-')}`} className='service-item-main h-full'>
            <div className='heading flex items-center justify-between'>
                <i className={`${data.icon} text-blue text-5xl md:text-6xl`}></i>
                <div className='number heading3 text-placeholder text-slate-400'>
                    {number + 1}
                </div>
            </div>
            <div className='heading6 hover:text-blue duration-300 !mt-6'>
                {data.title}
            </div>
            <div className='text-secondary !mt-2 '>
                {data.desc}
            </div>
        </Link>
    </div>
    );
};

export default ServiceItem;