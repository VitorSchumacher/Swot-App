import { createSlice } from "@reduxjs/toolkit";

interface IAmeacas {
  id: number;
  value: number;
  title: string;
  importancia: number;
  urgencia: number;
  tendencia: number;
}
const INITIAL_STATE: IAmeacas[] = [
  {
    id: 1,
    value: 1,
    title: "Desinteresse por iniciativas socioambientais",
    importancia: 1,
    urgencia: 1,
    tendencia: 1,
  },
  {
    id: 2,
    value: 1,
    title: "Não há novas linhas de produtos",
    importancia: 1,
    urgencia: 1,
    tendencia: 1,
  },
  {
    id: 3,
    value: 1,
    title: "Há um número limitado de recursos essenciais",
    importancia: 1,
    urgencia: 1,
    tendencia: 1,
  },
  {
    id: 4,
    value: 1,
    title: "Não há novos clientes entrando no mercado",
    importancia: 1,
    urgencia: 1,
    tendencia: 1,
  },
  {
    id: 5,
    value: 1,
    title: "A empresa tem decrescimento no mercado",
    importancia: 1,
    urgencia: 1,
    tendencia: 1,
  },
];
const sliceAmeacas = createSlice({
  name: "ameacas",
  initialState: INITIAL_STATE,
  reducers: {
    updateAmeacas(state, action) {
      for (let x = 0; x < state.length; x++) {
        if (state[x].id === action.payload.id) {
          state[x].value = action.payload.value;
          state[x].importancia = action.payload.importancia;
          state[x].urgencia = action.payload.urgencia;
          state[x].tendencia = action.payload.tendencia;
        }
      }
      return state;
    },
  },
});

export default sliceAmeacas.reducer;
export const { updateAmeacas } = sliceAmeacas.actions;
export const useAmeacas = (state: any) => {
  return state.ameacas as IAmeacas[];
};
