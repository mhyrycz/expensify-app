import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses'



const ExpenseItem = ({dispatch, id, description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id })) // { id: id }
    }}>Remove</button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

export default connect(mapStateToProps)(ExpenseItem)
