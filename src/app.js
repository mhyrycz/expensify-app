import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import expensesSelector from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  console.log(expensesSelector(state.expenses, state.filters));
});


const addOne = store.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: 200 }));
const addSecond = store.dispatch(addExpense({ description: 'Gas bill', amount: 400, createdAt: 300 }));
const addTextFilter = store.dispatch(setTextFilter( 'bill' ));


const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
