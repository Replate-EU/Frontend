import React from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import axiosWithAuth from '../../auth/axiosWithAuth';

const Container = styled.div`
display: flex;
`
const Column = styled.div`
display: flex;
flex-flow: column;
align-items: center;
width: 49%;
`

export default function FormBusiness() {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('please enter your company name'),
        username: Yup.string().required('please enter your company name'),
        contact_number: Yup.string().required('please enter your phone number'),
        // email: Yup.string().email('put a valid email pls').required('please enter your email'),
        password: Yup.string().required('please enter a password'),
        repeat_password: Yup.string().required('please enter the same password')
      });
    
      const history = useHistory();
      const goToLogin = () => { 
        history.push("/login");
      }

      const initialState = {
        name: '',
        username: '',
        contact_number: '',
        // email: '',
        password: '',
        repeat_password: '',
      }
    
      function handleSubmit(values, actions) {
        // console.log(values);
        // console.log(actions);
        const allValues = {
          ...values,
          
          user_type: 'business',
        }
        delete allValues.repeat_password;
        // console.log(allValues);

        axiosWithAuth()
        .post('/api/auth/register', allValues)
        .then(res => {
          console.log(res);
          goToLogin();
        })
        .catch(err => {
          console.log(err)
        })
        
    }

    return(
        <Container>

        <Column>
          <h1>Donor Sign up</h1>
          <p>Thanks for your interest</p>
        </Column>
        <Column>
        <p>Create Your Account</p>
        <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialState}
        >
          <Form className="form">

          <label>Name</label>
            <Field
            type="text"
            id="name"
            name="name"
            className="input"/>
            <ErrorMessage name="name" component="div" className="error"/>

            <label>Company Name</label>
            <Field
            type="text"
            id="username"
            name="username"
            className="input"/>
            <ErrorMessage name="username" component="div" className="error"/>

            <label>Phone</label>
            <Field
            type="tel"
            id="contact_number"
            name="contact_number"
            className="input"/>
            <ErrorMessage name="contact_number" component="div" className="error"/>

            {/* <label>E-mail</label>
            <Field
            type="text"
            id="email"
            name="email"
            className="input"/>
            <ErrorMessage name="email" component="div" className="error"/> */}

            <label>Password</label>
            <Field
            type="password"
            id="password"
            name="password"
            className="input"/>
            <ErrorMessage name="password" component="div" className="error"/>

            <label>Repeat password</label>
            <Field
            type="password"
            id="repeat_password"
            name="repeat_password"
            className="input"/>
            <ErrorMessage name="repeat_password" component="div" className="error"/>
            <button type="submit">Continue</button>
            

          </Form>
        </Formik>
        </Column>
        </Container>
    )
}
