import React, { Component } from 'react';
import { DiscountInput } from '../DiscountInput';
import { Form } from '../../uikit';
import { withInputValueCheck, withLogRender } from '../../hocs';

const InputDiscountWithValueCheckAndLogger = withInputValueCheck(withLogRender(DiscountInput));

export class DiscountForm extends Component {
  render() {
    return (
      <Form width="256px" marginRight="48px">
        <InputDiscountWithValueCheckAndLogger
          title="Скидка"
          name="discount"
          value={this.props.discount}
          onChange={this.props.onChange}
        />
      </Form>
    );
  }
}
