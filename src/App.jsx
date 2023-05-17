import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes
} from 'react-router-dom'

import rootLoader from './root-loader'
import aboutLoader from './about-loader'

const router = createBrowserRouter(

  
)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<rootLoader />}>


      </Route>
    </Routes>
      
    </>
  )
}

export default App
