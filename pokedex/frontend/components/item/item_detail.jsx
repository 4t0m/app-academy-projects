import React from 'react';

const ItemDetail = ( {itemDetail} ) => {
  return (
    <div className="itemDetail-detail">
      <img src={itemDetail.image_url} height="30" width="30"></img>
      <h3>{itemDetail.name}</h3>
      <ul>
        <li>Happiness: {itemDetail.happiness}</li>
        <li>Price: ${itemDetail.price}</li>
      </ul>
    </div>
  );
};

export default ItemDetail;
