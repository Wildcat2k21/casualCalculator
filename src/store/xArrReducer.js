const defaultState = [1, 2, 3, 4, 5];

const UPD_VALUE = "UPD_X_VALUE";
const REM_VALUE = "REM_X_VALUE";
const SET_VALUE = "SET_X_VALUE";

export const xArrReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_VALUE:
      return [...state, action.payload.value];
    case UPD_VALUE:
      return state.map((item, index) =>
        index === action.payload.index ? action.payload.value : item,
      );
    case REM_VALUE:
      return state.filter((_, index) => index !== action.payload.index);
    default:
      return state;
  }
};

export const setXvalue = (value) => ({
  type: SET_VALUE,
  payload: { value },
});

export const updXValue = (value, index) => ({
  type: UPD_VALUE,
  payload: { value, index },
});

export const removeXvalue = (index) => ({
  type: REM_VALUE,
  payload: { index },
});
