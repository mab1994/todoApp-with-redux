import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addTask, deleteTask, taskDone, editTask } from './Actions/Actions';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      edit: false,
    };
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  saveTask = task => {
    this.setState({...task, edit: true})
  }

  addOrEditTask = () => {
    if (this.state.edit) {
      this.props.editExistingTask(this.state)
      this.setState({text: '', edit: false})
    }
    else {
      this.props.addNewTask({text: this.state.text, id: uuidv4()})
      this.setState({text: '', edit: false})
    }
    
  }

  render() {
    return (
      <div className='App'>
        <Navbar bg="dark" variant="dark">
          <Form inline width="50%">
            <input type="text" placeholder="Put a task" className="mr-sm-2" width="150px" onChange={this.handleChange} />
            <Button variant="outline-light" onClick={() => this.props.addNewTask({ text: this.state.text, id: uuidv4() })}>Submit</Button>
          </Form>
        </Navbar>
        <Alert variant="dark" className='txt-left'>
          {
            this.props.AllTasks.map(el =>
              <div className="aligned">
                <h4 className={el.taskIsDone ? "done" : "undone"}>{el.text}</h4>
                <div className="aligned">
                  <Button variant="dark" className="spaced" onClick={() => this.saveTask(el)}>Edit</Button>
            <Button variant="outline-success" className="spaced" onClick={() => this.props.taskIsDone(el.id)}>{el.taskIsDone ? 'Undo' : 'Done'}</Button>
                  <Button variant="danger" className="spaced" onClick={() => this.props.deleteTheTask(el.id)}>X</Button>
                </div>
              </div>
            )
          }
        </Alert>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    AllTasks: state.Tasks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewTask: task => dispatch(addTask(task)),
    deleteTheTask: task => dispatch(deleteTask(task)),
    taskIsDone: task => dispatch(taskDone(task)),
    editExistingTask: task => dispatch(editTask(task))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

