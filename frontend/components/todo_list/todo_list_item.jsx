import React from 'react';
import ReactDOM from 'react-dom';
import TodoDetailViewContainer from './todo_detail_view_container';


class TodoListItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {id: props.todo.id, body: props.todo.body, title: props.todo.title, done: props.todo.done, detail: false};
  }

  delete (id, e){
    e.preventDefault();
    this.props.removeTodo(this.state);
  }

  displayStatus () {
    return this.state.done === true ? "Undo" : "Done";
  }

  changeStatus(e) {
    e.preventDefault();
    if (this.displayStatus() === "Undo") {
      this.setState({done: false});
    } else {
      this.setState({done: true});
    }
    this.props.receiveTodo(this.state);
  }

  displayDetail(e) {
    let detail = (this.state.detail) ? false : true;
    this.setState({detail});
    this.props.receiveTodo(this.state);
  }

  render() {
    return <div>
      <li onClick={this.displayDetail.bind(this)}>{this.props.todo.title}</li>
      <button onClick={this.delete.bind(this, this.props.todo.id)}>Delete Item</button>
      <button onClick={this.changeStatus.bind(this)}>{this.displayStatus.bind(this)()}</button>
      <ul>
        <TodoDetailViewContainer todo={this.state}/>
      </ul>
    </div>;
  }
}

export default TodoListItem;
