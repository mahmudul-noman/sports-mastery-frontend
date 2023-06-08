import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>SM | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <PopularClasses></PopularClasses>
            </div>
        </>
    );
};

export default Home;