import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Review from "../Review/Review";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>SM | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <PopularClasses></PopularClasses>
                <PopularInstructors></PopularInstructors>
                <Review></Review>
            </div>
        </>
    );
};

export default Home;