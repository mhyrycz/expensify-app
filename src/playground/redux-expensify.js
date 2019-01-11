import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//actions genererators
const addExpense = (
  { description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

const removeExpense = (
  {
    id,
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'REMOVE_EXPENSE',
  expense: {
    id,
    description,
    note,
    amount,
    createdAt
  }
});


// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      //return state.concat(action.expense)
      //concat combine smth with smth and create new object, push change some objec (not true function)
      //spread operator in reducer
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      //return state.concat(action.expense)
      //console.log (state.indexOf(action.expense))
      return state.filter(({ id }) => id !== action.expense.id);
    default:
      return state;
  }
};
// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
//console.log every time when there is a change
store.subscribe(() => {
  console.log(store.getState());
});

const addOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const addSecond = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id: store.getState().expenses[0].id }));



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
