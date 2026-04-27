import { Link } from "react-router-dom"


const Navbar = () => {
    return(
        <div>
            <p><Link to='/'>Home</Link></p>
            
        <p> <Link to='/about'>About</Link></p>
            {/* <Link href='/contact'>Contact</Link> */}

        </div>
    )
}

export default Navbar