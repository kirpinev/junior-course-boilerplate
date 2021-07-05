import React, { Component } from 'react';
import { Form } from '../../uikit';

export class CategoryInput extends Component {
  render() {
    return (
      <Form.CheckboxWrapper>
        <Form.CheckboxInput
          onChange={this.props.onChange}
          checked={this.props.selectedCategories.includes(this.props.text)}
        />
        <Form.CheckboxTextWrapper>{this.props.text}</Form.CheckboxTextWrapper>
      </Form.CheckboxWrapper>
    );
  }
}
