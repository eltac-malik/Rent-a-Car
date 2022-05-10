import React, { useEffect, useState } from "react";
import "../assets/RentCar.css";
import { useSelector,useDispatch } from "react-redux";
import {profilData} from '../redux/carSlice'
import { useParams} from "react-router-dom";
import { Formik, Form, Field } from "formik";
import schema from '../Pages/Validation/Yup'


function RentCar() {
  const data = useSelector((state) => state.car.cars);
  const profile = useSelector((state)=> state.car.profile)
  const param = useParams();
  const [about, setAbout] = useState({});

  const dispatch = useDispatch();
  
  useEffect(() => {
    setAbout(
      data.length !== 0 && data.find((e) => e.id === parseInt(param.id))
    );
  }, [data]);

  console.log(profile);
  

  return (
    <div className="rent">
      <div className="form">
      <Formik
      initialValues={{
        name: '',
        surname:"",
        email: '',
        phone:""
      }}
      validationSchema={schema}
      onSubmit={values => {
        dispatch(profilData(values))
      }}>

        {
          ({errors,touched})=>
          (

          <Form className='form-formik'>
          <div className='inp-div'>
        <label>Name <span></span></label>
        <Field className={`inp`} name="name" />
        {errors.name && touched.name ? (<i className="fa-solid fa-circle-info"></i>) : ""}
          </div>
          <div className='inp-div'>
        <label>Surname <span></span></label>
        <Field className={`inp`} name="surname" />
        {errors.surname && touched.surname ? (<i className="fa-solid fa-circle-info"></i>) : ""}
          </div>
          <div className='inp-div'>
        <label>E-mail <span></span></label>
        <Field className='inp' name="email" />
        {errors.email && touched.email ?  (<i className="fa-solid fa-circle-info"></i>) : ""}
        </div>
        <div className='inp-div'>
        <label>Phone <span></span></label>
        <Field className='inp' name="phone" />
        {errors.phone && touched.phone ?   (<i className="fa-solid fa-circle-info"></i>) : ""}
        </div>
            
        <div className='inp-div'>
        <label>Phone <span></span></label>
        <Field className='inp' type='date' name="phone" />
        
        </div>
            


        <button className='button' type="submit">Okay</button>
      </Form>
  

          )
        }
      
      
      
      
        </Formik>
      </div>
      <div className="about">
        <div className="img-content">
          <img src={about.image} alt="" />
          <h2>{about.title}</h2>
          <p>{about.category}</p>
          <p>{about.day}.00 AZN/per day </p>
          <p>{about.week}.00 AZN/per week </p>
        </div>
      </div>
    </div>
  );
}

export default RentCar;
