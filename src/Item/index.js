import React from 'react';

const Item = ({name, price, itemIndex, handleRemoveItemToCart}) => {
    return (
        <li>
            <h2 className="course-name">{name}</h2>
            <span className="course-price">RS {price}</span>
            <button className="remove-btn" onClick={() => handleRemoveItemToCart(itemIndex)}>Remover</button>
        </li>
    )
}

export default Item;