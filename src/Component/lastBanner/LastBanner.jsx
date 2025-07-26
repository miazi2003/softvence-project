import React from 'react';
import last from "../../assets/last.png"
import { Link } from 'react-router';
const LastBanner = () => {
    return (
        <div className='lg:h-[600px] w-full '>
            <Link to={"/approve"}>
            <img src={last} alt="" className='h-full w-full' /></Link>
        </div>
    );
};

export default LastBanner;