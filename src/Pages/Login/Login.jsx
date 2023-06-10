import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login.gif'
import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


// TODO - Design Need
const Login = () => {


    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    // Password Hide & Show 
    const [hide, setHide] = useState(false);
    const handlePasswordVisible = () => {
        setHide(!hide);
    }


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire('Login Successfully')
                navigate(from, { replace: true });
            })
    };


    return (
        <>
            <Helmet>
                <title>SM | Login</title>
            </Helmet>
            <div className="hero min-h-screen mx-auto">
                <div className="hero-content lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-3 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
                        <h1 className='text-center text-4xl text-pink-600 font-bold'>Login</h1>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Email</span>
                                    </label>
                                    <input defaultValue="" {...register("email", { required: true })} type="email" name='email' placeholder="Your Email" className="input border-0 focus:outline-none" />
                                    {errors.email && <span className="text-red-600">Email is required *</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Password</span>
                                    </label>

                                    <div className='relative'>
                                        <input defaultValue="" {...register("password", { required: true })} type={hide ? "text" : "password"} name='password' placeholder="Your Password" className="input border-0 focus:outline-none w-full" />
                                        <label onClick={handlePasswordVisible} className='cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2'>{!hide ? <FaRegEye className='text-xl'></FaRegEye> : <FaRegEyeSlash className='text-xl'></FaRegEyeSlash>}</label>
                                    </div>
                                    {errors.password && <span className="text-red-600">Password is required *</span>}
                                </div>
                                {/* <p className='text-sm font-extrabold text-green-600'>{success}</p>
                            <p className='text-sm font-extrabold text-red-600'>{error}</p> */}
                                <div className="form-control mt-6">
                                    <button className="text-md tracking-widest btn border-0 bg-gradient-to-r from-pink-400 to-yellow-500">Login</button>
                                </div>
                            </form>
                            <div>
                                <SocialLogin></SocialLogin>
                            </div>
                            <p className='font-semibold mt-5'>Don't have an account? <Link to='/signUp' className='text-rose-600'>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;