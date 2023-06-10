import { useAppInjectReducer, useAppInjectSaga } from "../redux-injectors";
import { createAppSlice } from "../toolkit";
import { globalSaga } from "./globalSaga";

export interface IGlobalState {

}

export const initialState: IGlobalState = {

};

export const globalSlice = createAppSlice({
  name: "global",
  initialState,
  reducers: {
  },
});

export const { actions: GlobalActions, reducer: globalReducer, name: sliceKey } = globalSlice;
export const useGlobalSlice = () => {
  useAppInjectReducer({ key: sliceKey, reducer: globalReducer });
  useAppInjectSaga({ key: sliceKey, saga: globalSaga });
  return { GlobalActions };
};
