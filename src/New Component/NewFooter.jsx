import Delivery from '../assets/delivery2.png'
import ThumbUp from '../assets/ThumbUp.png'
import Payments from '../assets/Payments.png'
import Chat from '../assets/Chat.png'
import Store from '../assets/Store.png'
import facebooklogo from '../assets/facebook.png'
import instagramlogo from '../assets/instagram.png'
import twitterlogo from '../assets/twitter.png'
import youtubelogo from '../assets/youtube.png'
import scb from '../assets/scb.png'
import BKBank from '../assets/BKBank.png'
import kbank from '../assets/kbank.png'
import mastercard from '../assets/mastercard.png'
import visa from '../assets/visa.png'
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
const NewFooter = () => {
  const LinkWithoutUnderline = {
    textDecoration: 'none',
  };
  return (
    <Flex align="center" justify="center" minHeight="42vh">
      <Box width="100%" height="352px" position="relative">
        <Box width="100%" height="120px" bg="#F1F8FF">
          <Flex height="100%" align="center" justify="center">
            <Box width="140px" height="70px" align="center" justify="center" borderRight="1px" borderColor="#E7ECF2">
              <Image src={Delivery} alt="Delivery" boxSize={10} />
              <Text fontFamily={'Kanit, sans-serif'}>จัดส่งฟรี</Text>
            </Box>
            <Box width="180px" height="70px" align="center" justify="center" borderRight="1px" borderColor="#E7ECF2">
              <Image src={ThumbUp} alt="ThumbUp" boxSize={10} />
              <Text fontFamily={'Kanit, sans-serif'}>สินค้าประกันศูนย์</Text>
            </Box>
            <Box width="150px" height="70px" align="center" justify="center" borderRight="1px" borderColor="#E7ECF2">
              <Image src={Chat} alt="Chat" boxSize={10} />
              <Text fontFamily={'Kanit, sans-serif'}>ส่อบถามข้อมูล</Text>
            </Box>
            <Box width="180px" height="70px" align="center" justify="center" borderRight="1px" borderColor="#E7ECF2">
              <Image src={Payments} alt="Payments" boxSize={10} />
              <Text fontFamily={'Kanit, sans-serif'}>เก็บเงินปลายทาง</Text>
            </Box>
            <Box width="140px" height="70px" align="center" justify="center" borderRight="1px" borderColor="#E7ECF2">
              <Image src={Store} alt="Store" boxSize={10} />
              <Text fontFamily={'Kanit, sans-serif'}>รับเองที่ร้าน</Text>
            </Box>
          </Flex>
        </Box>
        <Box width="100%" height="230px">
          <Flex height="100%" top="32px" position="relative">
            <Box width="16.5%"/>
            <Box width="12.5%" height="78%" position="relative" top="3px" borderRight="1px" borderColor="#E0E0E0">
              <Text fontWeight="bold" fontFamily={'Kanit, sans-serif'}>CatHouse</Text>
              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">เกี่ยวกับ CatHouse</Text>
              </Link>

              <Link to={'Login'} _hover={{LinkWithoutUnderline, color: "#0F63E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">เราคือตัวแทนจำหน่าย</Text>
              </Link>

              <Link to={'Login'} _hover={{LinkWithoutUnderline, color: "#0F63E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">ข้อตกลงและเงื่อนไข</Text>
              </Link>

              <Link to={'Login'} _hover={{LinkWithoutUnderline, color: "#0F63E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">นโยบายความเป็นส่วนตัว</Text>
              </Link>

              <Link to={'Login'} _hover={{LinkWithoutUnderline, color: "#0F63E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">ร่วมงานกับเรา</Text>
              </Link>
            </Box>
            <Box width="13.4%" height="78%" position="relative" top="3px" left="18px" borderRight="1px" borderColor="#E0E0E0">
              <Text fontFamily={'Kanit, sans-serif'} fontWeight="bold">แผนกบริการลูกค้า</Text>
              
              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">ติดต่อเรา</Text>
              </Link>
              
              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">การสมัครสมาชิก</Text>
              </Link>

              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">วิธีการชำระเงินและบริการอื่นๆ</Text>
              </Link>

              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">วิธีการชอใบกำกับภาษี</Text>
              </Link>
              
              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">รายละเอียดการประกันสินค้า</Text>
              </Link>
              
              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">คำถามที่พบบ่อย (FAQs)</Text>
              </Link>

              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">Best of Mercular</Text>
              </Link>

              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">เปรียบเทียบสินค้า</Text>
              </Link>
            </Box>
            <Box width="6.5%" position="relative" top="3px" left="35px">
              <Text fontFamily={'Kanit, sans-serif'} fontWeight="bold">รีวิวและบทความ</Text>
              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">บทความทั้งหมด</Text>
              </Link>

              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">Hobby News</Text>
              </Link>

              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">Buying Guide</Text>
              </Link>

              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }}fontSize="12" color="#757775">Tips & Tricks</Text>
              </Link>

              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">Editors' Pick</Text>
              </Link>

              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">รีวิวสินค้า</Text>
              </Link>

              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }} fontSize="12" color="#757775">Best of Mercular</Text>
              </Link>

              <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} _hover={{ color: '#0F63E9' }}fontSize="12" color="#757775">เปรียบเทียบสินค้า</Text>
              </Link>
            </Box>
            <Box width="22.5%" height="100%"/>
            <Box width="20%" height="80%">
              <Box width="100%" height={"50%"} >
                <Text fontFamily={'Kanit, sans-serif'} fontWeight="bold">ช่องทางการชำระเงิน</Text>
                <Flex width="100%" justifyContent="column" alignItems="center">
                  <Image src={BKBank} alt="facebooklogo" p="2" boxSize="46px" position="relative" top="10px"/>
                  <Image src={kbank} alt="instagramlogo" p="2" boxSize="46px" position="relative" top="10px"/>
                  <Image src={scb} alt="facebooklogo" p="2" boxSize="46px" position="relative" top="10px"/>
                  <Image src={mastercard} alt="twitterlogo" p="2" width="50px" height="42px" position="relative" top="10px"/>
                  <Image src={visa} alt="visa" p="2" width="60px" height="32px" position="relative" top="10px"/>
                </Flex>
              </Box>
              <Box width="100%" height={"50%"} >
                <Text fontFamily={'Kanit, sans-serif'} fontWeight="bold">ติดตามเรา</Text>
                <Flex width="100%" justifyContent="column" alignItems="center">
                  <Link to={'Login'}>
                    <Image src={facebooklogo} alt="facebooklogo" p="1" boxSize="46px" position="relative" top="10px"/>
                  </Link>
                  
                  <Link to={'Login'}>
                  <Image src={instagramlogo} alt="instagramlogo" p="1" boxSize="46px" position="relative" top="10px"/>
                  </Link>

                  <Link to={'Login'}>
                    <Image src={twitterlogo} alt="twitterlogo" p="1" boxSize="46px" position="relative" top="10px"/>
                  </Link>

                  <Link to={'Login'}>
                    <Image src={youtubelogo} alt="youtubelogo" p="1" boxSize="46px" position="relative" top="10px"/>
                  </Link>
                  
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box width="100%" top="32px" position="relative" height="23px" bg="#0066DD">
          <Flex height="100%" align="center" justify="center">
            <Box align="center" justify="center">
              <Link to={'Login'} _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} color="white" fontSize="8">2022 CatHouse.com All Rights.</Text>
              </Link>
            </Box>
            <Box width="120px" align="center" justify="center">
              <Link to={'Login'} _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} color="white" fontSize="8">Terms & Condition</Text>
              </Link>
            </Box>
            <Box align="center" justify="center">
              <Link to={'Login'} _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                <Text fontFamily={'Kanit, sans-serif'} color="white" fontSize="8">Privacy Policy</Text>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default NewFooter;