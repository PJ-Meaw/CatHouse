import React from 'react';
import {Box, Image, Flex, Text, Button} from '@chakra-ui/react';
import informationicon from './picpayment/profileAct.png';
import logoshop from './picpayment/logo.png';
import service from './picpayment/delivery3.png';
import creditcard from './picpayment/creditcard.png';
import line from './picpayment/horizontalLine.png';
import { Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const payment = () => { // Change function name to start with an uppercase letter
  return (
    <Box w='1260px' h='1100px' position="relative" right="-320px" bottom="-20px" fontFamily={'Kanit, sans-serif'}>
        <Flex position="relative" right="-40px">
            <Box w='770px' h='1020px' border="1px solid #000">
              <Flex>
                <Image src={logoshop} alt="Image 1" w="120px" h="80px" position="relative" right="-10px" bottom="-10px" />
                
                <Image src={informationicon} alt="Image 2" w="30px" h="30px" position="relative" right="-160px" bottom="-20px" />

                <Image src={line} alt="Image 5" w="30px" h="20px" position="relative" right="-175px" bottom="-25px" />

                <Image src={service} alt="Image 3" w="40px" h="45px" position="relative" right="-190px" bottom="-15px" />

                <Image src={line} alt="Image 6" w="30px" h="20px" position="relative" right="-205px" bottom="-25px" />

                <Image src={creditcard} alt="Image 4" w="30px" h="30px" position="relative" right="-220px" bottom="-23px" />
              </Flex>
              
              <Box w='450px' h='100px' position="relative" right="-160px" bottom="-50px" >
                <Text fontSize="25px" fontWeight="bold" >โปรดกรอกข้อมูลของคุณ</Text>
                <Text position="relative" bottom="-20px" >อีเมล</Text>
                <Input border="1px solid #000" size='lg' position="relative" bottom="-20px" />
                <Text position="relative" bottom="-40px" >ชื่อ-สกุล</Text>
                <Input border="1px solid #000" size='lg' position="relative" bottom="-40px" />
                <Text position="relative" bottom="-60px" >เบอร์โทรศัพท์</Text>
                <Input border="1px solid #000" size='lg' position="relative" bottom="-60px" />
                <Text position="relative" bottom="-80px" >รหัสไปรษณีย์</Text>
                <Input border="1px solid #000" size='lg' position="relative" bottom="-80px" />
                <Text position="relative" bottom="-100px" >ที่อยู่บรรทัดที่ 1</Text>
                <Input border="1px solid #000" size='lg' position="relative" bottom="-100px" />
                <Text position="relative" bottom="-120px" >ที่อยู่บรรทัดที่ 2 (ไม่บังคับ)</Text>
                <Input border="1px solid #000" size='lg' position="relative" bottom="-120px" />
                <Text position="relative" bottom="-140px" >จุดสังเกตใกล้เคียง (ไม่บังคับ)</Text>
                <Input border="1px solid #000" size='lg' position="relative" bottom="-140px" />
                <Link to="/PaymentDe"><Button w="450px" h="60px" position="relative" bottom="-180px" rounded="100px" bg="#0F63EA" color="white" _hover={{ bgColor: '#0058A3' }}>ขั้นตอนต่อไป</Button></Link>
                <Button w="450px" h="60px" position="relative" bottom="-200px" rounded="100px" bg="white" _hover={{ bgColor: '#DFDFDF' }}>กลับไปช็อปต่อ</Button>
              </Box>
              
            </Box>
            <Box w='390px' h='750px' position="relative" right="-20px" border="1px solid #000">
              <Box borderBottom="1px solid #D3D3D3" w="350px" h="120px" position="relative" right="-18px" >
                <Flex position="relative" bottom="-60px" >
                  <Text fontWeight="bold" letterSpacing="1px">ราคารวม</Text>
                  <Text position="relative" right="-173px" fontSize="30px" top="-15px" fontWeight="bold" letterSpacing="1px">1,809</Text>
                  <Text position="relative" right="-175px" fontSize="22px" top="-5px" fontWeight="bold" >บาท</Text>
                </Flex>
                <Flex color="gray.400" position="relative" bottom="-45px" fontSize="14px">
                  <Text>รวมภาษีมูลค่าเพิ่ม %</Text>
                  <Text position="relative" right="-215px">---</Text>
                </Flex>
              </Box>

              <Box borderBottom="1px solid #D3D3D3" w="350px" h="280px" position="relative" right="-18px">
                <Text position="relative" bottom="-15px" fontWeight="bold" letterSpacing="1px">ข้อมูลของคุณ</Text>
                <Text position="relative" bottom="-25px" color="gray.400">Mutsuri Watson</Text>
                <Text position="relative" bottom="-28px" color="gray.400">ที่อยู่บรรทัดที่ 1</Text>
                <Text position="relative" bottom="-31px" color="gray.400">ที่อยู่บรรทัดที่ 2</Text>
                <Text position="relative" bottom="-34px" color="gray.400">รหัสไปรษณีย์</Text>
                <Text position="relative" bottom="-37px" color="gray.400">ไทย</Text>
                <Text position="relative" bottom="-40px" color="gray.400">จุดสังเกตใกล้เคียง</Text>
                <Text position="relative" bottom="-43px" color="gray.400">เบอร์โทรศัพท์</Text>
                <Text position="relative" bottom="-46px" color="gray.400">อีเมล</Text>
              </Box>
            
              {/* สินค้า 1 */}
              <Box borderBottom="1px solid #D3D3D3" w="350px" h="160px" position="relative" right="-18px" >
                <Text position="relative" bottom="-15px" fontWeight="bold" letterSpacing="1px">สินค้า</Text>
                <Flex position="relative" bottom="-30px" w="100%">
                  <Box w="80px" h="80px" bg="gray.200" ></Box>
                  <Box w="270px" h="80px" >
                    <Text fontWeight="bold" letterSpacing="0.5px" position="relative" right="-5px">OFTAST ออฟตาสท์</Text>
                    <Text position="relative" right="-5px" color="gray">ชาม,ขาว,15 ซม.</Text>
                    <Flex>
                    <Text position="relative" right="-5px" color="gray">จำนวน:</Text>
                    <Text position="relative" right="-10px" fontWeight="bold" >1</Text>
                    <Text position="relative" right="-15px" color="gray">รายการ</Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>

              {/* สินค้า 2 */}
              <Box borderBottom="1px solid #D3D3D3" w="350px" h="135px" position="relative" right="-18px" >
                <Flex position="relative" bottom="-30px" w="100%">
                  <Box w="80px" h="80px" bg="gray.200" ></Box>
                  <Box w="270px" h="80px" >
                    <Text fontWeight="bold" letterSpacing="0.5px" position="relative" right="-5px">OFTAST ออฟตาสท์</Text>
                    <Text position="relative" right="-5px" color="gray">ชาม,ขาว,15 ซม.</Text>
                    <Flex>
                    <Text position="relative" right="-5px" color="gray">จำนวน:</Text>
                    <Text position="relative" right="-10px" fontWeight="bold" >1</Text>
                    <Text position="relative" right="-15px" color="gray">รายการ</Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>

            </Box>
        </Flex>
    </Box>
  );
};

export default payment;
