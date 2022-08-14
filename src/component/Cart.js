import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { addItem, deleteItem } from '../actionTypes/cartAction';

export const Cart = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
  return (
    <div className='cart'>
        <h2>Number of items in Cart: {state.numOfItems}</h2>
        <button className='green' onClick={()=>{dispatch(addItem())}}>Add item to Cart</button>
        <button className='red' onClick={()=>{dispatch(deleteItem())}}>Remove item from Cart</button>
    </div>
  )
}
