import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceAreas from "./sliceAreas";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import sliceResponsaveis from "./sliceResponsaveis";
import sliceForcas from "./sliceForcas";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  areas: sliceAreas,
  responsaveis: sliceResponsaveis,
  forcas: sliceForcas,
});

const persistedReducer = persistReducer(persistConfig, rootReducer); // add aq novas persists

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
