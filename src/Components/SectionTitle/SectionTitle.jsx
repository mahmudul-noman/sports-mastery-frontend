const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center mx-auto mb-14">
            <h3 className="text-3xl text-[#927397] font-extrabold uppercase tracking-wider">{heading}</h3>
            <p className="text-cyan-700 text-3xl mb-4 font-semibold italic sub-font">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;