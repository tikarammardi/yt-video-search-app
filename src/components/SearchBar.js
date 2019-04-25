import React, { Component } from 'react';

class SearchBar extends Component {
  state = { textInput: '' };

  onInputChange = event => {
    this.setState({
      textInput: event.target.value
    });
  };
  onFormSubmit = event => {
    event.preventDefault();

    //TO DO : make sure to call back from parent component
    this.props.onSearchFormSubmit(this.state.textInput);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field ">
            <label htmlFor="">Video Search</label>
            <div className="ui icon input ">
              <input
                type="text"
                value={this.state.textInput}
                onChange={this.onInputChange}
                placeholder="Search..."
              />
              <i className=" search icon" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
