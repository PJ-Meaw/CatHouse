import React, { useEffect, useState, useRef } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,Flex,Text,Image,Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalBody,ModalFooter
  } from '@chakra-ui/react'
import picprofile from '../assets/profile2.png'
import { Link } from 'react-router-dom';
import logout from '../assets/exit.png'

const Orderlist = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);
  
    const onOpen = () => {
      setIsOpen(true);
    };
  
    const onClose = () => {
      setIsOpen(false);
    };

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      };
  return (
    <Flex w="100%" h="700px" align="center" justify="center" fontFamily={'Kanit, sans-serif'}>
        <Box w="1300px" h="650px">
            <Flex h="100%">
                <Box> 
                    <Text whiteSpace="nowrap">
                    สวัสดี, <Text as="span" fontWeight="bold" fontSize="18">Muttto</Text>
                    </Text>
                    <Accordion defaultIndex={[0]} allowMultiple w="310px" position="relative" top="21px">
                    <AccordionItem>
                            <h2>
                             <AccordionButton h="62px" _hover={{ color: "#0F63E9", bg: "#ECF3FD"}}>
                                <Image src={picprofile} alt="Image 1" borderRadius="md" width="20px" height="20px" />
                                 <Box as="span" flex='1' textAlign='left' position="relative" left="10px" >
                                <Text fontWeight="bold" >บัญชีของฉัน</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            
                            <Link to='/Account' >
                                <AccordionPanel _hover={{ color: "#0F63E9", bg: "#ECF3FD", fontWeight:"bold"}}>
                                    <Text position="relative" left="30px">ข้อมูลส่วนตัว</Text>
                                </AccordionPanel>
                            </Link>

                            <Link to='/DA'>
                                <AccordionPanel _hover={{ color: "#0F63E9", bg: "#ECF3FD", fontWeight:"bold"}}>
                                    <Text position="relative" left="30px">ที่อยู่จัดส่งสินค้า</Text>
                                </AccordionPanel>
                            </Link>
                            
                        </AccordionItem>

                        <Link to='/OL'>
                        <Box h="65px" _hover={{ color: "#0F63E9", bg: "#ECF3FD"}} borderTop="1px" borderColor="gray.200">
                            <Flex h="100%" position="relative" right="-16px" top="22px">
                                <Image src={picprofile} alt="Image 1" borderRadius="md" width="20px" height="20px" />
                                <Text fontWeight="bold" position="relative" right="-10px" >รายการคำสั่งซื้อ</Text>
                            </Flex>
                        </Box>
                        </Link>

                        <Link to='/WL'>
                        <Box h="65px" _hover={{ color: "#0F63E9", bg: "#ECF3FD"}} borderTop="1px" borderColor="gray.200">
                            <Flex h="100%" position="relative" right="-16px" top="22px">
                                <Image src={picprofile} alt="Image 1" borderRadius="md" width="20px" height="20px" />
                                <Text fontWeight="bold" position="relative" right="-10px" color="#0F63EA">รายการสินค้าที่สนใจ</Text>
                            </Flex>
                        </Box>
                        </Link>

                        <AccordionItem _hover={{ color: "#0F63E9", bg: "#ECF3FD"}}>
                            <h2>
                            <Button onClick={onOpen} w="310px" h="62px" bg="white" border="none" p={0} _hover={{ color: "#0F63E9", bg: "#ECF3FD"}}>
                                <Text fontWeight="bold" position="relative" left="-85px" >ออกจากระบบ</Text>
                            </Button>
                            <Modal isOpen={isOpen} onClose={onClose} onOverlayClick={handleOverlayClick} closeOnEsc={false}>
                            <ModalOverlay/>
                            <ModalContent ref={modalRef} maxW="360px" w="90%" maxH="210px" h="90%" position="relative" top="200px" fontFamily={'Kanit, sans-serif'}>
                                <ModalHeader position="relative" top="10px" align="center" justify="center">
                                    <Box align="center" justify="center">
                                        <Image src={logout} alt="logout" width="60px" height="60px"/>
                                    </Box>
                                </ModalHeader>
                                <ModalBody align="center" justify="center">
                                    <Text fontWeight="bold" fontSize="24" >คุณต้องการออกจากระบบ ?</Text>
                                </ModalBody>
                                <ModalFooter>
                                    <Button onClick={onClose} w="90px" h="40px" borderRadius="8px" bg="white" border="none" p={0} style={{borderRadius: '5px', border: '1px solid #0F63E9'}} _hover={{ borderColor: 'white', boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'  }} position="relative" top="0px" >
                                        <Text color="#0F63E9" fontSize="14">ยกเลิก</Text>
                                    </Button>
                                    <Box w="10px" h="10px"  />
                                    <Link to='/'>
                                        <Button onClick={onOpen} w="90px" h="40px" borderRadius="8px" bg="#0F63E9" border="none" p={0} _hover={{ bg: '#0F63E9', boxShadow: '0 5px 10px rgba(0, 0, 0, .2)' }} position="relative" top="0px" >
                                            <Text color="white" fontSize="14">ออกจากระบบ</Text>
                                        </Button>
                                    </Link>
                                    
                                </ModalFooter>
                            </ModalContent>
                                </Modal>
                                </h2>
                            </AccordionItem>

                    </Accordion>
                    
                </Box>
                <Box w="980px" h="100%" position="relative" left="10px" >
                    <Box w="980px" h="100px"> 
                        <Text fontWeight="bold" fontSize="18" position="relative" right="-10px" >รายการสินค้าที่สนใจ</Text>
                        <Text color="#757575" fontSize="12" position="relative" right="-10px" bottom="-5px">พื้นที่รวบรวมสินค้าที่ชอบจาก Cat House สู่มือคุณ</Text>
                    </Box>
                    <Box align="center" justify="center" position="relative" top="100px">
                        <Text color="#808080" fontSize="14">ไม่มีรายการสินค้าที่สนใจ</Text>
                        <Link to='/WLL' >
                            <Button onClick={onOpen} w="160px" h="40px" position="relative" top="10px" borderRadius="8px" bg="#0F63E9" border="none" p={0} _hover={{ bg: '#0F63E9', boxShadow: '0 5px 10px rgba(0, 0, 0, .1)'  }}>
                                <Text color="white" fontSize="14" position="relative" right="-3px">เลือกสินค้าต่อ</Text>
                            </Button>
                        </Link>
                    </Box>
                    
                </Box>
            </Flex>
        </Box>
    </Flex>
    

    
  );
};

export default Orderlist;