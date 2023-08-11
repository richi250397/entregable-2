import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

function Weather() {
    const [country, setCountry] = useState({})
    const [isKelvin, setIsKelvin] = useState(true)
    const convert = Math.floor(Math.floor((country.main?.temp - 273.15) * 1.8) + 32)

    const changeGrade = () => {
        setIsKelvin(!isKelvin)
        }
        

useEffect(() => {

    // setIsKelvin(!isKelvin)

    axios.get('https://api.openweathermap.org/data/2.5/weather?id=3665900&appid=f11f1e0c7127adefc9c9b9a590f5e7ac')
    .then(resp => {
        // console.log(resp.data)
        setCountry(resp.data)
    })
    .catch(error => console.error(error))
}, [])

    return(
        <>
        <section className="nav-section">
            <nav className="nav-container">
              <p>Weather App</p>
                <input  className="nav-input" type="search" name="buscarCiudad" placeholder="Buscar una Ciudad"/>
                <button className="dark-button"><i className='bx bx-toggle-left'></i></button>
                
            </nav>
        </section>
            <main className="main-container">
                <div className="card-container">
                    
                    <div className="card-image">
                        <h2 className="card-grade">{`${isKelvin ? Math.floor(country.main?.temp)  : convert} °`} </h2>
                        <img src="./src/assets/iconos/1.svg" alt="" />
                        </div>
                    <ul className="main-list">
                        <li>Viento: {country.wind?.speed} Km/h</li>
                        <li>Nubes: {country.clouds?.all}</li>
                        <li>Presion: {country.main?.pressure} PA</li>
                    </ul>
                    
                    
                    <div className="text-card">
                        <h2>{country.name}, {country.sys?.country}</h2>
                        <p>Parcialmente Nublado</p>
                        </div>
                </div>
            </main>
            <div className="button-grade"><button onClick={changeGrade}>Cambiar a F°</button></div>
        </>
    )
}

export default Weather