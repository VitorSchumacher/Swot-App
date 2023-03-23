import React from "react";
import { Main, MainHeader, MainTable } from "./styles";
import { useOportunidades } from "../../Store/sliceOportunidades";
import { useSelector } from "react-redux";
import ListItem from "./components/ListItem/ListItem";
const Oportunidades = () => {
  const oportunidades = useSelector(useOportunidades);
  return (
    <Main>
      <header>
        <MainHeader>
          <h1>Oportunidades</h1>
        </MainHeader>
      </header>
      <MainTable>
        <div>
          <p>Item</p>
        </div>
        <div>
          <p>Importância</p>
        </div>
        <div>
          <p>Urgência</p>
        </div>
        <div>
          <p>Tendência</p>
        </div>
        <div>
          <p>Pontuação</p>
        </div>
      </MainTable>
      {oportunidades.map((dados) => (
        <ListItem dados={dados} />
      ))}
    </Main>
  );
};
export default Oportunidades;
