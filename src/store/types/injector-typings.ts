import { Saga } from "redux-saga";
import { SagaInjectionModes } from "redux-injectors";
import { Reducer, AnyAction } from "@reduxjs/toolkit";
import { IRootState } from "./RootState";

type RequiredRootState = Required<IRootState>;

export type RootStateKeyType = keyof IRootState;

export type InjectedReducersType = {
  [P in RootStateKeyType]?: Reducer<RequiredRootState[P], AnyAction>;
};
export interface IInjectReducerParams<Key extends RootStateKeyType> {
  key: Key;
  reducer: Reducer<RequiredRootState[Key], AnyAction>;
}

export interface IInjectSagaParams {
  key: RootStateKeyType | string;
  saga: Saga;
  mode?: SagaInjectionModes;
}
