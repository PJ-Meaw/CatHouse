import React, { useEffect, useState, useRef } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,Flex,Text,Image,Button,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Input, 
    InputGroup, InputLeftElement,AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
  } from '@chakra-ui/react'
import picprofile from '../assets/profile2.png'
import home from '../assets/home.png'
import homelocation from '../assets/homelocation.png'
import add from '../assets/add.png'
import bin from '../assets/bin.png'
import { Link } from 'react-router-dom';
import logout from '../assets/exit.png'

const AddAddress = () => {
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
        <Box>
          <Button onClick={onOpen} w="113px" h="40px" position="relative" right="-750px" bottom="-8px" borderRadius="8px" bg="white" border="none" p={0} _hover={{ bgColor:'#F6F9FE'  }}>
            <Image src={add} alt="add" width="20px" height="20px" position="relative" left="-5px"/>
            <Text color="#0F63E9" fontSize="14" position="relative" right="-3px">เพิ่มที่อยู่</Text>
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} onOverlayClick={handleOverlayClick} closeOnEsc={false}>
          <ModalOverlay/>
          <ModalContent ref={modalRef} maxW="750px" w="100%" maxH="419px" h="100%" position="relative" top="162px">
            <ModalHeader></ModalHeader>
            <ModalBody fontFamily={'Kanit, sans-serif'}>
                <Box w="700px" h="62px" position="relative" top="-10px">
                  <Box>
                    <Flex h="100%">
                      <Box><Image src={home} alt="home" width="30px" height="30px" /></Box>
                      <Box fontWeight="bold" fontSize="18" position="relative" right="-10px" top="-8px">ที่อยู่จัดส่งสินค้า</Box>
                        
                    </Flex>
                  </Box>
                  <Box fontSize="14" position="relative" right="-40px" top="-10px">ที่อยู่จัดส่งสินค้า</Box>
                </Box>
                <Box w="700px" h="308px" position="relative" top="-10px">
                  <Box>
                    <Flex h="100%">
                      <Box>
                        <InputGroup>
                          <Input htmlSize={32} width='auto' placeholder="ชื่อ - นามสกุล" focusBorderColor="#0F63E9" _hover={{ borderColor: '#0F63E9' }}/>
                        </InputGroup>
                      </Box>
                      <Box h="50px" w="50px"></Box>
                      <Box>
                        <InputGroup>
                          <Input htmlSize={32} width='auto' placeholder="หมายเลขโทรศัพท์" focusBorderColor="#0F63E9" _hover={{ borderColor: '#0F63E9' }}/>
                        </InputGroup>
                      </Box>                      
                    </Flex>
                  </Box>

                  <Box w="50px" h="7px" />

                  <Box>
                    <InputGroup>
                      <Input htmlSize={72} width='auto' h="50" placeholder="ที่อยู่" focusBorderColor="#0F63E9" _hover={{ borderColor: '#0F63E9' }}/>
                    </InputGroup>
                  </Box>
                  
                  <Box w="50px" h="17px" />

                  <Box>
                    <Flex h="100%">
                      <Box>
                        <InputGroup>
                          <Input htmlSize={32} width='auto' placeholder="แขวง/ตำบล" focusBorderColor="#0F63E9" _hover={{ borderColor: '#0F63E9' }}/>
                        </InputGroup>
                      </Box>
                      <Box h="50px" w="50px"></Box>
                      <Box>
                        <InputGroup>
                          <Input htmlSize={32} width='auto' placeholder="อำเภอ/เขต" focusBorderColor="#0F63E9" _hover={{ borderColor: '#0F63E9' }}/>
                        </InputGroup>
                      </Box>                      
                    </Flex>
                  </Box>

                  <Box w="50px" h="7px" />

                  <Box>
                    <Flex h="100%">
                      <Box>
                        <InputGroup>
                          <Input htmlSize={32} width='auto' placeholder="จังหวัด" focusBorderColor="#0F63E9" _hover={{ borderColor: '#0F63E9' }}/>
                        </InputGroup>
                      </Box>
                      <Box h="50px" w="50px"></Box>
                      <Box>
                        <InputGroup>
                          <Input htmlSize={32} width='auto' placeholder="รหัสไปรษณีย์" focusBorderColor="#0F63E9" _hover={{ borderColor: '#0F63E9' }}/>
                        </InputGroup>
                      </Box>                      
                    </Flex>
                  </Box>
                  
                </Box>
                
            </ModalBody>
            <ModalFooter fontFamily={'Kanit, sans-serif'}>
              <Button onClick={onClose} w="184px" h="40px" borderRadius="8px" bg="white" border="none" p={0} style={{borderRadius: '5px', border: '1px solid #0F63E9'}} _hover={{ borderColor: 'white', boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'  }} position="relative" top="-85px" >
                <Text color="#0F63E9" fontSize="14">ยกเลิก</Text>
              </Button>
              <Box w="10px" h="10px"  />
              <Button onClick={onOpen} w="184px" h="40px" borderRadius="8px" bg="#0F63E9" border="none" p={0} _hover={{ bg: '#0F63E9', boxShadow: '0 5px 10px rgba(0, 0, 0, .2)' }} position="relative" top="-85px" >
                <Text color="white" fontSize="14">บันทึก</Text>
              </Button>
            </ModalFooter>
          </ModalContent>
          </Modal>
        </Box>
    );
  };

const EditAddress = () => {
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
        <Box>
          <Button onClick={onOpen} w="60px" h="40px" position="relative" top="10px" borderRadius="8px" bg="white" border="none" p={0} _hover={{ bg: '#E9F2FE' }}>
            <Text color="#0F63E9" fontSize="14">แก้ไข</Text>
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} onOverlayClick={handleOverlayClick} closeOnEsc={false}>
          <ModalOverlay/>
          <ModalContent ref={modalRef} maxW="750px" w="100%" maxH="419px" h="100%" position="relative" top="162px">
            <ModalHeader></ModalHeader>
            <ModalBody fontFamily={'Kanit, sans-serif'}>
                <Box w="700px" h="62px" position="relative" top="-10px">
                  <Box>
                    <Flex h="100%">
                      <Box><Image src={home} alt="home" width="30px" height="30px" /></Box>
                      <Box fontWeight="bold" fontSize="18" position="relative" right="-10px" top="-8px">ที่อยู่จัดส่งสินค้า</Box>
                        
                    </Flex>
                  </Box>
                  <Box fontSize="14" position="relative" right="-40px" top="-10px">ที่อยู่จัดส่งสินค้า</Box>
                </Box>
                <Box w="700px" h="308px" position="relative" top="-10px">
                  <Box>
                    <Flex h="100%">
                      <Box>
                        <InputGroup>
                          <Input htmlSize={32} width='auto' placeholder="ชื่อ - นามสกุล" focusBorderColor="#0F63E9" _hover={{ borderColor: '#0F63E9' }}/>
                        </InputGroup>
                      </Box>
                      <Box h="50px" w="50px"></Box>
                      <Box>
                        <InputGroup>
                          <Input htmlSize={32} width='auto' placeholder="หมายเลขโทรศัพท์" focusBorderColor="#0F63E9" _hover={{ borderColor: '#0F63E9' }}/>
                        </InputGroup>
                      </Box>                      
                    </Flex>
                  </Box>

                  <Box w="50px" h="7px" />

                  <Box>
                    <InputGroup>
                      <Input htmlSize={72} width='auto' h="50" placeholder="ที่อยู่" focusBorderColor="#0F63E9" _hover={{ borderColor: '#0F63E9' }}/>
                    </InputGroup>
                  </Box>
                  
                  <Box w="50px" h="17px" />

                  <Box>
                    <Flex h="100%">
                      <Box>
                        <InputGroup>
                          <Input htmlSize={32} width='auto' placeholder="แขวง/ตำบล" focusBorderColor="#0F63E9" _hover={{ borderColor: '#0F63E9' }}/>
                        </InputGroup>
                      </Box>
                      <Box h="50px" w="50px"></Box>
                      <Box>
                        <InputGroup>
                          <Input htmlSize={32} width='auto' placeholder="อำเภอ/เขต" focusBorderColor="#0F63E9" _hover={{ borderColor: '#0F63E9' }}/>
                        </InputGroup>
                      </Box>                      
                    </Flex>
                  </Box>

                  <Box w="50px" h="7px" />

                  <Box>
                    <Flex h="100%">
                      <Box>
                        <InputGroup>
                          <Input htmlSize={32} width='auto' placeholder="จังหวัด" focusBorderColor="#0F63E9" _hover={{ borderColor: '#0F63E9' }}/>
                        </InputGroup>
                      </Box>
                      <Box h="50px" w="50px"></Box>
                      <Box>
                        <InputGroup>
                          <Input htmlSize={32} width='auto' placeholder="รหัสไปรษณีย์" focusBorderColor="#0F63E9" _hover={{ borderColor: '#0F63E9' }}/>
                        </InputGroup>
                      </Box>                      
                    </Flex>
                  </Box>
                  
                </Box>
                
            </ModalBody>
            <ModalFooter fontFamily={'Kanit, sans-serif'}>
              <Button onClick={onClose} w="184px" h="40px" borderRadius="8px" bg="white" border="none" p={0} style={{borderRadius: '5px', border: '1px solid #0F63E9'}} _hover={{ borderColor: 'white', boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'  }} position="relative" top="-85px" >
                <Text color="#0F63E9" fontSize="14">ยกเลิก</Text>
              </Button>
              <Box w="10px" h="10px"  />
              <Button onClick={onOpen} w="184px" h="40px" borderRadius="8px" bg="#0F63E9" border="none" p={0} _hover={{ bg: '#0F63E9', boxShadow: '0 5px 10px rgba(0, 0, 0, .2)' }} position="relative" top="-85px" >
                <Text color="white" fontSize="14">บันทึก</Text>
              </Button>
            </ModalFooter>
          </ModalContent>
          </Modal>
        </Box>
    );
  };

const DeleteAddress = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);
    const cancelRef = React.useRef()
  
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
        <Box>
          <Button onClick={onOpen} w="50px" h="40px" position="relative" top="10px" borderRadius="8px" bg="white" border="none" p={0} _hover={{ bg: '#E9F2FE' }}>
            <Text color="#0F63E9" fontSize="14">ลบ</Text>
          </Button>
          <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay fontFamily={'Kanit, sans-serif'}>
          <AlertDialogContent w="360px" position="relative" bottom="-160px" borderRadius="20px">
            <AlertDialogHeader >
                <Box align="center" justify="center" position="relative" bottom="-15px">
                    <Box bg="#FCE4E5" w="100px" h="100px" borderRadius="50px">
                        <Image src={bin} alt="bin" width="70px" height="70px" position="relative" bottom="-15px" />
                    </Box>
                </Box>
            </AlertDialogHeader>

            <AlertDialogBody>
                <Box align="center" justify="center">
                    <Text fontWeight="bold" fontSize="28" >ต้องการลบที่อยู่นี้ ?</Text>
                </Box>
            </AlertDialogBody>

            <AlertDialogFooter position="relative" left="-6px">
              <Button onClick={onClose}  ref={cancelRef} w="142px" h="40px" borderRadius="8px" bg="white" border="none" p={0} style={{borderRadius: '5px', border: '1px solid #0F63E9'}} _hover={{ borderColor: 'white', boxShadow: '0 5px 10px rgba(0, 0, 0, .2)'  }} >
                <Text color="#0F63E9" fontSize="14">ยกเลิก</Text>
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3} w="142px" h="40px">
                ลบที่อยู่
              </Button>
            </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
        </Box>
    );
  };

const AddDeliveryAddress = () => {
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
                                    <Text position="relative" left="30px" >ข้อมูลส่วนตัว</Text>
                                </AccordionPanel>
                            </Link>

                            <Link to='/DA'>
                                <AccordionPanel _hover={{ color: "#0F63E9", bg: "#ECF3FD", fontWeight:"bold"}}>
                                    <Text position="relative" left="30px" fontWeight="bold" color="#0F63E9">ที่อยู่จัดส่งสินค้า</Text>
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
                                <Text fontWeight="bold" position="relative" right="-10px" >รายการสินค้าที่สนใจ</Text>
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
                    <Box w="980px" h="68px">
                        <Flex h="100%">
                            <Text fontWeight="bold" fontSize="18" position="relative" right="-10px" >ที่อยู่จัดส่งสินค้า</Text>
                            <AddAddress/>
                            
                        </Flex>
                        <Text color="#757575" fontSize="12" position="relative" right="-10px" top="-35px">จัดการที่อยู่จัดส่ง สำหรับการสั่งซื้อสินค้า</Text>
                        
                    </Box>
                    {/* ===================================================== */}
                    <Box w="980px" h="95px"> 
                        <Flex h="100%">
                            <Box position="relative" right="-40px" top="25px" >
                              <Text fontWeight="bold" > พีรพัฒน์ วสันต์วสุฤดู </Text>
                              <Text fontWeight="bold" > 0874095760 </Text>
                            </Box>

                            <Box position="relative" right="-80px" top="25px" >
                              <Text fontSize="16" >72/68 หมู่7 หมู่บ้านพระปิ่น2 ซ.ศาลาธรรมสพน์ 15 ศาลาธรรมสพน์ ทวีวัฒนา กรุงเทพมหานคร</Text>
                              <Text fontSize="16" >10170</Text>
                            </Box>

                            <Box position="relative" right="-120px" top="20px" >
                              <Flex>
                                <EditAddress/>
                                <Box w="10px" h="10px" />
                                <DeleteAddress/>
                              </Flex>
                            </Box>
                            
                        </Flex>
                    </Box>
                    {/* ===================================================== */}
                    
                </Box>
            </Flex>
        </Box>
    </Flex>
    

    
  );
};

export default AddDeliveryAddress;