import React from 'react';
import ReactDOM from 'react-dom';
import uniqueId from '../../util/unique_id';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: uniqueId(), done: false, title: "", body: "", detail: false};
  }

  updateTitle(e) {
    e.preventDefault();
    let title = e.target.value;
    this.setState({title});
  }

  updateBody(e) {
    e.preventDefault();
    let body = e.target.value;
    this.setState({body});
  }

  createTodo (e){
    e.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({id: uniqueId(), title: "", body: ""});
  }

  render() {
    return (
      <div>
        <input onChange={this.updateTitle.bind(this)} type="text" value={this.state.title}/>
        <textarea onChange={this.updateBody.bind(this)} value={this.state.body}/>
        <button onClick={this.createTodo.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default TodoForm;
