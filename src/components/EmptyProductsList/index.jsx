import React, { Component } from 'react';
import { List } from '../../uikit';

export class EmptyProductsList extends Component {
  render() {
    return (
      <List>
        <List.Item>Товаров не найдено :(</List.Item>
      </List>
    );
  }
}
