import Image from "next/image";
import CallToAction from "../components/CallToAction";
import Teams from "../Teams";

export default function About() {
  const listUrl = '/images/vectors/list-vector.png'

  return (
    <div className="pt-14 md:pt-28 bg-foundation-primary">
      <section className="
        container 
        flex 
        flex-col 
        lg:flex-row 
        flex-wrap
        justify-between 
        items-center 
        gap-y-8
        gap-8
        ">
        <div className="relative flex-1">
            <h2 className="text-black mb-6 block lg:hidden text-center">About Us</h2>
            <div className="static lg:absolute z-20 lg:-top-80">
                <Image
                src="/images/about-us/about2.jpg"
                width={523.25}
                height={542.43}
                alt="about us main image"
                className="rounded-2xl"
                />
            </div>
            <div className="
            max-w-[530px] 
            w-full 
            min-h-[590px]
            border-8 
            border-[#C8E5FC]
            rounded-[13.2px] 
            absolute 
            -top-[20.5rem]
            left-6
            -rotate-3
            z-10
            hidden
            lg:block
            "></div>
        </div>

        {/* About Us */}
        <div className="max-w-[616px] w-full flex-1">
            <h2 className="text-black mb-8 hidden lg:block">About Us</h2>
            <p className="mb-6">
            At PrimeNest Consultants, we are your trusted partner in real estate. With over three decades of experience in the USA, we deliver expert advice and customized solutions for investors and developers.
            </p>
            <p className="mb-6">
            Our committed team of experts is well-versed in all facets of real estate development, from design and construction to delivery and sales. We have a solid track record of guiding clients through the complexities of the USA market and optimizing their returns.
            </p>
            <p className="mb-6">
            As a member of a broader diversified multinational group, we tap into our vast network and partnerships to achieve outstanding results. Whether you're launching a new project or seeking support at any stage of the development lifecycle, PrimeNest Consultants offers the expertise and customized solutions to suit your needs.
            </p>
            <p className="mb-6">
            Choose PrimeNest Consultants for unmatched expertise and a dedication to your success in the ever-evolving real estate industry.
            </p>

            <div className="flex flex-col md:flex-row justify-start items-center md:items-start gap-4 lg:gap-8">
                <div>
                    <button className='
                    bg-blue 
                    px-6 
                    py-4 
                    max-sm:mb-4 
                    rounded-lg 
                    text-white 
                    btnAnimation 
                    items-center
                    w-72
                    lg:w-64
                    '>
                    Schedule Free Consultation
                    </button>
                </div>
                <div>
                    <button className='
                    border
                    border-blue
                    bg-transparent
                    text-blue
                    font-bold
                    tracking-widest
                    py-4
                    px-3
                    md:px-6
                    rounded-lg
                    btnAnimation
                    w-72
                    lg:w-64
                    '>
                    Explore Service
                    </button>
                </div>
            </div>
        </div>
      </section>


      {/* Brief */}
      <section className="bg-[#111857] min-h-[376px] flex flex-col justify-center mt-28">
        <ul className="container flex flex-col md:flex-row gap-y-8 justify-between items-center text-[#FFFEFC]">
            <li className="flex flex-col items-center gap-2">
                <h3>200+</h3>
                <span className="uppercase text-[#A3A3A3]">project</span>
            </li>
            <li className="flex flex-col items-center gap-2">
                <h3>100M+</h3>
                <span className="uppercase text-[#A3A3A3]">location</span>
            </li>
            <li className="flex flex-col items-center gap-2">
                <h3>100M+</h3>
                <span className="uppercase text-[#A3A3A3]">sqft</span>
            </li>
            <li className="flex flex-col items-center gap-2">
                <h3>100+</h3>
                <span className="uppercase text-[#A3A3A3]">project value</span>
            </li>
        </ul>
      </section>
      {/* Brief End */}



      {/* About Chairman */}
      <section className="bg-white">
        <div className="container py-28">
            <div className="max-w-[814px] w-full mx-auto flex flex-col items-center">
                <h1 className="text-black">Our Chairman</h1>
                <div className="max-w-[400px] w-full aspect-square rounded-full border border-green-500 my-4 overflow-hidden">
                    <Image
                    src="/images/about-us/boss-img2.jpg"
                    width={493.36}
                    height={493.36}
                    alt="CEO image"
                    />
                </div>
                <h3 className="text-center">Moses Bliss</h3>
                <div>
                    <p className="my-8">
                    Moses Bliss brings over 25 years of experience in the Middle East and is renowned as a visionary in the region. He has spearheaded pioneering companies, turning them into market leaders recognized for their excellence across sectors such as construction, contracting, facilities management, real estate development, and food & beverages.
                    </p>
                    <p>
                    Notably, he has developed and delivered more than 30 million square feet of premium real estate and has played a crucial role in creating several landmark projects in the NY City.
                    </p>
                </div>
            </div>
            <div className="max-w-[814px] w-full mx-auto mt-8">
                <h5 className="mb-4">Key Achievements</h5>
                <ul>
                    <li className="mb-4 inline-flex items-center gap-2">
                        <Image src={listUrl} width={16} height={16} alt="list vevctor icon"/>
                        <small>First to deliver a mixed use building in DIFC.</small>
                    </li>
                    <li className="mb-4 inline-flex items-center gap-2">
                        <Image src={listUrl} width={16} height={16} alt="list vevctor icon"/>
                        <small>Led first real estate company in UAE to receive an  ISO rating..</small>
                    </li>
                    <li className="mb-4 inline-flex items-center gap-2">
                        <Image src={listUrl} width={16} height={16} alt="list vevctor icon"/>
                        <small>Won the MRM Award for the real estate development category</small>
                    </li>
                    <li className="mb-4 inline-flex items-center gap-2">
                        <Image src={listUrl} width={16} height={16} alt="list vevctor icon"/>
                        <small>Previously led real estate company (ETA Ascon) which was awarded 
                            the coveted Super Brand award for 4 consecutive years
                        </small>
                    </li>
                    <li className="inline-flex items-center gap-2">
                        <Image src={listUrl} width={16} height={16} alt="list vevctor icon"/>
                        <small>Developed and delivered the tallest residential building in the world upon 
                            completion in 2007y
                        </small>
                    </li>
                </ul>
            </div>
        </div>
      </section>
      {/* About Chairman End */}

      {/* Chairmen in the media */}
      <section>
            
      </section>
      {/* Chairmen in the media end */}

      {/* Our team */}
      <section>
        <div className="container flex flex-col items-center py-28">
            <div>
                <h1 className="text-center text-black pb-4">Meet Our Team</h1>
                <p>Meet our team of specialists with decades of combined experience</p>
            </div>
            {/* Team members */}
            <div className="
            grid 
            grid-flow-row 
            grid-cols-1
            md:grid-cols-2 
            lg:grid-cols-4 
            place-content-center 
            place-items-center 
            gap-8
            mt-12
            ">
                <Teams />
            </div>
            <button className="
            mt-10
            border
            border-black
            hover:border-blue
            bg-transparent
            text-black
            hover:text-blue
            font-bold
            tracking-widest
            py-4 
            px-6
            rounded-lg
            btnAnimation
            ">
                See All Team
            </button>
        </div>
      </section>
      {/* Our team end */}

      {/* Call To Action */}
      <section className="bg-white pt-40 pb-28 overflow-x-hidden">
        <CallToAction />
      </section>
      {/* Call To Action End */}
    </div>
  )
}
