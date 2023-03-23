import React, { FC, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { DivMainNavigate, MainToolBar, ToolBar } from "./styles";

interface IProps {
  children: React.ReactNode;
}

const Navigator: FC<IProps> = ({ children }) => {
  const [open, setOpen] = useState(true);
  // let teste = "cadastro";
  return (
    <div style={{ flexGrow: 1 }}>
      <DivMainNavigate>
        <div onClick={() => setOpen(!open)}>
          <AiOutlineMenu color="#fff" size={"2rem"} />
        </div>
        <p>Swot</p>
      </DivMainNavigate>
      <MainToolBar>
        {open === true ? (
          <ToolBar>
            <a href="/">Inicio</a>
            {/* <a href={`/${teste}`}>Áreas da empresa</a> */}
            <a href="/areas-empresa">Áreas da empresa</a>
            <a href="/responsaveis">Responsáveis</a>
            <a href="/forcas">Forças</a>
            <a href="/fraquezas">Fraquezas</a>
            <a href="/oportunidades">Oportunidades</a>
            <a href="/ameacas">Ameaças</a>
            <a href="/matriz-swot">Matriz SWOT</a>
          </ToolBar>
        ) : (
          <div />
        )}
        {children}
      </MainToolBar>
    </div>
  );
};

export default Navigator;
