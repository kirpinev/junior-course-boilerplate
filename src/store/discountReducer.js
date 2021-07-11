const initialState = 0;

export const discountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DISCOUNT':
      return action.payload;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};
