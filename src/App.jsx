import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import './App.css'

import RootLayout from './layout/RootLayout'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import ShopContextProvider from './context/ShopContext'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Shop />}/>
        <Route path='cart' element={<Cart />} />
      </Route>
    )
  )

  return (
    <ShopContextProvider>
      <RouterProvider router={router}/>
    </ShopContextProvider>

  )
}

export default App
