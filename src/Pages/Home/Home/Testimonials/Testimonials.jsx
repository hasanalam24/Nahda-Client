import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Ratings from '../../Ratings/Ratings';

const Testimonials = () => {
    return (

        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='w-2/4 mx-auto text-center space-y-4'>
                        <p>TESTIMONIAL</p>
                        <h1 className='text-4xl'>What our student say</h1>
                        <h4>“Aviationaly is worth much more than I paid. I couldn’t have asked for more than this. The very best. Absolutely wonderful!”</h4>
                        <p className='font-medium'>Robertson - San Diego</p>
                        <div className='w-3/12 mx-auto'>
                            <Ratings></Ratings>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-2/4 mx-auto text-center space-y-4'>
                        <p>TESTIMONIAL</p>
                        <h1 className='text-4xl'>What our student say</h1>
                        <h4>“Aviationaly is worth much more than I paid. I couldn’t have asked for more than this. The very best. Absolutely wonderful!”</h4>
                        <p className='font-medium'>Robertson - San Diego</p>
                        <div className='w-3/12 mx-auto'>
                            <Ratings></Ratings>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-2/4 mx-auto text-center space-y-4'>
                        <p>TESTIMONIAL</p>
                        <h1 className='text-4xl'>What our student say</h1>
                        <h4>“Aviationaly is worth much more than I paid. I couldn’t have asked for more than this. The very best. Absolutely wonderful!”</h4>
                        <p className='font-medium'>Robertson - San Diego</p>
                        <div className='w-3/12 mx-auto'>
                            <Ratings></Ratings>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-2/4 mx-auto text-center space-y-4'>
                        <p>TESTIMONIAL</p>
                        <h1 className='text-4xl'>What our student say</h1>
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