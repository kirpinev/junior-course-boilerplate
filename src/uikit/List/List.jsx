import React from 'react';
import { Item } from './Item';

const List = ({ children }) => <ul>{children}</ul>;

List.Item = Item;

export { List };
