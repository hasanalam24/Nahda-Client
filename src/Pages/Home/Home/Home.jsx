import Counts from "../../StudentsCount/Counts";
import Banner from "../Banner/Banner";
import Testimonials from "./Testimonials/Testimonials";
import TestimonialsLeft from "./Testimonials/TestimonialsLeft";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Counts></Counts>
            <div className="my-10">
                <div className="border-b-2 border-red-500 w-max py-4 mx-auto text-center mb-8">
                    <p>TESTIMONIAL</p>
                    <h1 className='text-4xl'>What our student say</h1>
                </div>
                <div className=" relative">
                    <TestimonialsLeft></TestimonialsLeft>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Testimonials></Testimonials>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home