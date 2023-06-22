import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <Stack direction="row" spacing={4} align="center">
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
        textDecoration: 'none',
        }}>
    <ul>
      <li><Link to="/dashboard">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/resume">Resume</Link></li>
    </ul>
    </Flex>
    </Stack>
    </>
  )
}
