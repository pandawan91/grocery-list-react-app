import React, {Component} from 'react';
import GroceryListItem from './GroceryListItem';
import PropTypes from 'prop-types';

class GroceryList extends Component {
    onMatchMedia() {
        this.setContainerStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)'
        }
    }
   constructor(props){
    const mql = window.matchMedia('(max-width: 720px)');
    mql.addListener(onMatchMedia);
   }

    containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)'
    };
    

  
    // {
    //     if(window.matchMedia('(max-width: 720px)').matches){
    //         console.log(window.matchMedia('(max-width: 720px)'));
            
    //         return {
    //             gridTemplateColumns: '1fr'
    //         }
    //     }
    //     else 
    //         return {
    //             display: 'grid',
    //             gridTemplateColumns: 'repeat(3, 1fr)'
    //         }
    // }

    render() {
        var items = this.props.groceryList.map(groceryListItem => (
            <GroceryListItem 
                key={groceryListItem.id} 
                groceryListItem={groceryListItem}
                deleteEvent={this.props.deleteEvent}></GroceryListItem>
        ));
        return(            
            <div style={this.containerStyle}>
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
