import React from 'react';
import '../css/ListItem.css';

const ListItem = props => (
  <ul id="todo_list" >
    {
      props.items.map(
          (item, index) => 
          <li  key={index}>
          <input type="checkbox" /><span>{item}</span>
          </li>)
    }
  </ul>
);

export default ListItem;

