import React, { PureComponent } from 'react';
import { Form } from '../../uikit';

export class InputNumber extends PureComponent {
  render() {
    return <Form.Input {...this.props} />;
  }
}
