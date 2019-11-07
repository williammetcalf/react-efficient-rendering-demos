import { useReducer } from "react";

export interface State {
  field1?: string;
  field2?: string;
  field3?: string;
  field4?: string;
  field5?: string;
  field6?: string;
  field7?: string;
  field8?: string;
  field9?: string;
  field10?: string;
  field11?: string;
  field12?: string;
  field13?: string;
  field14?: string;
  field15?: string;
  field16?: string;
}

const useFormState = () => {
  return useReducer(reducer, {});
};

const reducer = (state = {}, action: { key: keyof State; value: string }) => {
  const newState: State = { ...state, [action.key]: action.value };
  return newState;
};

export default useFormState;
