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

const Div = styled.div`
  
`;

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
    <div>
      <Div>
        {availablePickups.map(pickup => {
          return (
            <VolunteerPickupCard
              pickup={pickup}
              key={pickup.id}
              action="Accept"
              action1={acceptPickup}
              user_id={user_id}
            />
          );
        })}
      </Div>
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
