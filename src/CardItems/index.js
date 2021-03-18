import React from 'react';
import Item from '../Item'

const CardItems = ({cart, handleRemoveItemToCart}) => {
    return (
        <footer>
            <ul>
                {cart.map((cartItem, index) => 
                    <Item 
                    key={index}
                    itemIndex={index}
                    name={cartItem.name} 
                    price={cartItem.price} 
                    handleRemoveItemToCart={handleRemoveItemToCart}
                    />
                )}
            </ul>
        </footer>
    )
}

export default CardItems;