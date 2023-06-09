
const InstructorCard = ({ instr }) => {

    const { instructorImage, instructorName, instructorEmail } = instr;

    return (
        <div className="card bg-base-100 shadow-xl group">
            <figure><img className="group-hover:scale-110 transition" src={instructorImage} alt="Class Image" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl text-transparent bg-gradient-to-r from-purple-900 to-sky-300 bg-clip-text">{instructorName}</h2>
                <p className="font-semibold text-purple-600">{instructorEmail}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-sm mt-5 btn-outline border-purple-700 text-sky-600 hover:bg-purple-600 hover:text-white">More Details</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;