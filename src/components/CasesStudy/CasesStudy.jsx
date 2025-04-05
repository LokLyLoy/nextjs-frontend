'use client'
import React from 'react';
import Link from "next/link";
import * as Icon from '@phosphor-icons/react'
import Image from "next/image";

const CasesStudy = () => {
    return (
    <>
        <section className='case-study-block lg:pt-[100px] sm:pt-16 pt-10 style-one'>
            <div className='container'>
                <div className='heading text-center'>
                    <h3 className='heading3'>Cases Study</h3>

                    <div className='right flex flex-col items-center !gap-2 !mt-3'>
                        <div className='body3'>Explore how we’ve helped businesses achieve remarkable results through our innovative solutions.</div>

                        <Link className='flex items-center !gap-2 hover:text-blue duration-300' href='/'>
                            <div className='text-button'>View All Case List </div>
                            <Icon.CaretDoubleRight weight='bold' className='text-xs mt-1' />
                        </Link>

                    </div>
                </div>
            </div>

            <div className='list-case-study md:mt-10 !mt-6'>
                <div className='list grid lg:grid-cols-4 sm:grid-cols-2'>

                    {/*1*/}
                    <div className='w-full'>
                        <div className='case-study-item'>
                            <div className='bg-img'>
                                <Image
                                    className='w-full h-full block'
                                    src='/images/caseone.webp'
                                    alt='img1'
                                    width={5000}
                                    height={5000}
                                />
                            </div>
                            <div className='text flex flex-col justify-between !gap-3'>
                                <div className='heading5'>
                                    <Link href='/' className='text-white'>Open Communication</Link>
                                </div>
                                <div className='body2 text-white'>Transparent and honest communication prevents misunderstandings and strengthens relationships. Encouraging active listening and constructive feedback ensures that everyone is heard and valued.</div>
                                <Link className='flex items-center !gap-1' href='/'>
                                    <div className='text-button text-white'>Read more</div>
                                    <Icon.CaretDoubleRight weight='bold' className='text-xs text-white !mt-1'/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/*2*/}
                    <div className='w-full'>
                        <div className='case-study-item'>
                            <div className='bg-img'>
                                <Image
                                    className='w-full h-full block'
                                    src='/images/casetwo.webp'
                                    alt='img1'
                                    width={5000}
                                    height={5000}
                                />
                            </div>
                            <div className='text flex flex-col justify-between !gap-3'>
                                <div className='heading5'>
                                    <Link href='/' className='text-white'>Shared Vision & Goals</Link>
                                </div>
                                <div className='body2 text-white'>A team thrives when everyone works toward a common purpose. Aligning individual efforts with collective objectives fosters motivation and a sense of direction.</div>
                                <Link className='flex items-center !gap-1' href='/'>
                                    <div className='text-button text-white'>Read more</div>
                                    <Icon.CaretDoubleRight weight='bold' className='text-xs text-white !mt-1'/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/*3*/}
                    <div className='w-full'>
                        <div className='case-study-item'>
                            <div className='bg-img'>
                                <Image
                                    className='w-full h-full block'
                                    src='/images/casethree.webp'
                                    alt='img1'
                                    width={5000}
                                    height={5000}
                                />
                            </div>
                            <div className='text flex flex-col justify-between !gap-3'>
                                <div className='heading5'>
                                    <Link href='/' className='text-white'> Trust & Respect</Link>
                                </div>
                                <div className='body2 text-white'>Trust is the foundation of any successful team. Respect for each member’s expertise, opinions, and contributions creates a safe space for innovation and collaboration.</div>
                                <Link className='flex items-center !gap-1' href='/'>
                                    <div className='text-button text-white'>Read more</div>
                                    <Icon.CaretDoubleRight weight='bold' className='text-xs text-white !mt-1'/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/*4*/}
                    <div className='w-full'>
                        <div className='case-study-item'>
                            <div className='bg-img'>
                                <Image
                                    className='w-full h-full block'
                                    src='/images/casefour.webp'
                                    alt='img1'
                                    width={5000}
                                    height={5000}
                                />
                            </div>
                            <div className='text flex flex-col justify-between !gap-3'>
                                <div className='heading5'>
                                    <Link href='/' className='text-white'>Continuous Growth & Learning</Link>
                                </div>
                                <div className='body2 text-white'>Great teams never stop evolving. Encouraging skill development, knowledge-sharing, and personal growth benefits both individuals and the collective team.</div>
                                <Link className='flex items-center !gap-1' href='/'>
                                    <div className='text-button text-white'>Read more</div>
                                    <Icon.CaretDoubleRight weight='bold' className='text-xs text-white !mt-1'/>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    </>
    );
};

export default CasesStudy;