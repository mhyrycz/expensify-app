import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// expenses actions genererators
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

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

//filters action generators

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

const setStartDate = (timestamp) => ({
  type: 'SET_START_DATE',
  timestamp
})

const setEndDate = (timestamp) => ({
  type: 'SET_END_DATE',
  timestamp
})



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
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense, //taking old object
            ...action.updates //overrading old variable inside object
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: '',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.timestamp
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.timestamp
      }
    default:
      return state;
  }
};

//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  })
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
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses);
});

const addOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 100 }));
const addSecond = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: 300 }));
//
// //store.dispatch(removeExpense({ id: store.getState().expenses[0].id }));
// store.dispatch(removeExpense({ id: addOne.expense.id }));
// store.dispatch(editExpense( addSecond.expense.id  , { amount: 500 }));

store.dispatch(setTextFilter( 'rent' ));
// store.dispatch(setTextFilter());
//
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//
 store.dispatch(setStartDate(100));
// store.dispatch(setStartDate());
 store.dispatch(setEndDate(300));

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
/*
const user = {
  name: 'Jen',
  age: 24
};

console.log({
  ...user,
  shit: 'shit'
});
*/
