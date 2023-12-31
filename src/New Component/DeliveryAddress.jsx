import React, { useEffect, useState, useRef } from 'react';
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
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import picprofile from '../assets/profile2.png';
import home from '../assets/home.png';
import homelocation from '../assets/homelocation.png';
import add from '../assets/add.png';
import { Link, useNavigate } from 'react-router-dom';
import logout from '../assets/exit.png';
import api from '../service/userService';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

const AddAddress = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const [fullName, setFullName] = useState(null);
  const [telNo, setTelNo] = useState(null);
  const [address, setAddress] = useState(null);
  const [district, setDistrict] = useState(null);
  const [subDistrict, setSubDistrict] = useState(null);
  const [code, setCode] = useState(0);
  const [province, setProvince] = useState(null);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    clearAddressState();
    setIsOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const clearAddressState = () => {
    setFullName(null);
    setTelNo(null);
    setAddress(null);
    setDistrict(null);
    setSubDistrict(null);
    setCode(null);
    setProvince(null);
  };

  const validateFields = () => {
    if (!fullName) {
      alert('please fill fullname!.');
      return false;
    }
    if (!telNo) {
      alert('please fill phone number!.');
      return false;
    }
    if (!address) {
      alert('please fill address info!.');
      return false;
    }
    if (!district) {
      alert('please fill district!.');
      return false;
    }
    if (!subDistrict) {
      alert('please fill sub district!.');
      return false;
    }
    if (!code) {
      alert('please fill province code!.');
      return false;
    }
    if (!province) {
      alert('please fill province name!.');
      return false;
    }

    return true;
  };

  const handleAddAddress = () => {
    if (!validateFields()) {
      return;
    }

    const fullnameSplit = fullName.split(' ');
    const firstName = fullnameSplit[0];
    const lastName = fullnameSplit[1];

    if (!firstName || !lastName) {
      alert(
        `please fill your name by this format 'firstName LastName'\n ex. 'Tom Disney'`
      );
      return;
    }

    const dataReq = {
      email: props.user.email,
      updateObj: {
        address,
        code,
        district,
        firstName,
        lastName,
        province,
        subDistrict,
        telNo,
      },
    };

    api.addNewAddress(dataReq).then((res) => {
      if (res.data.status) {
        Cookies.set('userData', JSON.stringify(res.data.user));
        props.setUser(res.data.user);
      }

      Swal.fire(res.data.message);
      onClose();
    });

    clearAddressState();
  };

  return (
    <Box>
      <Button
        onClick={onOpen}
        w="113px"
        h="40px"
        position="relative"
        top="10px"
        borderRadius="8px"
        bg="#0F63E9"
        border="none"
        p={0}
        _hover={{ bg: '#0F63E9', boxShadow: '0 5px 10px rgba(0, 0, 0, .1)' }}
      >
        <Image
          src={add}
          alt="add"
          width="20px"
          height="20px"
          position="relative"
          left="-5px"
        />
        <Text color="white" fontSize="14" position="relative" right="-3px">
          เพิ่มที่อยู่
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
          maxW="750px"
          w="100%"
          maxH="419px"
          h="100%"
          position="relative"
          top="162px"
        >
          <ModalHeader></ModalHeader>
          <ModalBody fontFamily={'Kanit, sans-serif'}>
            <Box w="700px" h="62px" position="relative" top="-10px">
              <Box>
                <Flex h="100%">
                  <Box>
                    <Image src={home} alt="home" width="30px" height="30px" />
                  </Box>
                  <Box
                    fontWeight="bold"
                    fontSize="18"
                    position="relative"
                    right="-10px"
                    top="-8px"
                  >
                    ที่อยู่จัดส่งสินค้า
                  </Box>
                </Flex>
              </Box>
              <Box fontSize="14" position="relative" right="-40px" top="-10px">
                ที่อยู่จัดส่งสินค้า
              </Box>
            </Box>
            <Box w="700px" h="308px" position="relative" top="-10px">
              <Box>
                <Flex h="100%">
                  <Box>
                    <InputGroup>
                      <Input
                        htmlSize={32}
                        width="auto"
                        placeholder="ชื่อ - นามสกุล"
                        focusBorderColor="#0F63E9"
                        _hover={{ borderColor: '#0F63E9' }}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </InputGroup>
                  </Box>
                  <Box h="50px" w="50px"></Box>
                  <Box>
                    <InputGroup>
                      <Input
                        htmlSize={32}
                        width="auto"
                        placeholder="หมายเลขโทรศัพท์"
                        focusBorderColor="#0F63E9"
                        _hover={{ borderColor: '#0F63E9' }}
                        onChange={(e) => setTelNo(e.target.value)}
                      />
                    </InputGroup>
                  </Box>
                </Flex>
              </Box>

              <Box w="50px" h="7px" />

              <Box>
                <InputGroup>
                  <Input
                    htmlSize={72}
                    width="auto"
                    h="50"
                    placeholder="ที่อยู่"
                    focusBorderColor="#0F63E9"
                    _hover={{ borderColor: '#0F63E9' }}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </InputGroup>
              </Box>

              <Box w="50px" h="17px" />

              <Box>
                <Flex h="100%">
                  <Box>
                    <InputGroup>
                      <Input
                        htmlSize={32}
                        width="auto"
                        placeholder="แขวง/ตำบล"
                        focusBorderColor="#0F63E9"
                        _hover={{ borderColor: '#0F63E9' }}
                        onChange={(e) => setSubDistrict(e.target.value)}
                      />
                    </InputGroup>
                  </Box>
                  <Box h="50px" w="50px"></Box>
                  <Box>
                    <InputGroup>
                      <Input
                        htmlSize={32}
                        width="auto"
                        placeholder="อำเภอ/เขต"
                        focusBorderColor="#0F63E9"
                        _hover={{ borderColor: '#0F63E9' }}
                        onChange={(e) => setDistrict(e.target.value)}
                      />
                    </InputGroup>
                  </Box>
                </Flex>
              </Box>

              <Box w="50px" h="7px" />

              <Box>
                <Flex h="100%">
                  <Box>
                    <InputGroup>
                      <Input
                        htmlSize={32}
                        width="auto"
                        placeholder="จังหวัด"
                        focusBorderColor="#0F63E9"
                        _hover={{ borderColor: '#0F63E9' }}
                        onChange={(e) => setProvince(e.target.value)}
                      />
                    </InputGroup>
                  </Box>
                  <Box h="50px" w="50px"></Box>
                  <Box>
                    <InputGroup>
                      <Input
                        htmlSize={32}
                        width="auto"
                        placeholder="รหัสไปรษณีย์"
                        focusBorderColor="#0F63E9"
                        _hover={{ borderColor: '#0F63E9' }}
                        onChange={(e) => setCode(e.target.value)}
                      />
                    </InputGroup>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter fontFamily={'Kanit, sans-serif'}>
            <Button
              onClick={onClose}
              w="184px"
              h="40px"
              borderRadius="8px"
              bg="white"
              border="none"
              p={0}
              style={{ borderRadius: '5px', border: '1px solid #0F63E9' }}
              _hover={{
                borderColor: 'white',
                boxShadow: '0 5px 10px rgba(0, 0, 0, .2)',
              }}
              position="relative"
              top="-85px"
            >
              <Text color="#0F63E9" fontSize="14">
                ยกเลิก
              </Text>
            </Button>
            <Box w="10px" h="10px" />
            <Button
              onClick={handleAddAddress}
              w="184px"
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
              top="-85px"
            >
              <Text color="white" fontSize="14">
                บันทึก
              </Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const DeliveryAddress = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const logout_page = () => {
    Cookies.remove('email');
    Cookies.remove('userData');
    navigate("/")
    window.location.reload();
  }
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

                <Link to="/DAA">
                  <AccordionPanel
                    _hover={{
                      color: '#0F63E9',
                      bg: '#ECF3FD',
                      fontWeight: 'bold',
                    }}
                  >
                    <Text
                      position="relative"
                      left="30px"
                      fontWeight="bold"
                      color="#0F63E9"
                    >
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
                    <Text fontWeight="bold" position="relative" right="-10px">
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
                        <Link to="/">
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
                        </Link>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </h2>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box w="980px" h="100%" position="relative" left="10px">
            <Box w="980px" h="68px">
              <Text
                fontWeight="bold"
                fontSize="18"
                position="relative"
                right="-10px"
              >
                ที่อยู่จัดส่งสินค้า
              </Text>
              <Text
                color="#757575"
                fontSize="12"
                position="relative"
                right="-10px"
                bottom="-5px"
              >
                จัดการที่อยู่จัดส่ง สำหรับการสั่งซื้อสินค้า
              </Text>
            </Box>
            {/* <Box w="980px" h="100px" bg="blue.200"> 
                    </Box> */}
            <Box
              w="980px"
              h="550px"
              align="center"
              justify="center"
              position="relative"
              top="150px"
            >
              <Image
                src={homelocation}
                alt="homelocation"
                borderRadius="md"
                width="40px"
                height="40px"
                position="relative"
                top="-20px"
              />
              <Text color="#757575" position="relative" top="-5px">
                ไม่มีข้อมูลที่อยู่จัดส่งสินค้า
              </Text>
              <AddAddress setUser={props.setUser} user={props.user} />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default DeliveryAddress;
