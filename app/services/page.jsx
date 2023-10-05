import CallToAction from "../components/CallToAction";
import ServiceList from "./ServiceList";

export default function Services() {
  return (
    <>
        <div className="container mt-10">
        <div>
            <h2 className="text-black pb-12">Our Services</h2>
            <p className="mb-8">
                We assume the role of your dedicated client representative, ensuring a seamless journey for your project from inception 
                to completion. With our comprehensive capabilities, we have the expertise to oversee every aspect of the project lifecycle.
            </p>
            <p className="mb-8">
                Whether you require our services for the initial stages of design and construction, or for specific phases 
                such as delivery, sales, and handover, we are equipped to provide tailored solutions to meet your needs
            </p>
        </div>

        {/* Services provided */}
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
            <ServiceList />
        </div>
        {/* Services provided End */}
        </div>
        {/* Call to action */}
        <section className="pt-44 pb-28 overflow-x-hidden">
            <CallToAction />
        </section>
        {/* Call to action end */}
    </>
  )
}
