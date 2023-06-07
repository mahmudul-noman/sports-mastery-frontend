
import { Link } from 'react-router-dom';
import '../../../../src/App';
import ActiveLink from './ActiveLink';
import logo from '../../../assets/logo.png'


const Navbar = () => {


    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <ActiveLink className='text-base font-semibold text-[#666]' to="/">Home</ActiveLink>
                            <ActiveLink className='text-base font-semibold text-[#666]' to="/instructors">Instructors</ActiveLink>
                            <ActiveLink className='text-base font-semibold text-[#666]' to="/classes">Classes</ActiveLink>
                        </ul>
                    </div>
                    <Link to='/' className='flex items-center'>
                        <img className='w-44' src={logo} alt="" />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-7">
                        <ActiveLink className='text-2xl tracking-widest uppercase font-bold text-[#666]' to="/">Home</ActiveLink>
                        <ActiveLink className='text-base tracking-widest uppercase font-semibold text-[#666]' to="/instructors">Instructors</ActiveLink>
                        {/* {
                            user ? */}
                        <div className='space-x-7 flex'>
                            <ActiveLink className='text-base tracking-widest uppercase font-semibold text-[#666]' to="/classes">Classes</ActiveLink>
                        </div>
                        {/* : ''

                        } */}
                    </ul>
                </div>



                <div className="navbar-end space-x-3">
                    <div className='flex items-center'>

                        <div className='flex items-center'>
                            <div className='mr-3'>

                                <img title='' src='https://img.freepik.com/free-photo/athlete-runner-prepare-run-from-crouch-start_176420-16476.jpg?w=360&t=st=1686158179~exp=1686158779~hmac=48cadaf30687389c0d2eb59b646190762876e2b78cf5a071d3c1e276047e8b59' className='w-14 h-14 border-2 border-[#927397] p-1 rounded-full object-cover' alt="" />
                            </div>
                            <Link onClick='' className="btn btn-outline hover:bg-[#927397] border-[#927397] hover:border-[#927397]tracking-widest">Logout</Link>
                        </div>

                        <Link to="/login" className="ml-2 btn btn-outline hover:bg-[#927397] border-[#927397] tracking-widest">Log in</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;