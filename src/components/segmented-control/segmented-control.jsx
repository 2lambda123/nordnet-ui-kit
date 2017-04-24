import React, { PropTypes } from 'react';
import cn from 'classnames';
import SegmentedControlStyles from './segmented-control-styles';

class SegmentedControl extends React.PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = { selected: props.value };
    this.handleChange = this.handleChange.bind(this);
    this.classes = this.context.styleManager.render(SegmentedControlStyles);
  }

  handleChange(e) {
    const index = e.currentTarget.value;
    this.setState({
      selected: index,
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(index);
      }
    });
  }

  render() {
    return (
      <span style={this.props.style} className={cn(this.classes.root, this.props.className)}>
        { this.props.children.map((child, index) => {
          const childValue = (child.props || {}).value;
          const selected = childValue === this.state.selected || index === this.state.selected;
          const usedClassName = cn(this.classes.label, {
            [this.classes.selected]: selected,
            [this.classes.buttonLeft]: index === 0,
            [this.classes.buttonRight]: index === this.props.children.length - 1,
          });
          const inputId = `sc-${this.props.name}-${index}`;
          return (<span className={usedClassName} key={`sc-${this.props.name}-${childValue}`}>
            <input
              type="radio"
              name={`sc-${this.props.name}`}
              id={inputId}
              value={childValue || index}
              checked={selected}
              onChange={this.handleChange}
            />
            <label htmlFor={inputId}>{ child }</label>
          </span>);
        }) }
      </span>
    );
  }
}

SegmentedControl.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.string,
};

SegmentedControl.contextTypes = {
  styleManager: PropTypes.object.isRequired,
};

export default SegmentedControl;