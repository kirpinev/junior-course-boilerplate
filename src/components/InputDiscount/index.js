import React from 'react';
import DiscountInput from 'csssr-school-input-discount';
import { LogRender } from '../LogRender';

export class InputDiscount extends LogRender {
  render() {
    return <DiscountInput {...this.props} />;
  }
}
