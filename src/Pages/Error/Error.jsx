
import { FaAngleLeft } from 'react-icons/fa';
import errorImg from '../../assets/error.gif'

const Error = () => {
    return (
        <div>
            {/* <img className='object-cover w-full max-h-screen relative' src="https://i.ibb.co/Cv1vMKN/21586054-Na-Nov-26.jpg" alt="" /> */}
            <img className='object-cover w-full max-h-screen relative' src={errorImg} alt="" />


                <button className="btn btn-outline hover:bg-[#927397] border-white text-white tracking-widest absolute bottom-20 right-1/2" onClick={() => window.history.back()}>
                    <FaAngleLeft></FaAngleLeft> &nbsp; Go Back
                </button>
        </div>
    );
};

export default Error;