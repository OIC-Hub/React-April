const data = ["Ade"]

function ProfileCard({name = data[0], role = "software", number = 12}){
    return(
        <>
        <div style={{width: "400px", height: "400px", background:"skyblue", gap:"2px"}}>
            <h1>{name}</h1>
            <p>{role}</p>
            <p>{number + 1}</p>
        </div>
        </>
    )
}

export default ProfileCard;