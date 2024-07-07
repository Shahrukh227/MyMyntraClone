import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Bag from './Components/Bag.jsx'
import HomeItems from './Components/HomeItems.jsx'
import {Provider} from "react-redux"
import itemsStore from "./Store/index.js"

const router = createBrowserRouter([{
  path:"/" , element : <App /> , children : [{
    path : "/" , element : <HomeItems/>
   },{
    path : "/bag" , element : <Bag/>
   }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={itemsStore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
