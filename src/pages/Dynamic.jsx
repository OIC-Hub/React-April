import { useEffect, useState } from "react";
import { requestFormReset } from "react-dom";
import { useParams } from "react-router-dom";

function Dynamic() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(response => response.json())
            .then(data =>
                setProduct(data),
            );
    }, [])


    return (
        <>
            <h1> Showing Product with ID {id}</h1>
            {/* {product.map((value, index) => ( */}
                <div >
                    <img src={product.images} width={100} alt="" />
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
            {/* ))} */}

        </>
    )
}

export default Dynamic