import Container from "../../Shared/Container/Container";
import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import InstructorCard from "./InstructorCard";

const PopularInstructors = () => {




    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://sports-mastery-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                const instructorUsers = data.filter(user => user.role === 'instructor');
                const popularInstructors = instructorUsers.slice(0, 6);
                setInstructors(popularInstructors);
            });
    }, []);

    return (
        <>
            <Container>
                <div className="pb-24">
                    <SectionTitle heading='Our Popular Instructors' subHeading='We Believe in Quality.'>
                    </SectionTitle>

                    <div className="grid md:grid-cols-6 gap-5">
                        {instructors.map((instr, index) => (<InstructorCard key={index} instr={instr}></InstructorCard>))}
                    </div>

                    <button className="btn mt-10 mx-auto flex btn-outline border-purple-700 text-sky-600 hover:bg-purple-600 hover:text-white border-0 border-b-2 border-t-2">See All Instructors</button>
                </div>
            </Container>
        </>
    );
};

export default PopularInstructors;