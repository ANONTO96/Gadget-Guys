import { NavLink } from "react-router-dom";

const Categories = () => {
    return (
        <div className="my-3 flex justify-end gap-2">
            <NavLink className={({ isActive }) => `
             rounded-3xl px-4 py-3 ${isActive ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'hover:text-purple-600'}`}
             to={'/mobile/:category'}>Laptops</NavLink>
             <NavLink className={({ isActive }) => `
                rounded-3xl px-4 py-3 ${isActive ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'hover:text-purple-600'}`}
                 to={'/mobile/:category'}>Tablet</NavLink>
                <NavLink className={({ isActive }) =>`
             rounded-3xl px-4 py-3 ${isActive ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'hover:text-purple-600'}`}
             to={'/mobile'}>Mobiles</NavLink>
              <NavLink className={({ isActive }) => `
                rounded-3xl px-4 py-3 ${isActive ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'hover:text-purple-600'}`}
                 to={'/'}>View All</NavLink>
                
        </div>
    );
};

export default Categories;