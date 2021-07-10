import { createStore, combineReducers } from 'redux';
import { maxBy, minBy } from 'csssr-school-utils';
import { discountReducer } from './discountReducer';
import { selectedCategoriesReducer } from './selectedCategoriesReducer';
import { priceReducer } from './priceReducer';
import productsList from '../products.json';

const defaultMinPrice = minBy(p => p.price, productsList).price;
const defaultMaxPrice = maxBy(p => p.price, productsList).price;
const categories = Array.from(new Set(productsList.map(product => product.category)));

const reducers = combineReducers({
  selectedCategories: selectedCategoriesReducer,
  price: priceReducer,
  categories: () => categories,
  discount: discountReducer,
  defaultMinPrice: () => defaultMinPrice,
  defaultMaxPrice: () => defaultMaxPrice,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
