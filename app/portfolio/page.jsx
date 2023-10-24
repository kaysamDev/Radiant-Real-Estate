import Project from "../Project";
import CallToAction from "../components/CallToAction";

export default function app() {
  return (
    <>
      <div className="bg-foundation-primary">
        <section className="pt-28">
          <Project />
        </section>
      </div>
      <div>
        <section className='pt-32 pb-28 overflow-x-hidden'>
          <CallToAction />
        </section>
      </div>
    </>
  )
}
