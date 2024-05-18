import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Ratings from '../../Ratings/Ratings';
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    return (

        <div className='mx-16 bg-white bg-opacity-65 rounded-xl p-10'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper  w-[700px]">
                <SwiperSlide>
                    <div className='w-[98%] px-16 mx-auto text-center space-y-4 '>

                        <div className='w-[10%] mx-auto'>
                            <FaQuoteLeft className='text-4xl text-center'></FaQuoteLeft>
                        </div>
                        <h4>“Aviationaly is worth much more than I paid. I couldn’t have asked for more than this. The very best. Absolutely wonderful!”</h4>
                        <p className='font-medium'>Robertson - San Diego</p>
                        <div className='w-3/12 mx-auto'>
                            <Ratings></Ratings>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[98%] px-16 mx-auto text-center space-y-4 '>
                        <div className='w-[10%] mx-auto'>
                            <FaQuoteLeft className='text-4xl text-center'></FaQuoteLeft>
                        </div>

                        <h4>“Aviationaly is worth much more than I paid. I couldn’t have asked for more than this. The very best. Absolutely wonderful!”</h4>
                        <p className='font-medium'>Robertson - San Diego</p>
                        <div className='w-3/12 mx-auto'>
                            <Ratings></Ratings>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[98%] px-16 mx-auto text-center space-y-4 '>
                        <div className='w-[10%] mx-auto'>
                            <FaQuoteLeft className='text-4xl text-center'></FaQuoteLeft>
                        </div>

                        <h4>“Aviationaly is worth much more than I paid. I couldn’t have asked for more than this. The very best. Absolutely wonderful!”</h4>
                        <p className='font-medium'>Robertson - San Diego</p>
                        <div className='w-3/12 mx-auto'>
                            <Ratings></Ratings>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[98%] px-16 mx-auto text-center space-y-4 '>
                        <div className='w-[10%] mx-auto'>
                            <FaQuoteLeft className='text-4xl text-center'></FaQuoteLeft>
                        </div>

                        <h4>“Aviationaly is worth much more than I paid. I couldn’t have asked for more than this. The very best. Absolutely wonderful!”</h4>
                        <p className='font-medium'>Robertson - San Diego</p>
                        <div className='w-3/12 mx-auto'>
                            <Ratings></Ratings>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>

    );
};

export default Testimonials;