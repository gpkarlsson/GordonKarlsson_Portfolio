import React from 'react'
// import { ChakraProvider } from '@chakra-ui/react'
// import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Aboutme from './components/Aboutme'
import Resume from './components/Resume'
// import Dashboard from './components/Dashboard'
import Projects from './components/Projects'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={< RootLayout />}>
      <Route path="about" element={<Aboutme/>} />
      <Route path="projects" element={<Projects />} />
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
