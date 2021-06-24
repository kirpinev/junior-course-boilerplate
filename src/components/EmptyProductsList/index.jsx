import React, { PureComponent } from 'react';
import { List } from '../../uikit';

export class EmptyProductsList extends PureComponent {
  render() {
    return (
      <List>
        <List.Item>Товаров не найдено :(</List.Item>
      </List>
    );
  }
}
