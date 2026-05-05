import {useState, useEffect} from "react"
import ListData from "./ListData";
import Loader from "./Loader";
import { Link } from "react-router-dom";
function Api(){

    const[user, setUser] = useState([]);
    const[loading, setLoading] = useState(true)
    const url = process.env.API_URL

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => 
            setUser(data),
            setLoading(false)
        );
    }, [])

    if(loading){
        return <Loader/>
    }

    return(
        <>
        {user.map((list, index) => (
           <Link to={`/user/${list.id}`}>
            <div key={index}>
                {/* <p>{list.name}</p>
                <p>{list.username}</p>
                <p>{list.email}</p> */}
                <ListData name={list.name} email={list.email} username={list.username} />
            </div>
           </Link>
        ))}
        </>
    )
}

export default Api;