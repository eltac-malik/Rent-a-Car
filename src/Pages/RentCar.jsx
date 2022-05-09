import React,{useEffect,useState} from 'react'
import '../assets/RentCar.css'
import {useSelector} from 'react-redux'
import {useParams } from "react-router-dom";
import Loader from './components/Loader'

function RentCar() {

    const data = useSelector(state => state.car.cars)
    const param = useParams();
    const [about,setAbout] = useState({})

    useEffect(()=>
    {
        setAbout(data.length !== 0 && data.find(e=> e.id === parseInt(param.id)))
        console.log(data);
    },[data])


    return (
        <div className='rent'>
            <div className="form">
                
            </div>
            <div className="about">
                <div className="img-content">
                    <img src={about.image} alt=""/>
                    <h2>{about.title}</h2>
                    <p>{about.category}</p>
                    <p>{about.day}.00 AZN/per day </p>
                    <p>{about.week}.00 AZN/per week </p>
                </div>
            </div>
        </div>
    )
}

export default RentCar
