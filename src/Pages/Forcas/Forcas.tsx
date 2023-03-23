import React from "react";
import { Main, MainHeader, MainTable } from "./styles";
import { dadosForca } from "../../Dados/dadosForca";
import ListItem from "./componets/ListItem/ListItem";
import { useForcas } from "../../Store/sliceForcas";
import { useSelector } from "react-redux";

const Forcas = () => {
  const forcas = useSelector(useForcas);
  console.log(forcas);
  return (
    <Main>
      <header>
        <MainHeader>
          <h1>Forças</h1>
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
          <p>Intensidade</p>
        </div>
        <div>
          <p>Tendência</p>
        </div>
        <div>
          <p>Pontuação</p>
        </div>
      </MainTable>
      {forcas.map((dados) => (
        <ListItem dados={dados} />
      ))}
    </Main>
  );
};
export default Forcas;
