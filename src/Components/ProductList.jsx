import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";

import ProductCom from "./ProductCom";
import {setProduct} from '../redux/actions/actionProduct';

const ProductList = () => {
  const dispatch = useDispatch();

  const fetchProduct = async()=> {
    const response = await axios.get(`https://fakestoreapi.com/products`)
    .catch(err=> console.log(err.message, 'error catched'))
      dispatch(setProduct(response.data))
  }
  useEffect(()=> {
    fetchProduct()
  },[]);
  return (
    <div className="ui grid container">
      <ProductCom />
    </div>
  )
}

export default ProductList