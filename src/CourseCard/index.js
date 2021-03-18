import React from 'react';

const CourseCard = ({img, title, price, handleAddItemToCart}) => {
    return (
        <div className="card">
            <img src={img} alt=""/>
            <h1>{title} - R$ {price}</h1>
            <button onClick={() => handleAddItemToCart(img, title, price)} >Adicionar</button>
        </div>
    )
}

export default CourseCard;