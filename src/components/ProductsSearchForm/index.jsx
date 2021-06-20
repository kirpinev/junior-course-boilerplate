import React, { Component } from 'react';
import { LogRender } from '../LogRender';
import { Form } from '../../uikit';

export class ProductsSearchForm extends Component {
  render() {
    return (
      <>
        <LogRender {...this.props} {...this.state} componentContext={this} />
        <Form width="256px" marginRight="48px">
          <Form.Legend marginBottom="16px">Цена</Form.Legend>
          <Form.Label htmlFor="min" marginRight="12px">
            от
          </Form.Label>
          <Form.Input
            id="min"
            width="91px"
            marginRight="17px"
            value={this.props.minPrice}
            placeholder={this.props.minPricePlaceholder}
            onChange={this.props.handleMinPriceChange}
          />
          <Form.Label htmlFor="max" marginRight="12px">
            до
          </Form.Label>
          <Form.Input
            id="max"
            width="91px"
            value={this.props.maxPrice}
            placeholder={this.props.maxPricePlaceholder}
            onChange={this.props.handleMaxPriceChange}
          />
          <Form.Button
            width="100%"
            height="32px"
            marginTop="24px"
            backgroundColor="#323C48"
            color="#fff"
            border="none"
            onClick={this.props.handleProductsSearch}
          >
            Найти
          </Form.Button>
        </Form>
      </>
    );
  }
}
