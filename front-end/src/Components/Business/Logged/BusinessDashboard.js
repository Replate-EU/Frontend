import React, { useEffect } from "react";
// import axios from 'axios';
import BusinessPickupCard from "../../Volunteer/Logged/VolunteerPickupCard";
import styled from "styled-components";
import { Field, ErrorMessage, Form, Formik } from "formik";
import axiosWithAuth from "../../../auth/axiosWithAuth";
import { connect } from "react-redux";
import { getListedPickups, submitPickup } from "../../../state/actionCreators";
const Pickup = styled.div`
  background: red;
  width: 30%;
  margin: 10px;
`;
const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
export function BusinessDashboard({
  listedPickups,
  getListedPickups,
  submitPickup
}) {
  useEffect(() => {
    getListedPickups();
  }, []);

  function handleSubmit(values) {
    submitPickup(values);
  }

  const initialState = {
    food_type: "",
    pickup_time: "",
    quantity: ""
  };
  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
        initialValues={initialState}
      >
        <Form className="form">
          <label>Type</label>
          <Field
            type="text"
            id="food_type"
            name="food_type"
            className="input"
          />
          <ErrorMessage name="food_type" component="div" className="error" />
          <label>Preferred time</label>
          <Field
            type="text"
            id="pickup_time"
            name="pickup_time"
            className="input"
          />
          <ErrorMessage name="pickup_time" component="div" className="error" />
          <label>Quantity</label>
          <Field type="text" id="quantity" name="quantity" className="input" />
          <ErrorMessage name="quantity" component="div" className="error" />
          <button type="submit">create new pickup</button>
        </Form>
      </Formik>

      <Div>
        {listedPickups.map(pickup => {
          return <BusinessPickupCard pickup={pickup} />;
        })}
      </Div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    listedPickups: state.listedPickups
  };
}

export default connect(mapStateToProps, { getListedPickups, submitPickup })(
  BusinessDashboard
);
