import React from 'react';
import { LogRender } from '../LogRender';
import { InputNumber } from '../InputNumber';
import { Form } from '../../uikit';
import { withInputValueCheck } from '../../hocs';

const InputNumberWithValueCheck = withInputValueCheck(InputNumber);

export class ProductsSearchForm extends LogRender {
  render() {
    return (
      <Form width="256px" marginRight="48px">
        <Form.Legend marginBottom="16px">Цена</Form.Legend>
        <Form.Label htmlFor="min" marginRight="12px">
          от
        </Form.Label>
        <InputNumberWithValueCheck
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
        <InputNumberWithValueCheck
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
