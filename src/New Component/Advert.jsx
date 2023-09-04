import wallpaper1 from '../assets/wallpaper1.png';
import wallpaper2 from '../assets/wallpaper2.png';
import wallpaper3 from '../assets/wallpaper3.png';
import bigimg1 from '../assets/bigimg1.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import Left from '../assets/Left.png';
import Right from '../assets/Right.png';
import React, { useState } from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Advert.css';

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
    <img src={Left} alt="Previous Arrow" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next-arrow" onClick={onClick}>
    <img src={Right} alt="Next Arrow" />
  </div>
);

const Advert = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    customPaging: (slideIndex) => (
      <Box
        width="10px"
        height="10px"
        borderRadius="50%"
        bg={slideIndex === currentSlide ? '#0F63E9' : 'transparent'}
        border="1px solid #0F63E9"
        mt="-23px"
        mb="5px"
      />
    ),
    afterChange: (current) => {
      setCurrentSlide(current);
    },
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Flex align="center" justify="center" minHeight="58vh">
      <Box width="1290px" height="500px" borderRadius="md" position="relative">
        <Box position="absolute" top="0" left="0" width="74%" height="100%" borderRadius="md">
          <Box width="100%" height="70%" borderRadius="md">
            <Slider {...settings}>
              <Box>
                <Link to={'Login'}>
                  <Image src={wallpaper1} alt="Image 1" borderRadius="md" objectFit="cover" width="100%" height="38vh" />
                </Link>
              </Box>
              <Box>
                <Link to={'Login'}>
                  <Image src={wallpaper2} alt="Image 2" borderRadius="md" objectFit="cover" width="100%" height="38vh" />
                </Link>
              </Box>
              <Box>
                <Link to={'Login'}>
                  <Image src={wallpaper3} alt="Image 3" borderRadius="md" objectFit="cover" width="100%" height="38vh" />
                </Link>
              </Box>
            </Slider>
          </Box>
          <Box width="100%" height="4%" borderRadius="md" />
          <Flex height="26%">
            <Box width="32%" height="100%" borderRadius="md">
              <Link to={'Login'}>
                <Image src={img1} alt="Image 5" borderRadius="md" objectFit="cover" width="100%" height="14vh" />
              </Link>
            </Box>
            <Box width="2%" height="100%" borderRadius="md" />
            <Box width="32%" height="100%" borderRadius="md">
              <Link to={'Login'}>
                <Image src={img2} alt="Image 6" borderRadius="md" objectFit="cover" width="100%" height="14vh" />
              </Link>
            </Box>
            <Box width="2%" height="100%" borderRadius="md" />
            <Box width="32%" height="100%" borderRadius="md">
              <Link to={'Login'}>
                <Image src={img3} alt="Image 7" borderRadius="md" objectFit="cover" width="100%" height="14vh" />
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box position="absolute" bottom="0" right="0" width="24.5%" height="100%" borderRadius="md">
          <Box width="100%" height="18%" borderRadius="md">
            <Link to={'Login'}>
              <Image src={img4} alt="Image 8" borderRadius="md" objectFit="cover" width="100%" height="10vh" />
            </Link>
          </Box>
          <Box width="100%" height="4%" borderRadius="md" />
          <Box width="100%" height="78%" borderRadius="md">
            <Link to={'Login'}>
              <Image src={bigimg1} alt="Image 4" borderRadius="md" objectFit="cover" width="100%" height="42vh" />
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Advert;
