import React from 'react';
import ListItem from '../list-item/ListItem';

const ToDoList = props => {
  return (
    <ul>
      {props.items.map((item, i, array) => {
        // console.log(item.body);
        
        return <ListItem key={item.id} id={item.id} title={item.title} body={item.body} onClick={props.onEditTask} />;
      })}
    </ul>
  );
};

export default ToDoList;
