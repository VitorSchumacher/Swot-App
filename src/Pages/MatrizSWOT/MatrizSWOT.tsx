/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  Main,
  MainHeader,
  SubTitle,
  DivMainClass,
  DivSUbMain,
  DivItens,
  DivMinSubItem,
  TextTitle,
  TextNumber,
  TextSub,
  TextNumberSub,
} from "./styles";
import { useForcas } from "../../Store/sliceForcas";
import { useAmeacas } from "../../Store/sliceAmeacas";
import { useOportunidades } from "../../Store/sliceOportunidades";
import { useSelector } from "react-redux";
import { useFraquezas } from "../../Store/sliceFraquezas";

const MatrizSWOT = () => {
  const forcas = useSelector(useForcas);
  const ameacas = useSelector(useAmeacas);
  const fraquezas = useSelector(useFraquezas);
  const oportunidades = useSelector(useOportunidades);
  let forcaCont = -1;
  let fraquezasCont = -1;
  const ajuste = () => {
    forcas.sort(function (a, b) {
      if (a.value < b.value) {
        return 1;
      }
      if (a.value > b.value) {
        return -1;
      }
      return 0;
    });
    ameacas.sort(function (a, b) {
      if (a.value < b.value) {
        return 1;
      }
      if (a.value > b.value) {
        return -1;
      }
      return 0;
    });
    fraquezas.sort(function (a, b) {
      if (a.value < b.value) {
        return 1;
      }
      if (a.value > b.value) {
        return -1;
      }
      return 0;
    });
    oportunidades.sort(function (a, b) {
      if (a.value < b.value) {
        return 1;
      }
      if (a.value > b.value) {
        return -1;
      }
      return 0;
    });
  };
  ajuste();
  const setNumberTotal = (arr: any) => {
    let total = 0;
    for (let x = 0; x < 5; x++) {
      total += arr[x].value;
    }
    return total;
  };

  return (
    <Main>
      <header>
        <MainHeader>
          <h1>Matriz SWOT</h1>
        </MainHeader>
      </header>
      <DivMainClass>
        <div style={{ width: "100%", padding: "0 3rem 3rem" }}>
          <SubTitle>Fatores Internos</SubTitle>
          <DivSUbMain>
            <DivMinSubItem>
              <DivItens>
                <TextTitle>Top 5 Forças</TextTitle>
                <TextNumber color="#008000">
                  {setNumberTotal(forcas)}
                </TextNumber>
              </DivItens>
              {forcas.map((forca) => {
                forcaCont = forcaCont + 1;
                if (forcaCont < 5) {
                  return (
                    <DivItens>
                      <TextSub>{forca.title}</TextSub>
                      <TextNumberSub color="#008000">{forca.value}</TextNumberSub>
                    </DivItens>
                  );
                }
                return <></>;
              })}
            </DivMinSubItem>
            <DivMinSubItem>
              <DivItens>
                <TextTitle>Top 5 Fraquezas</TextTitle>
                <TextNumber color="#8B0000">{setNumberTotal(fraquezas)}</TextNumber>
              </DivItens>
              {fraquezas.map((fraqueza) => {
                fraquezasCont = fraquezasCont + 1;
                if (fraquezasCont < 5) {
                  return (
                    <DivItens>
                      <TextSub>{fraqueza.title}</TextSub>
                      <TextNumberSub color="#8B0000">{fraqueza.value}</TextNumberSub>
                    </DivItens>
                  );
                }
                return <></>;
              })}
            </DivMinSubItem>
          </DivSUbMain>
        </div>
      </DivMainClass>
      <DivMainClass>
        <div style={{ width: "100%", padding: "0 3rem 1rem" }}>
          <SubTitle>Fatores Externos</SubTitle>
          <DivSUbMain>
            <DivMinSubItem>
              <DivItens>
                <TextTitle>Top 5 Oportunidades</TextTitle>
                <TextNumber color="#008000">
                  {setNumberTotal(oportunidades)}
                </TextNumber>
              </DivItens>
              {oportunidades.map((oportunidade) => (
                <DivItens>
                  <TextSub>{oportunidade.title}</TextSub>
                  <TextNumberSub color="#008000">{oportunidade.value}</TextNumberSub>
                </DivItens>
              ))}
            </DivMinSubItem>
            <DivMinSubItem>
              <DivItens>
                <TextTitle>Top 5 Ameaças</TextTitle>
                <TextNumber color="#8B0000">{setNumberTotal(ameacas)}</TextNumber>
              </DivItens>
              {ameacas.map((ameaca) => (
                <DivItens>
                  <TextSub>{ameaca.title}</TextSub>
                  <TextNumberSub color="#8B0000">{ameaca.value}</TextNumberSub>
                </DivItens>
              ))}
            </DivMinSubItem>
          </DivSUbMain>
        </div>
      </DivMainClass>
    </Main>
  );
};
export default MatrizSWOT;
