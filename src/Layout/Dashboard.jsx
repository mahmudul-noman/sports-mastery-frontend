import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import Container from "../Pages/Shared/Container/Container";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { FaBookReader, FaCartArrowDown, FaRegCalendarCheck, FaRegCreditCard, FaRegHandPointRight, FaRegPlusSquare, FaUsers } from 'react-icons/fa';


const Dashboard = () => {


    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();




    return (
        <>
            <Helmet>
                <title>SM | Dashboard</title>
            </Helmet>
            <Navbar></Navbar>
            {/* ------------------------------------ */}



            <div className="py-10">
                <Container>
                    <div className="drawer lg:drawer-open gap-10">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex-col items-center justify-center overflow-auto">
                            {/* Page content here */}
                            <Outlet></Outlet>
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menu</label>

                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 h-full bg-[#927397] rounded-lg space-y-5 text-white">
                                {/* Sidebar content here */}
                                {
                                    isAdmin ?
                                        <>
                                            <div className="flex items-center gap-2 text-base"><FaBookReader></FaBookReader><NavLink className="text-gray-200 font-semibold uppercase" to='/dashboard/manageClass'> Manage Classes</NavLink></div>
                                            <div className="flex items-center gap-2 text-base"><FaUsers></FaUsers><NavLink className="text-gray-200 font-semibold uppercase" to='/dashboard/allUsers'>Manage Users</NavLink></div>
                                        </>
                                        :
                                        isInstructor ?
                                            <>
                                                <div className="flex items-center gap-2 text-base"><FaRegPlusSquare></FaRegPlusSquare><NavLink className="text-gray-200 font-semibold uppercase" to='/dashboard/addClass'>Add Class</NavLink></div>
                                                <div className="flex items-center gap-2 text-base"><FaRegHandPointRight></FaRegHandPointRight><NavLink className="text-gray-200 font-semibold uppercase" to='/dashboard/insMyClass'>My Class</NavLink></div>
                                            </>
                                            :
                                            <>
                                                <div className="flex items-center gap-2 text-base"><FaRegCalendarCheck></FaRegCalendarCheck><NavLink className="text-gray-200 font-semibold uppercase" to='/dashboard/myClass'>My Selected Classes</NavLink></div>
                                                <div className="flex items-center gap-2 text-base"><FaCartArrowDown></FaCartArrowDown><NavLink className="text-gray-200 font-semibold uppercase" to='/dashboard/enrolledClass'>My Enrolled Classes</NavLink></div>
                                                <div className="flex items-center gap-2 text-base"><FaRegCreditCard></FaRegCreditCard><NavLink className="text-gray-200 font-semibold uppercase" to='/dashboard/payHistory'>Payment History</NavLink></div>
                                            </>
                                }
                            </ul>

                        </div>
                    </div>
                </Container>
            </div>






            {/* ------------------------------------ */}
            <Footer></Footer>
        </>
    );
};

export default Dashboard;