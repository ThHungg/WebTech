"use client"
import React, { memo } from 'react'
import CartHeader from './CartHeader'
import CartCentent from './CartContent'
import { useQuery } from '@tanstack/react-query'
import * as cartServices from '../../services/cartServices'
const CartPage = () => {
  const {data: cartData = {} } = useQuery({
    queryKey: ['cartData'],
    queryFn: () => cartServices.getCart(),
  })
  console.log('cart', cartData)
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <CartHeader cartData={cartData}/>
      <CartCentent cartData={cartData}/>
    </div>
  );
}

export default memo(CartPage);