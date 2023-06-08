import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>SM | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
            </div>
        </>
    );
};

export default Home;