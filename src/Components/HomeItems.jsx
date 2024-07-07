import React, { useEffect } from 'react'
import Items from './Items'
import { useDispatch, useSelector } from 'react-redux'
import { fetchActions } from '../Store/fetching'
import { itemsAction } from '../Store/itemsSlice'

function HomeItems() {
 const dispath =  useDispatch()
 const fetchedItems = useSelector(store=>store.fetchItems) 

  useEffect(()=>{
if(fetchedItems.fetching) return;
    const constructor = new AbortController;
    const signal = constructor.signal

    // dispath(fetchActions.markFetchStarted())
fetch("http://localhost:8080/items" , {signal} )
.then(resp=>resp.json())
.then(data=>{
  
  dispath(itemsAction.addingInitialItems(data.items[0]));
  dispath(fetchActions.fetched())
  // dispath(fetchActions.markFetchFinish())
})


return ()=>{ 
  constructor.abort()
  }
  
  

  }
  
  ,[])

 const item = useSelector(store=>store.items)
  return (
    <main>
        <div class="items-container">
          {item.map((data)=><Items key={data.id} item={data}/>)}
          
        </div>
    </main>
  )
}

export default HomeItems
