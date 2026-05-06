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

    const [allUser, setAllUser] = useState([])

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

        setusers((data) => {
            const UserList = [...data, formData];
            localStorage.setItem("UserList", JSON.stringify(UserList));
            return UserList;
        })

        setFormData({ name: "", email: "" })
        // localStorage.setItem( JSON.stringify(setusers));
        setError('')

    }

    
        // const deleteUser = (i) => {
        //     localStorage.removeItem("UserList", [i])
        //     // setusers([]); 
        // }
   

    const getUser = JSON.parse(localStorage.getItem("UserList")) || []



    const deleteUser = (index) => {
   
        setusers((prevUsers) => {
        const updatedUsers = prevUsers.filter((_, i) => i !== index);
        
        localStorage.setItem("UserList", JSON.stringify(updatedUsers));
        
        return updatedUsers;
    });
    };




    return (
        <div className="bg-red-200 w-[100%]">
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
                {getUser.map((user, index) => (
                    <div key={index}>
                        <span>{index + 1}. </span>
                       
                        <ListData name={user.name} email={user.email} />
                        <button onClick={() => deleteUser(index) }> delete</button>
                    </div>

                ))}
            </div>
            <button onClick={() => navigate(-1)}>go to back</button>
            <Footer />
        </div>
    )
}

export default Data