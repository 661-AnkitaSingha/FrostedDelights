import React from 'react'
import { useState } from 'react'

const Productcard = ({ name, price, image, onAddToCart }) => {
  const [qty, setQty] = useState(0)

  const handleAdd = () => {
    setQty(1)
    onAddToCart(1)
  }

  const increase = () => {
    setQty(qty + 1)
    onAddToCart(1)
  }

  const decrease = () => {
    if (qty > 0) {
      setQty(qty - 1)
      onAddToCart(-1)
    }
  }

  return (
    <div className="productcard">
      <div id="flavours">
        <img src={image} alt={name} />
        <h3>Name : {name}</h3>
        <h3>Price : {price}</h3>

        {qty === 0 ? (
          <button onClick={handleAdd}>Add to Cart</button>
        ) : (
          <div className="qty-control">
            <button onClick={decrease}>-</button>
            <span>{qty}</span>
            <button onClick={increase}>+</button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Productcard












