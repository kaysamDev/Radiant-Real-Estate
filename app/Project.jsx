import Link from "next/link";
import ProjectsList from "./ProjectsList";

export default function Project() {
  return (
    <>
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
            href='/portfolio'
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
    </>
  )
}
