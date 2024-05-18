import Counts from "../../StudentsCount/Counts";
import Banner from "../Banner/Banner";
import TestImg from "./TestImg/TestImg";

import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Counts></Counts>
            {/* <div className="flex gap-10"> */}
            {/* <TestImg></TestImg> */}
            <Testimonials></Testimonials>
            {/* </div> */}
        </div>
    );
};

export default Home