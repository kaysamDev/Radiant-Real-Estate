// Images
import Image from 'next/image'
import AboutImage from '../public/images/about_1.webp'
import Link from 'next/link'
import CallToAction from './components/CallToAction'
import ProjectsList from './ProjectsList'
import ArticleList from './ArticleList'

export default function Home() {
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
            <button className="bg-blue px-6 py-4 max-sm:mb-4 rounded-lg text-white btnAnimation">
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
                  <Link href='#' className='text-blue hover:underline'>
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
                  <Link href='#' className='text-blue hover:underline'>
                    Learn more
                  </Link>
              </div>
              <div className='border-l-2 pl-8 hover:border-blue mt-6'>
                  <h4 className='font-bold mb-2'>Holistic expertise as Advisors, Developers, and Managers</h4>
                  <p className='mb-6'>
                    With a successful track record as both advisors and developers, we offer a unique perspective on the Dubai 
                    real estate market. Our hands-on experience ensures practical and effective solutions for your projects
                  </p>
                  <Link href='#' className='text-blue hover:underline'>
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
        <div className='container flex flex-col items-center pb-28'>
          {/* Header */}
          <div className='max-w-[560px] text-center'>
            <h2 className='text-[#141C30]'>Our Projects</h2>
            <p className='py-10'>Our comprehensive real estate expetise has enabled us to deliver successful 
              projects throughout Dubai
            </p>
          </div>
          {/* Header End */}

          <div className='flex justify-start lg:justify-center items-center gap-8 w-full overflow-x-auto pb-4'>
            <ProjectsList />
          </div>
            <Link 
            href='/#'
            className='
                mt-10
                border
                border-blue
                bg-transparent
                text-blue
                font-bold
                tracking-widest
                py-4 
                px-6
                rounded-lg
                btnAnimation
            '>
              View All
            </Link>
        </div>
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
                href='/#'
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
        <div className='container'>
          {/* Contact header div */}
          <div className='ml-0 lg:ml-36'>
            <small className='font-bold text-blue'>Contact Us</small>
            <h2 className='text-start max-w-[572px] text-dark2'>
              Begin Your Real Estate Journey Today 
            </h2>
          </div>
          {/* Contact form div */}
          <div className='relative mt-28 ml-0 lg:ml-36 flex flex-col lg:flex-row gap-y-8'>
            <div className='bg-white max-w-[568px] w-full rounded-2xl py-10 px-4 md:px-10 shadow-sm z-20'>
              <form>
                <div className='flex flex-col md:flex-row justify-between gap-4'>
                  <div className='flex flex-col'>
                    <label htmlFor='fullName'>Full name</label>
                    <input type="text" name="fullName" id="fullName" placeholder='John Carter' className='w-full'/>
                  </div>

                  <div className='flex flex-col'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" id="email" placeholder='example@email.com' className='w-full'/>
                  </div>
                </div>

                {/* Phone Number */}
                <div className='mt-8'>
                  <div className='flex flex-col'>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <div className='flex border border-foundation-blue rounded-xl'>
                      <select name="phoneNumber" id="phoneNumber" className='w-20 outline-none focus-within:border-foundation-blue'>
                        <option value="id">a</option>
                      </select>
                      <input type="tel" name="tel" id="" placeholder='1234567' className='border-none w-full'/>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className='my-8'>
                  <div className='flex flex-col'>
                    <label htmlFor="msg">Message <span><em>(Optional)</em></span></label>
                    <textarea name="msg" id="msg" cols="30" rows="4"></textarea>
                  </div>
                </div>

                <button className='bg-blue px-6 py-4 max-sm:mb-4 rounded-lg text-white btnAnimation items-center'>
                  Send Message <span> → </span>
                </button>
              </form>
            </div>

            <div className='bg-[#111857] px-8 md:px-12 lg:px-28 py-20 static lg:absolute -right-20 -top-16 rounded-2xl z-10'>
              <div>
                {/* Location*/}
                <ul className='flex flex-col gap-y-16'>
                  <li className='flex flex-col md:flex-row items-center md:items-start gap-4'>
                    <Image src="/images/vectors/cnt-loc.png" alt="location vector image" width={30} height={30}/>
                    <span className='max-w-[346px] text-center md:text-left'>
                      <h6 className='text-white'>Our Office Location</h6>
                      <p className='text-[#B5BACC]'>Al Abraj Street, Al Manara Tower Office 2007 - Dubai - United Arab Emirates</p>
                    </span>
                  </li>
                  <li className='flex flex-col md:flex-row items-center md:items-start gap-4'>
                    <Image src="/images/vectors/msg.png" alt="message vector image" width={30} height={30}/>
                    <span className='max-w-[346px] text-center md:text-left'>
                      <h6 className='text-white'>Drop Us a Line</h6>
                      <p className='text-[#B5BACC] py-2'>Have specific questions or need detailed insights?<br /> 
                      We're just an email away 
                      </p>
                      <p><b className='text-white'>info@radiantstar.ae</b></p>
                    </span>
                  </li>
                  <li className='flex flex-col md:flex-row items-center md:items-start gap-4'>
                    <Image src="/images/vectors/call.png" alt="call vector image" width={30} height={30}/>
                    <span className='max-w-[346px] text-center md:text-left'>
                      <h6 className='text-white'>Give us a call</h6>
                      <p className='text-[#B5BACC] py-2'>Have specific questions or need detailed insights? 
                      Speak directly with our experts <br /> 
                      </p>
                      <p><b className='text-white'>(414) 946 - 4530</b></p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact us end */}
    </>
  )
}
