import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login.gif'
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


// TODO - Design Need
const Login = () => {


    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    };



    return (
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
                                <input defaultValue="" {...register("password", { required: true })} type="password" name='password' placeholder="Your Password" className="input border-0 focus:outline-none" />
                                {errors.password && <span className="text-red-600">Password is required *</span>}
                            </div>
                            {/* <p className='text-sm font-extrabold text-green-600'>{success}</p>
                            <p className='text-sm font-extrabold text-red-600'>{error}</p> */}
                            <div className="form-control mt-6">
                                <button className="text-md tracking-widest btn border-0 bg-gradient-to-r from-pink-400 to-yellow-500">Login</button>
                            </div>
                        </form>
                        <div>
                            <button className='btn border-0 btn-block flex items-center bg-gradient-to-r from-green-700 to-yellow-600 tracking-widest'>Login With Google <span className='ml-4 text-2xl'><FaGoogle></FaGoogle></span></button>
                        </div>
                        <p className='font-semibold mt-5'>Don't have an account? <Link to='/signUp' className='text-rose-600'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;