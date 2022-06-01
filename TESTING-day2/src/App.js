
import React,{ useState } from 'react';
import './App.css';
import Button from './component/Button';

function App({onClick}) {
const [theme, setTheme]= useState("light")

console.log(theme);
  return (
    <div className="App">

     <h3>Theme is {theme}</h3>
     {/* <Button varient={"ghost"} colorScheme='green'>Red Ghost</Button> */}
     <Button onClick={()=> {
       setTheme(theme ==="light" ? "dark" : "light");
     }} >
       Change Theme
       </Button>
    </div>
  );
}

export default App;
