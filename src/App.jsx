import React from 'react'
// import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

import { createRoutesFromElements } from 'react-router-dom/dist'

const router = createBrowserRouter(
  createRoutesFromElements(
  
  <Route path="/" element={< RootLayout />}>
  <Route path="about" element={<Aboutme/>} />
  <Route path="projects" element={<contactLoader />} />
  <Route path="resume" element={<Resume />} />
  </Route>

  )


  
)
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
