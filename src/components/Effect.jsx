import { useState, useEffect } from "react";

function Effect(){
    const [count, setCount] = useState(0);
    

    useEffect(() => {
      if (count === 3) {
        setCount(0);
        return
      };

      const timer = setInterval(() => {
        setCount(count + 1)
      }, 1000)




      return () => {clearInterval(timer)}
    }, [count])

    return(
        <div>
            <h1>Our product will go LIVE in {count}</h1>
        </div>
    )
}

export default Effect;