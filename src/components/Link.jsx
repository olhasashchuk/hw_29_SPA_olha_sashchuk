import {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {ThemeContext} from "../helpers/context.js";

function Link(props) {
    const {href, to, children, className} = props;
    const [color] = useContext(ThemeContext)
    return href
        ? (
            <a
                href={href}
                className={`hover:text-[#00A4E5] block font-semibold text-[15px] ${className}`}
            >
                {children}
            </a>
        )
        : (
            <NavLink
                to={to}
                className={`hover:text-[#00A4E5] block font-semibold text-[15px] ${className}`}
                >
                {children}
            </NavLink>
        )
}

export default Link