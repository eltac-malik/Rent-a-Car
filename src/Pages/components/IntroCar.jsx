import React from 'react'
import '../../assets/IntroCar.css'
import { useState } from 'react'
import {filtered} from '../../redux/carSlice'
import {useDispatch} from 'react-redux'

function IntroCar() {

    const [target,setTarget] = useState("")
    const dispatch = useDispatch()

    const findval = (e)=>
    {
        setTarget(e.target.textContent)
       target !==""&&dispatch(filtered(target))
        e.preventDefault();
    }

    return (
        <div>
            <h1>RENTAL OFFERS FOR YOU</h1>
            <div className='all-filter'>
                <div onClick={findval} className="intro-filter">economic</div>
                <div onClick={findval}  className="intro-filter">business</div>
                <div onClick={findval}  className="intro-filter">suv</div>
                <div onClick={findval}  className="intro-filter">vip</div>
                <div onClick={findval}  className="intro-filter">transfer</div>
            </div>
        </div>
    )
}

export default IntroCar
