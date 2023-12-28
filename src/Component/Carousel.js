import Card from './Card';
import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import theme from '../theme';
import { Box, Slide, Text } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const {isOpen,onToggle} = useDisclosure();
  const cardData = [
    <Box display="flex" gap="41px">
      <Card
        src="https://s3-alpha-sig.figma.com/img/b457/cb75/2678ff07019c289fb72556852cc6b74f?Expires=1704672000&Signature=Pnkd2XD2nybJ9xmLZhoQWUoBFzucPxrPIB1sje~YXCHTVAzVtCE-5x~EHpGkoSxtogegk9VweZn42XOM2-sOI32OPg2wWUsYEOb5Go2Jib9jYzMSBKAmX2Ilr2Jtf9~d30Zuvp47QH5pjx6jX1n9qA946CVpkkK1zz9xIi6kHRmVqyG0IAj7HP0TmqT~I5OgKKOTeEJccWKqn0zBp7Rw5nXN9-vHJatr3Xe9oBDivaN17R337CGQlHD0jpQt9dtL7Wyf8HfME940RWD0~XC9HFk9cOx529AeJDRBoEriMPW31pVbeCbiP~6~ZV~gdWDeAJx~w0ecIjS5hE8yrmFUpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        heading="How To Grill Corn"
        content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />
      <Card
        src="https://s3-alpha-sig.figma.com/img/36f0/05b2/98fb3af9a51a3627a968ca95735063e2?Expires=1704672000&Signature=O8E5EkD3FrN3eO6BS5dso458V4IKV8m68YsLNlnk6~iNbwkgCKwVVgFTQvPxx8sjns2yn5w9mMREZfWowvpMdR0SgStexaHm976S1Fc1W9f5TBaweu8G1Ad7nQjFZlEQTLm28bp4hdSZWFPjbkvELAXlsSWO697G61GAWlg3~raeDWsU4oTaCOhNg3Ji9W7vvaMVl58ChuOD8pVsRf0papShQJd1hfMIX9xB2xFYZ-NASF7XRde-Dwd5wrHqQePUyY4xa5ByzEK7gLaKo-e8RvqPiIHv2qxKASA5E24A-oFj0f8IGnrBBQrSrhi8IUunfBfmYDtAjDQykvzfQlXkBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        heading="Crunchwrap Supreme"
        content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />
      <Card
        src="https://s3-alpha-sig.figma.com/img/60f8/cba1/6ae830e61504aecaf6d8b547eb08589a?Expires=1704672000&Signature=b65aU9qfELjYhZusLLB3rQTs3tUCQNH53yb9xlCCG8TCWNvnPeH-3is-4t~Y7Rfg1C8pH27wsXB5VAGlYppYQ7xsMHjzrsRxpOYmiNWwdNXETWzuflqHIu3o9myeLWxzqHKu3-CndQwfreP9l6ukjtp4bnDD4TR-LmcGeN~~3CBksGfR5E2xG44qk~eZBt8LJKuFePIt5ppqFw4wEBxdmuPAkXQVfGabYRlfn0pKLcttZ3vrqp-JSS6Fk~jRuGKt7pBJiAP2OOZrSUZX0R6CgxhY5-~6DZo6ha1CNMifkGlBMaUZS4DFv0vWw-GTOvbddrJHwl0UvcAMSBumwkUHrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        heading="Broccoli Cheese Soup"
        content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />
    </Box>,
    <Box display="flex" gap="41px">
      <Card
        src="https://s3-alpha-sig.figma.com/img/47d5/04a0/5c72c6b4f096bbbec0680ab784a5dcef?Expires=1704672000&Signature=O-obW~pNpu9oJvVI2enJILwPIOaVCHKhTgQ1qSZN9PIw-N7aXVqWkaCyRTXXP6OQ19o6JTnB8De-cnK5M7khAnah9omaVndTU1AzDufP9pf1Vxa1-~Xpt7WgJJuZ972yc6Ae0GaTEt1Gfmrwx167qc0lTbAJX~tIs8qhDrpYe6wgyCChEilUacifdlIr-OoKo0j0Ov1WuJGXFghqcFvPktlxoV1wDvMSwxSasdWj135E1aVdurah-v1X15Jr32CtLvta9uI-qc03f5MMuLRkQTvZx7OdQfWFm4mGz72pYNf3wtWUYwdAVZDD-K8OqDyvraUZRFkODz61dN5Rxvd~sg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        heading="Grilled  Tomatoes at Home"
        content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />

      <Card
        src="https://s3-alpha-sig.figma.com/img/c6dd/5c3b/71e2cd1709116400deb9af41ed9aa012?Expires=1704672000&Signature=kGRdDFyBxysGsc-61yOSt1nCwF7GrxwQKAYJhSHXRKLBGRP4uHxKhEfPM8b-ielFE925z3ifmc7hdQM5it8MosV5E66DHHShlTbnMVD1JBA7FBWvgNHl8D41Mygr2u1CHScNZaxk6BTEFrMgeUH-vGNE-FX3~OVc41IPqIYlqTgHWP43xBkpJ-pMHbZBwg9AT2-Scm7OE0s8rL8Zmwvggq0dVWLRZjY96NDeKAexWx2Nme3zrms-LHlp7PGdK7FPGRfMwr7QNzcDY4RtseUOuCCMneV8AX6gU1i1d3l8fdghPbBSiQ04KrMPDcUX0h9f5xhBA15r6MAyH~YyGzPB3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        heading="Snacks for Travel"
        content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />

      <Card
        src="https://s3-alpha-sig.figma.com/img/01b6/596f/5a4907f80afeb54b1849b81ebf1eb5f2?Expires=1704672000&Signature=IPV6rrnJCCKxxZVfklMCI-F1-Hwbmj-ZoA4Pe4l~UMcbN9VGt5qfPpFc8jUqWnurdr7XQSLJjVwB8K5gwpcaJ8HK-ndpSHNv-jvUNynKtBTekRhtSclLKB3gqvx14VGL82ogmFz-RQV04LurmLy-tuaZzEf-6iEO39DBmqqjFP4J3CcLEOSVKhYIenxWAjiTMBPuJuI5tt2fl6vmGimYpCLfPg5Vv8h~qmvW5pJ8sXxD~RYPlDH1TJdgK~5JrxEV9bbZIa8fY~B~GlM9x~8ixVydyvTxfcel9tCbWFXP-gErKGBGEfO4zXa~ktpcbtI-MnOdVpkADu-IVRNCdngIQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        heading="Post-workout Recipes"
        content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />
    </Box>,
  ];

  const handleNextSlide = () => {
    if (currentIndex === cardData.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(cardData.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box display="flex" flexDirection="column" mt="41px" h="auto">
          <Box display="flex" w="auto">
            {cardData.map((card, index) => (
              <Slide
                direction="left"
                in={currentIndex === index}
                style={{ position: 'relative' }}
              >
                {card}
              </Slide>
            ))}
          </Box>

          <Box
            ml="auto"
            mr="auto"
            mt="64px"
            w="114px"
            h="30px"
            display="flex"
            gap="14px"
          >
            <Box onClick={handlePrevSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.4419 22.8523C18.9949 22.5393 19.1753 21.7427 18.8083 21.234C18.706 21.0921 17.1257 19.6312 15.2964 17.9875L11.9704 14.999L15.2973 12.0101C17.127 10.3662 18.7074 8.90503 18.8093 8.76312C18.9289 8.59653 18.9947 8.35683 18.9951 8.08643C18.9956 7.71445 18.9549 7.6306 18.6296 7.33388C18.2955 7.02916 18.2193 7 17.7585 7H17.2535L13.1268 10.7639L9 14.5277V14.959C9 15.2142 9.06299 15.4772 9.15418 15.6029C9.37757 15.9112 16.5225 22.452 16.9588 22.7478C17.3877 23.0386 18.0326 23.084 18.4419 22.8523Z"
                  fill="#AFAFAF"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="27"
                  height="28"
                  rx="4.5"
                  stroke="#AFAFAF"
                />
              </svg>
            </Box>
            <Text
              fontSize="22px"
              fontStyle="normal"
              fontWeight="400"
              fontFamily="'Source Sans 3', sans-serif;"
              lineHeight="27.218px"
              color="#424961"
            >
              {currentIndex + 1 + '/' + cardData.length}
            </Text>
            <Box onClick={handleNextSlide}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.55811 7.1477C9.00514 7.46068 8.82474 8.25727 9.19166 8.766C9.29397 8.9079 10.8743 10.3688 12.7036 12.0125L16.0296 15.001L12.7027 17.9899C10.873 19.6338 9.29256 21.095 9.19072 21.2369C9.07115 21.4035 9.00533 21.6432 9.00495 21.9136C9.00438 22.2855 9.04512 22.3694 9.37036 22.6661C9.70446 22.9708 9.78065 23 10.2415 23H10.7465L14.8732 19.2361L19 15.4723V15.041C19 14.7858 18.937 14.5228 18.8458 14.3971C18.6224 14.0888 11.4775 7.54798 11.0412 7.2522C10.6123 6.96142 9.96737 6.916 9.55811 7.1477Z"
                  fill="#424961"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.55811 7.1477C9.00514 7.46068 8.82474 8.25727 9.19166 8.766C9.29397 8.9079 10.8743 10.3688 12.7036 12.0125L16.0296 15.001L12.7027 17.9899C10.873 19.6338 9.29256 21.095 9.19072 21.2369C9.07115 21.4035 9.00533 21.6432 9.00495 21.9136C9.00438 22.2855 9.04512 22.3694 9.37036 22.6661C9.70446 22.9708 9.78065 23 10.2415 23H10.7465L14.8732 19.2361L19 15.4723V15.041C19 14.7858 18.937 14.5228 18.8458 14.3971C18.6224 14.0888 11.4775 7.54798 11.0412 7.2522C10.6123 6.96142 9.96737 6.916 9.55811 7.1477Z"
                  fill="#424961"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="27"
                  height="28"
                  rx="4.5"
                  stroke="#424961"
                />
              </svg>
            </Box>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}
export default Carousel;
