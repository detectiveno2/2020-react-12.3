import React, { Component } from "react";
import "./../css/SearchBox.css";

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      isFocus: false
    };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onFocus() {
    this.setState({ isFocus: true });
  }

  onBlur() {
    this.setState({ isFocus: false });
  }

  onKeyUp() {
    const valueInput = document.getElementById("searchInput").value;
    if (this.state.isValidatePhoneNumber === undefined) {
      this.setState({ isValidatePhoneNumber: false });
      return;
    }
    if (
      valueInput.startsWith("090") &&
      valueInput.length === 10 &&
      !isNaN(valueInput)
    ) {
      this.setState({ isValidatePhoneNumber: true });
    } else {
      this.setState({ isValidatePhoneNumber: false });
    }
  }

  render() {
    let { isFocus } = this.state;
    let { isValidatePhoneNumber } = this.state;
    const classNames = require("classnames");
    const classNameOfSearchInput = classNames({
      "not-validate": isValidatePhoneNumber === false,
      "is-validate": isValidatePhoneNumber
    });
    const className = classNames("search-btn", {
      active: isFocus
    });
    return (
      <div className="SearchBox">
        <input
          id="searchInput"
          className={classNameOfSearchInput}
          onKeyUp={this.onKeyUp}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          type="text"
          placeholder="Type something to search..."
        />
        <div className={className}>
          <a href="#">
            <img
              src="https://image.flaticon.com/icons/svg/483/483356.svg"
              width="15"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default SearchBox;
