import React from 'react';
import cn from 'classnames';
import './style.css';

class Modal extends React.Component {
  onTaskTitleChange = e => {
    if (this.props.onTaskTitleChange) {
      this.props.onTaskTitleChange(e.target.value);
    }
  };

  onTaskBodyChange = e => {
    if (this.props.onTaskBodyChange) {
      this.props.onTaskBodyChange(e.target.value);
    }
  };

  render() {
    return (
      <div className={cn('fixed-overlay fixed-overlay__modal', { hidden: this.props.modalHidden })}>
        <div className={cn('modal')}>
          <form className={cn('modal_container')} onSubmit={this.props.onSubmit}>
            <label />
            <textarea
              className={cn('modal_taskTitle')}
              name="taskTitle"
              onChange={this.onTaskTitleChange}
              value={this.props.taskTitle}
            />
            <label />
            <textarea
              className={cn('modal_taskBody')}
              name="taskBody"
              onChange={this.onTaskBodyChange}
              value={this.props.taskBody}
            />
            <div className={cn('modal_buttons-container')}>
              <input
                className={cn('modal_submit')}
                type="button"
                value="Create New Task"
                onClick={this.props.onCreateNewTask}
              />
              <input className={cn('modal_submit')} type="submit" value="Edit" />
              <input
                className={cn('modal_submit')}
                type="button"
                value="Delete Task"
                onClick={this.props.onDeleteTask}
              />
            </div>
          </form>
          <div onClick={this.props.onCloseModal} className={cn('modal_close')}>X</div>
        </div>
      </div>
    );
  }
}

export default Modal;
