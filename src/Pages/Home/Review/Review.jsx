import Rating from 'react-rating';
import img1 from '../../../assets/review/img1.jpg'
import img2 from '../../../assets/review/img2.jpg'
import img3 from '../../../assets/review/img3.jpg'
import img4 from '../../../assets/review/img4.jpg'
import reviewImg1 from '../../../assets/review/r1.jpg'
import reviewImg2 from '../../../assets/review/r2.jpg'
import reviewImg3 from '../../../assets/review/r3.jpg'
import reviewImg4 from '../../../assets/review/r4.jpg'
import Container from '../../Shared/Container/Container';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Review = () => {
    return (
        <Container>
            <div className="pb-24">
                <SectionTitle heading='Student Feedback' subHeading='Sports Mastery greatly values student feedback for continuous improvement'></SectionTitle>
                <div className="h-96 carousel carousel-vertical rounded-box">
                    <div className="carousel-item h-full relative">
                        <img className="object-fill" src={img1} />
                        <div className="absolute inset-0  bg-black opacity-90 flex text-center items-center justify-center">
                            <div className='flex px-48 text-start justify-center gap-10 items-center'>
                                <div className='z-10'>
                                    <img className='object-cover rounded-xl h-[200px]' src={reviewImg1} alt="" />
                                </div>
                                <div>
                                    <Rating
                                        className='text-3xl text-yellow-600'
                                        readonly
                                        placeholderRating={5}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                    <p className="text-white text-start">I highly recommend the <span className='font-extrabold'>Sports Mastery</span> for anyone looking to enhance their athletic skills. The trainers are knowledgeable and dedicated, providing top-notch guidance and support. The facilities and training programs are exceptional, ensuring a productive and enjoyable experience for all athletes.</p> <br />
                                    <span className='text-white font-extrabold italic'>Abid Hasan, Student</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item h-full relative">
                        <img className="object-fill" src={img2} />
                        <div className="absolute inset-0  bg-black opacity-90 flex text-center items-center justify-center">
                            <div className='flex px-48 justify-center text-start gap-10 items-center'>
                                <div className='z-10'>
                                    <img className='object-cover rounded-xl h-[200px]' src={reviewImg2} alt="" />
                                </div>
                                <div>
                                    <Rating
                                        className='text-3xl text-yellow-600'
                                        readonly
                                        placeholderRating={3}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                    <p className="text-white text-start">I highly recommend the <span className='font-extrabold'>Sports Mastery</span> for anyone looking to enhance their athletic skills. The trainers are knowledgeable and dedicated, providing top-notch guidance and support. The facilities and training programs are exceptional, ensuring a productive and enjoyable experience for all athletes.</p> <br />
                                    <span className='text-white font-extrabold italic'>Fahima Rahman, Student</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item h-full relative">
                        <img className="object-fill" src={img3} />
                        <div className="absolute inset-0  bg-black opacity-90 flex text-center items-center justify-center">
                            <div className='flex px-48 justify-center text-start gap-10 items-center'>
                                <div className='z-10'>
                                    <img className='object-cover rounded-xl h-[200px]' src={reviewImg3} alt="" />
                                </div>
                                <div>
                                    <Rating
                                        className='text-3xl text-yellow-600'
                                        readonly
                                        placeholderRating={4.5}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                    <p className="text-white text-start">I highly recommend the <span className='font-extrabold'>Sports Mastery</span> for anyone looking to enhance their athletic skills. The trainers are knowledgeable and dedicated, providing top-notch guidance and support. The facilities and training programs are exceptional, ensuring a productive and enjoyable experience for all athletes.</p> <br />
                                    <span className='text-white font-extrabold italic'>Minhaz Uddin, Student</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item h-full relative">
                        <img className="object-fill" src={img4} />
                        <div className="absolute inset-0  bg-black opacity-90 flex text-center items-center justify-center">
                            <div className='flex px-48 justify-center text-start gap-10 items-center'>
                                <div className='z-10'>
                                    <img className='object-cover rounded-xl h-[200px]' src={reviewImg4} alt="" />
                                </div>
                                <div>
                                    <Rating
                                        className='text-3xl text-yellow-600'
                                        readonly
                                        placeholderRating={2.5}
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                                        fullSymbol={<FaStar></FaStar>}
                                    />
                                    <p className="text-white text-start">I highly recommend the <span className='font-extrabold'>Sports Mastery</span> for anyone looking to enhance their athletic skills. The trainers are knowledgeable and dedicated, providing top-notch guidance and support. The facilities and training programs are exceptional, ensuring a productive and enjoyable experience for all athletes.</p> <br />
                                    <span className='text-white font-extrabold italic'>Abida Karim, Student</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Review;