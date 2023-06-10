import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import Container from "../Pages/Shared/Container/Container";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

// TODO - Design Improve, FavIcon
const Dashboard = () => {

    // const isAdmin = true;
    // const isInstructor = true;

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
                        <div className="drawer-content flex-col items-center justify-center">
                            {/* Page content here */}
                            <Outlet></Outlet>
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menu</label>

                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 h-full bg-cyan-50 space-y-5 text-base-content">
                                {/* Sidebar content here */}
                                {
                                    isAdmin ?
                                        <>
                                            <NavLink className="text-base font-semibold uppercase" to='/dashboard/manageClass'>Manage Classes</NavLink>
                                            <NavLink className="text-base font-semibold uppercase" to='/dashboard/allUsers'>Manage Users</NavLink>
                                        </>
                                        :
                                        isInstructor ?
                                            <>
                                                <NavLink className="text-base font-semibold uppercase" to='/dashboard/addClass'>Add Class</NavLink>
                                                <NavLink className="text-base font-semibold uppercase" to='/dashboard/InsMyClass'>My Class</NavLink>
                                            </>
                                            :
                                            <>
                                                <NavLink className="text-base font-semibold uppercase" to='/dashboard/myClass'>My Selected Classes</NavLink>
                                                <NavLink className="text-base font-semibold uppercase" to='/dashboard/enrolledClass'>My Enrolled Classes</NavLink>
                                                <NavLink className="text-base font-semibold uppercase" to='/dashboard/payHistory'>Payment History</NavLink>
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