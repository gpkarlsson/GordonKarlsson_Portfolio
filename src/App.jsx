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
<<<<<<< HEAD
    <ChakraProvider>
      <Landing />
      <Projects />
      <Resume />
    </ChakraProvider>
=======
    <>
    <Routes>
      <Route path="/" element={<rootLoader />}>


      </Route>
    </Routes>
      
    </>
>>>>>>> 84a9252d9c3b13769c5eecd3efc1777c6c7171d8
  )
}

export default App
