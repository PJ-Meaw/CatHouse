import React, { useState } from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './ShopBrand.css';
import RightBlue from '../assets/RightBlue.png';
import LeftBlue from '../assets/LeftBlue.png';
import BSeller from '../assets/Store2.png';
import img1 from '../assets/img36.png'

import CardItemHasSale from './CardItemHasSale';

const CustomPrevArrow2 = ({ onClick }) => (
    <div className="custom-arrow3 custom-prev-arrow3" onClick={onClick}>
      <img src={LeftBlue} alt="Previous Arrow" />
    </div>
  );
  
  const CustomNextArrow2 = ({ onClick }) => (
    <div className="custom-arrow3 custom-next-arrow3" onClick={onClick}>
      <img src={RightBlue} alt="Next Arrow" />
    </div>
  );

const ShopBrand = () => {
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
          mt="30px"
          mb="5px"
        />
      ),
    
    afterChange: (current) => {
      setCurrentSlide(current);
    },
    prevArrow: <CustomPrevArrow2 />,
    nextArrow: <CustomNextArrow2 />,
    
  };

  return (
    <Flex align="center" justify="center" minHeight="20vh">
        <Flex width="1290px" height="180px">
            <Box width="1290px" height="180px">
                <Box width="1290px" height="40px">
                    <Text fontFamily={'Kanit, sans-serif'} fontSize="16" fontWeight="bold" position="relative" left="10px">ช้อปแบรนด์ดัง</Text>
                </Box>
                <Box width="1290px" height="120px" borderRadius="md" position="relative">
                <Slider {...settings} >
                <Box width="1290px" height="120px" position="relative" top="9px">
                    <Flex>
                                    <Box boxSize="80px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>
                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                    </Flex>
                </Box>
                <Box width="1290px" height="120px" position="relative" top="9px">
                    <Flex>
                                    <Box boxSize="80px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>
                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                    </Flex>
                </Box>
                <Box width="1290px" height="120px" position="relative" top="9px">
                    <Flex>
                                    <Box boxSize="80px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>
                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                                    <Box boxSize="45px"/>
                                    <Link to={'Login'}>
                                        <Box boxSize="100px" borderRadius="50px" _hover={{boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'}} bg="orange.100">
                                            <Image src={img1} alt="img1" borderRadius="50px" />
                                        </Box>                                    </Link>
                    </Flex>
                </Box>
            </Slider>
                </Box>
            </Box>
        </Flex>
    </Flex>
  );
};

export default ShopBrand;