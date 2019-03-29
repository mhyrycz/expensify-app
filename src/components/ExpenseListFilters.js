import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate  } from '../actions/filters'

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  }
  //according to react-dates read.me 
  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }

  onFocusChange = (calendarFocused) => {
    this.setState({ calendarFocused })
  }
   
  render() {
    return(
      <div>
        <input type='text' onChange={(e) => {
          this.props.dispatch(setTextFilter(e.target.value))
        }}/>
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate())
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount()) // dispatch is in props
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          showClearDates={true}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    filters: state.filters
  }
}
export default connect(mapStateToProps)(ExpenseListFilters); //store connected to component
