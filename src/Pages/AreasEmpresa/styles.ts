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

export const MainBody = styled.body`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputDiv = styled.div`
  width: 100%;
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "Heebo", sans-serif;
    font-size: 1.35rem;
    color: #444;
    font-weight: 500;
    input {
      width: 70%;
      font-family: "Heebo", sans-serif;
      font-size: 1rem;
      border-styled: none;
      border: 1px solid #ccc;
      border-radius: 15px;
      padding: 0.25rem 0.75rem;
      margin: 0.8rem 0;
      outline: 0;
    }
  }
`;

export const DivSubInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TextSub = styled.p`
  font-family: "Heebo", sans-serif;
  font-size: 1.25rem;
  color: #444;
  font-weight: 500;
  margin-top: 2rem;
`;

export const DivList = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0;
  div {
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 0.25rem 1rem;
    width: 55%;
    min-width: 40vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 0.75rem 0;
    p {
      font-family: "Heebo", sans-serif;
      font-size: 1.1rem;
      font-weight: 400;
    }
    div {
      cursor: pointer;
      border: none;
      padding: 0;
      min-width: 0;
      margin: 0;
      width: auto;
    }
  }
`;
export const DivButtonCadastrar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 0.5rem;
  p {
    background-color: #191970cc;
    padding: 0.5rem 0.75rem;
    color: #fff;
    font-size: 1.25rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 15px;
    font-family: "Heebo", sans-serif;
    &:hover {
      opacity: 0.5;
    }
  }
`;
