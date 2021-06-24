import React, { PureComponent } from 'react';
import { toInt } from 'csssr-school-utils';

export const withInputValueCheck = WrappedComponent =>
  class extends PureComponent {
    handleInputChange = e => {
      const inputValue = toInt(e.target.value);

      if (inputValue !== this.props.value) {
        this.props.onChange(e);
      }
    };

    render() {
      return <WrappedComponent {...this.props} onChange={this.handleInputChange} />;
    }
  };
