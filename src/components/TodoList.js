import React from 'react';
import ListItem from './ListItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          todoTask: '',
          items: []
        };
      }
    
    onChange = (event) => {
        this.setState({todoTask: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
          todoTask: '',
          items: [...this.state.items, this.state.todoTask]
        });
    }

    render () {
        return (
        <div>
            <form className="Todo" onSubmit={this.onSubmit}>
              <input value={this.state.todoTask} onChange={this.onChange} />
              <button>Add Todo Item</button>
            </form>
            <ListItem items={this.state.items} />
        </div>
        );
      
    }
}

export default TodoList;