import React from "react"

function Product(props) {
  return (
    <div>
      <img src={props.product.img} alt="" width="200" />
      <h1>{props.product.name}</h1>
      <h2>{props.product.price}</h2>
      <button onClick={() => props.delete(props.product.id)}>Delete</button>
    </div>
  )
}

export default Product
