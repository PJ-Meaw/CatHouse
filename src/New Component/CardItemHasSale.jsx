import bigimg3 from '../assets/bigimg3.png';
import delivery from '../assets/delivery.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, Image } from '@chakra-ui/react';

const CardItemHasSale = () => {

  return (
        <Link to={'Login'}>
            <Box width="240px" height="390px" borderRadius="15px" position="relative" border="1px solid #C3CCD4" _hover={{boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',}}>
                <Box position="absolute" top="0" left="0"  width="100%" height="238px" borderRadius="15px 15px 0 0">
                    <Image src={bigimg3} alt="bigimg3" borderRadius="15px" objectFit="cover" width="100%" height="100%" />
                    <Box position="absolute" top="3" left="3" width="44px" height="23px" bg="#E31F26" borderRadius="8px">
                        <Text position="absolute" top="2px" left="7.5px" fontSize="12" fontWeight="bold" color="white"> -22% </Text>
                    </Box>
                    <Link to={'Login'}>
                        <Box position="absolute" top="0" left="0"  width="100%" height="100%" borderRadius="15px" _hover={{background: 'rgba(218, 220, 222, 0.5)',}}>
                        </Box>
                    </Link>
                </Box>
                <Text fontFamily={'Kanit, sans-serif'} position="absolute" top="262px" left="12px" fontSize="14"> ลำโพง Audioengine A1 home </Text>
                <Text fontFamily={'Kanit, sans-serif'} position="absolute" top="282px" left="12px" fontSize="14"> Audio speaker </Text>
                <Text fontFamily={'Kanit, sans-serif'} position="absolute" top="310px" left="12px" fontSize="20" fontWeight="bold"> ฿6,990 </Text>
                <Text fontFamily={'Kanit, sans-serif'} position="absolute" top="318px" left="82px" fontSize="12" color="#8996A0"> ฿8,990 </Text>
                <Text fontFamily={'Kanit, sans-serif'} position="absolute" top="302px" left="82px" fontSize="20" color="#8996A0"> ____ </Text>
                <Box position="absolute" top="358px" left="3" width="50px" height="18px" bg="#F2F3F5" borderRadius="8px">
                    <Image src={delivery} alt="delivery" width="30%" height="80%" position="absolute" top="2px" left="3.5px" />
                    <Text fontFamily={'Kanit, sans-serif'} position="absolute" top="2px" left="20px" fontSize="10" fontWeight="bold" color="#8996A0"> ส่งฟรี </Text>
                </Box>
            </Box>
        </Link>
  );
};

export default CardItemHasSale;
