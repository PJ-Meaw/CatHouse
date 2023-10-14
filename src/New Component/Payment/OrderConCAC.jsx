import React from 'react';
import {Box, Image, Flex, Text, Button} from '@chakra-ui/react';
import logoshop from './picpayment/logo.png';
import creditcard from './picpayment/creditcardAct.png';
import line from './picpayment/horizontalLine.png';
import checkicon from './picpayment/check.png';
import atmcard from './picpayment/atm-card.png';
import { Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom';
const OrderConSBT = () => { // Change function name to start with an uppercase letter
const {totalPrice, cartData, addressData} = useLocation().state;
  return (
    <Box w='1260px' h='900px' position="relative" right="-320px" bottom="-20px" fontFamily={'Kanit, sans-serif'} >
        <Box w='1260px' h='830px' fontFamily={'Kanit, sans-serif'} border="1px solid #000">
            <Box w='1260px' h='150px' position="relative" bottom="-45px" >
                <Text fontSize="32" color="#007AF3" fontWeight="bold" display="flex" justifyContent="center">คำสั่งซื้อสำเร็จ</Text>
                <Text fontSize="28" display="flex" justifyContent="center" >คำสั่งซื้อนี่อยู่ระหว่างการเตรียมและจัดส่งสินค้า</Text>
                <Text fontSize="26" display="flex" justifyContent="center" >จะได้รับสินค้าภายในวันพรุ่งนี้ช่วงเวลา 13:00 น. - 16:00 น.</Text>
            </Box>
            

            <Text position="relative" bottom="-50px" right="-30px" fontSize="28">จัดส่งโดยรถบรรทุก</Text>
            <Box w='1210px' h='50px' position="relative" bottom="-50px" right="-25px" borderBottom="1px solid black" borderTop="1px solid black">
                <Flex display="flex" justifyContent="center" position="relative" bottom="-10px">
                    <Text position="relative" left="-210px">สินค้า</Text>
                    <Text position="relative" right="-75px">ประกัน</Text>
                    <Text position="relative" right="-163px">ราคา</Text>
                    <Text position="relative" right="-245px">จำนวน</Text>
                    <Text position="relative" right="-305px">ส่วนลด</Text>
                    <Text position="relative" right="-390px">รวม</Text>
                </Flex>
            </Box>

            {
                cartData?.map((product)=>{
                    return <>
                        <Box w='1210px' h='50px' position="relative" bottom="-50px" right="-25px" borderBottom="1px solid black">
                            <Text position="relative" bottom="-15px" fontSize="14">{product.brandName} {product.productName}</Text>
                            <Flex position="relative" top="-6px" right="-465px" fontSize="14">
                                <Text position="relative" right="-150px">LT.</Text>
                                <Text position="relative" right="-250px">{product.price}</Text>
                                <Text position="relative" right="-350px">{product.amount}</Text>
                                <Text position="relative" right="-450px">0</Text>
                                <Text position="relative" right="-550px">{product.price * product.amount}</Text>
                            </Flex>
                        </Box>
                    </> 
                    
    
                })
            }

                <Flex>
                    <Text position="relative" bottom="-100px" right="-35px">สินค้า</Text>
                    <Text position="relative" bottom="-100px" right="-382px">{Intl.NumberFormat("en-US").format(totalPrice)} บาท</Text>
                </Flex>
                <Flex>
                    <Text position="relative" bottom="-110px" right="-35px" >บริการ Click & Collect - Click & Collect Bang Yai</Text>
                    <Text position="relative" bottom="-110px" right="-115px">0บาท</Text>
                </Flex>
                <Flex>
                    <Text position="relative" bottom="-120px" right="-35px">วันรับสินค้า</Text>
                    <Text position="relative" bottom="-120px" right="-365px">3-5 วัน</Text>
                </Flex>

                <Box w='450px' h='10px' borderTop="2px solid black" position="relative" right="-35px" bottom="-150px"></Box>

                <Flex>
                    <Text position="relative" bottom="-160px" right="-35px" >รวมภาษีมูลค่าเพิ่ม %</Text>
                    <Text position="relative" bottom="-160px" right="-330px">---</Text>
                </Flex>
                
                <Flex>
                    <Text position="relative" bottom="-170px" fontWeight="bold" letterSpacing="1px" right="-35px">ราคารวม</Text>
                    <Text position="relative" bottom="-165px" right="-308px" fontWeight="bold" fontSize="32px">{Intl.NumberFormat("en-US").format(totalPrice)}</Text>
                    <Text position="relative" bottom="-170px" right="-310px" fontWeight="bold" letterSpacing="1px">บาท</Text>
                </Flex>
            
            <Flex position="relative" right="-550px" top="-160px">
                <Box w="200px" h="100px" bg="gray.200" position="relative" right="-25px" bottom="-80px">
                    <Text position="relative" right="-10px" bottom="-10px" fontWeight="bold">วิธีการจัดส่งสินค้า</Text>
                    <Text position="relative" right="-10px" bottom="-10px" fontSize="14px">รับหน้าร้าน</Text>
                </Box>

                <Box w="400px" h="100px" bg="gray.200" position="relative" right="-45px" bottom="-80px">
                    <Text position="relative" right="-10px" bottom="-10px" fontWeight="bold">วิธีการชำระเงิน</Text>
                    <Text position="relative" right="-10px" bottom="-10px" fontSize="14px">ชำระเงินผ่านบัตรเดบิต/เครดิต (Visa/Mastercard)</Text>
                </Box>

                
            </Flex>
            
            <Box w="500px" h="110px" bg="gray.200" position="relative" right="-575px" top="-60px">
                <Text position="relative" right="-10px" bottom="-10px" fontWeight="bold">ที่อยู่จัดส่ง</Text>
                <Text position="relative" right="-10px" bottom="-10px" fontSize="14px">{addressData.name} {addressData.telNo}</Text>
                <Text position="relative" right="-10px" bottom="-10px" fontSize="14px">{addressData.address}</Text>
                <Flex>
                    <Text position="relative" right="-10px" bottom="-10px" fontSize="14px">{addressData.subDistrict} {addressData.district} {addressData.province}</Text>
                    <Text position="relative" right="-20px" bottom="-10px" fontSize="14px">{addressData.code}</Text>
                </Flex>
            </Box>

            <Flex position="relative" display="flex" justifyContent="center">
                <Link to={"/"}>
                    <Button w="150px" h="45px" position="relative" rounded="100px" bg="#0F63EA" color="white" _hover={{ bgColor: '#0058A3' }} left="-20px">กลับสู่หน้าหลัก</Button>
                </Link>
                <Button w="150px" h="45px" position="relative" rounded="100px" bg="#0F63EA" color="white" _hover={{ bgColor: '#0058A3' }} right="-20px">ดูรายการคำสั่งซื้อ</Button>
            </Flex> 

        </Box>
    </Box>
  );
};

export default OrderConSBT;
