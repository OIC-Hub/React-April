import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
           

            <Link to='/about'>About</Link>

            <NavLink to="/" style={({isActive}) => ({
                color: isActive ?  "orange" : "black",
                textDecoration: isActive? "underline" : "none"
            })}>Home</NavLink>
           

            {/* <NavLink to= "/about" style={({isActive}) => ({
                color: isActive ? '#f80606' : "#02ed25",
                fontWeight: isActive ? "bold" : "lighter",
                textDecoration: isActive ? "underline" : "none"
            })}>
                    About
            </NavLink> */}

        </div>
    )
}

export default Navbar