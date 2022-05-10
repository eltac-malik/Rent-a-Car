import React from 'react'
import "../assets/AllCars.css"
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../Pages/components/Loader'
import {Link } from "react-router-dom"

function AllCars() {

    const data = useSelector(state => state.car.cars)
    console.log(data);
    
    return (
        <div className='all-cars'>
            {
                data.length === 0 ? <Loader/>:
                data.map(e=>
                    {
                        return(
                            <div className="car-one">
                                 <div className="car-img">
                                    <img src={e.image} alt=""/>
                                 </div>
                                 <div className="text-content">
                                    <h2>{e.title}</h2>
                                    <p>{e.category}</p>
                                 </div>
                                 <button className='car-btn'><Link className='link-dec' to={`/rent/${e.id}`}>RENT IT</Link></button>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default AllCars
