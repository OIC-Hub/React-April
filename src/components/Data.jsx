import { useEffect, useState } from "react";
import ListData from "./ListData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Data() {
    const [users, setusers] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })
    const [error, setError] = useState()

    const navigate = useNavigate();

    function HandleOnchange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    //   useEffect(() => {

    //   })



    function handleSubmit(e) {
        e.preventDefault();

        if (formData.name === "" || formData.email === "") {
            setError("Pls fill in all fields")
            return;
        }

        setusers((data) => ([...data, formData]))
        setFormData({ name: "", email: "" })
        setError('')

    }

    // console.log(user)

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={HandleOnchange}
                    value={formData.name}
                    placeholder="Enter Name"
                />
                <p>{error}</p>
                <input
                    type="email"
                    name="email"
                    onChange={HandleOnchange}
                    value={formData.email}
                    placeholder="Enter Email"
                />
                <p>{error}</p>


                <input type="submit" />

            </form>

            <div>
                {users.map((user, index) => (
                    <div key={index}>
                        <span>{index + 1}. </span>
                        {/* <span>{user.name}</span>
                        <span>{" "}</span>
                        <span>{user.email}</span> */}
                        <ListData name={user.name} email={user.email} />
                    </div>

                ))}
            </div>
            <button onClick={() => navigate(-1)}>go to back</button>
            <Footer />
        </div>
    )
}

export default Data