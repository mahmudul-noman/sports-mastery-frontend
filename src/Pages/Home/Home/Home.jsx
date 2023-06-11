import { Helmet } from 'react-helmet-async';
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Review from "../Review/Review";
import Slider from "../Banner/Slider";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>SM | Home</title>
            </Helmet>
            <div>
                <Slider></Slider>
                <PopularClasses></PopularClasses>
                <PopularInstructors></PopularInstructors>
                <Review></Review>
            </div>
        </>
    );
};

export default Home;