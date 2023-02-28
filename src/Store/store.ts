import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceAreas from "./sliceAreas";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ 
    areas: sliceAreas,
  })

const persistedReducer = persistReducer(persistConfig, rootReducer); // add aq novas persists

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
