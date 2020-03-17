import React, {Component} from 'react';
import uuid from 'uuid';
import GroceryList from './components/GroceryList'

import './App.css';

class App extends Component {
  state = {
    groceryList: [
      {
        id: uuid.v4(),
        name: 'soap bottles',
        quantity: 5
      },
      {
        id: uuid.v4(),
        name: 'toilet paper',
        quantity: 50
      }
    ]
  };
  deleteEvent = (id) => {    
     this.setState({
       groceryList: this.state.groceryList.filter(item => item.id != id)
     });
  }
  render() {
    return (
      <div>
        <GroceryList 
          groceryList={this.state.groceryList}
          deleteEvent={this.deleteEvent}  
        ></GroceryList>
      </div>
    );
  }  
}

export default App;
