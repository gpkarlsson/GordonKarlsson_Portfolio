import React from 'react'
import {Card, Box, Image, Badge, Text, Flex, Button, Stack, Heading, Link, CardBody, CardFooter, ButtonGroup, Divider } from '@chakra-ui/react'

export default function Projects() {
  return (
    <Card maxW='sm' display='flex' flexdirection='column' justifyContent='space-between' boxShadow='5px 5px 5px gray'>
    <CardBody>
      <Image
        src=''
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>MERN Marketplace</Heading>
        <Text>
        A marketplace that allows users to list their own items for sale, and purchase items from other users."
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          Tech Stack: MongoDB, Express.js, React.js, Node.js, Mongoose, ChakraUI, Apollo GraphQL 
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button as='a' variant='solid' colorScheme='blue' href='https://pacific-dawn-34240.herokuapp.com/'>
        Deployed
        </Button>
        <Button as='a' href='https://github.com/gpkarlsson/E_Commerce_Placeholder' variant='solid' colorScheme='blue'>
          GitHub Repo
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}
