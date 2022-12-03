import React from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

const ProductCom = () => {
  const products = useSelector(state=> state.allProducts.product)
  const renderList = products.map((product)=> {
    const {id,title,image, price, category} = product
    return (
    <div className="four wide column" key={id}>
      <Link to={`/product/${id}`}>
      <div className="ui link cards">
        <div className="card" style={{height: 500}}>
          <div className="image" style={{backgroundColor: 'white'}}>
            <img src={image} alt={title} style={{width: 280, height: 350, padding: 15}} />
          </div>
          <div className="content" style={{backgroundColor: 'lavender'}}>
            <div className="header">{title}</div>
            <div>${price}</div>
            <div>{category}</div>
          </div>
        </div>
      </div>
      </Link>
    </div>
    )
  })
  return (
<>
    {renderList}
</>
    )
}

export default ProductCom 