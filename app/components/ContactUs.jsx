import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="bg-foundation-primary">
      <div className='container py-28'>
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
                      <p className='text-[#B5BACC]'>Al Abraj Street, Al Manara Tower Office 2007 - USA - New York City</p>
                    </span>
                  </li>
                  <li className='flex flex-col md:flex-row items-center md:items-start gap-4'>
                    <Image src="/images/vectors/msg.png" alt="message vector image" width={30} height={30}/>
                    <span className='max-w-[346px] text-center md:text-left'>
                      <h6 className='text-white'>Drop Us a Line</h6>
                      <p className='text-[#B5BACC] py-2'>Have specific questions or need detailed insights?<br /> 
                      We&apos;re just an email away 
                      </p>
                      <p><b className='text-white'>info@primeNest.org</b></p>
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
    </div>
  )
}
