const defaultState = [0.5, 0.25, 0.125, 0.0625, 0.03125];

const UPD_VALUE = "UPD_P_VALUE";
const REM_VALUE = "REM_P_VALUE";
const SET_VALUE = "SET_P_VALUE";

export const pArrReducer = (state = defaultState, action) => {
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

export const setPvalue = (value) => ({
  type: SET_VALUE,
  payload: { value },
});

export const updPValue = (value, index) => ({
  type: UPD_VALUE,
  payload: { value, index },
});

export const removePvalue = (index) => ({
  type: REM_VALUE,
  payload: { index },
});
