import PropTypes from 'prop-types';
import React from 'react';

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: this.props.selectedValue,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedValue && nextProps.selectedValue !== this.state.selectedValue) {
      this.setState({
        selectedValue: nextProps.selectedValue,
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.selectedValue !== nextState.selectedValue) {
      if (this.props.onChange) {
        this.props.onChange({ target: { value: nextState.selectedValue } });
      }
    }
  }

  handleOnChange = event => {
    const selectedValue = event.target.value;
    this.setState({
      selectedValue,
    });
  };

  render() {
    const { children, name } = this.props;
    const { selectedValue } = this.state;
    const childArray = Array.isArray(children) ? children : [children];
    const newProps = {
      onChange: this.handleOnChange,
      name: name && name.length ? name : '',
    };

    return (
      <div>
        {childArray.map(child =>
          React.cloneElement(
            child,
            Object.assign(newProps, {
              checked: child.props.value === selectedValue,
            }),
          ),
        )}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  /** The value to be selected */
  selectedValue: PropTypes.string,
  /** The name of the checkbox elements, leave blank to set names on child elements */
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  /** Elements of type `<Input type="checkbox" />` */
  children: PropTypes.node.isRequired,
};

export { RadioGroup as Component };
export default RadioGroup;
