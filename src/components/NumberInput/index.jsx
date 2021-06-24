import React, { Component } from 'react';
import { Form } from '../../uikit';

export class NumberInput extends Component {
  render() {
    return <Form.Input {...this.props} />;
  }
}
