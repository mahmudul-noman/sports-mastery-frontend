import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageClass = () => {

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('https://sports-mastery-server.vercel.app/classes')
        return res.json();
    })

    const handleUpdateStatus = (cls, status) => {
        console.log(cls)
        fetch(`https://sports-mastery-server.vercel.app/classes/${cls._id}/status`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: status })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    let message;
                    if (status === 'denied') {
                        message = `${cls.className} is Rejected`;
                    } else if (status === 'approved') {
                        message = `${cls.className} is Approved`;
                    }
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };



    return (
        <>
 
            <SectionTitle heading='Manage Classes'></SectionTitle>
            {/* ------------------------------ */}
            <div className="pt-10 pb-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">SL</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Image & Name</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Name & Email</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Seats</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Price</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Action</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Action</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((cls, index) => (
                            <tr key={cls._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <img className="w-12 h-12 object-cover" src={cls.classImage} alt="" /> <br />
                                    <span className="font-semibold">{cls.className}</span>
                                </td>
                                <td>{cls.instructorName} <br /> {cls.instructorEmail}</td>
                                <td>{cls.availableSeats}</td>
                                <td className="font-semibold">$ {cls.price}</td>

                                <td>
                                    {cls.status === 'denied' ? (
                                        <div className="flex">
                                            <button className="btn btn-disabled btn-link font-extrabold text-red-600">
                                                <FaTimesCircle className="text-xl text-red-700" />
                                                Denied
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            disabled={cls.status === 'approved'}
                                            onClick={() => handleUpdateStatus(cls, 'denied')}
                                            className="btn btn-outline border-purple-700 text-black hover:bg-purple-600 hover:text-white border-0 border-b-2 border-t-2"
                                        >
                                            Deny
                                        </button>
                                    )}
                                </td>

                                <td>
                                    {cls.status === 'approved' ? (
                                        <div className="flex">
                                            <button className="btn btn-disabled btn-link font-extrabold text-green-600">
                                                <FaCheckCircle className="text-xl text-green-700" />
                                                Approved
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            disabled={cls.status === 'denied'}
                                            onClick={() => handleUpdateStatus(cls, 'approved')}
                                            className="btn btn-outline border-purple-700 text-black hover:bg-purple-600 hover:text-white border-0 border-b-2 border-t-2"
                                        >
                                            Approve
                                        </button>
                                    )}
                                </td>

                                <td>
                                    <Link to={`/dashboard/feedback/${cls._id}`} ><button className="btn btn-sm btn-outline border-purple-700 text-purple-600 hover:bg-purple-600 hover:text-white border-0 border-b-2 border-t-2">
                                        Feedback
                                    </button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>

    );
};

export default ManageClass;