import React from "react";
import styled from "styled-components";

const Pickup = styled.div`
  background: red;
  color: black;
  width: 29%;
  margin: 10px;
`;

export default function VolunteerPickupCard({
  pickup,
  user_id,
  action,
  action1,
  action2
}) {
  const newPickupdData = {
    ...pickup,
    claimed_by: user_id
  };
  console.log(action1);
  const handleClick = () => {
    action1(newPickupdData);
  };
  return (
    <Pickup>
      <h4>Address:</h4>
      <p>type: {pickup.food_type}</p>
      <p>quantity: {pickup.quantity}</p>
      <p>Preferred pickup time: {pickup.pickup_time}</p>
      <p>Business: {pickup.business_id}</p> {/* business_id.name */}
      <button onClick={handleClick}>{action}</button>
    </Pickup>
  );
}
