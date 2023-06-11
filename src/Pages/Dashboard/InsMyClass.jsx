import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth";

const InsMyClass = () => {

    const { user } = useAuth();

    const [clas, setClas] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/insMyClass/${user?.email}`)
            .then(res => res.json())
            .then(data => setClas(data))
    }, [user])

    return (
        <>

            <SectionTitle heading='My Class'></SectionTitle>

            {/* ------------------------------ */}
            <div className="pt-10 pb-24">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">SL</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Image</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Class Name</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Price</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Enrolled</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Av. Seats</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Feedback</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Status</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            clas.map((cl, index) => <tr key={cl._id}>
                                <th>{index + 1}</th>
                                <td><img className="w-14 h-14 rounded-xl object-cover" src={cl.classImage} alt="" /></td>
                                <td className="text-lg font-bold">{cl.className}</td>
                                <td className="font-semibold text-base">$ {cl.price}</td>
                                <td className="text-base font-semibold">0</td>
                                <td className="text-base font-semibold">{cl.availableSeats}</td>
                                <td className="text-base font-semibold">N/A</td>
                                <td className="text-base font-semibold">Pending</td>
                                <td><button className="btn btn-outline border-purple-700 text-sky-600 hover:bg-purple-600 hover:text-white border-0 border-b-2 border-t-2">Update</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default InsMyClass;