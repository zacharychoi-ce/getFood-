import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems } from '../redux/itemsSlice'
import { Link } from 'react-router-dom'

// Components
import SingleItem from './SingleItem'

export default function ItemListing () {
  const items = useSelector(state => state.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItems())
  }, [])

  return (
    <section className='items-wrapper'>
      <Link to='/item/new' className='button-blue'>Add Item</Link>
      {items.map(item => (
        <React.Fragment key={item.id} >
          <SingleItem
            name={item.name}
            description={item.description}
            expiryDate={item.expiryDate}
            quantity={item.quantity}
            email={item.email}
            img={item.img}
          />
          <Link to={`/item/${item.id}`}className='item-link'>View More...</Link>
        </React.Fragment>
      ))}
    </section>
  )
}
