import React from 'react';

const Card = ({ product }) => {
    return (
        <div className='card-container'>
            <div className="card">
                <h1>{product.name}</h1>
                <img src="./product.png" alt="" />
                <h4>Livraison sous 3 jours en France métropolitaine</h4>
                <h2>{product.price}€</h2>
            </div>
            <button>Ajouter au panier</button>

        </div>
    );
};

export default Card;