import styled from 'styled-components';
import { Legend } from './Legend';
import { Label } from './Label';
import { Input } from './Input';
import { Button } from './Button';

const Form = styled.form`
  width: ${p => p.width || '100%'};
  margin-right: ${p => p.marginRight || '0'};
`;

Form.Legend = Legend;
Form.Label = Label;
Form.Input = Input;
Form.Button = Button;

export { Form };
