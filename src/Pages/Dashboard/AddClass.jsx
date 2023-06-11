import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddClass = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        const { availableSeats, classImage, className, price } = data;
        const newClass = { availableSeats: parseInt(availableSeats), classImage, className, price: parseFloat(price) }
        console.log(newClass);
        axiosSecure.post('/classes', newClass)
            .then(data => {
                console.log('After Posting Class', data.data);
                if (data.data.insertedId) {
                    reset();
                    Swal.fire('Class Added Successfully')
                }
            })
    };


    return (
        <div>

            <SectionTitle heading='Add a Class'></SectionTitle>

            {/* --------------------- */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="grid grid-cols-2 gap-5">

                    {/* Class Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Class Name</span>
                        </label>
                        <input required className="input border-[1px] border-[#927397] focus:outline-none shadow" type="text" defaultValue="" {...register("className")} />
                    </div>

                    {/* Class Photo  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Class Photo</span>
                        </label>
                        <input required className="input border-[1px] border-[#927397] focus:outline-none shadow" type="text" defaultValue="" {...register("classImage")} />
                    </div>

                    {/* Instructor Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Instructor Name</span>
                        </label>
                        <input required className="input border-[1px] border-[#927397] focus:outline-none shadow" type="text" value={user?.displayName} {...register("instructorName")} disabled={user?.displayName} />
                    </div>

                    {/* Instructor Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Instructor Email</span>
                        </label>
                        <input required className="input border-[1px] border-[#927397] focus:outline-none shadow" type="email" value={user?.email} {...register("instructorEmail")} disabled={user?.email} />
                    </div>

                    {/* Class Price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Class Price</span>
                        </label>
                        <input required className="input border-[1px] border-[#927397] focus:outline-none shadow" type="number" {...register("price")} />
                    </div>

                    {/* Available Seats */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Available Seats</span>
                        </label>
                        <input required className="input border-[1px] border-[#927397] focus:outline-none shadow" type="text" {...register("availableSeats")} />
                    </div>

                </div>

                <div className="form-control mt-6">
                    <input className="btn text-white bg-[#927397] border-[#927397] hover:bg-transparent hover:text-black hover:border-[#927397] tracking-widest" type="submit" value="Add a Class" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;