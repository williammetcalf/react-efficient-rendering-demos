import { useReducer } from "react";

const useRenderCounter = () => {
  return useReducer(count => count + 1, 0);
};

export default useRenderCounter;
