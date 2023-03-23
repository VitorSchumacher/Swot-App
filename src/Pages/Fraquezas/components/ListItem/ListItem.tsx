/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { importancia } from "../../../../Dados/importancia";
import { intensidade } from "../../../../Dados/intensidade";
import { tendencia } from "../../../../Dados/tendencia";
import { MainTable } from "../../styles";
import { updateFraquezas } from "../../../../Store/sliceFraquezas";

interface IDados {
  title: string;
  id: number;
  value: number;
  importancia: number;
  intencidade: number;
  tendencia: number;
}
interface IProps {
  dados: IDados;
}

const ListItem: FC<IProps> = ({ dados }) => {
  const dispatch = useDispatch();
  const [importanciaValue, setImportanciaValue] = useState(dados.importancia);
  const [intensidadeValue, setIntensidadeValue] = useState(dados.intencidade);
  const [tendenciaValue, setTendenciaValue] = useState(dados.tendencia);

  const setAbsoluteValue = () => {
    let value = importanciaValue * intensidadeValue * tendenciaValue;
    dispatch(
      updateFraquezas({
        value: value,
        id: dados.id,
        importancia: importanciaValue,
        intencidade: intensidadeValue,
        tendencia: tendenciaValue,
      })
    );
  };
  useEffect(() => {
    setAbsoluteValue();
  }, [importanciaValue, intensidadeValue, tendenciaValue]);
  return (
    <>
      <MainTable key={dados.id}>
        <div>
          <p>{dados.title}</p>
        </div>
        <div>
          <select
            name="importancia"
            onChange={(event) => {
              setImportanciaValue(parseInt(event.target.value));
            }}
            value={dados.importancia}
          >
            {importancia.map((imp) => (
              <option value={imp.multi}>{imp.title}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            name="intensidade"
            onChange={(event) => {
              setIntensidadeValue(parseInt(event.target.value));
            }}
            value={dados.intencidade}
          >
            {intensidade.map((imp) => (
              <option value={imp.multi}>{imp.title}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            name="tendencia"
            onChange={(event) => {
              setTendenciaValue(parseInt(event.target.value));
            }}
            value={dados.tendencia}
          >
            {tendencia.map((imp) => (
              <option value={imp.multi}>{imp.title}</option>
            ))}
          </select>
        </div>
        <div>
          <p>{dados.value}</p>
        </div>
      </MainTable>
    </>
  );
};
export default ListItem;
