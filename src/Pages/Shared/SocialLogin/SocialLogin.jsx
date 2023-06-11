import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    // Google Sign In
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL }
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

                            navigate(from, { replace: true });
                        }
                    })


                // console.log(loggedInUser);
                // Swal.fire('User Created Successfully')
                // navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <>
            <button onClick={handleGoogleSignIn} className='btn border-0 btn-block flex items-center bg-gray-400 font-extrabold tracking-widest'>Login With Google <span className='ml-4 text-2xl'><FaGoogle></FaGoogle></span></button>
        </>
    );
};

export default SocialLogin;