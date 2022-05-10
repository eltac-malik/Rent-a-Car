import React, { useEffect, useState } from "react";
import "../assets/RentCar.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "./components/Loader";
import { Formik, Form, Field } from "formik";
import schema from '../Pages/Validation/Yup'

function RentCar() {
  const data = useSelector((state) => state.car.cars);
  const param = useParams();
  const [about, setAbout] = useState({});
  const [danger,setDanger] = useState("")

  useEffect(() => {
    setAbout(
      data.length !== 0 && data.find((e) => e.id === parseInt(param.id))
    );
  }, [data]);


  return (
    <div className="rent">
      <div className="form">
      <Formik
      initialValues={{
        name: '',
        email: '',
        phone:""
      }}
      validationSchema={schema}
      onSubmit={values => {
        console.log(values);
      }}>

        {
          ({errors,touched})=>
          (

          <Form className='form-formik'>
          <div className='inp-div'>
        <label>Name and Surname <span></span></label>
        <Field className={`inp`} name="name" />
        {errors.name && touched.name ? "sad" : ""}
          </div>
          <div className='inp-div'>
        <label>E-mail <span></span></label>
        <Field className='inp' name="email" />
        {errors.email && touched.email ? setDanger("danger") : setDanger("")}
        </div>
        <div className='inp-div'>
        <label>Phone <span></span></label>
        <Field className='inp' name="phone" />
        {errors.phone && touched.phone ?  setDanger("danger") : setDanger("")}
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
