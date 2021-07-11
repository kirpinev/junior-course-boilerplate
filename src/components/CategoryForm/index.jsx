import React, { Component } from 'react';
import { Form } from '../../uikit';
import { CategoryInput } from '../CategoryInput';
import { withLogRender } from '../../hocs';
import { ProductsContext } from '../../context';

const CategoryInputWithLogger = withLogRender(CategoryInput);

export class CategoryForm extends Component {
  render() {
    return (
      <ProductsContext.Consumer>
        {({ handleCategoryChange }) => (
          <Form width="256px" marginRight="48px">
            <Form.Legend marginTop="24px" marginBottom="16px">
              Категории
            </Form.Legend>
            <Form.CheckboxesWrapper>
              {this.props.categories.map((category, index) => (
                <CategoryInputWithLogger
                  key={index}
                  text={category}
                  onChange={() => handleCategoryChange(category)}
                  selectedCategories={this.props.selectedCategories}
                />
              ))}
            </Form.CheckboxesWrapper>
          </Form>
        )}
      </ProductsContext.Consumer>
    );
  }
}
