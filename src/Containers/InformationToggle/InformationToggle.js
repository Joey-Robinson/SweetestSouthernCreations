import React, { Component } from 'react';

class InformationToggle extends Component {
  state = {
    visibility: false
  }
  handleToggleVisibility = () => {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <button
          onMouseEnter={this.handleToggleVisibility}
          onMouseLeave={this.handleToggleVisibility}>
            {this.state.visibility ? <p>&uarr;</p> : <p>&darr;</p>}
        </button>
        {this.state.visibility && (
          <div>
            <p>test</p>
          </div>
        )}
      </div>
    );
  }
}

export default InformationToggle;