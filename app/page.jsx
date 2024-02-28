"use client"

import Image from 'next/image'
import AboutImage from '../public/images/about_1.webp'
import Link from 'next/link'
import CallToAction from './components/CallToAction'
import ArticleList from './ArticleList'
import Project from './Project'
import ContactUs from './components/ContactUs'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/contact-us')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-bg bg-orange-200 bg-blend-multiply w-full min-h-[30rem] bg-cover bg-center z-10">
        <div className="container flex justify-start items-center">
          <div className="w-full mt-10 z-20">
            <h1 className="capitalize max-w-[660px] font-bold">
              expert real estate advisory services in dubai
            </h1>
            <p className="text-white pt-4 pb-8">
              Comprehensive real estate, investment, development and management solutions
            </p>
            <button className="bg-blue px-6 py-4 max-sm:mb-4 rounded-lg text-white btnAnimation"
            onClick={handleClick}
            >
              Get in touch
            </button>
          </div>
        </div>
      </section>
      {/* Hero Section End */}


      {/* About */}
      <section className='my-24'>
        <h2 className='text-center text-dark font-bold mb-12 block lg:hidden'>About Us</h2>
        <div className='container flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-x-8'>
          <div className='max-w-[550px] min-h-[550px]'>
            <Image
              src={AboutImage}
              alt='about page building image'
            />
          </div>
          <div className='max-w-[568px]'>
              <div className='border-l-2 pl-8 hover:border-blue'>
                  <h4 className='font-bold mb-2'>About</h4>
                  <p className='mb-6'>
                  We are a leading real estate firm based in Dubai, committed to providing expert guidance and personalised solutions for investors and developers.
                  <br /><br />
                  With over 3 decades of local industry experience across construction and real estate, and a dedicated team of accomplished professionals, we help
                  clients navigate the complexities of real estate development in UAE, achieve their goals, and maximize their returns.
                  </p>
                  <Link href='/about-us' className='text-blue hover:underline'>
                    Learn more
                  </Link>
              </div>
              <div className='border-l-2 pl-8 hover:border-blue mt-6'>
                  <h4 className='font-bold mb-2'>Comprehensive Real Estate Services</h4>
                  <p className='mb-6'>
                    Our wide range of real estate development advisory services includes market research, feasibility studies, 
                    investment analysis, project management, execution and more. We tailor our solutions to meet your unique goals 
                    and objectives
                  </p>
                  <Link href='/about-us' className='text-blue hover:underline'>
                    Learn more
                  </Link>
              </div>
              <div className='border-l-2 pl-8 hover:border-blue mt-6'>
                  <h4 className='font-bold mb-2'>Holistic expertise as Advisors, Developers, and Managers</h4>
                  <p className='mb-6'>
                    With a successful track record as both advisors and developers, we offer a unique perspective on the Dubai 
                    real estate market. Our hands-on experience ensures practical and effective solutions for your projects
                  </p>
                  <Link href='/about-us' className='text-blue hover:underline'>
                    Learn more
                  </Link>
              </div>
          </div>
        </div>
      </section>
      {/* About End */}


      {/* Call to action */}
      <section className='pt-60 overflow-x-hidden'>
        <CallToAction />
      </section>
      {/* Call to action End */}


      {/* Our projects */}
      <section className='bg-foundation-primary mt-28 pt-12'>
        <Project />
      </section>
      {/* Our projects End */}


      {/* Our Articles */}
      <section className='mt-28'>
        <div className='container flex flex-col pb-28'>
          {/* Header */}
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4 mb-20'>
            <div>
              <h2 className='text-[#141C30]'>Our Latest Article</h2>
            </div>
            <div>
              <Link
                href='/newsroom'
                className='
                mt-10
                border
                border-blue
                bg-transparent
                text-blue
                font-bold
                tracking-widest
                py-2
                md:py-4
                px-3
                md:px-6
                rounded-lg
                btnAnimation
                '>
                View All
              </Link>
            </div>
          </div>
          {/* Header End */}

          <div className='flex flex-col md:flex-row justify-center items-center gap-8 w-full pb-4'>
            <ArticleList />
          </div>
        </div>
      </section>
      {/* Our Articles End */}


      {/* Contact us */}
      <section className='mt-16 py-28 bg-foundation-primary' id='contact'>
        <ContactUs />
      </section>
      {/* Contact us end */}
    </>
  )
}
