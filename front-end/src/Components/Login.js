import React, { useState } from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axiosWithAuth from "../auth/axiosWithAuth";
import { login } from "../state/actionCreators";
import { connect } from "react-redux";

const Container = styled.div`
  display: flex;
`;
const Column = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 49%;
`;

export function Login({ login }) {
  const [type, setType] = useState(true);

  const history = useHistory();

  const initialState = {
    username: "",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("please enter your name"),
    password: Yup.string().required("please enter a password")
  });

  function handleSubmit(values, actions) {
    login(values, history);
  }

  function handleType() {
    setType(!type);
  }

  return (
    <Container>
      <Column>
        <h1>Login</h1>
        <p>Thanks for your interest</p>
      </Column>
      <Column>
        <p>Log to Your Account</p>
        <Formik
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          initialValues={initialState}
        >
          <Form className="form">
            
            <div>
            <label>
              Username
              <input type="text" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </label>
            </div>

            {/* <label>E-mail</label>
            <Field
            type="text"
            id="email"
            name="email"
            className="input"/>
            <ErrorMessage name="email" component="div" className="error"/> */}
            <div>
            <label>
              Password
              <Field
                type="password"
                id="password"
                name="password"
                className="input"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </label>
            </div>

            {/* <label>Account type: </label>
            <button type="button" onClick={handleType}>{type ? 'VOLUNTEER' : 'BUSINESS' }</button> */}

            {/* <ErrorMessage name="user_type" component="div" className="error"/> */}

            <button className="button button-big" id="button" type="submit">
              LOGIN
            </button>
          </Form>
        </Formik>
      </Column>
    </Container>
  );
}

export default connect(state => state, { login })(Login);
