import { createSlice } from "@reduxjs/toolkit";

interface IAreas {
  id: number;
  name: string;
}

const INITIAL_STATE: IAreas[] = [];

const sliceAreas = createSlice({
  name: "areas",
  initialState: INITIAL_STATE,
  reducers: {
    addAreas(state, action) {
      return [...state, { id: action.payload.id, name: action.payload.name }];
    },
    removeAreas(state, action) {
      let newItens = state.filter((state) => state.id !== action.payload);
      return newItens;
    },
  },
});
export default sliceAreas.reducer;
export const { addAreas, removeAreas } = sliceAreas.actions;
export const useAreas = (state: any) => {
  return state.areas as IAreas[];
};
