import Image from 'next/image';
import {
    logo,
    footerSvg,
    americanFlag,
    unitedKingdonFlag,
    pakistaniFlag,
    facebook,
    messenger,
    instagramIcon,
    whatsappIcon,
    twitterIcon
} from '../../global'

const Footer = () => {
    return (
        <div className='bg-footerBg'>
            <div className='grid grid-cols-1 xl:grid-cols-2'>
                <div className="ml-4 flex flex-col md:ml-16 2xl:ml-16 lg:ml-10 mt-10 xl:mt-12 2xl:mt-24 md:mt-20 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-6/12">
                    <div>
                        <Image className='w-28 md:w-36' alt="logo" src={logo}></Image>
                    </div>
                    <div className='md:mt-10 2xl:mt-10 xl:mt-6 lg:mt-6 mt-5 xl:text-2xl lg:text-xl text-white'>
                        <h6 className='ml-4 font-salsa'>
                            Like what you see?
                        </h6>
                    </div>
                    <div className='md:mt-8 mt-5 text-white 2xl:text3xl xl:text-2xl lg:text-lg'>
                        <h1 className='ml-4 font-rubik'>
                            Let&apos;s start a conversation.
                        </h1>
                    </div>
                    <button className='hover:bg-primary1 md:w-52 w-48 pl-5 pr-5 pt-3 pb-3 border-2 border-white rounded-full md:mt-16 2xl:mt-16 xl:mt-10 mt-10'>
                        <p className='text-white font-salsa-ls-thin'>Get In Touch</p>
                    </button>
                    <p className='text-sm text-white font-semibold md:mt-20 lg:mt-10 2xl:mt-20 mt-12 ml-4 font-salsa'>Visit us at</p>
                    <div className='flex ml-4 md:mt-10 mt-7 2xl:mt-10 xl:mt-7'>
                        <div className='mt-1'>
                            <Image alt="logo" src={americanFlag}></Image>
                        </div>
                        <p className='font-bold text-sm text-white ml-2 font-rubik'>79 Madison Avenue, New York, NY 10016</p>
                    </div>
                    <div className='flex mt-4 ml-4'>
                        <div className='mt-1'>
                            <Image alt="logo" src={unitedKingdonFlag}></Image>
                        </div>
                        <p className='font-bold text-sm text-white ml-2 w-9/12 font-rubik'>2nd Floor College House 17 King Edwards Road, Ruislip, London, HA4 7AE</p>
                    </div>
                    <div className='flex mt-4 ml-4'>
                        <div className='mt-1'>
                            <Image alt="logo" src={pakistaniFlag}></Image>
                        </div>
                        <p className='font-bold text-sm text-white ml-2 font-rubik'>1st Floor, 50 Garden Height, Garden Town Lahore.</p>
                    </div>
                    <div className='md:w-6/12 w-9/12'>
                        <div className='flex xl:-ml-3 2xl:-ml-3 md:mt-12 xl:mt-7 2xl:mt-12 mt-8 pb-10 justify-evenly'>
                            <div className='flex items-center'>
                                <Image className='md:w-full 2xl:w-full xl:w-3 lg:w-3 w-3' alt="logo" src={facebook}></Image>
                            </div>
                            <div className='flex items-center'>
                                <Image className='md:w-full 2xl:w-full xl:w-3 lg:w-3 w-4' alt="logo" src={messenger}></Image>
                            </div>
                            <div className='flex items-center'>
                                <Image className='md:w-full 2xl:w-full xl:w-3 lg:w-3 w-4' alt="logo" src={instagramIcon}></Image>
                            </div>
                            <div className='flex items-center'>
                                <Image className='md:w-full 2xl:w-full xl:w-3 lg:w-3 w-4' alt="logo" src={whatsappIcon}></Image>
                            </div>
                            <div className='flex items-center'>
                                <Image className='md:w-full 2xl:w-full xl:w-3 lg:w-3 w-4' alt="logo" src={twitterIcon}></Image>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white 2xl:-ml-23rem xl:-ml-64 lg:-ml-52'>
                    <Image className='w-full mt-3 xl:mt-8 2xl:mt-16' alt="logo" src={footerSvg}></Image>
                </div>
            </div>
            <div className='bg-footerBanner 2xl:h-16 xl:h-14'>
                <div className='flex md:flex-row flex-col md:justify-between'>
                    <p className='text-xs 2xl:ml-40 md:ml-32 text-center text-footerBannerText md:mt-5 font-salsa-without-letter-spacing'>Terms & Conditions | privacy policy | Sitemap</p>
                    <p className='text-xs 2xl:mr-40 md:mr-32 text-center text-footerBannerText md:mt-5 font-salsa-without-letter-spacing'>© 2022 <span className='text-footerBg font-semibold'>CIEL TECHNOLOGY
                    </span>  All rights reserved.</p>
                </div>
            </div>
            <div className='2xl:h-3 xl:h-1'></div>
        </div>
    )
}
export default Footer;