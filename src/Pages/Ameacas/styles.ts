import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  background-color: #fff;
`;

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  flex-direction: column;
  width: 100%;
  h1 {
    font-family: "Heebo", sans-serif;
    font-size: 2rem;
    color: #191970;
    font-weight: bold;
  }
`;
export const MainTable = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 1fr 1fr;
  padding: 0rem 2rem;
  margin: 10px 0;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
    p {
      font-size: 1rem;
      font-family: "Heebo", sans-serif;
      text-align: center;
      font-weight: 500;
      color: ${props => props.color};
    }
    select{
      outline:none;
      border: none;
      font-family: "Heebo", sans-serif;
      font-size: 0.9rem;
    }
  }
`;
