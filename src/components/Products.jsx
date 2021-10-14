import React from "react"
import ProductCard from "./ProductCard"
import "./products.css"

const productList = [{
  id: 1, 
  name: 'Juan Pollo Tropical',
  brand: 'Tommy Bahama',
  type: 'shirt',
  price: 149.99,
}, {
  id: 2, 
  name: 'Boring Grey T-shirt',
  brand: 'Hanes',
  type: 'shirt',
  price: 9.99,
}, {
  id: 3, 
  name: 'Grey Swoop-neck Blouse',
  brand: 'Zara',
  type: 'shirt',
  price: 49.99,
}, {
  id: 4, 
  name: 'Boca Code Polo',
  brand: 'Nike',
  type: 'shirt',
  price: 29.99,
}]

function Products (props) {
  return (
    <>
      <h2>Products</h2>
      <div className="product-list">
        {productList.map(item => {
         return (
          <ProductCard 
            key={item.id}
            name={item.name} 
            price={item.price} 
            brand={item.brand} 
            type={item.type} />
        )
        })}
      </div>
    </>
  )
}

export default Products