import { useCallback, useReducer } from 'react';
const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value },
        },
      };
    case 'SET_DATA':
      return {
        ...state,
        inputs: action.inputs,
      };

    default:
      return state;
  }
};
export const useFrom = (initailInput) => {
  const [state, dispatch] = useReducer(formReducer, { inputs: initailInput });
  const inputHandler = useCallback((id, value) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      inputId: id,
    });
  }, []);
  const setFormData = useCallback((inputData) => {
    dispatch({
      type: 'SET_DATA',
      inputs: inputData,
    });
  }, []);
  return [state, inputHandler, setFormData];
};
