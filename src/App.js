import React from 'react';

import uuid from 'uuid/v4';

import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import TodoInput from './components/todo-input/TodoInput';
import TodoList from './components/todo-list/TodoList';

class App extends React.Component {

  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  };

  handleChange = (e) => {
    this.setState({ item: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    })
  }

  clearList = () => {
    this.setState({items: []});
  }

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: selectedItem.id,
      editItem: true
    })
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: filteredItems });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
