//Checkbox through class

import React from "react";

class Checkbox1 extends React.Component {
  static defaultProps = {
    checked: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  }

  handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    const { checked } = this.state;
    return (
      <div className="React__checkbox">
        <label>
          <input
            type="checkbox"
            className="React__checkbox--input"
            checked={checked}
            onChange={this.handleChange}
          />
          <span className="React__checkbox--span" />
        </label>
      </div>
    );
  }
}

export { Checkbox1 };
