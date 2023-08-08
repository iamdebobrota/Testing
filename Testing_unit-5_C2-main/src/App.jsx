import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import eye from "./Components/eye.svg";
import './App.css'
import { useState } from "react";


function App() {
const [types, setTypes]= useState("text")

  const rightLogoOnClick=()=>{

setTypes(types==="password" ? "text" : "password")
  }

  const onPageChange = (e) => {
   

};


  return (
    <div className="container">
      <Input rightLogo={eye} size={40} rightLogoOnClick={rightLogoOnClick} type={types}/>

      <Image src={"https://avatars.githubusercontent.com/u/99647439?v=4"}
      alt={'man'} borderRadius={100} width={150} height={150} fit='cover'/>

      <Pagination total={20} onPageChange={onPageChange} />
    </div>
  );
}

export default App;
