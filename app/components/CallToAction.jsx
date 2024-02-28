"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CallToAction() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/contact-us')
  }
  return (
    <>
      <div className="container  relative flex flex-col items center">
        <div className="flex justify-center items-center bg-[#111857] rounded-none md:rounded-[28px] min-h-[24rem] px-12 pb-8 md:pb-0">
            <div className="w-full mt-10 z-20 max-sm:text-center">
                <h2 className="max-w-[495px] font-bold">
                    Schedule a Free Consultation
                </h2>
                <p className="text-white pt-4 pb-8 max-w-[495px]">
                Speak to our real estate experts and benefit from personalised guidance tailored to your  goals
                </p>
                <button className="bg-white px-6 py-4 rounded-lg text-dark btnAnimation"
                onClick={handleClick}
                >
                Get in touch
                </button>
            </div>
            <div className="absolute -top-[122px] -right-32 lg:right-12 bottom-0 hidden md:block">
                <Image
                    src="/images/cta_img.webp"
                    alt="call to action image"
                    width={500}
                    height={500}
                />
            </div>
        </div>
      </div>
    </>
  )
}
