const initialState = [];

export const selectedCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CATEGORIES':
      return [...action.payload];
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};
