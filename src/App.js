import React, {Component} from 'react';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import GroceryList from './components/GroceryList/GroceryList'
import AddGroceryListItem from './components/GroceryList/AddGroceryListItem'
import GorceryListHeader from './components/layout/GorceryListHeader';

import HomeView from './components/pages/HomeView'

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
       groceryList: this.state.groceryList.filter(item => item.id !== id)
     });
  }
  addGrocery = (newGrocery) => {    
    this.setState({
      groceryList: [...this.state.groceryList, newGrocery]
    });
 }

  render() {
    return (
      <Router>
        <div>
          <GorceryListHeader></GorceryListHeader>            
            <Route exact path="/" component={HomeView}></Route>
            <Route  path="/list" render={
              props => (
                <React.Fragment>
                  <AddGroceryListItem addGrocery={this.addGrocery}></AddGroceryListItem>
                  <GroceryList 
                    groceryList={this.state.groceryList}
                    deleteEvent={this.deleteEvent}            
                  ></GroceryList> 
                </React.Fragment>              
            )}></Route>          
        </div>
      </Router>
    );
  }  
}

export default App;
