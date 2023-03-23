import React from "react";
import { Main, MainHeader, MainTable } from "./styles";
import { useSelector } from "react-redux";
import { useFraquezas } from "../../Store/sliceFraquezas";
import ListItem from "./components/ListItem/ListItem";

const Fraquezas = () => {
  const fraquezas = useSelector(useFraquezas);
  return (
    <Main>
      <header>
        <MainHeader>
          <h1>Fraquezas</h1>
        </MainHeader>
      </header>
      <MainTable color="#191970">
        <div>
          <p>Item</p>
        </div>
        <div>
          <p>Importância</p>
        </div>
        <div>
          <p>Intensidade</p>
        </div>
        <div>
          <p>Tendência</p>
        </div>
        <div>
          <p>Pontuação</p>
        </div>
      </MainTable>
      {fraquezas.map((dados) => (
        <ListItem dados={dados} />
      ))}
    </Main>
  );
};
export default Fraquezas;
