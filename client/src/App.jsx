import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from '../Layout';
import Home from './pages/home';
import Store from './pages/Store';
import Bookdetail from './pages/Bookdetail';
import Checkout from './pages/Checkout';

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },{
      path:"/store",
      element:<Store/>
    },{
      path:"/book-detail",
      element:<Bookdetail/>
    },{
      path:"/checkout",
      element:<Checkout/>
    }
  ]
}])

export default appRouter;