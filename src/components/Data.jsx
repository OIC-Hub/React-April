import { useState } from "react";
import ListData from "./ListData";

function Data() {
    const [users, setusers] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })

    function HandleOnchange(e) {
       const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value }));
    }

  


    function handleSubmit(e) {
        e.preventDefault();

        setusers((data) => ([...data, formData]))

        setFormData({ name: "", email: "" })

    }

    // console.log(user)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={HandleOnchange}
                    value={formData.name}
                    placeholder="Enter Name"
                />

                <input
                    type="email"
                    name="email"
                    onChange={HandleOnchange}
                    value={formData.email}
                    placeholder="Enter Email"
                />

                <input type="submit" />

            </form>

            <div>
                {users.map((user, index) => (
                  <div   key={index}>
                    <span>{index + 1}. </span>
                        {/* <span>{user.name}</span>
                        <span>{" "}</span>
                        <span>{user.email}</span> */}
                        <ListData name={user.name} email={user.email}/>
                  </div>

                ))}
            </div>
        </div>
    )
}

export default Data