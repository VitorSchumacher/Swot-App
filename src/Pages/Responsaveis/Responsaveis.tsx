import React from "react";
import {
  Main,
  MainHeader,
  MainBody,
  InputDiv,
  DivSubInput,
  TextSub,
  DivList,
} from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Responsaveis = () => {
  const teste = ["BMW", "Bentley", "Mercedes", "Audi", "Volkswagen"];
  const teste2 = [
    { nome: "vitor Eduardo", setor: "desenvolvimeto" },
    { nome: "cleber", setor: "administrativo" },
    { nome: "pedro", setor: "limpezxa" },
    { nome: "pietro", setor: "cargas" },
  ];
  return (
    <Main>
      <header>
        <MainHeader>
          <h1>Responsáveis</h1>
        </MainHeader>
      </header>
      <MainBody>
        <InputDiv>
          <label>
            Nome:
            <input type="text" />
          </label>
        </InputDiv>
        <InputDiv>
          <label>
            Setor:
            <input list="cars" />
            <datalist id="cars">
              {teste.map((item) => (
                <option value={item} />
              ))}
            </datalist>
          </label>
        </InputDiv>
        <DivSubInput>
          <TextSub>Responséveis Cadastrados</TextSub>
          <DivList>
            {teste2.map((cadastradas) => (
              <div>
                <div
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    cursor: "default",
                  }}
                >
                  <p style={{ marginBottom: "0.35rem" }}>
                    <p>Nome:</p>
                    {cadastradas.nome}
                  </p>
                  <p>
                    <p>Setor:</p>
                    {cadastradas.setor}
                  </p>
                </div>
                <div>
                  <AiOutlineCloseCircle size={"1.2rem"} color="#f00" />
                </div>
              </div>
            ))}
          </DivList>
        </DivSubInput>
      </MainBody>
    </Main>
  );
};
export default Responsaveis;
