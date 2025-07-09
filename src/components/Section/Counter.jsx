import React from 'react';

const Counter = ({className}) => {
    return (
        <div className='container bg-slate-200 !rounded-[20px] !pt-8'>
            <div className={`counter-block ${className}`}>
                <div className='grid xl:grid-cols-4 grid-cols-2 gap-y-8'>

                    <div className='item'>
                        <div className='flex flex-col items-center'>
                            <div className='count-block flex items-center'>
                                <div className='counter heading3'>1</div>
                                <span className='heading3'>K+</span>
                            </div>

                            <div className='body1 text-secondary text-center'>
                                Business Setup Growth
                            </div>

                        </div>
                    </div>

                    <div className='item'>
                        <div className='flex flex-col items-center'>
                            <div className='count-block flex items-center'>
                                <div className='counter heading3'>100</div>
                                <span className='heading3'>K+</span>
                            </div>

                            <div className='body1 text-secondary text-center'>
                                Transactions Processed
                            </div>

                        </div>
                    </div>

                    <div className='item'>
                        <div className='flex flex-col items-center'>
                            <div className='count-block flex items-center'>
                                <div className='counter heading3'>99.9</div>
                                <span className='heading3'>%</span>
                            </div>

                            <div className='body1 text-secondary text-center'>
                                Uptime Guaranteed
                            </div>

                        </div>
                    </div>

                    <div className='item'>
                        <div className='flex flex-col items-center'>
                            <div className='count-block flex items-center'>
                                <div className='counter heading3'>500</div>
                                <span className='heading3'>+</span>
                            </div>

                            <div className='body1 text-secondary text-center'>
                                Trusted Business
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Counter;