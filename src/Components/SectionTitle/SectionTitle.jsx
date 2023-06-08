
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mx-auto mb-14">
            <h3 className="text-3xl font-extrabold uppercase">{heading}</h3>
            <p className="text-transparent bg-gradient-to-r from-purple-700 to-blue-400 bg-clip-text text-3xl mb-4 font-semibold italic">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;