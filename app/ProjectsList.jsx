import Image from "next/image";

export default function ProjectsList() {
  return (
    <>
        {/* Item 1 */}
        <div className='rounded-[28px] shadow-md max-w-[400px] w-full h-[440px]'>
            <div>
                <Image 
                    src="/images/projects/image1.png" 
                    alt="building image" 
                    width={400}
                    height={305}
                />
            </div>
            <div className='mt-6 px-12 md:px-8'>
                <h5>Palm Jumeirah Land Plot</h5>
                    <div className='inline-flex gap-2 py-4 items-center'>
                        <Image 
                        src="/images/vectors/location.png" 
                        alt="location vector image" 
                        width={15}
                        height={15}
                        />
                        <p className='gray-dark'>
                        Dubai, UAE
                        </p>
                    </div>
                {/* Dimension and status */}
                <div className='flex justify-start items-center gap-10'>
                    <div className='inline-flex items-center gap-2'>
                    <Image 
                        src="/images/vectors/ruler.png" 
                        alt="ruler vector image" 
                        width={24}
                        height={24}
                    />
                    <p className='text-lg font-bold text-dark'>1720</p>
                    </div>
                    <div className='inline-flex items-center gap-2'>
                    <Image 
                        src="/images/vectors/ongoing.png" 
                        alt="ongoing vector image" 
                        width={24}
                        height={24}
                    />
                    <p className='text-lg font-bold text-dark'>Ongoing</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Item 1 */}

        {/* Item 2 */}
        <div className='rounded-[28px] shadow-md max-w-[400px] w-full h-[440px]'>
            <div>
            <Image 
                src="/images/projects/image2.png" 
                alt="building image" 
                width={400}
                height={305}
            />
            </div>
            <div className='mt-6 px-12 md:px-8'>
            <h5>Palm Jumeirah Land Plot</h5>
            <div className='inline-flex gap-2 py-4 items-center'>
                <Image 
                src="/images/vectors/location.png" 
                alt="location vector image" 
                width={15}
                height={15}
                />
                <p className='gray-dark'>
                Dubai, UAE
                </p>
            </div>
            {/* Dimension and status */}
            <div className='flex justify-start items-center gap-10'>
                <div className='inline-flex items-center gap-2'>
                <Image 
                    src="/images/vectors/ruler.png" 
                    alt="ruler vector image" 
                    width={24}
                    height={24}
                />
                <p className='text-lg font-bold text-dark'>1720</p>
                </div>
                <div className='inline-flex items-center gap-2'>
                <Image 
                    src="/images/vectors/ongoing.png" 
                    alt="ongoing vector image" 
                    width={24}
                    height={24}
                />
                <p className='text-lg font-bold text-dark'>Ongoing</p>
                </div>
            </div>
            </div>
        </div>

        {/* Item 3 */}
        <div className='rounded-[28px] shadow-md max-w-[400px] w-full h-[440px]'>
            <div>
            <Image 
                src="/images/projects/image3.png" 
                alt="building image" 
                width={400}
                height={305}
            />
            </div>
            <div className='mt-6 px-12 md:px-8'>
            <h5>Palm Jumeirah Land Plot</h5>
            <div className='inline-flex gap-2 py-4 items-center'>
                <Image 
                src="/images/vectors/location.png" 
                alt="location vector image" 
                width={15}
                height={15}
                />
                <p className='gray-dark'>
                Dubai, UAE
                </p>
            </div>
            {/* Dimension and status */}
            <div className='flex justify-start items-center gap-10'>
                <div className='inline-flex items-center gap-2'>
                <Image 
                    src="/images/vectors/ruler.png" 
                    alt="ruler vector image" 
                    width={24}
                    height={24}
                />
                <p className='text-lg font-bold text-dark'>1720</p>
                </div>
                <div className='inline-flex items-center gap-2'>
                <Image 
                    src="/images/vectors/ongoing.png" 
                    alt="ongoing vector image" 
                    width={24}
                    height={24}
                />
                <p className='text-lg font-bold text-dark'>Ongoing</p>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}
