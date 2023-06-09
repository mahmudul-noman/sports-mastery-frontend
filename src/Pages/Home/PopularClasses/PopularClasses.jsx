import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ClassCard from "./ClassCard";
import Container from "../../Shared/Container/Container";
import useClass from "../../../hooks/useClass";

const PopularClasses = () => {


    const [classes] = useClass();
    const sortedClasses = classes.sort((a, b) => b.enrolledStudents - a.enrolledStudents);
    const popularClasses = sortedClasses.slice(0, 6);



    // const [classes, setClasses] = useState([]);

    // useEffect(() => {
    //     fetch('classes.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const sortedClasses = data.sort((a, b) => b.enrolledStudents - a.enrolledStudents);
    //             const popularClasses = sortedClasses.slice(0, 6);
    //             setClasses(popularClasses);
    //         })
    // }, [])


    return (
        <>
            <Container>
                <div className="py-24">
                    <SectionTitle heading='Our Popular Classes' subHeading='Choose the best Classes that fit for you'>
                    </SectionTitle>

                    <div className="grid grid-cols-3 gap-20">
                        {popularClasses.map(cls => (<ClassCard key={cls._id} cls={cls}></ClassCard>))}
                    </div>

                    <button className="btn mt-10 mx-auto flex btn-outline border-purple-700 text-sky-600 hover:bg-purple-600 hover:text-white border-0 border-b-2 border-t-2">See All Classes</button>
                </div>
            </Container>
        </>
    );
};

export default PopularClasses;