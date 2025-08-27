import styles from '../app.module.css'

const FooterBanner = () => {
    return (
        <>
            <div className="bg-footerContactUsBanner bg-cover bg-no-repeat w-full pt-16 pb-16">
                <div className="flex flex-col md:flex-row md:justify-center md:gap-x-8">
                    <div className='flex justify-center md:justify-start'>
                        <h1 className={`${styles.footer} w-9/12 font-Montserrat font-bold md:text-3xl text-xl leading-7 tracking-wide uppercase text-white md:text-start text-center`}>
                            Are you Interested in Joining
                            our Team?
                        </h1>
                    </div>
                    <div className='flex md:flex-row flex-col md:gap-x-7 items-center gap-y-7 md:gap-y-0'>

                        <input type="text"
                            id="contact-us"
                            name='contact-us'
                            placeholder='Enter your email'
                            className='bg-transparent border-r-0 border-l-0 border-t-0 border-b border-white text-white pl-2 w-80 mt-5 md:mt-0 h-10' />
                        <button className='bg-primary1 rounded-full w-36 pl-4 pr-4 md:h-16 h-10'>
                            <p className='font-Rubik font-medium text-sm leading-7 text-center text-white tracking-wide'>
                                Contact us
                            </p>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FooterBanner;
