import React, {Component} from 'react';
import GroceryListItem from './GroceryListItem';
import PropTypes from 'prop-types';
import './GroceryList.css'

class GroceryList extends Component {
    render() {
        var items = this.props.groceryList.map(groceryListItem => (
            <GroceryListItem 
                key={groceryListItem.id} 
                groceryListItem={groceryListItem}
                deleteEvent={this.props.deleteEvent}
            ></GroceryListItem>
        ));
        return(            
            <div className="container">
                {items}
            </div>            
        );
    }  
}


// PropTypes
GroceryList.propTypes = {
    groceryList: PropTypes.array.isRequired
}

export default GroceryList;
