import React from 'react';
import ListItem from './ListItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          term: '',
          items: []
        };
      }
    
    onChange = (event) => {
        this.setState({term: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]
        });
    }

    render () {
        return (
        <div>
            <form className="Todo" onSubmit={this.onSubmit}>
              <input value={this.state.term} onChange={this.onChange} />
              <button>Submit</button>
            </form>
            <ListItem items={this.state.items} />
        </div>
        );
      
    }
}

export default TodoList;