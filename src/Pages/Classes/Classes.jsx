import { useContext } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useClass from "../../hooks/useClass";
import Container from "../Shared/Container/Container";
import Loader from "../Shared/Loader/Loader";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { FaInfoCircle } from 'react-icons/fa';
import { motion } from "framer-motion";


const Classes = () => {
    const [classes, loading] = useClass();
    const approvedClass = classes.filter(cls => cls.status === 'approved');


    const { user } = useContext(AuthContext);
    const [cart, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = cls => {
        console.log(cls);
        if (user) {
            const cartClass = { classId: cls._id, className: cls.className, image: cls.classImage, price: cls.price, email: user?.email, name: user?.displayName }
            console.log(cartClass);
            fetch('https://sports-mastery-server.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); //Refetch Cart to update cart number
                        Swal.fire('Class Added To Cart')
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login First !!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            })
        }
    }

    // ==============================
    if (loading) {
        return <Loader></Loader>
    }


    return (
        <m>
            <Helmet>
                <title>SM | Classes</title>
            </Helmet>
            <Container>
                <div className="mt-20">
                    <SectionTitle heading='Discover a World of Sports Excellence' subHeading='Elevate Your Skills with our Comprehensive Classes and Training Programs'></SectionTitle>
                </div>

                <div className="flex items-center gap-2">
                    <FaInfoCircle className="text-cyan-700"></FaInfoCircle>
                    <h2 className="font-semibold">Hello ! {user?.displayName}. You have <span className="font-extrabold text-sky-600 text-xl"><Link to='/dashboard/myClass'>{cart.length || 0} items</Link></span> in your cart.</h2>
                </div>
                {/* ------------------------------ */}
                <div className="pt-10 pb-24">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">SL</th>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Image</th>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Class Name</th>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Instructor</th>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Available Seats</th>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Price</th>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                approvedClass.map((cls, index) =>
                                    <motion.tr

                                        key={cls._id}
                                        whileHover={{ scale: .9 }}
                                        whileTap={{ scale: 1.1 }}
                                    >
                                        <th>{index + 1}</th>
                                        <td><img className="w-32 h-32 rounded-xl object-cover" src={cls.classImage} alt="" /></td>
                                        <td className="text-lg font-bold">{cls.className}</td>
                                        <td className="font-semibold text-base">{cls.instructorName}</td>
                                        <td className="text-base font-semibold">{cls.availableSeats}</td>
                                        <td className="text-base font-semibold">$ {cls.price}</td>
                                        <td><button onClick={() => handleAddToCart(cls)} className="btn btn-outline border-purple-700 text-sky-600 hover:bg-purple-600 hover:text-white border-0 border-b-2 border-t-2">Select</button></td>
                                    </motion.tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </Container>
        </m>
    );
};

export default Classes;