import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const InsMyClass = () => {
    return (
        <>
            <SectionTitle heading='My Class'></SectionTitle>

            {/* ------------------------------ */}
            <div className="pt-10 pb-24">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">SL</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Image</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Class Name</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Price</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Enrolled</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Av. Seats</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Feedback</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Status</th>
                            <th className="text-base font-semibold uppercase tracking-widest text-sky-700">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                                <tr>
                                    <th>1</th>
                                    <td><img className="w-14 h-14 rounded-xl object-cover" src='https://img.freepik.com/free-vector/blackboard-showing-schematic-game-plan-football-with-overhead-view-field-showing-players-positions-trajectory-ball-with-arrows_1284-42212.jpg?w=826&t=st=1686437090~exp=1686437690~hmac=b4e6d53236870b17a09cb9344a47715590bf945c9ca7fe7db78a1d4249cb6839' alt="" /></td>
                                    <td className="text-lg font-bold">DEMO</td>
                                    <td className="font-semibold text-base">DEMO</td>
                                    <td className="text-base font-semibold">DEMO</td>
                                    <td className="text-base font-semibold">DEMO</td>
                                    <td className="text-base font-semibold">DEMO</td>
                                    <td className="text-base font-semibold">DEMO</td>
                                    <td><button className="btn btn-outline border-purple-700 text-sky-600 hover:bg-purple-600 hover:text-white border-0 border-b-2 border-t-2">Update</button></td>
                                </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default InsMyClass;