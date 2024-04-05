import Login from "./components/Login"
import Profile from "./components/Profile"
import useTheme from "./context/theme"
import './App.css'
import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/theme"
import Themebtn from "./components/Themebtn"
import Card from "./components/Card"

function App() {
const [themeMode,setThemeMode]=useState("light")  

const darkTheme=()=>{
  setThemeMode("dark")
}

const lightTheme=()=>{
  setThemeMode("light")
}

useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])
  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4 -mt-10">
        <Themebtn/>
      </div>
      <div className="w-full max-w-sm mx-auto">
        <Card/>
      </div>
    </div>
    <div className="items-center flex flex-col mx-auto -mt-20">
    <Login/>
     <Profile/>
     </div>
    </div>
    </ThemeProvider>
  )
}

export default App
