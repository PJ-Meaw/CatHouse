import React, { useState, useRef } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
  Image,
  TabIndicator,
  Button,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import picprofile from '../assets/profile2.png';
import { Link, useNavigate } from 'react-router-dom';
import logout from '../assets/exit.png';
import view from '../assets/view.png';
import Cookies from 'js-cookie';

const ViewButton = (props) => {
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
      <Button
        onClick={onOpen}
        w="40px"
        h="35px"
        position="relative"
        bottom="-2px"
        border="2px solid #0F63EA"
        borderRadius="8px"
        bg="white"
        p={0}
        _hover={{ boxShadow: '0 5px 10px rgba(0, 0, 0, .1)' }}
      >
        <Image src={view} alt="Image 2" w="25px" h="25px" />
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onOverlayClick={handleOverlayClick}
        closeOnEsc={false}
      >
        <ModalOverlay />
        <ModalContent
          ref={modalRef}
          maxW="980px"
          w="100%"
          maxH="620px"
          h="100%"
        >
          <ModalHeader fontFamily={'Kanit, sans-serif'}>
            <Text position="relative" fontSize="28">
              การจัดส่งสินค้า
            </Text>
            <Box
              w="930px"
              h="40px"
              borderBottom="1px solid black"
              borderTop="1px solid black"
              position="relative"
            >
              <Flex position="relative" bottom="-5px" fontSize="16px">
                <Text position="relative" right="-120px">
                  ยี่ห้อ/ชื่อสินค้า
                </Text>
                <Text position="relative" right="-300px">
                  ราคา
                </Text>
                <Text position="relative" right="-400px">
                  จำนวน
                </Text>
                <Text position="relative" right="-510px">
                  สถานะ
                </Text>
                <Text position="relative" right="-635px">
                  รวม
                </Text>
              </Flex>
            </Box>

            {/* product 1 */}
            {props.orderDetail.map((order, index) => (
              <Box
                key={index}
                h="70px"
                borderBottom="2px solid #E7EEF3"
                fontSize="16px"
              >
                <Box h="25px" w="350px">
                  <Text position="relative" right="-18px" bottom="-8px">
                    {order.productDetail.brandName}
                  </Text>
                </Box>

                <Flex display="flex" position="relative">
                  <Box h="40px" w="410px">
                    <Text position="relative" right="-18px" bottom="-8px">
                      {order.productDetail.productName}
                    </Text>
                  </Box>
                  <Box
                    h="40px"
                    w="120px"
                    display="flex"
                    justifyContent="center"
                  >
                    <Text position="relative" bottom="-8px">
                      {order.productDetail.price}
                    </Text>
                  </Box>
                  <Box
                    h="40px"
                    w="180px"
                    display="flex"
                    justifyContent="center"
                  >
                    <Text position="relative" bottom="-8px">
                      {order.quantity}
                    </Text>
                  </Box>
                  <Box
                    h="40px"
                    w="180px"
                    display="flex"
                    justifyContent="center"
                  >
                    <Text position="relative" bottom="-8px">
                      {order.status}
                    </Text>
                  </Box>
                  <Box
                    h="40px"
                    w="180px"
                    display="flex"
                    justifyContent="center"
                  >
                    <Text position="relative" bottom="-8px">
                      {order.amount}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            ))}
          </ModalHeader>
          <ModalBody fontFamily={'Kanit, sans-serif'}></ModalBody>
          <ModalFooter fontFamily={'Kanit, sans-serif'}></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const AddOrderlist = (props) => {
  const activeTabColor = useColorModeValue('#0F63E9', '#0F63E9');
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const onOpen = () => {
    setIsOpen(true);
  };

  const logout_page = () => {
    Cookies.remove('email');
    Cookies.remove('userData');
    navigate("/")
    window.location.reload();
  }

  const onClose = () => {
    setIsOpen(false);
  };
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <Flex
      w="100%"
      h="700px"
      align="center"
      justify="center"
      fontFamily={'Kanit, sans-serif'}
    >
      <Box w="1300px" h="650px">
        <Flex h="100%">
          <Box>
            <Text whiteSpace="nowrap">
              สวัสดี,{' '}
              <Text as="span" fontWeight="bold" fontSize="18">
                Muttto
              </Text>
            </Text>
            <Accordion
              defaultIndex={[0]}
              allowMultiple
              w="310px"
              position="relative"
              top="21px"
            >
              <AccordionItem>
                <h2>
                  <AccordionButton
                    h="62px"
                    _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}
                  >
                    <Image
                      src={picprofile}
                      alt="Image 1"
                      borderRadius="md"
                      width="20px"
                      height="20px"
                    />
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      position="relative"
                      left="10px"
                    >
                      <Text fontWeight="bold">บัญชีของฉัน</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                <Link to="/Account">
                  <AccordionPanel
                    _hover={{
                      color: '#0F63E9',
                      bg: '#ECF3FD',
                      fontWeight: 'bold',
                    }}
                  >
                    <Text position="relative" left="30px">
                      ข้อมูลส่วนตัว
                    </Text>
                  </AccordionPanel>
                </Link>

                <Link to="/DA">
                  <AccordionPanel
                    _hover={{
                      color: '#0F63E9',
                      bg: '#ECF3FD',
                      fontWeight: 'bold',
                    }}
                  >
                    <Text position="relative" left="30px">
                      ที่อยู่จัดส่งสินค้า
                    </Text>
                  </AccordionPanel>
                </Link>
              </AccordionItem>

              <Link to="/OL">
                <Box
                  h="65px"
                  _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}
                  borderTop="1px"
                  borderColor="gray.200"
                >
                  <Flex h="100%" position="relative" right="-16px" top="22px">
                    <Image
                      src={picprofile}
                      alt="Image 1"
                      borderRadius="md"
                      width="20px"
                      height="20px"
                    />
                    <Text
                      fontWeight="bold"
                      position="relative"
                      right="-10px"
                      color="#0F63EA"
                    >
                      รายการคำสั่งซื้อ
                    </Text>
                  </Flex>
                </Box>
              </Link>

              <Link to="/WL">
                <Box
                  h="65px"
                  _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}
                  borderTop="1px"
                  borderColor="gray.200"
                >
                  <Flex h="100%" position="relative" right="-16px" top="22px">
                    <Image
                      src={picprofile}
                      alt="Image 1"
                      borderRadius="md"
                      width="20px"
                      height="20px"
                    />
                    <Text fontWeight="bold" position="relative" right="-10px">
                      รายการสินค้าที่สนใจ
                    </Text>
                  </Flex>
                </Box>
              </Link>

              <AccordionItem _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>
                <h2>
                  <Button
                    onClick={onOpen}
                    w="310px"
                    h="62px"
                    bg="white"
                    border="none"
                    p={0}
                    _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}
                  >
                    <Text fontWeight="bold" position="relative" left="-85px">
                      ออกจากระบบ
                    </Text>
                  </Button>
                  <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    onOverlayClick={handleOverlayClick}
                    closeOnEsc={false}
                  >
                    <ModalOverlay />
                    <ModalContent
                      ref={modalRef}
                      maxW="360px"
                      w="90%"
                      maxH="210px"
                      h="90%"
                      position="relative"
                      top="200px"
                      fontFamily={'Kanit, sans-serif'}
                    >
                      <ModalHeader
                        position="relative"
                        top="10px"
                        align="center"
                        justify="center"
                      >
                        <Box align="center" justify="center">
                          <Image
                            src={logout}
                            alt="logout"
                            width="60px"
                            height="60px"
                          />
                        </Box>
                      </ModalHeader>
                      <ModalBody align="center" justify="center">
                        <Text fontWeight="bold" fontSize="24">
                          คุณต้องการออกจากระบบ ?
                        </Text>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          onClick={onClose}
                          w="90px"
                          h="40px"
                          borderRadius="8px"
                          bg="white"
                          border="none"
                          p={0}
                          style={{
                            borderRadius: '5px',
                            border: '1px solid #0F63E9',
                          }}
                          _hover={{
                            borderColor: 'white',
                            boxShadow: '0 5px 10px rgba(0, 0, 0, .2)',
                          }}
                          position="relative"
                          top="0px"
                        >
                          <Text color="#0F63E9" fontSize="14">
                            ยกเลิก
                          </Text>
                        </Button>
                        <Box w="10px" h="10px" />
                          <Button
                            onClick={onOpen}
                            w="90px"
                            h="40px"
                            borderRadius="8px"
                            bg="#0F63E9"
                            border="none"
                            p={0}
                            _hover={{
                              bg: '#0F63E9',
                              boxShadow: '0 5px 10px rgba(0, 0, 0, .2)',
                            }}
                            position="relative"
                            top="0px"
                          >
                            <Text color="white" fontSize="14" onClick={logout_page}>
                              ออกจากระบบ
                            </Text>
                          </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </h2>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box w="980px" h="100%" position="relative" left="10px">
            <Box w="980px" h="100px">
              <Text
                fontWeight="bold"
                fontSize="18"
                position="relative"
                right="-10px"
              >
                รายการคำสั่งซื้อ
              </Text>
            </Box>
            <Box position="relative" top="-55px">
              <Tabs fontFamily={'Kanit, sans-serif'}>
                <TabList>
                  <Tab
                    fontWeight="bold"
                    borderRadius="7px"
                    colorScheme="#0F63E9"
                    color="#727381"
                    _selected={{ color: activeTabColor }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    คำสั่งซื้อ
                  </Tab>
                </TabList>
                <TabIndicator
                  mt="-4px"
                  height="4px"
                  bg="#0F63E9"
                  borderRadius="2px"
                />
                <TabPanels>
                  <TabPanel align="center" justify="center" position="relative">
                    <Box
                      w="950px"
                      h="40px"
                      bg="#E8F5FE"
                      borderBottom="4px solid #E7EEF3"
                      borderTop="4px solid #E7EEF3"
                      position="relative"
                    >
                      <Flex>
                        <Text position="relative" right="-20px" bottom="-5px">
                          ลำดับ
                        </Text>
                        <Text position="relative" right="-100px" bottom="-5px">
                          ชื่อ นามสกุล
                        </Text>
                        <Text position="relative" right="-215px" bottom="-5px">
                          เบอร์โทร
                        </Text>
                        <Text position="relative" right="-275px" bottom="-5px">
                          การจัดส่งสินค้า
                        </Text>
                        <Text position="relative" right="-340px" bottom="-5px">
                          การชำระเงิน
                        </Text>
                        <Text position="relative" right="-380px" bottom="-5px">
                          รวมการสั่งซื้อ(ราคา)
                        </Text>
                      </Flex>
                    </Box>
                    <Box
                      w="950px"
                      h="472px"
                      overflow="scroll"
                      position="relative"
                    >
                      {props.orderList.map((order, index) => (
                        <Box
                          key={index}
                          h="40px"
                          borderBottom="2px solid #E7EEF3"
                        >
                          <Flex display="flex" position="relative">
                            <Box
                              h="40px"
                              w="80px"
                              display="flex"
                              justifyContent="center"
                            >
                              <Text position="relative" bottom="-8px">
                                {index + 1}
                              </Text>
                            </Box>
                            <Box h="40px" w="320px">
                              <Text position="relative" bottom="-8px">
                                {`${order.address.firstName} ${order.address.lastName}`}
                              </Text>
                            </Box>
                            <Box h="40px" w="180px">
                              <Text position="relative" bottom="-8px">
                                {order.address.telNo}
                              </Text>
                            </Box>
                            <Box
                              h="40px"
                              w="200px"
                              display="flex"
                              justifyContent="center"
                            >
                              <Text position="relative" bottom="-8px">
                                จัดส่งโดยรถบรรทุก
                              </Text>
                            </Box>
                            <Box
                              h="40px"
                              w="220px"
                              display="flex"
                              justifyContent="center"
                            >
                              <Text position="relative" bottom="-8px">
                                ชำระผ่านบัตรเครดิต
                              </Text>
                            </Box>
                            <Box
                              h="40px"
                              w="180px"
                              display="flex"
                              justifyContent="center"
                            >
                              <Text position="relative" bottom="-8px">
                                {order.totalAmount}
                              </Text>
                            </Box>
                            <Box
                              h="40px"
                              w="100px"
                              display="flex"
                              justifyContent="center"
                              position="relative"
                            >
                              <ViewButton orderDetail={order.orderDetail} />
                            </Box>
                          </Flex>
                        </Box>
                      ))}
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AddOrderlist;
