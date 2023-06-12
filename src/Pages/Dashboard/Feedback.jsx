
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Feedback = () => {

    const clsData = useLoaderData()
    console.log(clsData);

    const url = `https://sports-mastery-server.vercel.app/classes/${clsData}`;
    console.log(url);


    const { register, handleSubmit, refetch, formState: { errors } } = useForm();

    const onSubmit = (cls) => {
        console.log(cls);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold text-lg">Feedback</span>
                </label>
                <textarea required className="input border-[1px] border-[#927397] focus:outline-none shadow" type="text" defaultValue="" {...register("feedback")} />
            </div>
            <div className="form-control mt-6">
                <input className="btn text-white bg-[#927397] border-[#927397] hover:bg-transparent hover:text-black hover:border-[#927397] tracking-widest" type="submit" value="Give Feedback" />
            </div>
        </form>
    );
};

export default Feedback;
