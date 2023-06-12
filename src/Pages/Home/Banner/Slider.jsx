import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Container from '../../Shared/Container/Container';
// Slider Image
import img1 from '../../../assets/banner/01.png'
import img2 from '../../../assets/banner/02.png'
import img3 from '../../../assets/banner/03.png'
import img4 from '../../../assets/banner/04.png'
import img5 from '../../../assets/banner/05.png'
import img6 from '../../../assets/banner/06.png'


const Slider = () => {


    return (
        <>
            <Container>
                <Swiper
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper overflow-hidden"
                >
                    <SwiperSlide>
                        <div className="flex md:h-screen items-center justify-center">
                            <div>
                                <img src='https://i.ibb.co/X4RrNpY/03.png' />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                                <h2 className="uppercase text-xl md:text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                                <span className="text-rose-700 uppercase text-lg md:text-2xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                                <div className="flex gap-5">
                                    <button className="btn-sm btn md:btn border-0 text-white bg-purple-600 hover:bg-black">Our Courses</button>
                                    <button className="btn btn-sm md:btn border-0 text-white bg-pink-500 hover:bg-black">Get a Quote</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex md:h-screen items-center justify-center">
                            <div>
                                <img src='https://i.ibb.co/cYnmcw2/04.png' />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                                <h2 className="uppercase text-xl md:text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                                <span className="text-rose-700 uppercase text-lg md:text-2xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                                <div className="flex gap-5">
                                    <button className="btn-sm btn md:btn border-0 text-white bg-purple-600 hover:bg-black">Our Courses</button>
                                    <button className="btn btn-sm md:btn border-0 text-white bg-pink-500 hover:bg-black">Get a Quote</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex md:h-screen items-center justify-center">
                            <div>
                                <img src='https://i.ibb.co/y0qwXpJ/05.png' />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                                <h2 className="uppercase text-xl md:text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                                <span className="text-rose-700 uppercase text-lg md:text-2xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                                <div className="flex gap-5">
                                    <button className="btn-sm btn md:btn border-0 text-white bg-purple-600 hover:bg-black">Our Courses</button>
                                    <button className="btn btn-sm md:btn border-0 text-white bg-pink-500 hover:bg-black">Get a Quote</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex md:h-screen items-center justify-center">
                            <div>
                                <img src='https://i.ibb.co/vzHS1vg/06.png' />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                                <h2 className="uppercase text-xl md:text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                                <span className="text-rose-700 uppercase text-lg md:text-2xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                                <div className="flex gap-5">
                                    <button className="btn-sm btn md:btn border-0 text-white bg-purple-600 hover:bg-black">Our Courses</button>
                                    <button className="btn btn-sm md:btn border-0 text-white bg-pink-500 hover:bg-black">Get a Quote</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex md:h-screen items-center justify-center">
                            <div>
                                <img src='https://i.ibb.co/KbhdT60/01.png' />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                                <h2 className="uppercase text-xl md:text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                                <span className="text-rose-700 uppercase text-lg md:text-2xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                                <div className="flex gap-5">
                                    <button className="bg-purple-600 hover:bg-black btn-sm btn md:btn border-0 text-white">Our Courses</button>
                                    <button className="bg-pink-500 hover:bg-black btn btn-sm md:btn border-0 text-white">Get a Quote</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex md:h-screen items-center justify-center">
                            <div>
                                <img src='https://i.ibb.co/6m6GG0S/02.png' />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                                <h2 className="uppercase text-xl md:text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                                <span className="text-rose-700 uppercase text-lg md:text-2xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                                <div className="flex gap-5">
                                    <button className="btn-sm btn md:btn border-0 text-white bg-purple-600 hover:bg-black">Our Courses</button>
                                    <button className="btn btn-sm md:btn border-0 text-white bg-pink-500 hover:bg-black">Get a Quote</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </>
    );
};

export default Slider;