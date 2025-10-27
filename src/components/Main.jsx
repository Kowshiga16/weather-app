import { useState } from "react"
import axois from "axios"
function Main(){

    const[city,setcity]=useState("")
const[weather,setweather]=useState("")
const[temp,settemp]=useState("")
const[desc,setdesc]=useState("")
    function handleChange(e){
        setcity(e.target.value)
    }

    function getweather(){
        var weatherdata=axois(`https://api.openweathermap.org/data/2.5/weather?q=${(city)} &appid=997f24b7612d09a1e3fe5e65215a7c9c`)
weatherdata.then(function(success){
    console.log(success.data)
    setweather(success.data.weather[0].main)
    settemp(success.data.main.temp)
    setdesc(success.data.weather[0].description)
})
    }
    return(
        <>

      <div className="h-screen bg-[linear-gradient(to_bottom,#0B89B1_0%,#0087FA_50%,#049BE3_100%)] flex justify-center ">
            <section className="w-[350px] h-[400px]  rounded-2xl p-6 shadow-2xl bg-[linear-gradient(to_bottom,white_20%,#6FCDDA_80%)]  mt-32 flex-wrap ">
                <h1 className="font-semibold text-2xl">WEATHER REPORT ⛅</h1>
                <p className="mt-4">I can give weather report about your city....!☂️</p>
                <input onChange={handleChange} type="text" className="mt-8 border border-black p-1 rounded-lg" placeholder="enter place "></input><br></br>
                <button onClick={getweather} type="submit" className="mt-4 bg-gray-500 text-white p-1 rounded-sm">Get Report</button>
                <p className="mt-6 text-red-400">Weather 🌩️:{weather}</p>
                <p className="mt-1 text-red-400 ">Temperature 🌡️:{temp}</p>
                <p className="mt-1 text-red-400 ">Description ⚡:{desc}</p>
            </section>
        </div>
        </>
    )
}
export default Main