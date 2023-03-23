import React, { FC, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { DivMainNavigate, MainToolBar, ToolBar } from "./styles";
import Logo from "../../assets/image/logoRec.png";

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
          <AiOutlineMenu color="#B8860B" size={"2rem"} />
        </div>
        <img src={Logo} alt="test" style={{ width: "5rem", marginLeft: "1rem" }} />
      </DivMainNavigate>
      <MainToolBar>
        {open === true ? (
          <ToolBar>
            <div>
              <div />
              <a href="/">Inicio</a>
            </div>
            <div>
              <div />
              <a href="/areas-empresa">Áreas da empresa</a>
            </div>
            <div>
              <div />
              <a href="/responsaveis">Responsáveis</a>
            </div>
            <div>
              <div />

              <a href="/forcas">Forças</a>
            </div>
            <div>
              <div />
              <a href="/fraquezas">Fraquezas</a>
            </div>
            <div>
              <div />
              <a href="/oportunidades">Oportunidades</a>
            </div>
            <div>
              <div />
              <a href="/ameacas">Ameaças</a>
            </div>
            <div>
              <div />
              <a href="/matriz-swot">Matriz SWOT</a>
            </div>
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
