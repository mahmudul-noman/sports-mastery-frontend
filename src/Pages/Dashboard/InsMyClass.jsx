import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth";
import { motion } from "framer-motion";

const InsMyClass = () => {

    const { user } = useAuth();

    const [clas, setClas] = useState([]);

    useEffect(() => {
        fetch(`https://sports-mastery-server.vercel.app/insMyClass/${user?.email}`)
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
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Available Seats</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Feedback</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Status</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            clas.map((cl, index) => <motion.tr
                                whileHover={{ scale: .9 }}
                                whileTap={{ scale: 1.1 }}
                                key={cl._id}>
                                <th>{index + 1}</th>
                                <td><img className="w-14 h-14 rounded-xl object-cover" src={cl.classImage} alt="" /></td>
                                <td className="text-lg font-bold">{cl.className}</td>
                                <td className="font-semibold text-base">$ {cl.price}</td>
                                <td className="text-base font-semibold">0</td>
                                <td className="text-base font-semibold">{cl.availableSeats}</td>
                                <td className="text-base font-semibold">N/A</td>
                                <td className="text-base font-bold">
                                    {cl.status === 'approved' ? (
                                        <span className="text-green-600 uppercase">Approved</span>
                                    ) : cl.status === 'denied' ? (
                                        <span className="text-red-600 uppercase">Denied</span>
                                    ) : (
                                        <span className="uppercase">Pending</span>
                                    )}
                                </td>
                                <td><button className="btn btn-outline border-purple-700 text-sky-600 hover:bg-purple-600 hover:text-white border-0 border-b-2 border-t-2">Update</button></td>
                            </motion.tr>)
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default InsMyClass;