import { maxBy, minBy } from 'csssr-school-utils';
import productsList from '../products.json';

const defaultMinPrice = minBy(p => p.price, productsList).price;
const defaultMaxPrice = maxBy(p => p.price, productsList).price;

const initialState = {
  min: defaultMinPrice,
  max: defaultMaxPrice,
};

export const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MIN':
      return { ...state, min: action.payload };
    case 'UPDATE_MAX':
      return { ...state, max: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};
