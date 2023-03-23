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
export const DivMainClass = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const SubTitle = styled.p`
  font-family: "Heebo", sans-serif;
  font-size: 1.35rem;
  color: #444;
  font-weight: 500;
  margin-bottom: 5vh;
  padding: 0 2vw;
`;
export const DivSUbMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 3vh;
`;
export const DivMinSubItem = styled.div`
  padding: 0 2vw;
`;

export const DivItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextTitle = styled.p`
  color: #444;
  font-family: "Heebo", sans-serif;
  font-size: 1.15rem;
  line-height: 1.15rem;
  margin-bottom: 2vh;
`;
export const TextNumber = styled.p`
  color: ${props => props.color};;
  font-family: "Heebo", sans-serif;
  font-size: 1.15rem;
  margin-bottom: 2vh;
  line-height: 1.35rem;

`;
export const TextSub = styled.p`
  color: #444;
  font-family: "Heebo", sans-serif;
  font-size: 1rem;
  line-height: 1.15rem;
`;
export const TextNumberSub = styled.p`
  color: ${props => props.color};;
  font-family: "Heebo", sans-serif;
  font-size: 1rem;
  line-height: 1.35rem;
`;
