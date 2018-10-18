import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import ToDoList from './components/todo-list/toDoList';
import Modal from './components/modal/Modal';

class App extends Component {
  state = {
    toDoList: [],
    modalHidden: true,
    taskTitle: '',
    taskBody: '',
    taskId: 0
  };

  componentDidMount = () => {
    // axios.get('http://localhost:5000/posts').then(response => {
      axios.get('https://jsonplaceholder.typicode.com/posts?userId=1').then(response => {
      const toDoList = response.data;
      this.setState({ toDoList });
    });
  };

  onEditTask = (id, title, body) => {
    const taskTitle = title;
    const taskBody = body;
    const taskId = id;
    this.setState({ taskId, taskTitle, taskBody, modalHidden: false });
  };

  onTaskTitleChange = value => {
    const taskTitle = value;
    this.setState({ taskTitle });
  };

  onTaskBodyChange = value => {
    const taskBody = value;
    this.setState({ taskBody });
  };

  onCloseModal = () => {
    this.setState({ modalHidden: true });
  };

  onSubmit = e => {
    e.preventDefault();
    const { taskTitle, taskBody, taskId } = this.state;
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/1/${taskId}`, {
      // .put(`http://localhost:5000/posts/${taskId}`, {
        userId: 1,
        id: taskId,
        title: taskTitle,
        body: taskBody
      })
      .then(r => {
        this.setState({ modalHidden: true });
      })
      .then(() =>
        // axios.get('http://localhost:5000/posts').then(response => {
          axios.get('https://jsonplaceholder.typicode.com/posts?userId=1').then(response => {
          const toDoList = response.data;
          this.setState({ toDoList });
        })
      );
  };

  onDeleteTask = e => {
    e.preventDefault();
    const { taskTitle, taskBody, taskId } = this.state;
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/1/${taskId}`, {
      // .delete(`http://localhost:5000/posts/${taskId}`, {
        userId: 1,
        id: taskId,
        title: taskTitle,
        body: taskBody
      })
      .then(r => {
        this.setState({ modalHidden: true });
      })
      .then(() =>
        // axios.get('http://localhost:5000/posts').then(response => {
          axios.get('https://jsonplaceholder.typicode.com/posts?userId=1').then(response => {
          const toDoList = response.data;
          this.setState({ toDoList });
        })
      );
  };

  onCreateNewTask = e => {
    e.preventDefault();
    const { taskTitle, taskBody, taskId, toDoList } = this.state;
    const newId = Math.max(...toDoList.map(item => item.id)) + 1;
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/1/${taskId}`, {
      // .post(`http://localhost:5000/posts/`, {
        userId: 1,
        id: newId,
        title: taskTitle,
        body: taskBody
      })
      .then(r => {
        this.setState({ modalHidden: true });
      })
      .then(() =>
        // axios.get('http://localhost:5000/posts').then(response => {
          axios.get('https://jsonplaceholder.typicode.com/posts?userId=1').then(response => {
          const toDoList = response.data;
          this.setState({ toDoList });
        })
      );
  };

  render() {
    return (
      <div className="App">
        <ToDoList items={this.state.toDoList} onEditTask={this.onEditTask} />
        <Modal
          onCreateNewTask={this.onCreateNewTask}
          onDeleteTask={this.onDeleteTask}
          onCloseModal={this.onCloseModal}
          onSubmit={this.onSubmit}
          modalHidden={this.state.modalHidden}
          taskTitle={this.state.taskTitle}
          taskBody={this.state.taskBody}
          onTaskTitleChange={this.onTaskTitleChange}
          onTaskBodyChange={this.onTaskBodyChange}
        />
      </div>
    );
  }
}

export default App;
