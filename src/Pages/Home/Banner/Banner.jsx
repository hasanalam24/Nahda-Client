import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://i.ibb.co/J3QmVLn/Nahda-Banner1.jpg" />

                </div>
                <div>
                    <img src="https://i.ibb.co/r7Zh3Yv/Nahda-Banner2.jpg" />

                </div>
                <div>
                    <img src="https://i.ibb.co/3RyprVF/Nahda-Banner3.jpg" />

                </div>
            </Carousel>
        </div>
    );
};

export default Banner;