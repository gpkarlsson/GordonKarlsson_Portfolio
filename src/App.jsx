import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'

function App() {
  return (
    <ChakraProvider>
      <Landing />
      <Projects />
      <Resume />
    </ChakraProvider>
  )
}

export default App
