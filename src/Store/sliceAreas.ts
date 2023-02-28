import { createSlice } from "@reduxjs/toolkit";

interface IAreas {
  id: number;
  name: string;
}

const INITIAL_STATE: IAreas[] = [{ id: 0, name: "" }];

const sliceAreas = createSlice({
  name: "areas",
  initialState: INITIAL_STATE,
  reducers: {
    addAreas(state, action) {
        console.log(action)
      return [...state, { id: action.payload.id, name: action.payload.name }];
    },
  },
});
export default sliceAreas.reducer;
export const { addAreas } = sliceAreas.actions;
export const useAreas = (state: any) => {
  return state.areas as IAreas[];
};
