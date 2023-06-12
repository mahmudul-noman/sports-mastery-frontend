import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Container from "../Shared/Container/Container";
import Loader from "../Shared/Loader/Loader";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import useAuth from '../../hooks/useAuth';



const Instructors = () => {

    const { loading } = useAuth();
    const [instructors, setInstructors] = useState([]);


    useEffect(() => {
        fetch('https://sports-mastery-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                // setInstructors(data);
                const filteredInstructors = data.filter(user => user.role === 'instructor');
                setInstructors(filteredInstructors);
            })
    }, [])


    if (loading) {
        return <Loader></Loader>
    }

    return (
        <>
            <Helmet>
                <title>SM | Instructors</title>
            </Helmet>
            <Container>
                <div className="mt-20">
                    <SectionTitle heading='Our Passionate Team of Sports Instructors' subHeading='Learn from the Finest Coaches and Trainers to Excel in Your Athletic Journey'></SectionTitle>
                </div>

                {/* ------------------------------ */}
                <div
                className="pt-10 pb-24">
                    <table className="table w-full text-center">
                        <thead>
                            <tr>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">SL</th>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Image</th>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Name</th>
                                <th className="text-base font-semibold uppercase tracking-widest text-sky-700">E-mail</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                instructors.map((instr, index) =>
                                    <tr key={instr._id}>
                                        <th>{index + 1}</th>
                                        <td className="text-center"><img className="w-32 h-32 rounded-xl object-cover" src={instr.photo} alt="" /></td>
                                        <td className="text-lg font-bold">{instr.name}</td>
                                        <td className="font-semibold text-base">{instr.email}</td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </Container>
        </>
    );
};

export default Instructors;