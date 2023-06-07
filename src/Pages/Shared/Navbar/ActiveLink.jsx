
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <NavLink to={to} className={({ isActive }) => isActive ? "text-base tracking-widest uppercase font-bold border-b-2 border-rose-600 text-black" : "text-base tracking-widest uppercase font-semibold text-[#666]"}>
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;