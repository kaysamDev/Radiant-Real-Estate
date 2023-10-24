import ArticleList from "../ArticleList";
import CallToAction from "../components/CallToAction";

export default function page() {
  return (
    <div>
      <section className='mt-28'>
        <div className='container flex flex-col pb-28'>
          {/* Header */}
          <div className='flex flex-col items-center justify-center mb-12'>
            <div className="text-center">
              <h2 className='text-[#141C30] mb-8'>Our Latest Article</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          {/* Header End */}

          <div className='
          grid 
          grid-flow-row 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          place-content-center 
          gap-x-8
          gap-y-16 
          w-full 
          pb-4
          
          '>
            <ArticleList />
            <ArticleList />
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className='py-60 overflow-x-hidden'>
        <CallToAction />
      </section>
      {/* Call to action End */}
    </div>
  )
}
