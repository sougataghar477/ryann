import React from 'react';
import { SimpleGrid,Box,Container,Image,Heading,Text } from '@chakra-ui/react';
import useStore from "../Store/store";
export default function Hero() {
  const darkMode=useStore(state =>state.darkMode);
  return (
    // <div className='hero'>
    //     gg
    // </div>
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
// will have the same effect.
<Container className={darkMode?'dark-mode':''} maxW={'6xl'}  height='100vh' px={[6, 12, 12, 24]} py={[12, 12, 12, 12]}>
<SimpleGrid placeItems={'center'} gap='32px'  columns={[1, 1, 2]}>
<Box>
    <Heading   lineHeight={'1.6'}>
        Welcome to my Page! <br/> My name is Ryann , nice to have you here
    </Heading>
    <Text>
        
    </Text>
</Box>
<Box >
<Image  minW={'300px'} borderRadius={'20px'} src='./740full-ryann-murphy.jpg'/>
</Box>

</SimpleGrid>
</Container>

  )
}
