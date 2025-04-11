import React from 'react';
import Link from "next/link";
import Image from "next/image";

const BlogItem = ({data}) => {
    return (
        <div className='blog-item'>
            <Link href='/' className='blog-item-main h-full block bg-white border border-line overflow-hidden rounded-2xl hover-box-shadow duration-500'>
                <div className='bg-img w-full overflow-hidden'>
                    <Image
                        width={5000}
                        height={5000}
                        src={data.img}
                        alt={data.title}
                        className='w-full h-full block'
                    />

                </div>

                <div className='cation2 '></div>

            </Link>

        </div>
    );
};

export default BlogItem;