import styled from 'styled-components';


export const Box = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 3px solid black;
  padding: 20px 0px;
  margin: 10px;
  width: 30%;
`;
export const Borders = styled.div`
  border: 3px solid black;
  padding: 10px 0;
  width: 50%;
`;
export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  border: 3px solid black;
  height: 100vh;
  
  margin: -3px 0;
`;

export const Button1 = styled.button`
  background: white;
  border: 2px solid black;
  border-radius: 5px;
  padding: 25px;
`;

export const Pickup = styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
background: white;
box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
color: rgba(31, 32, 65, 0.7);
width: 30%;
margin: 10px;
`
export const Button2 = styled.a`
    background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
    border: 1px solid #BC9CFF;
    border-radius: 22px;
    padding: 10px 100px;
    margin-bottom: 10px;
    font-weight: bold;
    color: white;
    cursor: pointer;
`