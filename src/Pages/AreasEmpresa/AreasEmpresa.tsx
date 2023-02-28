import React, { useCallback, useState } from "react";

import {
  MainHeader,
  Main,
  MainBody,
  InputDiv,
  TextSub,
  DivList,
  DivSubInput,
  DivButtonCadastrar,
} from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addAreas, useAreas } from "../../Store/sliceAreas";
// import { useAreas } from "../../Context/Areas/ContexAreas";

interface IArea {
  id: number;
  name: string;
}

function AreasEmpresa() {
  // const { areas, addItens, removeItem } = useAreas();
  const [newArea, setNewArea] = useState<IArea>({ id: 0, name: "" });
  const dispatch = useDispatch();
  const areas = useSelector(useAreas);

  const add = () => {
    console.log(areas);
    dispatch(addAreas(newArea));
    // addItens(newArea);
    setNewArea({ id: 0, name: "" });
  };

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
            <input
              type="text"
              value={newArea?.name}
              onChange={(event) =>
                setNewArea({ id: 0, name: event.target.value })
              }
            />
          </label>
          {newArea.name !== "" ? (
            <DivButtonCadastrar onClick={() => add()}>
              <p>Cadastrar</p>
            </DivButtonCadastrar>
          ) : (
            <div />
          )}
        </InputDiv>
        <DivSubInput>
          <TextSub>Áreas cadastradas</TextSub>
          <DivList>
            {areas?.map((item) => (
              <div>
                <p>{item.name}</p>
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
