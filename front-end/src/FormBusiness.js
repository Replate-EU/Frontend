import React from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export default function FormBusiness() {

    const validationSchema = Yup.object().shape({
        company_name: Yup.string().min(3, 'too short').required('please enter your name'),
        phone: Yup.string().required('please enter your phone number'),
        email: Yup.string().email('put a valid email pls').required('please enter your email'),
        password: Yup.string().min(7, 'too short').required('please enter a password'),
        v: Yup.boolean().oneOf([true], 'field must be checked')
      });
    
      const initialState = {
        company_name: '',
        phone: '',
        email: '',
        password: '',
        repeat_password: '',
      }
    
      function handleSubmit(values, actions) {
        console.log(values);
        console.log(actions);
        
    }
    return(
        <div>

        <div>
          <h1>Donor Sign up</h1>
          <p>Thanks for your interest</p>
        </div>
        <p>Create Your Account</p>
        <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialState}
        >
          <Form>
            <label>Company Name</label>
            <Field
            type="text"
            id="company_name"
            name="company_name"
            className="input"/>
            <label>Phone</label>
            <Field
            type="tel"
            id="phone"
            name="phone"
            className="input"/>
            <label>E-mail</label>
            <Field
            type="text"
            id="email"
            name="email"
            className="input"/>
            <label>Password</label>
            <Field
            type="password"
            id="password"
            name="password"
            className="input"/>
            <label>Repeat password</label>
            <Field
            type="password"
            id="repeat_password"
            name="repeat_password"
            className="input"/>
            <button type="submit">Continue</button>
          </Form>
        </Formik>
        </div>
    )
}
