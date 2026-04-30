import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About(){

    const navigate = useNavigate()
    return(
        <>
        <Navbar/>
        <button onClick={() => navigate(-1)}>back</button>
        <h1>THis About Page</h1>
        <Footer/>
        </>
    )
}

export default About