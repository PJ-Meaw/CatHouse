import React, { useState } from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Slider1.css';
import RightBlue from '../assets/RightBlue.png';
import LeftBlue from '../assets/LeftBlue.png';
import BSeller from '../assets/Store2.png';

import CardItemHasSale from './CardItemHasSale';

const CustomPrevArrow2 = ({ onClick }) => (
    <div className="custom-arrow2 custom-prev-arrow2" onClick={onClick}>
      <img src={LeftBlue} alt="Previous Arrow" />
    </div>
  );
  
  const CustomNextArrow2 = ({ onClick }) => (
    <div className="custom-arrow2 custom-next-arrow2" onClick={onClick}>
      <img src={RightBlue} alt="Next Arrow" />
    </div>
  );

const Slider1 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    
    afterChange: (current) => {
      setCurrentSlide(current);
    },
    prevArrow: <CustomPrevArrow2 />,
    nextArrow: <CustomNextArrow2 />,
    
  };
  // fontFamily={'Kanit, sans-serif'}
  return (
    <Flex align="center" justify="center" minHeight="45vh">
            <Box width="1290px" height="390px" borderRadius="md" position="relative">
                <Flex height="100%">
                    <Box width="240px" height="100%" borderRadius="md" bg="#1063E9" align="center" justify="center" >
                      <Image src={BSeller} alt="BSeller" boxSize="50px" position="relative" top="110px"/>
                      <Text fontFamily={'Kanit, sans-serif'} fontSize="36" fontWeight="bold" color="white" position="relative" top="120px">สินค้าขายดีประจำเดือน</Text>
                    </Box>
                    <Box width="20px" height="100%" />
                    <Box width="1030px" height="100%">
                        <Slider {...settings}>
                            <Box>
                                <Flex position="relative" >
                                    <CardItemHasSale/>
                                    <Box width="20px" height="100%" borderRadius="md"/>
                                    <CardItemHasSale/>
                                    <Box width="20px" height="100%" borderRadius="md"/>
                                    <CardItemHasSale/>
                                    <Box width="20px" height="100%" borderRadius="md"/>
                                    <CardItemHasSale/>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex position="relative">
                                    <CardItemHasSale/>
                                    <Box width="20px" height="100%" borderRadius="md"/>
                                    <CardItemHasSale/>
                                    <Box width="20px" height="100%" borderRadius="md"/>
                                    <CardItemHasSale/>
                                    <Box width="20px" height="100%" borderRadius="md"/>
                                    <CardItemHasSale/>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex position="relative">
                                    <CardItemHasSale/>
                                    <Box width="20px" height="100%" borderRadius="md"/>
                                    <CardItemHasSale/>
                                    <Box width="20px" height="100%" borderRadius="md"/>
                                    <CardItemHasSale/>
                                    <Box width="20px" height="100%" borderRadius="md"/>
                                    <CardItemHasSale/>
                                </Flex>
                            </Box>
                        </Slider>
                     </Box>
                 </Flex>
             </Box>
     </Flex>
  );
};

export default Slider1;