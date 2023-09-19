import React, { useState } from 'react';
import {
  Heading,
  FormControl,Center,
  Input,
  Flex,
  Text,
  Button,
  Checkbox,
  Link,
  Image,
  Alert , AlertIcon
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/login', data)
      .then((res)=>{
          console.log(res.data)
          setData(data);
          <Alert status='info'>
          <AlertIcon />
          Login Suggessful
        </Alert>
         alert("signup  ")
      });
    } catch (error) {
      console.error('Error logging in:', error);
      <Alert status='error'>
      <AlertIcon />
      Signup First
    </Alert>
    alert("signup first ")
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Flex justifyContent="space-between" alignItems="center" mr="280px" ml="280px">
          <Heading as="h3" size="lg">
            Apple ID
          </Heading>
          <Flex justifyContent="space-between" alignItems="center">
            <Link>
              <Text fontSize="xl" color="gray.500" mr="2rem">
                Sign In
              </Text>
            </Link>
            <Link>
              <Text fontSize="xl" color="gray.500" mr="2rem">
                Create Your Apple ID
              </Text>
            </Link>
            <Link>
              <Text fontSize="xl" color="gray.500">
                FAQ
              </Text>
            </Link>
          </Flex>
        </Flex>
        <hr></hr>
        <center  flexDirection="column" alignItems="center">
          <Image
            boxSize={{ base: '100px', md: '200px' }}
            height={{ base: '250px', md: '500px' }}
            width={{ base: '150px', md: '300px' }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQedry_ZjBYhqekBGAzjL3uTV--A5KyfBtUNHLzeGQajPWwh6HStS2pCASR7Adx7d89N4&usqp=CAU"
            alt="Apple Logo"
          />
          <Text  fontSize={{ base: '4xl', md: '6xl' }} fontWeight="bold">
            Apple ID
          </Text>
          <Text fontSize={{ base: 'lg', md: '2xl' }} color="gray.500">
            Manage your Apple account
          </Text>
        </center>
        <br></br>
        <Flex whiteSpace={0} flexDir={{ base: 'column', md: 'row' }}></Flex>
        <FormControl style={{ marginRight: '1rem' }}>
          <Input
            type="text"
            width={{ base: '100%', md: '30rem' }}
            height="4rem"
            placeholder="Email or Phone no."
            sx={{ '::placeholder': { fontSize: 'xl' } }}
            color="blue.500"
            name="email"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl style={{ marginRight: '1rem' }}>
          <Input
            type="password"
            width={{ base: '100%', md: '30rem' }}
            height="4rem"
            placeholder="Password"
            sx={{ '::placeholder': { fontSize: 'xl' } }}
            color="blue.500"
            name="password"
            onChange={handleChange}
          />
        </FormControl>
        <Flex/>
        <br></br>
        <Center mt="1rem">
          <Checkbox defaultChecked fontSize={{ base: '3xl', md: '4xl' }}>
            Remember me
          </Checkbox>
        </Center>

        <Center mt="1rem">
          <Link color="blue.500" textDecoration="underline">
            <Text fontSize={{ base: 'xl', md: '2xl' }}>Forgotten your password?</Text>
          </Link>
        </Center>

        <Center mt="1rem">
          <Button
            width={{ base: '100%', md: 'auto' }}
            colorScheme="blue"
            type="submit"
            fontSize={{ base: 'lg', md: '2xl' }}
          >
            Sign In
          </Button>
        </Center>
      </form>
    </div>
  );
};

export default Login;
