import styled from "styled-components";

export const DivMainNavigate = styled.div`
  background-color: #191970;
  width: 100%;
  display: flex;
  padding: 1rem 0;
  align-items: center;
  p {
    color: #fff;
    font-size: 2rem;
    font-family: "Heebo", sans-serif;
    font-weight: bold;
    margin-left: 0.7rem;
  }
  div {
    cursor: pointer;
    transition: all 0.2s ease;
    margin-left: 0.7rem;
    &:hover {
      opacity: 0.3;
    }
  }
`;
export const MainToolBar = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #191970cc;
`;
export const ToolBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 25vw;
  min-height: 95vh;
  div {
    margin: 1rem auto 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    div {
      margin: 0;
      background-color: #b8860b;
      height: 5px;
      width: 5px;
      border-radius: 60px;
      margin-right: 5px;
    }
    a {
      text-decoration: none;
      color: #fff;
      font-family: "Heebo", sans-serif;
      font-size: 1.12rem;
    }
  }
`;
