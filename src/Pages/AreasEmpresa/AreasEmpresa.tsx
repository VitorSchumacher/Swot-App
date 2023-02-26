import React from "react";

import {
  MainHeader,
  Main,
  MainBody,
  InputDiv,
  TextSub,
  DivList,
  DivSubInput,
} from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

function AreasEmpresa() {
  const areasCadastradas = [
    "Area 1",
    "Area 2",
    "Area 3",
    "Area 4",
    "Area 5",
    "Area 6",
  ];
  return (
    <Main>
      <header>
        <MainHeader>
          <h1>Áreas da empresa</h1>
        </MainHeader>
      </header>
      <MainBody>
        <InputDiv>
          <label>
            Adicionar área
            <input type="text" />
          </label>
        </InputDiv>
        <DivSubInput>
          <TextSub>Áreas cadastradas</TextSub>
          <DivList>
            {areasCadastradas.map((cadastradas) => (
              <div>
                <p>{cadastradas}</p>
                <div>
                  <AiOutlineCloseCircle size={"1rem"} color="#f00" />
                </div>
              </div>
            ))}
          </DivList>
        </DivSubInput>
      </MainBody>
    </Main>
  );
}

export default AreasEmpresa;
