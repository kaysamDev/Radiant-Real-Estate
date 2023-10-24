import Image from "next/image";
import Link from "next/link";

export default function ArticleList() {
    return (
      <>
          {/* Item 1 */}
          <div className='rounded-[28px] shadow-md max-w-[400px] w-full h-[400px]'>
              <div>
                <Image 
                    src="/images/articles/image1.png" 
                    alt="building image" 
                    width={400}
                    height={245}
                />
              </div>
              <div className='mt-6 px-12 md:px-8'>
                <small className="text-sm">1 April 2023</small>
                <h6 className="mb-6">Diamond Manor Apartment in the New York and Service</h6>
                <Link href="/#" className="text-blue hover:underline">
                    Read More
                </Link>
              </div>
          </div>
          {/* Item 1 */}
  
          {/* Item 2 */}
          <div className='rounded-[28px] shadow-md max-w-[400px] w-full h-[400px]'>
              <div>
              <Image 
                  src="/images/articles/image2.png" 
                  alt="building image" 
                  width={400}
                  height={245}
              />
              </div>
              <div className='mt-6 px-12 md:px-8'>
                <small className="text-sm">1 April 2023</small>
                <h6 className="mb-6">Diamond Manor Apartment in the New York and Service</h6>
                <Link href="/#" className="text-blue hover:underline">
                    Read More
                </Link>
              </div>
          </div>
  
          {/* Item 3 */}
          <div className='rounded-[28px] shadow-md max-w-[400px] w-full h-[400px]'>
              <div>
              <Image 
                  src="/images/articles/image3.png" 
                  alt="building image" 
                  width={400}
                  height={245}
              />
              </div>
              <div className='mt-6 px-12 md:px-8'>
                <small className="text-sm">1 April 2023</small>
                <h6 className="mb-6">Diamond Manor Apartment in the New York and Service</h6>
                <Link href="/#" className="text-blue hover:underline">
                    Read More
                </Link>
              </div>
          </div>
      </>
    )
  }
  