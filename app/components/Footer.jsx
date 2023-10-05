import Link from 'next/link'
import Logo from './logo2.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
        <section className='bg-[#111111] text-[#FFFFFF]'>
            <div className='container py-10 lg:py-20'>
                <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-start gap-y-8'>
                    {/* subscription */}
                    <div className='max-w-[550px] w-full'>
                        <Image 
                        src={Logo}
                        alt='Logo of Radiant stars property'
                        quality={100}
                        />
                        <p className='text-base py-6'>Join our newsletter to stay up to date on features and releases.</p>
                        <div>
                            <form>
                                <div className='flex flex-row items-center justify-start gap-4'>
                                    <input type="email" className='max-w-[360px] w-full text-dark2' placeholder='Enter your email' />
                                    <button className='bg-blue px-8 py-3 rounded-lg text-white btnAnimation'>
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        <p className='text-sm py-6'>
                            By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
                        </p>
                        </div>
                    </div>

                    {/* other */}
                    <div className='max-w-[550px] w-full grid grid-flow-row grid-cols-2 md:grid-cols-3 place-items-start gap-8'>
                        <ul className='ft-list'>
                            <h3 className='text-lg ft-header pb-4 font-bold'>Information</h3>
                            <li>Dubai</li>
                            <li>+91XXXXXXXXXXX</li>
                            <li>xxxx@gmail.com</li>
                        </ul>
                        <ul className='ft-list'>
                            <h3 className='text-lg ft-header pb-4 font-bold'>Page</h3>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="about-us">About Us</Link>
                            </li>
                            <li>
                                <Link href="services">Services</Link>
                            </li>
                            <li>
                                <Link href="#">Portfolio</Link>
                            </li>
                            <li>
                                <Link href="#">Blog</Link>
                            </li>
                        </ul>
                        <ul className='ft-list'>
                            <h3 className='text-lg ft-header pb-4 font-bold'>Follow Us</h3>
                            <li>Dubai</li>
                            <li>+91XXXXXXXXXXX</li>
                            <li>xxxx@gmail.com</li>
                        </ul>
                    </div>

                </div>
                <hr className='w-full mt-20 mb-8'/>
                {/* Copyright */}
                <div className='flex items-start flex-wrap md:items-center justify-between gap-y-6'>
                    <div>
                        <small>&copy; <span> 2023 All right reserved</span></small>
                    </div>

                    <div>
                        <ul className='inline-flex gap-6 items-center'>
                            <li>
                                <small>
                                    <Link href="#">Privacy Policy</Link>
                                </small>
                            </li>
                            <li>
                                <small>
                                    <Link href="#">Terms of Service</Link>
                                </small>
                            </li>
                            <li>
                                <small>
                                    <Link href="#">Cookies Setting</Link>
                                </small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}