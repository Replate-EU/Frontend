import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axiosWithAuth from "../../auth/axiosWithAuth";

export default function FormBusiness() {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("please enter your company name"),
    username: Yup.string().required("please enter your company name"),
    contact_number: Yup.string()
      .matches(phoneRegExp, "phone number is not valid")
      .required("please enter a phone number"),
    address: Yup.string().required("Please enter your business address"),
    // email: Yup.string().email('put a valid email pls').required('please enter your email'),
    password: Yup.string().required("please enter a password"),
    repeat_password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "passwords must match"
    )
  });

  const history = useHistory();
  const goToLogin = () => {
    history.push("/login");
  };

  const initialState = {
    name: "",
    username: "",
    contact_number: "",
    // email: '',
    password: "",
    repeat_password: ""
  };

  function handleSubmit(values, actions) {
    // console.log(values);
    // console.log(actions);
    const allValues = {
      ...values,

      user_type: "business"
    };
    delete allValues.repeat_password;
    // console.log(allValues);
    axiosWithAuth()
      .post("/api/auth/register", allValues)
      .then(res => {
        console.log(res);
        goToLogin();
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={initialState}
    >
      <Form className="form-container">
        <h1 className="card--title">Donor Sign up</h1>
        <label className="form--label">
          <Field
            type="text"
            id="name"
            name="name"
            className="form--input"
            required
          />
          <span className="input--label">Company Name</span>
          <ErrorMessage name="name" component="div" className="error" />
        </label>

        <label className="form--label">
          <Field
            required
            type="text"
            id="username"
            name="username"
            className="form--input"
          />
          <span className="input--label">Username</span>
          <ErrorMessage name="username" component="div" className="error" />
        </label>

        <label className="form--label">
          <Field
            required
            type="tel"
            id="contact_number"
            name="contact_number"
            className="form--input"
          />
          <span className="input--label">Phone</span>
          <ErrorMessage
            name="contact_number"
            component="div"
            className="error"
          />
        </label>

        <label className="form--label">
          <Field
            required
            type="text"
            id="address"
            name="address"
            className="form--input"
          />
          <span className="input--label">Address</span>
          <ErrorMessage name="address" component="div" className="error" />
        </label>

        {/* <label className="form--label">E-mail</label>
            <Field required
            type="text"
            id="email"
            name="email"
            className="form--input"/>
            <ErrorMessage name="email" component="div" className="error"/> */}

        <label className="form--label">
          <Field
            required
            type="password"
            id="password"
            name="password"
            className="form--input"
          />
          <span className="input--label">Password</span>
          <ErrorMessage name="password" component="div" className="error" />
        </label>

        <label className="form--label">
          <Field
            required
            type="password"
            id="repeat_password"
            name="repeat_password"
            className="form--input"
          />
          <span className="input--label">Repeat password</span>
          <ErrorMessage
            name="repeat_password"
            component="div"
            className="error"
          />
        </label>
        <button type="submit" className="button-primary button-big">
          Continue
        </button>
      </Form>
    </Formik>
  );
}
