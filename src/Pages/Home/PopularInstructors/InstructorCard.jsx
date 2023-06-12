import { motion } from "framer-motion";

const InstructorCard = ({ instr }) => {

    const { photo, name, email } = instr;

    return (
        <div className="card bg-base-100 shadow-xl group">
            <figure><img className="group-hover:scale-110 transition w-full h-36 object-cover" src={photo} alt="Class Image" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl text-transparent bg-gradient-to-r from-purple-900 to-sky-300 bg-clip-text">{name}</h2>
                <p className="font-semibold text-purple-600 break-all">{email}</p>
                <div className="card-actions justify-start">
                    <motion.button
                        drag
                        dragConstraints={{
                          top: -50,
                          left: -50,
                          right: 50,
                          bottom: 50
                        }}
                    className="btn btn-sm mt-5 btn-outline border-purple-700 text-sky-600 hover:bg-purple-600 hover:text-white">More Details</motion.button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;