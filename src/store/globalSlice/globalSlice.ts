import { PayloadAction } from "@reduxjs/toolkit";
import { useAppInjectReducer, useAppInjectSaga } from "../redux-injectors";
import { createAppSlice } from "../toolkit";
import { globalSaga } from "./globalSaga";
export enum BG_COLORS {
  RED, GREEN
}
export interface IGlobalState {
  bgColor: BG_COLORS

}

export const initialState: IGlobalState = {
  bgColor: BG_COLORS.RED

};

export const globalSlice = createAppSlice({
  name: "global",
  initialState,
  reducers: {
    changeBgColor: (state, action: PayloadAction<BG_COLORS>) => {
      state.bgColor = action.payload;
    }
  },
});

export const { actions: GlobalActions, reducer: globalReducer, name: sliceKey } = globalSlice;
export const useGlobalSlice = () => {
  useAppInjectReducer({ key: sliceKey, reducer: globalReducer });
  useAppInjectSaga({ key: sliceKey, saga: globalSaga });
  return { GlobalActions };
};
