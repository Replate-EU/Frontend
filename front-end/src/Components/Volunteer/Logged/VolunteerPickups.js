import React, { useEffect, useState } from "react";
import axiosWithAuth from "../../../auth/axiosWithAuth";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  getAvailablePickups,
  abandonPickup,
  acceptPickup
} from "../../../state/actionCreators";
import VolunteerPickupCard from "./VolunteerPickupCard";

export function VolunteerPickups({
  acceptPickup,
  availablePickups,
  getAvailablePickups,
  user_id
}) {
  useEffect(() => {
    getAvailablePickups();
  }, []);

  return (
    <div className="presentational-container">
      {availablePickups.map(pickup => {
        return (
          <VolunteerPickupCard
            pickup={pickup}
            key={pickup.id}
            handleAction={acceptPickup}
            user_id={user_id}
            sad={false}
          />
        );
      })}
    </div>
  );
}

function mapStateToprops(state) {
  return {
    availablePickups: state.availablePickups,
    user_id: state.user.id
  };
}
export default connect(mapStateToprops, {
  getAvailablePickups,
  acceptPickup,
  abandonPickup
})(VolunteerPickups);
