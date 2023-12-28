import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { Box, Text, Image, Button } from '@chakra-ui/react';

function Card(props) {
  const { src, heading, content } = props;
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box
          h="554px"
          w="381px"
          borderRadius="20.937px"
          border="1.37px solid rgba(147, 162, 211, 0.38)"
          bg="#FFFFFF"
        >
          <Image
            src={src}
            w="326px"
            h="257px"
            borderRadius="21px"
            ml="27px"
            mt="27px"
            mr="28px"
          />
          <Box ml="43.17px" mt="35.51px">
            <Text
              fontSize="21px"
              fontWeight="700"
              fontStyle="normal"
              //  fontFamily=""
              lineHeight="27px"
              color="#0E2368"
            >
              {heading}
            </Text>
            <Text
              w="295px"
              h="auto"
              mt="14px"
              fontFamily="'Open Sans', sans-serif;"
              fontSize="15px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="27px"
              color="#444957"
              letterSpacing="-0.3px"
            >
              {content}
            </Text>

            <Button
              display="flex"
              mt="27.41"
              w="131px"
              h="42px"
              borderRadius="21px"
              padding="3px 26px"
              alignItems="center"
              gap="10px"
              border="1px solid #424961"
            >
              Read More
            </Button>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default Card;
