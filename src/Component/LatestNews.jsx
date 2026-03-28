import React from 'react';
import Marquee from "react-fast-marquee";


const LatestNews = () => {
        const FastMarquee = Marquee.default || Marquee;

    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary py-5 px-3'>Latest</p>

            <FastMarquee className="flex gap-5" speed={60} >

                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur enim sapiente ullam modi a.</p>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur enim sapiente ullam modi a.</p>

            </FastMarquee>


        </div>
    );
};

export default LatestNews;