import React from 'react';
import TopNav from "@/components/Header/TopNav/TopNav";
import Menu from "@/components/Header/Menu/Menu";

const Page = () => {
    return (
    <>
        <TopNav/>
        <Menu/>
        <div>
            <h1>About page</h1>
        </div>
    </>
    );
};

export default Page;