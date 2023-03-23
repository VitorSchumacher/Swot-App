import { createSlice } from "@reduxjs/toolkit";

interface IResponsaveis {
  id: number;
  name: string;
  area: string;
}

const INITIAL_STATE: IResponsaveis[] = [];

const sliceResponsaveis = createSlice({
  name: "responsaveis",
  initialState: INITIAL_STATE,
  reducers: {
    addResponsaveis(state, action) {
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          area: action.payload.area,
        },
      ];
    },
    removeResponsaveis(state, action) {
      let newItens = state.filter((state) => state.id !== action.payload);
      return newItens;
    },
  },
});
export default sliceResponsaveis.reducer;
export const { addResponsaveis, removeResponsaveis } = sliceResponsaveis.actions;
export const useResponsaveis = (state: any) => {
  return state.responsaveis as IResponsaveis[];
};
