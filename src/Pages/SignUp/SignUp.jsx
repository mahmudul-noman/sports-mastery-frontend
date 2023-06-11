import { Link, useNavigate } from "react-router-dom";
import signUpImg from '../../assets/login.gif'
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


// TODO - Design Need & Hide - UnHide, Confirm Password, Design Need. Design Correct.
const SignUp = () => {

    // Password Hide & Show 
    const [hide, setHide] = useState(false);
    const handlePasswordVisible = () => {
        setHide(!hide);
    }


    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, photo: data.photoURL }
                        console.log('saveUser', saveUser);
                        fetch('https://sports-mastery-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire('User Created Successfully')
                                    navigate(from, { replace: true });
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
    };


    return (
        <>
            <Helmet>
                <title>SM | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={signUpImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-3 bg-gradient-to-r from-sky-100 via-purple-300 to-sky-100">
                        <h1 className='text-center text-4xl text-purple-600 font-extrabold'>Register</h1>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Name</span>
                                    </label>
                                    <input defaultValue="" {...register("name", { required: true })} type="text" name='name' placeholder="Your Name" className="input border-0 focus:outline-none" />
                                    {errors.name && <span className="text-red-600">Name is required *</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Email</span>
                                    </label>
                                    <input defaultValue="" {...register("email", { required: true })} type="email" name='email' placeholder="Your Email" className="input border-0 focus:outline-none" />
                                    {errors.email && <span className="text-red-600">Email is required *</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Photo URL</span>
                                    </label>
                                    <input defaultValue="" {...register("photoURL", { required: true })} type="text" name='photoURL' placeholder="Your Photo URL" className="input border-0 focus:outline-none" />
                                    {errors.photoURL && <span className="text-red-600">Photo is required *</span>}
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-base">Password</span>
                                    </label>
                                    <div className="relative">
                                        <input defaultValue="" {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{}[\]|\\:;,<.>/?]).*$/,
                                        })} type={hide ? "text" : "password"} name='password' placeholder="Your Password" className="input border-0 focus:outline-none w-full" />
                                        <label onClick={handlePasswordVisible} className='cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2'>{!hide ? <FaRegEye className='text-xl'></FaRegEye> : <FaRegEyeSlash className='text-xl'></FaRegEyeSlash>}</label>
                                    </div>
                                    {errors.password?.type === 'required' && <span className="text-red-600">Password is required *</span>}
                                    {errors.password?.type === 'minLength' && <span className="text-red-600">Password is less than 6 characters *</span>}
                                    {errors.password?.type === 'pattern' && <span className="text-red-600">Password at least one capital letter and one special character *</span>}
                                </div>


                                <div className="form-control mt-6">
                                    <button className="text-md tracking-widest text-white font-extrabold btn border-0 bg-gradient-to-r from-purple-500 to-purple-700">Register</button>
                                </div>
                            </form>
                            <SocialLogin></SocialLogin>
                            <p className='font-semibold mt-5'>Already have an account? <Link to='/login' className='text-green-600'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;