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
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="flex h-screen items-center justify-center">
                            <div>
                                <img src={img3} />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                                <h2 className="uppercase text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                                <span className="text-rose-700 uppercase text-5xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                                <div className="flex gap-5">
                                    <button className="btn border-0 text-white bg-purple-600 hover:bg-black">Our Courses</button>
                                    <button className="btn border-0 text-white bg-pink-500 hover:bg-black">Get a Quote</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex h-screen items-center justify-center">
                            <div>
                                <img src={img1} />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                                <h2 className="uppercase text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                                <span className="text-rose-700 uppercase text-5xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                                <div className="flex gap-5">
                                    <button className="btn border-0 text-white bg-purple-600 hover:bg-black">Our Courses</button>
                                    <button className="btn border-0 text-white bg-pink-500 hover:bg-black">Get a Quote</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex h-screen items-center justify-center">
                            <div>
                                <img src={img2} />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                                <h2 className="uppercase text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                                <span className="text-rose-700 uppercase text-5xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                                <div className="flex gap-5">
                                    <button className="btn border-0 text-white bg-purple-600 hover:bg-black">Our Courses</button>
                                    <button className="btn border-0 text-white bg-pink-500 hover:bg-black">Get a Quote</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex h-screen items-center justify-center">
                            <div>
                                <img src={img4} />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                                <h2 className="uppercase text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                                <span className="text-rose-700 uppercase text-5xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                                <div className="flex gap-5">
                                    <button className="btn border-0 text-white bg-purple-600 hover:bg-black">Our Courses</button>
                                    <button className="btn border-0 text-white bg-pink-500 hover:bg-black">Get a Quote</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex h-screen items-center justify-center">
                            <div>
                                <img src={img5} />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                                <h2 className="uppercase text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                                <span className="text-rose-700 uppercase text-5xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                                <div className="flex gap-5">
                                    <button className="btn border-0 text-white bg-purple-600 hover:bg-black">Our Courses</button>
                                    <button className="btn border-0 text-white bg-pink-500 hover:bg-black">Get a Quote</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex h-screen items-center justify-center">
                            <div>
                                <img src={img6} />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                                <h2 className="uppercase text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                                <span className="text-rose-700 uppercase text-5xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                                <div className="flex gap-5">
                                    <button className="btn border-0 text-white bg-purple-600 hover:bg-black">Our Courses</button>
                                    <button className="btn border-0 text-white bg-pink-500 hover:bg-black">Get a Quote</button>
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