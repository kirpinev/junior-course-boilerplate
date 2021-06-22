import React from 'react';
import { Form } from '../../uikit';
import { LogRender } from '../LogRender';

export class InputNumber extends LogRender {
  render() {
    return <Form.Input {...this.props} />;
  }
}
