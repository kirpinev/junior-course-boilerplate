import React, { Component } from 'react';
import { NumberInput } from '../NumberInput';
import { Form } from '../../uikit';
import { withInputValueCheck, withLogRender } from '../../hocs';

const InputNumberWithValueCheckAndLogger = withInputValueCheck(withLogRender(NumberInput));

export class ProductsSearchForm extends Component {
  render() {
    return (
      <Form width="256px" marginRight="48px">
        <Form.Legend marginBottom="16px">Цена</Form.Legend>
        <Form.Label htmlFor="min" marginRight="12px">
          от
        </Form.Label>
        <InputNumberWithValueCheckAndLogger
          id="min"
          name="min"
          width="91px"
          marginRight="17px"
          value={this.props.min}
          placeholder={this.props.minPricePlaceholder}
          onChange={this.props.handleInputChange}
        />
        <Form.Label htmlFor="max" marginRight="12px">
          до
        </Form.Label>
        <InputNumberWithValueCheckAndLogger
          id="max"
          name="max"
          width="91px"
          value={this.props.max}
          placeholder={this.props.maxPricePlaceholder}
          onChange={this.props.handleInputChange}
        />
      </Form>
    );
  }
}
