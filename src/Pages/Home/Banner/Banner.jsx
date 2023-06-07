import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/banner/01.png'
import img2 from '../../../assets/banner/02.png'
import img3 from '../../../assets/banner/03.png'
import img4 from '../../../assets/banner/04.png'
import img5 from '../../../assets/banner/05.png'
import img6 from '../../../assets/banner/06.png'
import Container from "../../Shared/Container/Container";

const Banner = () => {
    return (
        <Container>
            <Carousel>
                <div className="flex h-screen items-center justify-center">
                    <div>
                        <img src={img3} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                        <h2 className="uppercase text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                        <span className="text-rose-700 uppercase text-5xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                        <div className="flex gap-5">
                            <button className="btn border-0 text-white bg-purple-600">Our Courses</button>
                            <button className="btn border-0 text-white bg-pink-500">Get a Quote</button>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={img2} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                        <h2 className="uppercase text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                        <span className="text-rose-700 uppercase text-5xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                        <div className="flex gap-5">
                            <button className="btn border-0 text-white bg-purple-600">Our Courses</button>
                            <button className="btn border-0 text-white bg-pink-500">Get a Quote</button>
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                        <h2 className="uppercase text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                        <span className="text-rose-700 uppercase text-5xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                        <div className="flex gap-5">
                            <button className="btn border-0 text-white bg-purple-600">Our Courses</button>
                            <button className="btn border-0 text-white bg-pink-500">Get a Quote</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img1} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                        <h2 className="uppercase text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                        <span className="text-rose-700 uppercase text-5xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                        <div className="flex gap-5">
                            <button className="btn border-0 text-white bg-purple-600">Our Courses</button>
                            <button className="btn border-0 text-white bg-pink-500">Get a Quote</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img4} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                        <h2 className="uppercase text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                        <span className="text-rose-700 uppercase text-5xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                        <div className="flex gap-5">
                            <button className="btn border-0 text-white bg-purple-600">Our Courses</button>
                            <button className="btn border-0 text-white bg-pink-500">Get a Quote</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img5} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                        <h2 className="uppercase text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                        <span className="text-rose-700 uppercase text-5xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                        <div className="flex gap-5">
                            <button className="btn border-0 text-white bg-purple-600">Our Courses</button>
                            <button className="btn border-0 text-white bg-pink-500">Get a Quote</button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img6} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start space-y-3">
                        <h2 className="uppercase text-5xl text-start font-extrabold text-white">CREATING WORLD-CLASS</h2>
                        <span className="text-rose-700 uppercase text-5xl text-start font-extrabold mt-2">CHAMPION ATHLETES</span>
                        <div className="flex gap-5">
                            <button className="btn border-0 text-white bg-purple-600">Our Courses</button>
                            <button className="btn border-0 text-white bg-pink-500">Get a Quote</button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </Container>
    );
};

export default Banner;