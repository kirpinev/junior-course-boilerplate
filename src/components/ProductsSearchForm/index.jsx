import React, { memo } from 'react';
import { Form } from '../../uikit';

export const ProductsSearchForm = memo(
  ({
    minPrice,
    maxPrice,
    minPricePlaceholder,
    maxPricePlaceholder,
    handleMinPriceChange,
    handleMaxPriceChange,
    handleProductsSearch,
  }) => (
    <Form width="256px" marginRight="48px">
      <Form.Legend marginBottom="16px">Цена</Form.Legend>
      <Form.Label htmlFor="min" marginRight="12px">
        от
      </Form.Label>
      <Form.Input
        type="number"
        id="min"
        width="91px"
        marginRight="17px"
        value={minPrice}
        placeholder={minPricePlaceholder}
        onChange={handleMinPriceChange}
      />
      <Form.Label htmlFor="max" marginRight="12px">
        до
      </Form.Label>
      <Form.Input
        type="number"
        id="max"
        width="91px"
        value={maxPrice}
        placeholder={maxPricePlaceholder}
        onChange={handleMaxPriceChange}
      />
      <Form.Button
        width="100%"
        height="32px"
        marginTop="24px"
        backgroundColor="#323C48"
        color="#fff"
        border="none"
        onClick={handleProductsSearch}
      >
        Найти
      </Form.Button>
    </Form>
  )
);
