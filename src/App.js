import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { Highlight, Image, Box, Text, Button } from '@chakra-ui/react';
import Footer from './Component/Footer';
import Carousel from './Component/Carousel';

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box id="page-1" display="flex">
          <Box w="1440px" h="804px" m="0" bg="#fff">
            <Image
              src="https://s3-alpha-sig.figma.com/img/e61b/6571/33af368e1471bcf0efe704356a08337d?Expires=1704672000&Signature=M44oBgbYU5sjNDcaxygCeXj-UTjVwUIYA355WMs38ZIPJFzyzsJlOM6YYm4hRpAPaHSjyi5o~sgKncnAcnhow69FuzxNKMcmvFa3xfj2ELwyJO9RP91cuQ4~ChrLEe48qFbrlqI8C-B9qiFOOUoz0uQPHVjMX--TmYBeXnqbcUmvppHrG8wH0NRGT0C4P9M-9K84Z8GiGRhZHm9J0JQYt9Pdl5vFt0cuDAY7etewn67nIufKpJ8cI48R2XUUEotgGiqIDIxqhsBq1F015ISirGGiAcKAbMZfUj9NP9QPtSvIdk9q10yEto03-8B8yjhsw7~fcbw4VB~dbFxxxewtng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              w="107px"
              h="83px"
              position="relative"
              ml="100px"
              mt="33px"
              mb="auto"
            />

            <Box
              w="380px"
              h="207px"
              ml="100px"
              mt="111px"
              mb="auto"
              position="relative"
            >
              <Text
                fontSize="62px"
                color="#0E2368"
                fontFamily="'Source Sans 3', sans-serif;"
                fontWeight="700"
                fontStyle="normal"
                lineHeight="69px"
              >
                <Highlight query="Best" styles={{ color: '#E23744' }}>
                  Discover the Best Food and Drinks
                </Highlight>
              </Text>
            </Box>
            <Box
              w="380px"
              h="55px"
              ml="100px"
              mt="26px"
              // mr="auto"
              mb="auto"
            >
              <Text
                fontSize="17.5px"
                fontStyle="normal"
                fontFamily="'Open Sans', sans-serif;"
                fontWeight="400"
                lineHeight="27.408px"
                color="#444957"
              >
                Naturally made Healthcare Products for the better care & support
                of your body.
              </Text>
            </Box>
            <Button
              ml="100px"
              mt="41px"
              // mr="auto"
              mb="auto"
              h="63px"
              w="190px"
              gap="7px"
              padding="14px 34px"
              bg="#E23744"
              color="#FFFFFF"
              borderRadius="34px"
            >
              Explore Now!
            </Button>
          </Box>
          <Box>
            <Image
              scr="https://s3-alpha-sig.figma.com/img/c2a9/c613/9cad959fc06da22d2d90d91c2fed69db?Expires=1704672000&Signature=CvPxJbu0Uo9PW00uQTKmUhcf6XMo1AP-i7RH0RoFiE3gZKA-~3c404FTAy0xGDhM9NkF1QSZRelbCXdbHwHxJvyhG9Px7-JElabzJxTOqX97UV8YHkO-uqrYRTpJibuPBD7baUeRT9iPTILRve3THQuWB3-~M-ta7aAFWowO2E3klr-Dtt4Rp-yPqyveasJG~VIcc~UZF6HsexyANU96ZfQWv6BsW89tirGwLAIBXnw66s8x2IvqxYKaPSpelYnlUBop78RZBOIoRx17GEPeH~PSPy8C-3UOUz0ZeE2wLLfYxs~9NXb8g5yKBZMyBoUgu8tu5oLb-De1U7UQx-HN4g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              objectFit="cover"
              position="absolute"
              zIndex="1"
              h="839px"
              w="752px"
              mr="0px"
              ml="auto"
              mt="auto"
              mb="auto"
              borderRadius="0px 0px 0px 198.902px"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              position="relative"
              width="752px"
              height="839px"
              viewBox="0 0 752 839"
              fill="none"
            >
              <path
                d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z"
                fill="#E23744"
              />
            </svg>
          </Box>
        </Box>

        {/* Page-2 */}

        <Box w="1440px" h="653px">
          <Box
            mt="186px"
            w="100%"
            h="467px"
            bg="linear-gradient(90deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%);"
            display="flex"
            position="relative"
          >
            <Box ml="205px" mt="auto">
              <Image
                src="https://s3-alpha-sig.figma.com/img/5b80/babf/a1ef27ac038072c6f30264ab0d7bc72d?Expires=1704672000&Signature=AzZPF2n02Y1wr7IzvRI-ASqlxlA6II8srrjyMOvC3C8qVOvhVSnilzNLrOgjdec~WwcRsnt8gthJHd2rx5G0Kx-LdS-Qj6izyMbSaiawoGGw16Mqm-af2GHu-g52TP5DmE1N80qry0-1oO8z0CSkGHtCdnaHh9cqsuOIxTioZ92QHZMULlbA8z8wFbIB9YdaLa96WFqP7k0r-Fc8D-~j200~InEiORKT8odHXwiSEKoG3PUUuyauZT2RULURvbXa6sJfGmQAmVehsc2bTNg-NSs67DJGDbsSwuUr8oZJQjPfYHai1pkeSTgbrHNWbrXcgcSv60JRK8Ot5gaxskFi7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                w="384px"
                h="468px"
                objectFit="cover"
              />
            </Box>
            <Box ml="204px" mb="168.59px" mt="107px">
              <Text
                w="422px"
                h="26px"
                fontSize="45px"
                fontStyle="normal"
                fontFamily=""
                fontWeight="600"
                lineHeight="27px"
                color="#0E2368"
              >
                About Us
              </Text>

              <Text
                mt="27.41px"
                w="447px"
                h="138px"
                fontSize="15px"
                fontFamily=""
                fontWeight="400"
                color="#444957"
                lineHeight="27px"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. t has
                survived not only five centuries.
              </Text>

              <Button
                mt="21px"
                h="42px"
                w="132px"
                gap="10px"
                padding="3px 26px"
                bg="#E23744"
                color="#FFFFFF"
                borderRadius="21px"
                justifyContent="center"
              >
                Read More
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Page-3 */}

        <Box w="1440px" h="995px">
          <Box w="1225px" h="679px" ml="108px">
            {/* <Box> */}
            <Text
              h="84px"
              w="461px"
              fontSize="56px"
              fontStyle="normal"
              fontFamily="'Source Sans 3', sans-serif;"
              fontWeight="600"
              color="#0E2368"
              lineHeight="42px"
              letterSpacing="2.24px"
            >
              Latest Articles
            </Text>

            <Carousel />
          </Box>
        </Box>

        {/* Page- 3 */}

        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
