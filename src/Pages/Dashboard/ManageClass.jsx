import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageClass = () => {

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes')
        return res.json();
    })


    // const handleMakeDenied = cls => {
    //     fetch(`http://localhost:5000/classes/denied/${cls._id}`, {
    //         method: 'PATCH'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount) {
    //                 refetch();
    //                 Swal.fire({
    //                     position: 'center-center',
    //                     icon: 'success',
    //                     title: `${cls.className} is Rejected`,
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 })
    //             }
    //         })
    // }

    // const handleMakeApproved = cls => {
    //     fetch(`http://localhost:5000/classes/approved/${cls._id}`, {
    //         method: 'PATCH'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount) {
    //                 refetch();
    //                 Swal.fire({
    //                     position: 'center-center',
    //                     icon: 'success',
    //                     title: `${cls.className} is Approved`,
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 })
    //             }
    //         })
    // }


    const handleUpdateStatus = (cls, status) => {
        fetch(`http://localhost:5000/classes/${cls._id}/status`, {
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
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Class Image</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Class Name</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Instructor Name</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Instructor Email</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Available Seats</th>
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
                                    <img className="w-12 h-12 object-cover" src={cls.classImage} alt="" />
                                </td>
                                <td className="font-semibold">{cls.className}</td>
                                <td>{cls.instructorName}</td>
                                <td>{cls.instructorEmail}</td>
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
                                    <button className="btn btn-outline border-purple-700 text-purple-600 hover:bg-purple-600 hover:text-white border-0 border-b-2 border-t-2">
                                        Feedback
                                    </button>
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