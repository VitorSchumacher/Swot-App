import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useAreas } from "../../Store/sliceAreas";
import {
  addResponsaveis,
  useResponsaveis,
  removeResponsaveis,
} from "../../Store/sliceResponsaveis";
import { DivButtonCadastrar } from "../AreasEmpresa/styles";

interface IResponsavel {
  id: number;
  name: string;
  area: string;
}

const Responsaveis = () => {
  const areas = useSelector(useAreas);
  const responsaveis = useSelector(useResponsaveis);
  const [newResponsavel, setNewResponsavel] = useState<IResponsavel>({
    id: 0,
    name: "",
    area: areas[0] ? areas[0].name : "",
  });
  const dispatch = useDispatch();
  const addResponse = () => {
    dispatch(addResponsaveis(newResponsavel));
    setNewResponsavel({ id: 0, name: "", area: areas[0]?.name });
  };
  const removeResponsavel = (id: number) => {
    dispatch(removeResponsaveis(id));
  };

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
            <input
              type="text"
              value={newResponsavel.name}
              onChange={(event) => {
                setNewResponsavel({
                  ...newResponsavel,
                  name: event.target.value,
                  id: responsaveis.length + 1,
                });
              }}
            />
          </label>
        </InputDiv>
        <InputDiv>
          <label>
            Setor:
            {/* <input
              list="area"
              value={newResponsavel.area}
              onChange={(event) =>
                setNewResponsavel({
                  ...newResponsavel,
                  area: event.target.value,
                })
              }
            /> */}
            <select
              id="area"
              value={newResponsavel.area}
              onChange={(event) => {
                setNewResponsavel({
                  ...newResponsavel,
                  area: event.target.value,
                });
                console.log(event.target.value);
              }}
            >
              {areas.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
          </label>
          {newResponsavel.name !== "" && newResponsavel.area !== "" ? (
            <DivButtonCadastrar onClick={() => addResponse()}>
              <p>Cadastrar</p>
            </DivButtonCadastrar>
          ) : (
            <div />
          )}
        </InputDiv>

        <DivSubInput>
          <TextSub>Responséveis Cadastrados</TextSub>
          <DivList>
            {responsaveis.map((cadastradas) => (
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
                    {cadastradas.name}
                  </p>
                  <p>
                    <p>Setor:</p>
                    {cadastradas.area}
                  </p>
                </div>
                <div>
                  <AiOutlineCloseCircle
                    size={"1.2rem"}
                    color="#f00"
                    onClick={() => {
                      removeResponsavel(cadastradas.id);
                    }}
                  />
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
