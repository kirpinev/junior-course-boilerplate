import styled from 'styled-components';
import { Item } from './Item';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 224px);
  grid-template-rows: auto;
  grid-row: 2;
  grid-column-gap: 32px;
  grid-row-gap: 49px;
  padding: 0;
  margin: 0;
  width: 736px;
`;

List.Item = Item;

export { List };
