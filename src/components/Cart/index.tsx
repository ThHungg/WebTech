import React, { memo } from 'react'
import CartHeader from './CartHeader'
import CartCentent from './CartContent'

const CartPage = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <CartHeader />
      <CartCentent />
    </div>
  );
}

export default memo(CartPage);