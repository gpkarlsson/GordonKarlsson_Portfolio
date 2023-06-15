import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
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
