import {useState, useEffect} from "react"
import ListData from "./ListData";
import Loader from "./Loader";
function Api(){

    const[user, setUser] = useState([]);
    const[loading, setLoading] = useState(true)
    const url = 'https://jsonplaceholder.typicode.com/users'

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
            <div key={index}>
                {/* <p>{list.name}</p>
                <p>{list.username}</p>
                <p>{list.email}</p> */}
                <ListData name={list.name} email={list.email} username={list.username} />
            </div>
        ))}
        </>
    )
}

export default Api;