'use client'
import React from 'react';
import * as Icon from '@phosphor-icons/react'

const FormRequest = () => {
    return (
    <div className='form-request-block lg:mt-[100px] sm:mt-16 !mt-10'>
        <div className='container'>
            <div className='heading flex max-xl:flex-col xl:items-center !gap-4 justify-between'>
                <div className='heading4'>
                    Need Help? Request a Free Call Back!
                </div>
                <div className='body3 text-secondary'>
                    Have questions or need assistance? Our friendly team is here to help! <br/> We're happy to guide you through your options and answer any questions you may have.
                </div>

            </div>

            <form className='form md:mt-10 !mt-6 flex max-lg:flex-col lg:items-center justify-between !gap-8 !pb-14 border-line border-b'>
                <div className='grid lg:grid-cols-3 !gap-3 w-full'>
                    <div className='w-full'>
                        <input
                            className='body3 md:py-[14px] !py-3 !px-5 bg-surface rounded-lg w-full bg-gray-100'
                            placeholder='Full Name'
                            type='text'
                            name='name'
                            autoComplete='off'
                        />
                    </div>
                    <div className='w-full'>
                        <input
                            className='body3 md:py-[14px] !py-3 !px-5 bg-surface rounded-lg w-full bg-gray-100'
                            placeholder='Email'
                            type='email'
                            name='name'
                            autoComplete='off'
                        />
                    </div>
                    <div className='w-full select-arrow-none relative !hover:cursor-pointer'>
                        <select name='category' className='body3 md:py-[14px] !py-3 !px-5 bg-surface rounded-lg w-full bg-gray-100'>
                            <option value='Financial Planning'>Financial Planning</option>
                            <option value='Business Planning'>Business Planning</option>
                            <option value='Development Planning'>Development Planning</option>
                        </select>
                        <Icon.CaretDown className='absolute top-1/2 -translate-y-1/2 right-5'/>
                    </div>

                </div>

                <button className='button-main flex-shrink-0 bg-black hover:bg-blue-500 text-white !rounded-full'>Submit</button>

            </form>

        </div>

    </div>
    );
};

export default FormRequest;