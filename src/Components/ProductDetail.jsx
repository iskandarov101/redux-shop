import React from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/actionProduct';

const ProductDetail = () => {
  const product = useSelector(state=> state.product)
  const {image, title, price, category, description} = product
  const { productId } = useParams();
  const dispatch = useDispatch()

  const fetchProDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch(e => console.log('error catched', e.message))
    dispatch(selectedProduct(response.data))
    }

  useEffect(()=> {
    if (productId && productId !== '') fetchProDetail()
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <h1>loading...</h1>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            {/* <div className="ui vertical divider">AND</div> */}
            <div className="middle aligned row">
              <div className="column lp">
                <img src={image} alt={title} />
              </div>
              <div className="column gr">
                <h1>{title}</h1>
                <h2>
                  <Link className='ui teal tag label'>${price}</Link>
                </h2>
                <h3 className='ui brown block header'>{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex='0'>
                  <div className='hidden content'>
                    <i className="shop icon" />
                  </div>
                  <div className='visible content'>Add to Card</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail;