import { motion } from "framer-motion";

const ClassCard = ({ cls }) => {

    const { classImage, className, instructorName, enrolledStudents, availableSeats, price } = cls;


    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="card bg-base-100 shadow-xl">
            <figure><img className="group-hover:scale-110 transition h-80 object-cover" src={classImage} alt="Class Image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p className="font-semibold text-transparent bg-gradient-to-r from-purple-900 to-sky-300 bg-clip-text">Instructor: {instructorName}</p>
                <p className="text-sky-600 font-semibold">Enrolled: <span className="text-purple-500">{enrolledStudents}</span> Students</p>
                <p className="text-sky-600 font-semibold">Available Seats: {availableSeats}</p>
                <p className="text-purple-700 font-extrabold">Price: $ {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-purple-700 text-sky-600 hover:bg-purple-600 hover:text-white border-0 border-b-2 border-t-2">Enroll</button>
                </div>
            </div>
        </motion.div>
    );
};

export default ClassCard;