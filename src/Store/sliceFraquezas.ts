import { createSlice } from "@reduxjs/toolkit";

interface IFraquezas {
  id: number;
  value: number;
  title: string;
  importancia: number;
  intencidade: number;
  tendencia: number;
}

const INITIAL_STATE: IFraquezas[] = [
  {
    id: 1,
    value: 1,
    title: "A localização geográfica é ruim",
    importancia: 1,
    intencidade: 1,
    tendencia: 1,
  },
  {
    id: 2,
    value: 1,
    title: "A infraestrutura é inadequada às necessidades",
    importancia: 1,
    intencidade: 1,
    tendencia: 1,
  },
  {
    id: 3,
    value: 1,
    title: "Os meios para fazer as vendas não são diversificados",
    importancia: 1,
    intencidade: 1,
    tendencia: 1,
  },
  {
    id: 4,
    value: 1,
    title: "A eficiência operacional é um fator desfavorável",
    importancia: 1,
    intencidade: 1,
    tendencia: 1,
  },
  {
    id: 5,
    value: 1,
    title: "Alta rotatividade no quadro de funcionários",
    importancia: 1,
    intencidade: 1,
    tendencia: 1,
  },
  {
    id: 6,
    value: 1,
    title: "A base de clientes é pequena",
    importancia: 1,
    intencidade: 1,
    tendencia: 1,
  },
  {
    id: 7,
    value: 1,
    title: "Não há recursos financeiros disponíveis",
    importancia: 1,
    intencidade: 1,
    tendencia: 1,
  },
];

const sliceFraquezasa = createSlice({
  name: "fraquezas",
  initialState: INITIAL_STATE,
  reducers: {
    updateFraquezas(state, action) {
      for (let x = 0; x < state.length; x++) {
        if (state[x].id === action.payload.id) {
          state[x].value = action.payload.value;
          state[x].importancia = action.payload.importancia;
          state[x].intencidade = action.payload.intencidade;
          state[x].tendencia = action.payload.tendencia;
        }
      }
      return state;
    },
  },
});

export default sliceFraquezasa.reducer;
export const { updateFraquezas } = sliceFraquezasa.actions;
export const useFraquezas = (state: any) => {
  return state.fraquezas as IFraquezas[];
};
