import React from 'react'

export default function Product(props) {
    const{product}=props;
  return (
    <div><img className='small' src={product.image} alt={product.Name}></img>
    <h3>{product.Name}</h3>
    <div>{product.MRP}</div>
    <button> Add to Cart</button>
    </div>
  )
}
