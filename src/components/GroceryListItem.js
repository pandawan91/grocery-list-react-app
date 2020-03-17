import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class GroceryListItem extends Component {
    getHeaderStyle = () => {
        return {
            display: 'block',
            width: '100%'
        }
    }
    
    getHeaderTitleTextStyle = () => {
        return {
            padding: '16px',
            fontSize: '24px',
            fontWeight: '400',
            color: 'black'
        }
    }

    getHeaderCardContentStyle = () => {
        return {
            padding: '16px'
        }
    }

    render() {
        const {id, name, quantity} = this.props.groceryListItem;
        return (
            <div className="card">
                <div style={this.getHeaderStyle()}>
                    <div style={this.getHeaderTitleTextStyle()}>{name}</div>
                </div>
                <div style={this.getHeaderCardContentStyle()}>Quantity: {quantity}</div>
                <button className="button" 
                    onClick={this.props.deleteEvent.bind(this, id)}>DELETE</button>
            </div>
        )
    }
}

// PropTypes
GroceryListItem.propTypes = {
    groceryListItem: PropTypes.object.isRequired
}


export default GroceryListItem
