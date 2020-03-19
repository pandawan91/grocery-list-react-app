import React, {Component} from 'react';
import uuid from 'uuid';

import './AddGroceryListItem.css'

class AddGroceryListItem extends Component {
    state = {
        name: '',
        quantity: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value, 
        [e.target.quantity]: e.target.value });

    addGrocery = (e) => {           
        if(this.state.name && this.state.quantity) {
            const newGrocery = {
                id: uuid.v4(),
                name: this.state.name,
                quantity: this.state.quantity
            }
            
            this.props.addGrocery(newGrocery);

            //cleanup  
            this.setState({
                name: '',
                quantity: ''
            })
        }           
    }
    render(){
        return(
            <div className="card">
                <h1 className="h1">Grocery List</h1>
                <div className="group">      
                    <input name="name" type="text" value={this.state.name} onChange={this.onChange} required />
                    <span className="highlight"></span>
                    <label>name</label>
                </div>
                <div className="group">      
                    <input name="quantity" type="number" value={this.state.quantity} onChange={this.onChange} required />
                    <span className="highlight"></span>
                    <label>quantity</label>
                </div>
                <button className="button" onClick={this.addGrocery}>ADD</button>
            </div>
        );
    }

}

export default AddGroceryListItem