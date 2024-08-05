import React from 'react'
import product from "../product";
import {Card} from 'react-bootstrap';
const Image = () => {
  return (
    <div>
      <Card.Img variant="top" src={product.imgurl} alt={product.name}></Card.Img>
    </div>
  );
}

export default Image