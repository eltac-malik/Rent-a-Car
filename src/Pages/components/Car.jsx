import React from 'react'
import '../../assets/Car.css'
import Loader from './Loader'
import {Link } from "react-router-dom";

function Car(props)
{
    const {data} = props;


    return (
        <div className='cars'>
            <div className="car-list">
                {
                    data.length === 0 ? <Loader/> :
                    data.map((e)=>
                        {
                          return(
                              <div key={e.id} className="car">
                                  <div className="for-img">
                                      <img src={e.image} alt=""/>
                                  </div>
                                  <h4>{e.title}</h4>
                                  <p>{e.day}.00 AZN/per day </p>
                                  <p>{e.week}.00 AZN/per week </p>
                                  <button><Link className='link' to={`/rent/${e.id}`}>RENT IT</Link></button>
                              </div>
                          )
                        })

                }
            </div>
        </div>
    )
}

export default Car
