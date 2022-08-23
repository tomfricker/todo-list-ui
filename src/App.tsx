import { Component } from 'react';
import './App.css';
import List from './List/List';
import IToDo from './Interfaces/IToDo';

interface IProps {
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
    fetch('https://localhost:7190/ToDo')
      .then(result => result.json())
      .then(json => {
        this.setState({
          todos: json
        })
      });
  }

  render() {
    var { todos } = this.state;

    return(
      <div className="App">
        <List title="Pending Tasks" todos={todos.filter(t => t.state === 0)} />
        <List title="Completed Tasks" todos={todos.filter(t => t.state === 1)} />
      </div>
    );
  }
}

export default App;
