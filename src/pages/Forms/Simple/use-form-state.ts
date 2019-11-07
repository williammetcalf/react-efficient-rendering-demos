import { useReducer } from "react";

export interface State {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  field7: string;
  field8: string;
  field9: string;
  field10: string;
  field11: string;
  field12: string;
  field13: string;
  field14: string;
  field15: string;
  field16: string;
}

const initialState: State = {
  field1: "",
  field2: "",
  field3: "",
  field4: "",
  field5: "",
  field6: "",
  field7: "",
  field8: "",
  field9: "",
  field10: "",
  field11: "",
  field12: "",
  field13: "",
  field14: "",
  field15: "",
  field16: ""
};

const useFormState = () => {
  return useReducer(reducer, initialState);
};

const reducer = (state: State, action: { key: keyof State; value: string }) => {
  const newState: State = { ...state, [action.key]: action.value };
  return newState;
};

export default useFormState;
