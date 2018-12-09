class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: false
    };
    this.changeButton = this.changeButton.bind(this);
  }

  changeButton() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
        }
      }
    )
  }

  render() {
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.changeButton}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && (
          <div> Some details </div>
        )}
      </div>
    )
  }

}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'))
