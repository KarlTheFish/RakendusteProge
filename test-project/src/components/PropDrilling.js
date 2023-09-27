import {useState} from "react";

const PropDrilling = () => {
    const [weather, setWeather] = useState("Sunny")
    return <Europe weather={weather}/>
}

const Europe = () => { return <Estonia weather={weather}/>}

const Estonia = () => { return <Tallinn weather={weather}/>}

const Tallinn = () => { return "Sunny bitch"}

export default PropDrilling();