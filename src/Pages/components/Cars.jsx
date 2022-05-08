import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchdata} from '../../redux/carSlice'
import Car from './Car'

function Cars() {

    const data = useSelector(state => state.car.filteredcars)
    const dispatch = useDispatch()

    useEffect(()=>
    {
        dispatch(fetchdata())
    },[dispatch])


    return (
        <div>
            <Car data={data}/>
        </div>
    )
}

export default Cars
