import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'poijsdfsdf',
    description: 'j',
    note: 'This was the final payment',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};