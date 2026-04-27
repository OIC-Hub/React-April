import ProfileCard from "./components/ProfileCard";
import Card from "./components/Card"
import State from "./components/State";
import Data from "./components/Data";
import Effect from "./components/Effect";
import Api from "./components/Api";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Notfound from "./components/Notfound";

function FashionHub() {
  // const name = "Aliyat"
  // const age = 10

  return (
    <div>
      {/* <p style={{fontSize: "30px", color: "green"}}>My name is {name}</p>
      <p>I'm {age} years old</p>
      <p>I will be {age + 1 } years old next yearr</p> */}
      {/* <ProfileCard name="Sola Makinde" role="software Eng." number="23" />
    <ProfileCard name="Halimat Adekunle" role="Doctor" number="55"/> */}
      {/* <ProfileCard/> */}
      {/* 
      <Card>
           <ProfileCard/>
      </Card> */}

      {/* <Card>
          <h1>Title: How to make money</h1>
          <p>Author: Alfa</p>
      </Card> */}

      {/* <State/> */}
      {/* <Data/> */}

      {/* <Effect/> */}

      {/* <Api/> */}
      <Routes>
        <Route path="/profile" element={<ProfileCard/>}/>
        <Route path="/" element={<Data/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default FashionHub;