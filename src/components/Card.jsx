function Card({children}){
    return(
        <div style={{border: "1px solid black", padding:"16px", borderRadius: "16px"}}>
            {children}
        </div>
    )
}

export default Card;