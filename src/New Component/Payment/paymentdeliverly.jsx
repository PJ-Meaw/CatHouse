import React from 'react';
import {Box, Image, Flex, Text, Button} from '@chakra-ui/react';
import informationicon from './picpayment/profile.png';
import logoshop from './picpayment/logo.png';
import service from './picpayment/delivery3Act.png';
import creditcard from './picpayment/creditcard.png';
import line from './picpayment/horizontalLine.png';
import checkicon from './picpayment/check.png';
import { Input } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom';
import { bufferToImage } from '../../helper/bufferToImage';
const Paymentdeliverly = () => { // Change function name to start with an uppercase letter
    const {totalPrice, cartData ,addressData} = useLocation().state;
  return (
    <Box w='1260px' h='850px' position="relative" right="-320px" bottom="-20px" fontFamily={'Kanit, sans-serif'}>
        <Flex position="relative" right="-40px">
            <Box w='770px' h='500px' border="1px solid #000">
              <Flex>
                <Image src={logoshop} alt="Image 1" w="120px" h="80px" position="relative" right="-10px" bottom="-10px" />
                
                <Image src={checkicon} alt="Image 2" w="20px" h="20px" position="relative" right="-160px" bottom="-25px" />

                <Image src={line} alt="Image 5" w="30px" h="20px" position="relative" right="-175px" bottom="-25px" />

                <Image src={service} alt="Image 3" w="40px" h="45px" position="relative" right="-190px" bottom="-15px" />

                <Image src={line} alt="Image 6" w="30px" h="20px" position="relative" right="-205px" bottom="-25px" />

                <Image src={creditcard} alt="Image 4" w="30px" h="30px" position="relative" right="-220px" bottom="-23px" />
              </Flex>
              
              <Box w='450px' h='100px' position="relative" right="-160px" bottom="-50px" >
                <Text fontSize="25px" fontWeight="bold" >คุณต้องการใช้การจัดส่งสินค้าแบบไหน</Text>
                <Link to="/PaymentDeCAC" state={{totalPrice : totalPrice, addressData : addressData, cartData : cartData}}>
                    <Button w="450px" h="80px" position="relative" bottom="-30px" rounded="5px" bg="white" color="black" _hover={{ borderColor: '#0058A3' }} border="1px" borderColor="#DFDFDF">
                        <Text>รับหน้าร้าน</Text>
                    </Button>
                </Link>
                <Link to="/PaymentDeSBT" state={{totalPrice : totalPrice, addressData : addressData, cartData : cartData}}>
                    <Button w="450px" h="80px" position="relative" bottom="-50px" rounded="5px" bg="white" color="black" _hover={{ borderColor: '#0058A3' }} border="1px" borderColor="#DFDFDF">
                        <Text>จัดส่งโดยรถบรรทุก</Text>
                    </Button>
                </Link>
                <Link to="/PaymentPage" state={{totalPrice : totalPrice, addressData : addressData, cartData : cartData}}>
                    <Button w="450px" h="60px" position="relative" bottom="-80px" rounded="100px" bg="white" _hover={{ bgColor: '#DFDFDF' }}>
                        ขั้นตอนก่อนหน้านี่
                    </Button>
                </Link>
              </Box>
              
            </Box>
            
            <Box w='390px' h='100%' position="relative" right="-20px" border="1px solid #000">
              <Box borderBottom="1px solid #D3D3D3" w="350px" h="120px" position="relative" right="-18px" >
                <Flex position="relative" bottom="-60px" >
                  <Text fontWeight="bold" letterSpacing="1px">ราคารวม</Text>
                  <Text position="relative" right="-173px" fontSize="30px" top="-15px" fontWeight="bold" letterSpacing="1px">{Intl.NumberFormat("en-US").format(totalPrice)}</Text>
                  <Text position="relative" right="-175px" fontSize="22px" top="-5px" fontWeight="bold" >บาท</Text>
                </Flex>
                <Flex color="gray.400" position="relative" bottom="-45px" fontSize="14px">
                  <Text>รวมภาษีมูลค่าเพิ่ม %</Text>
                  <Text position="relative" right="-215px">---</Text>
                </Flex>
              </Box>
            
              <Box borderBottom="1px solid #D3D3D3" w="350px" h="280px" position="relative" right="-18px">
                <Text position="relative" bottom="-15px" fontWeight="bold" letterSpacing="1px">ข้อมูลของคุณ</Text>
                <Text position="relative" bottom="-25px" color="gray.400">ชื่อ-สกุล : {addressData.name }</Text>
                <Text position="relative" bottom="-28px" color="gray.400">ที่อยู่ : { addressData.address }</Text>
                <Text position="relative" bottom="-31px" color="gray.400">แขวง/ตำบล : { addressData.subDistrict }</Text>
                <Text position="relative" bottom="-34px" color="gray.400">เขต/อำเภอ : { addressData.district  }</Text>
                <Text position="relative" bottom="-37px" color="gray.400">จังหวัด : { addressData.province }</Text>
                <Text position="relative" bottom="-40px" color="gray.400">รหัสไปรษณีย์ : { addressData.code }</Text>
                <Text position="relative" bottom="-43px" color="gray.400">เบอร์โทรศัพท์ : { addressData.telNo }</Text>
              </Box>
            
              {/* สินค้า 1 */}
              {cartData?.map((product, i)=>{
                const urlImage = product.productImage ? bufferToImage(product.productImage.data, product.productImage.contentType) : "";
                return <>
                    <Box borderBottom="1px solid #D3D3D3" w="350px" h="160px" position="relative" right="-18px" >
                        <Text hidden={i != 0} position="relative" bottom="-15px" fontWeight="bold" letterSpacing="1px">สินค้า</Text>
                        <Flex position="relative" bottom="-30px" w="100%">
                        <Box w="80px" h="80px" bg="gray.200" >
                            <img src={urlImage} alt={product.productName} />
                        </Box>
                        <Box w="270px" h="80px" >
                            <Text fontWeight="bold" letterSpacing="0.5px" position="relative" right="-5px">{product.productName}</Text>
                            <Text position="relative" right="-5px" color="gray">{product.brandName}</Text>
                            <Flex>
                            <Text position="relative" right="-5px" color="gray">จำนวน:</Text>
                            <Text position="relative" right="-10px" fontWeight="bold" >{product.amount}</Text>
                            <Text position="relative" right="-15px" color="gray">รายการ</Text>
                            </Flex>
                        </Box>
                        </Flex>
                    </Box>
                
                </>
              })
                
              }

            </Box>
        </Flex>
    </Box>
  );
};

export default Paymentdeliverly;
