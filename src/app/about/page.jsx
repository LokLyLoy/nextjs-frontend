import React from 'react';
import TopNav from "@/components/Header/TopNav/TopNav";
import Menu from "@/components/Header/Menu/Menu";

const Page = () => {
    return (
    <div className='overflow-x-hidden'>
        <header id="header">
            <TopNav />
            <Menu />
        </header>

        <main className='content'>
            123
        </main>

        <footer id='footer'>
            footer
        </footer>

    </div>
    );
};

export default Page;