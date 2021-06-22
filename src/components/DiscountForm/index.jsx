import React from 'react';
import { InputDiscount } from '../InputDiscount';
import { LogRender } from '../LogRender';
import { Form } from '../../uikit';
import { withInputValueCheck } from '../../hocs';

const InputDiscountWithValueCheck = withInputValueCheck(InputDiscount);

export class DiscountForm extends LogRender {
  render() {
    return (
      <Form width="256px" marginRight="48px">
        <InputDiscountWithValueCheck {...this.props} />
      </Form>
    );
  }
}
