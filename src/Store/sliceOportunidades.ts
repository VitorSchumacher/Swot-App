import { createSlice } from "@reduxjs/toolkit";

interface IOportunidades {
  id: number;
  value: number;
  title: string;
  importancia: number;
  urgencia: number;
  tendencia: number;
}
const INITIAL_STATE: IOportunidades[] = [
  {
    id: 1,
    value: 1,
    title: "Possíbilidade de parcerias estratégicas",
    importancia: 1,
    urgencia: 1,
    tendencia: 1,
  },
  {
    id: 2,
    value: 1,
    title: "Exitem poucos concorrentes no mercado",
    importancia: 1,
    urgencia: 1,
    tendencia: 1,
  },
  {
    id: 3,
    value: 1,
    title: "Aproveita políticas governamentais",
    importancia: 1,
    urgencia: 1,
    tendencia: 1,
  },
  {
    id: 4,
    value: 1,
    title: "Há expectativa de redução de impostos",
    importancia: 1,
    urgencia: 1,
    tendencia: 1,
  },
  {
    id: 5,
    value: 1,
    title: "Economia local crescendo",
    importancia: 1,
    urgencia: 1,
    tendencia: 1,
  },
];
const sliceOportunidades = createSlice({
  name: "oportunidades",
  initialState: INITIAL_STATE,
  reducers: {
    updateOportunidades(state, action) {
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

export default sliceOportunidades.reducer;
export const { updateOportunidades } = sliceOportunidades.actions;
export const useOportunidades = (state: any) => {
  return state.oportunidades as IOportunidades[];
};
