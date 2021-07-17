import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getItems, deleteItem } from '../redux/itemsSlice'
import { useParams } from 'react-router'

export default function ItemDetails () {
  const { id } = useParams()
  const dispatch = useDispatch()
  const items = useSelector(state => state.items)
  const singleItem = items.find(item => item.id === Number(id))

  useEffect(() => {
    dispatch(getItems())
  }, [])

  const handleDelete = (itemId) => {
    dispatch(deleteItem({ id: itemId }))
  }

  return (
    <>
      <section className='card-container'>
        <button>Go bacrodrigo</button>
        <img
          src={singleItem?.img}
          alt={singleItem?.name}
          style={{ width: '90%', height: '200px', backgroundColor: 'pink' }}
        />
        <article>
          <h1>{singleItem?.name}</h1>
          <h1>Pick up location: {singleItem?.location}</h1>
          <h1>Description: {singleItem?.description}</h1>
          <h1>Quantity: {singleItem?.quantity}</h1>
          <h1>Exp. Data: {singleItem?.expiryDate}</h1>
          <h1>Date Created: {singleItem?.dateCreated}</h1>
          <h1>Email: {singleItem?.email}</h1>
          <button>Edit item</button>
          <button onClick={() => handleDelete(id)}>Delete item</button>
          <button >Claim this item</button>
        </article>
      </section>
    </>
  )
}
