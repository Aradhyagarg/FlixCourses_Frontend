import { Spinner, VStack } from '@chakra-ui/react';
import React from 'react';

const Loader = ({ color = 'purple.500' }) => {
  return (
    <VStack h="100vh" justifyContent={'center'}>
      <div style={{ transform: 'scale(4)' }}>
        <Spinner
        thickness='3.5px'
        speed='0.65s'
        emptyColor='gray.200'
        color={color}
        size='xl'
          /*thickness="2px"
          speed="0.65s"
          emptyColor="transparent"
          color={color}
          size="xl"*/
        />
      </div>
    </VStack>
  );
};

export default Loader;
