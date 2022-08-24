import { Component } from 'react';
import './App.css';
import TaskList from './TaskList/TaskList';
import IToDo from './Interfaces/IToDo';
import AddTask from './AddTask/AddTask';

interface IProps {
  apiUrl: string;
}

interface IState {
  todos: Array<IToDo>
}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.getToDos();
  }

  getToDos = () => {
    fetch(this.props.apiUrl)
      .then(result => result.json())
      .then(json => {
        this.setState({
          todos: json
        }) 
      })
      .catch((error) => {
        console.error('Error:', error);        
      });
  }

  addTaskHandler = () => {
    const description = document.getElementById('add-task-description') as HTMLInputElement;
    const task = { description: description.value };

    fetch(this.props.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    .then(() => {
      this.getToDos();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  render() {
    var { todos } = this.state;

    return(
      <div className="App">
        <TaskList title="Pending Tasks" todos={todos.filter(t => t.state === 0)} />
        <TaskList title="Completed Tasks" todos={todos.filter(t => t.state === 1)} />
        <AddTask addTask={this.addTaskHandler} />
      </div>
    );
  }
}

export default App;
