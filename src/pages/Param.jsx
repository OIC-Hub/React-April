import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"


function Param(){
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate()

    // const url = import.meta.env.VITE_API_KEY + `${id}`
    const url = `https://dummyjson.com/products/${id}`
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
            .then(data =>
                setProduct(data),
            );
    })

    return(
        <>
        <h1>Showing id {id}</h1>
        <img src={product.images} alt="" />
        <h1>{product.title}</h1>
        <h1>{product.price}</h1>
        <button onClick={() => navigate(-1)}>Add to cart</button>
        </>
    )
}

export default Param