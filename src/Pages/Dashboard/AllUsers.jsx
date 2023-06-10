import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { FaCheckCircle, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }



    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        // TODO - Design Improve
        <>
            <Helmet>
                <title>SM | Manage Users</title>
            </Helmet>
            {/* ------------------------------ */}
            <div className="mt-10">
                <SectionTitle heading='All Users'></SectionTitle>
            </div>
            {/* ------------------------------ */}
            <div className="pt-5 pb-24">
                <div className="flex items-center gap-2">
                    <FaUsers className="text-cyan-800 text-3xl"></FaUsers>
                    <h2 className="font-semibold text-2xl">Total Users: <span className="font-extrabold text-sky-600">{users.length}</span></h2>
                </div>
                <table className="table w-full text-center">
                    <thead>
                        <tr>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">SL</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Image</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Name</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">E-mail</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Action</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td className="text-center"><img className="w-16 h-16 rounded-xl object-cover" src={user.photo} alt="" /></td>
                                    <td className="text-lg font-bold">{user.name}</td>
                                    <td className="font-semibold text-base">{user.email}</td>
                                    <td>{
                                        user.role === 'instructor' ? <button className="btn btn-disabled btn-link font-extrabold text-green-600"><FaCheckCircle className="text-xl text-green-700"></FaCheckCircle>Instructor</button> :
                                            <button onClick={() => handleMakeInstructor(user)} className="btn btn-outline border-purple-700 text-sky-600 hover:bg-purple-600 hover:text-white border-0 border-b-2 border-t-2">Make Instructor</button>
                                    }
                                    </td>
                                    <td>{
                                        user.role === 'admin' ? <button className="btn btn-disabled btn-link font-extrabold text-green-600"><FaCheckCircle className="text-xl text-green-700"></FaCheckCircle>Admin</button> :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-outline border-purple-700 text-sky-600 hover:bg-purple-600 hover:text-white border-0 border-b-2 border-t-2">Make Admin</button>
                                    }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default AllUsers;