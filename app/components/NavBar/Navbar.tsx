"use client"
import Image from 'next/image';
import MobileMenu from '../MobileMenu';
import CountUp from 'react-countup';

import {
    logo,
    freeQuoteSvg,
    headerContactUsButtonRightSvg,
} from '../../../global'
import Menu from '../Menu';

const NavBar = () => {
    return (
        <div className='flex flex-col h-full relative'>
            <div className='hidden md:block'>
                <div className="flex justify-evenly mt-12">
                    <div className='h-full'>
                        <Image alt="logo" src={logo}></Image>
                    </div>
                    <div>
                        <Menu />
                    </div>
                    <button className='flex items-center hover:bg-violet-700 bg-primary1 rounded-full pb-1 pt-1 pl-5 pr-5 h-12'>
                        <p className='text-white hover:bg-violet-700'>Contact Us</p>
                        <Image className='w-3 ml-4 ' alt="rightArrowSvg" src={headerContactUsButtonRightSvg}></Image>

                    </button>
                </div >
            </div>

            <div className='md:hidden block'>
                <div className="flex justify-evenly mt-12">
                    <div className='w-24 md:h-9/12'>
                        <Image alt="logo" src={logo}></Image>
                    </div>
                    <div className='ml-10'>
                        <MobileMenu />

                    </div>
                </div >
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-col'>
                    <div className='flex items-center mt-36'>
                        <div className='flex justify-center'>
                            <div className='flex flex-col'>
                                <div className='flex justify-center mt-20'>
                                    <h6 className='text-white items-center w-9/12 heroMainHeading text-center'>Serving Humanity with Technology</h6>
                                </div>
                                <div className='flex justify-center mt-12'>
                                    <button className='w-56 md:w-60 gap-x-4 items-center flex items-center justify-center border-white-900 border-2 opacity-80 hover:opacity-90 bg-white rounded-full pb-3 pt-3 pl-3 pr-3'>
                                        <p className='bg-white text-primary1 hover:text-violet-700 text-center font-semibold'>GET FREE QUOTE</p>
                                        <Image className='animate-bounce w-6 h-6 p-1 ml-2 hover:bg-violet-700 bg-primary1 rounded-full text-white' alt="rightArrowSvg"
                                            src={freeQuoteSvg}>
                                        </Image>
                                    </button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className='flex justify-center'>
                <div className='grid gap-x-9 gap-y-7 md:gap-y-0 grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 pb-10 mt-36 md:mt-48'>
                    <div className='flex gap-x-16 justify-center'>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-white font-semibold'><CountUp duration={1} end={10} />+</h2>
                            <h5 className='text-white text-base font-salsa-without-letter-spacing'>years in business</h5>
                        </div>
                        <div className="border-l border-white h-20 md:block hidden"></div>
                    </div>

                    <div className='flex gap-x-16 justify-center'>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-white font-semibold'><CountUp duration={1.75} end={1200} />+</h2>
                            <h5 className='text-white text-base font-salsa-without-letter-spacing'>solutions derived</h5>
                        </div>
                        <div className="border-l border-white h-20 md:block hidden"></div>
                    </div>

                    <div className='flex gap-x-16 justify-center'>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-white font-semibold'><CountUp end={150} decimal="," />+</h2>
                            <h5 className='text-white text-base font-salsa-without-letter-spacing'>Technology experts</h5>
                        </div>
                        <div className="border-l border-white h-20 md:block hidden"></div>

                    </div>
                    <div className='flex gap-x-16 justify-center'>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-white font-semibold'><CountUp prefix='$' end={50} />M+</h2>
                            <h5 className='text-white text-base font-salsa-without-letter-spacing'>Business derived</h5>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default NavBar;