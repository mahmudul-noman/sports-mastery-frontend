import { FaInfoCircle } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useCart from "../../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyClass = () => {

    const { user } = useContext(AuthContext);
    const [cart, refetch] = useCart();

    const handleDelete = item => {
        console.log(item);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://sports-mastery-server.vercel.app/carts/${item}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }



    return (
        <>
            <Helmet>
                <title>SM | My Selected Classes</title>
            </Helmet>
            <div>
                <div className="mb-12">
                    <SectionTitle heading='Your Selected Classes' subHeading='Streamline Your knowledge Experience: Pay & Delete with Ease!'></SectionTitle>
                </div>

                <div className="flex items-center gap-2">
                    <FaInfoCircle className="text-cyan-800"></FaInfoCircle>
                    <h2 className="font-semibold">Hello ! <span className="font-extrabold text-sky-600">{user?.displayName}</span>. You have <span className="font-extrabold text-sky-600">{cart.length || 0} items</span> in your cart.</h2>
                </div>
                {/* ------------------------------ */}
                <div className="pt-10 pb-24">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">SL</th>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Image</th>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Class Name</th>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Price</th>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Action</th>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) =>
                                    <tr
                                        
                                        key={item._id}>
                                        <th>{index + 1}</th>
                                        <td><img className="w-32 h-32 rounded-xl object-cover" src={item.image} alt="" /></td>
                                        <td className="text-lg font-bold">{item.className}</td>
                                        <td className="text-base font-semibold">$ {item.price}</td>
                                        <td><Link to='/dashboard/payment'><button className="btn btn-outline border-purple-700 text-sky-600 hover:bg-purple-600 hover:text-white border-0 border-b-2 border-t-2">Pay</button></Link></td>
                                        <td><button onClick={() => handleDelete(item._id)} className="btn btn-outline border-purple-700 text-red-600 hover:bg-purple-600 hover:text-white border-0 border-b-2 border-t-2">Delete</button></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyClass;