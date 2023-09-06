import React from 'react';
import {Box, Image, Flex, Text, Button, Checkbox} from '@chakra-ui/react';
import logoshop from './picpayment/logo.png';
import creditcard from './picpayment/creditcardAct.png';
import line from './picpayment/horizontalLine.png';
import checkicon from './picpayment/check.png';
import atmcard from './picpayment/atm-card.png';
import { Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ClickandCollect = () => { // Change function name to start with an uppercase letter
  return (
    <Box w='1260px' h='1300px' position="relative" right="-320px" bottom="-20px" fontFamily={'Kanit, sans-serif'}>
        <Flex position="relative" right="-40px">
            <Box w='770px' h='1230px' border="1px solid #000">
              <Flex>
                <Image src={logoshop} alt="Image 1" w="120px" h="80px" position="relative" right="-10px" bottom="-10px" />
                
                <Image src={checkicon} alt="Image 2" w="20px" h="20px" position="relative" right="-160px" bottom="-25px" />

                <Image src={line} alt="Image 5" w="30px" h="20px" position="relative" right="-175px" bottom="-25px" />

                <Image src={checkicon} alt="Image 2" w="20px" h="20px" position="relative" right="-190px" bottom="-25px" />

                <Image src={line} alt="Image 6" w="30px" h="20px" position="relative" right="-205px" bottom="-25px" />

                <Image src={creditcard} alt="Image 4" w="30px" h="30px" position="relative" right="-220px" bottom="-23px" />
              </Flex>
              
            <Box w='450px' h='100px' position="relative" right="-160px" bottom="-50px" >
                <Text fontSize="25px" fontWeight="bold" >คุณต้องการชำระเงินด้วยวิธีไหน</Text>
                <Box w="450px" h="80px" position="relative" bottom="-30px" rounded="5px" bg="white" color="black" _hover={{ borderColor: '#0058A3' }} border="1px" borderColor="#DFDFDF" display="flex" justifyContent="center">
                    <Image src={atmcard} alt="Image 7" w="50px" h="50px" position="relative" bottom="-10px" />
                    <Text position="relative" bottom="-25px" right="-10px" >บัตรเดบิต/เครดิต (Visa/Mastercard)</Text>
                </Box>

                <Text fontSize="25px" fontWeight="bold" position="relative" bottom="-70px" >โปรดระบุข้อมูลในบัตรของคุณ</Text>
                <Text position="relative" bottom="-90px" >หมายเลขบัตร</Text>
                <Input border="1px solid #000" size='lg' position="relative" bottom="-90px" />
                <Flex>
                    <Text position="relative" bottom="-120px">วันหมดอายุ</Text>
                    
                    <Text position="relative" bottom="-120px" right="-170px">CVV2/CVC2</Text>
                </Flex>
                <Flex>
                    <Input border="1px solid #000" size='lg' position="relative" bottom="-120px" placeholder='ดด/ปป' htmlSize={15} width='auto'/>
                    
                    <Input border="1px solid #000" size='lg' position="relative" bottom="-120px" htmlSize={15} width='auto' right="-35px"/>
                </Flex>
                <Text position="relative" bottom="-150px" >ชื่อผู้ถือบัตร</Text>
                <Input border="1px solid #000" size='lg' position="relative" bottom="-150px" />
                
                <Flex>
                    <Text position="relative" bottom="-220px">สินค้า</Text>
                    <Text position="relative" bottom="-220px" right="-348px">1,809บาท</Text>
                </Flex>
                <Flex>
                    <Text position="relative" bottom="-230px">บริการ Click & Collect - Click & Collect Bang Yai</Text>
                    <Text position="relative" bottom="-230px" right="-80px">0บาท</Text>
                </Flex>
                <Flex>
                    <Text position="relative" bottom="-240px">วันรับสินค้า</Text>
                    <Text position="relative" bottom="-240px" right="-330px">3-5 วัน</Text>
                </Flex>

                <Box w='450px' h='10px' borderTop="2px solid black" position="relative" bottom="-270px"></Box>

                <Flex>
                    <Text position="relative" bottom="-280px">รวมภาษีมูลค่าเพิ่ม %</Text>
                    <Text position="relative" bottom="-280px" right="-295px">---</Text>
                </Flex>
                
                <Flex>
                    <Text position="relative" bottom="-290px" fontWeight="bold" letterSpacing="1px">ราคารวม</Text>
                    <Text position="relative" bottom="-285px" right="-273px" fontWeight="bold" fontSize="32px">1,809</Text>
                    <Text position="relative" bottom="-290px" right="-275px" fontWeight="bold" letterSpacing="1px">บาท</Text>
                </Flex>
                
                <Checkbox isDisabled defaultChecked position="relative" bottom="-320px" >ฉันยอมรับ นโยบายความเป็นส่วนตัว และ ข้อกำหนดและเงื่อนไข</Checkbox>
                <Link to="/OrderConCAC"><Button w="450px" h="60px" position="relative" bottom="-350px" rounded="100px" bg="#0F63EA" color="white" _hover={{ bgColor: '#0058A3' }}>สั่งซื้อสินค้า</Button></Link>
                <Link to="/PaymentDe"><Button w="450px" h="60px" position="relative" bottom="-370px" rounded="100px" bg="white" _hover={{ bgColor: '#DFDFDF' }}>ขั้นตอนก่อนหน้านี่</Button></Link>
              </Box>
              
            </Box>
            
            <Box w='390px' h='950px' position="relative" right="-20px" border="1px solid #000">
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

              <Box borderBottom="1px solid #D3D3D3" w="350px" h="220px" position="relative" right="-18px">
                <Text position="relative" bottom="-15px" fontWeight="bold" letterSpacing="1px">วิธีจัดส่งสินค้า</Text>
                <Flex>
                    <Text position="relative" bottom="-25px" color="gray.400">บริการ Click & Collect</Text>
                    <Text position="relative" bottom="-25px" right="-160px" fontWeight="bold" letterSpacing="1px">0บาท</Text>
                </Flex>
                <Text position="relative" bottom="-30px" color="gray.400">Click & Collect Bang Yai</Text>
                <Text position="relative" bottom="-30px" color="gray.400">109 Rattanathibet Rd, Sao Thong Hin, Bang Yai </Text>
                <Text position="relative" bottom="-30px" color="gray.400">District, Nonthabur</Text>
                <Text position="relative" bottom="-30px" color="gray.400">11140 Nonthaburi</Text>
                <Flex>
                    <Text position="relative" bottom="-35px" color="gray.400">วันรับสินค้า</Text>
                    <Text position="relative" bottom="-35px" right="-230px" color="gray.400">3-5 วัน</Text>
                </Flex>
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

export default ClickandCollect;
