import React from 'react'
import OrdersOverview from '../ui/OrdersOverview'
import SalesOverview from '../ui/SalesOverview'

const HomeLastSection = () => {
  return (
    <div className='flex flex-row gap-16 w-full pb-12 pr-10'>
        <OrdersOverview />
        <SalesOverview />
    </div>
  )
}

export default HomeLastSection