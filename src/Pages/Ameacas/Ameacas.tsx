import React from "react";
import { Main, MainHeader, MainTable } from "./styles";
import { useAmeacas } from "../../Store/sliceAmeacas";
import { useSelector } from "react-redux";
import ListItem from "./components/ListItem/ListItem";
const Ameacas = () => {
  const ameacas = useSelector(useAmeacas);
  return (
    <Main>
      <header>
        <MainHeader>
          <h1>Ameaças</h1>
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
      {ameacas.map((dados) => (
        <ListItem dados={dados} />
      ))}
    </Main>
  );
};

export default Ameacas;
