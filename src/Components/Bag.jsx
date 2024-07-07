import { useSelector } from "react-redux"
import BagSummary from "./BagSummary"
import BagItems from "./BagItems"

function Bag() {

  const bagId = useSelector(store=>store.bagList)

  const items = useSelector(store=>store.items)


  const finalItems = items.filter((item)=> {
    const listed = bagId.indexOf(item.id)
    return listed >=0;
  })

  // console.log(finalssItems)
  return (
   <>
    <main>
      <div class="bag-page">
        <div class="bag-items-container">
          {finalItems.map((item)=><BagItems key={item.id} item={item}/>)}
          {/* <BagItems/> */}
        </div>
        <div class="bag-summary">
          <BagSummary/>
        </div>

      </div>
    </main>
   </>
  )
}

export default Bag
