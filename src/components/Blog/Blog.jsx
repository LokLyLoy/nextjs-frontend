import React from 'react';
import BlogItem from "@/components/Blog/Item/BlogItem";


const Blog = ({data}) => {



    return (
        <section className='list-blog three-col lg:mt-[100px] sm:mt-16 !mt-10 !pb-[100px]'>
            <div className='container'>
                <h3 className='heading3 text-center'>Latest News</h3>

                <div className='list grid lg:grid-cols-3 sm:grid-cols-2 !gap-8 md:mt-10 !mt-6'>

                    {
                        data.slice(0, 3).map((item, index) => (
                            <BlogItem data={item} key={index}/>
                        ))
                    }

                </div>

            </div>
        </section>
    );
};

export default Blog;