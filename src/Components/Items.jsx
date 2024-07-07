import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BagActions } from '../Store/BagList'

function Items({item}) {

  const bagList =  useSelector(store=>store.bagList);
  const elementFound = bagList.indexOf(item.id) >= 0;
  // console.log(elementFound)

const dispath = useDispatch()

  const handlingBag = ()=>{
dispath(BagActions.bagList(item.id))
  }

  const RemoveFromBag = ()=>{
    dispath(BagActions.removingFromBag(item.id))
  }

  return (
    <div class="item-container">
      <img class="item-image" src={item.image} alt="item image"/>
      <div class="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div class="company-name">{item.company}</div>
      <div class="item-name">{item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs {item.current_price}</span>
          <span class="original-price">Rs {item.original_price}</span>
          <span class="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? <button type="button" class="btn btn-add-bag  btn-danger" onClick={RemoveFromBag}>Remove</button> :  <button type="button" class="btn btn-add-bag btn-success" onClick={handlingBag}>Add to Bag</button>}
     

    </div>
  )
}

export default Items
