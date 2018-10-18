import React from 'react';
import cn from 'classnames';

import './style.css';


export default class ListItem extends React.Component {
  onClick = ( id, title, body) => {
    this.props.onClick(id, title, body);
  };

  render() {
    const { id, title, body } = this.props;

    return (
      <li className={cn('ListItem')} id={id}>
        <div className={cn('ListItem__text')}>
          <h3 className={cn('ListItem__title')}>{title}</h3>
          <div>{body}</div>
        </div>
        <button className={cn('ListItem__button')} onClick={() => this.onClick(id, title, body)}>Edit</button>
      </li>
    );
  }
}
