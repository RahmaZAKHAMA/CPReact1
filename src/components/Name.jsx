import React from 'react'
import product from '../product'
import './name.css'
const Name = () => {
    console.log(product.name);
  return (
    <div><h1 id="title">{product.name}</h1></div>
  )
}

export default Name