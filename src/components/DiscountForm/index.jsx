import React, { Component } from 'react';
import { DiscountInput } from '../DiscountInput';
import { Form } from '../../uikit';
import { withInputValueCheck, withLogRender } from '../../hocs';
import { ProductsContext } from '../../context';

const InputDiscountWithValueCheckAndLogger = withInputValueCheck(withLogRender(DiscountInput));

export class DiscountForm extends Component {
  render() {
    return (
      <ProductsContext.Consumer>
        {({ discount, handleInputChange }) => (
          <Form width="256px" marginRight="48px">
            <InputDiscountWithValueCheckAndLogger
              title="Скидка"
              name="discount"
              value={discount}
              onChange={handleInputChange}
            />
          </Form>
        )}
      </ProductsContext.Consumer>
    );
  }
}
