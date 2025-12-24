import React, { memo } from 'react'
import CartItemList from '../CartItemList'
import CartSummary from '../CartSummary'

const CartCentent = () => {
  return (
    <div className='container grid grid-cols-12 gap-6 py-6 '>
        <div className='col-span-8'>
            <CartItemList/>
        </div>
        <div className='col-span-4'>
            <CartSummary/>
        </div>
    </div>
  )
}

export default memo(CartCentent);