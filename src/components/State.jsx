import { useState } from "react";

function State(){
    const[Value, setValue] = useState(0);

    return(
        <div>
            <p>{Value}</p>
            <button onClick={() => setValue(Value + 1)}>Click</button>
        </div>
    )
}

export default State;