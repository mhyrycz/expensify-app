import React from 'react';
import ReactDOM from 'react-dom';


class AddOption extends React.Component {
  state = {
      error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option)
    this.setState( () => ({ error }) );
    if (!this.state.error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return(
      <div>
        {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
        <form className='add-option' onSubmit={this.handleAddOption}>
          <input className='add-option-input' type="text" name="option"/>
          <button className='button'>Add option</button>
        </form>
      </div>
    )
  }
}

export default AddOption;
