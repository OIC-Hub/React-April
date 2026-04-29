import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <div>
            {/* <p><Link to='/'>Home</Link></p>

            <p> <Link to='/about'>About</Link></p>
            <Link href='/contact'>Contact</Link> */}

            <NavLink to= "/about" style={({isActive}) => ({
                color: isActive ? '#f80606' : "#02ed25",
                fontWeight: isActive ? "bold" : "lighter",
                textDecoration: isActive ? "underline" : "none"
            })}>
                    About
            </NavLink>

        </div>
    )
}

export default Navbar