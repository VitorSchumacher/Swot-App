/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { importancia } from "../../../../Dados/importancia";
import { intensidade } from "../../../../Dados/intensidade";
import { tendencia } from "../../../../Dados/tendencia";
import { MainTable } from "../../styles";
import { updateAmeacas } from "../../../../Store/sliceAmeacas";

interface IDados {
  title: string;
  id: number;
  value: number;
  importancia: number;
  urgencia: number;
  tendencia: number;
}
interface IProps {
  dados: IDados;
}

const ListItem: FC<IProps> = ({ dados }) => {
  const dispatch = useDispatch();
  const [importanciaValue, setImportanciaValue] = useState(dados.importancia);
  const [urgenciaValue, setUrgenciaValue] = useState(dados.urgencia);
  const [tendenciaValue, setTendenciaValue] = useState(dados.tendencia);

  const setAbsoluteValue = () => {
    let value = importanciaValue * urgenciaValue * tendenciaValue;
    dispatch(
      updateAmeacas({
        value: value,
        id: dados.id,
        importancia: importanciaValue,
        urgencia: urgenciaValue,
        tendencia: tendenciaValue,
      })
    );
  };
  useEffect(() => {
    setAbsoluteValue();
  }, [importanciaValue, urgenciaValue, tendenciaValue]);
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
            name="urgencia"
            onChange={(event) => {
              setUrgenciaValue(parseInt(event.target.value));
            }}
            value={dados.urgencia}
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
