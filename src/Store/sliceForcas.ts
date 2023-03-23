import { createSlice } from "@reduxjs/toolkit";

interface IForcas {
  id: number;
  value: number;
  title: string;
  importancia: number;
  intencidade: number;
  tendencia: number;
}
const INITIAL_STATE: IForcas[] = [
  {
    id: 1,
    value: 1,
    title: "A marca é reconhecida no mercado",
    importancia: 1,
    intencidade: 1,
    tendencia: 1,
  },
  {
    id: 2,
    value: 1,
    title: "A empresa tem diferencial inovador",
    importancia: 1,
    intencidade: 1,
    tendencia: 1,
  },
  {
    id: 3,
    value: 1,
    title: "A tecnologia própria é essencial para o negócio",
    importancia: 1,
    intencidade: 1,
    tendencia: 1,
  },
  {
    id: 4,
    value: 1,
    title: "O produto é de qualidade",
    importancia: 1,
    intencidade: 1,
    tendencia: 1,
  },
  {
    id: 5,
    value: 1,
    title: "O portfólio de produtos/serviços é variado",
    importancia: 1,
    intencidade: 1,
    tendencia: 1,
  },
  {
    id: 6,
    value: 1,
    title: "O custo é baixo e isso ajuda a obter maior lucro",
    importancia: 1,
    intencidade: 1,
    tendencia: 1,
  },
  {
    id: 7,
    value: 1,
    title: "A equipe é competente e entrosada",
    importancia: 1,
    intencidade: 1,
    tendencia: 1,
  },
];
const sliceForcas = createSlice({
  name: "forcas",
  initialState: INITIAL_STATE,
  reducers: {
    updateForcas(state, action) {
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
export default sliceForcas.reducer;
export const { updateForcas } = sliceForcas.actions;
export const useForcas = (state: any) => {
  return state.forcas as IForcas[];
};
