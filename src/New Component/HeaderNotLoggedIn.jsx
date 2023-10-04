import React, { useEffect, useState, useRef } from 'react';
import logostore from '../assets/logo.png'
import fulllogostore from '../assets/fulllogo.png'
import search from '../assets/search.png'
import cartlogo from '../assets/cart.png'
import under from '../assets/under.png'
import profile from '../assets/profile.png'
import favorite from '../assets/favorite.png'
import emailpic from '../assets/email.png'
import leftchevron from '../assets/leftchevron.png'
import googleicon from '../assets/googleicon.png'
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { Tab, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, 
  useColorModeValue, 
  TabList, TabPanels, 
  Tabs, TabPanel, TabIndicator, 
  Button, Text, Modal, ModalOverlay, 
  ModalContent, ModalHeader, ModalBody, ModalFooter, 
  Flex, Menu, MenuButton, MenuList, MenuItem, HStack, Input, 
  InputGroup, InputLeftElement, Image,Box } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import HeaderLoggedIn from './HeaderLoggedIn';

  const SearchButtonWithModal = () => {
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
        <Box px="9">
          <Button onClick={onOpen} colorScheme="white" width="170px" justifyContent="flex-start" variant="outline" borderColor="#D4D4D4" _hover={{ borderColor: '#8282FF'}} >
              <Image src={search} alt="search" boxSize="15px" />
              <Text fontWeight="normal" fontFamily={'Kanit, sans-serif'} position="relative" left="8px" top="1px">ค้นหา</Text>
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} onOverlayClick={handleOverlayClick} closeOnEsc={false}>
          <ModalOverlay/>
          <ModalContent ref={modalRef} maxW="600px" w="90%" maxH="250px" h="90%">
            <ModalHeader></ModalHeader>
            <ModalBody>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<Image src={search} alt="Image" boxSize="1rem" />}/>
                <Input fontFamily={'Kanit, sans-serif'}htmlSize={65} width='auto' placeholder="คุณกำลังหาอะไรอยู่?" focusBorderColor="#0F63E9" style={{borderRadius: '5px', border: '1px solid #ccc',}}/>
              </InputGroup>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
          </Modal>
        </Box>
    );
  };

  const LoginButtonWithModal = () => {
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
        <Box p="1">
          <Button onClick={onOpen} w="40px" h="40px" borderRadius="50%" bg="white" border="none" p={0} _hover={{ bg: 'gray.200' }}>
            <Image src={profile} alt="profile" w="65%" h="65%" borderRadius="50%" />
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} onOverlayClick={handleOverlayClick} closeOnEsc={false}>
          <ModalOverlay/>
          <ModalContent ref={modalRef} maxW="378px" w="90%" maxH="400px" h="90%" position="relative" top="110px">
            <ModalHeader></ModalHeader>
            <ModalBody align="center" justify="center">
              <Image src={fulllogostore} alt="Logo" width="120px" height="120px" />
                <LoginButtonWithEmail />
                <Button onClick={onOpen} colorScheme="white" w="318px" h="50px" variant="outline" position="relative" top="30px" border="1px solid #D4D4D4" _hover={{boxShadow: '0 5px 6px rgba(0, 0, 0, .1)'}} >  
                  <Image src={googleicon} alt="emailpic" width="20px" height="20px" position="relative" left="-50px"/>
                  <Text fontFamily={'Kanit, sans-serif'} fontWeight="bold">ดำเนินการต่อด้วยGoogle</Text>
                </Button>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
          </Modal>
        </Box>
    );
  };

  const LoginButtonWithEmail = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);
    const activeTabColor = useColorModeValue('#0F63E9', '#0F63E9');
    const activeTabBgColor = useColorModeValue('#D8E6FB', '#D8E6FB');
  
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
      <Box p="1">
      <Button onClick={onOpen} colorScheme="white" w="318px" h="50px" variant="outline" position="relative" top="20px" border="1px solid #D4D4D4" _hover={{boxShadow: '0 5px 6px rgba(0, 0, 0, .1)'}} >  
        <Image src={emailpic} alt="emailpic" width="20px" height="20px" position="relative" left="-60px"/>
        <Text fontFamily={'Kanit, sans-serif'} fontWeight="bold">ดำเนินการต่อด้วยอีเมล</Text>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} onOverlayClick={handleOverlayClick} closeOnEsc={false}>
      <ModalContent ref={modalRef} maxW="378px" w="90%" maxH="400px" h="90%" position="relative" top="110px">
        <ModalHeader fontFamily={'Kanit, sans-serif'}>
              <Text position="relative" top="10px" align="center" justify="center">เข้าสู่ระบบด้วยอีเมล</Text> 
          </ModalHeader>
        <ModalBody>
          <Tabs fontFamily={'Kanit, sans-serif'}>
            <TabList>
              <Tab>เข้าสู่ระบบ</Tab>
              <Tab>สมัครสมาชิก</Tab>

            </TabList>
            <TabIndicator mt="-1.5px" height="4px" bg="#0F63E9" borderRadius="1px" />
            <TabPanels>
              <TabPanel>
                {/* <Box w="328px" h="38px" variant="outline" position="relative" top="20px" left="-16px" borderRadius="10px" border="1px solid #D4D4D4" _hover={{boxShadow: '0 5px 6px rgba(0, 0, 0, .1)'}} > */}
                
                <Formik
                  initialValues={{ }}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2))
                      actions.setSubmitting(false)
                    }, 1000)
                  }}
                >
                  {(props) => (
                    <Form>
                      <Box h="5px"/>
                      <Field name='email'>
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.name && form.touched.name}>
                            <Input {...field} placeholder='อีเมล' />
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Box h="10px"/>
                      <Field name='password'>
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.name && form.touched.name}>
                            <Input {...field} placeholder='รหัสผ่าน' />
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Forgotpassword />
                      <Button
                        mt={4}
                        w="200px"
                        color="white"
                        fontSize="14px"
                        bg="#0F63E9"
                        isLoading={props.isSubmitting}
                        type='submit'
                        position="relative"
                        top="20px"
                        left="50px"> เข้าสู่ระบบ
                        

                      </Button>
                    </Form>
                  )}
                </Formik>



              </TabPanel>

              <TabPanel>
                
                <Formik
                    initialValues={{ }}
                    onSubmit={(values, actions) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        actions.setSubmitting(false)
                      }, 1000)
                    }}
                  >
                    {(props) => (
                      <Form>
                        <Box h="5px"/>
                        <Field name='email'>
                          {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                              <Input {...field} placeholder='อีเมล' />
                              <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Box h="10px"/>
                        <Field name='password'>
                          {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                              <Input {...field} placeholder='รหัสผ่าน' />
                              <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Box h="10px"/>
                        <Field name='checkpassword'>
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.name && form.touched.name}>
                            <Input {...field} placeholder='ยืนยันรหัสผ่าน' />
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>

                      <Box position="relative" top="15px">
                        <Checkbox> 
                        <Text fontSize="8"> ยอมรับ ข้อตกลงและเงื่อนไข  และ  นโยบายความเป็นส่วนตัว </Text>
                        </Checkbox>
                      </Box>
                      

                        <Button
                          mt={4}
                          w="200px"
                          color="white"
                          fontSize="14px"
                          bg="#0F63E9"
                          isLoading={props.isSubmitting}
                          type='submit'
                          position="relative"
                          top="10px"
                          left="50px"> สมัครสมาชิก
                        </Button>
                      </Form>
                    )}
                  </Formik>

              </TabPanel>

            </TabPanels>
          </Tabs>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
      </Modal>
    </Box>
    );
  };

  const Forgotpassword = () => {
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
        <Box p="1">
          <Button onClick={onOpen} bg="white" h="15px" _hover={{ color: "#0F63E9"}} border="none" p={0} fontSize="12px" fontWeight="bold" color="#0F63E9" position="relative" left="220px" top="20px">
            <Text >ลืมรหัสผ่าน?</Text>
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} onOverlayClick={handleOverlayClick} closeOnEsc={false}>
          <ModalContent ref={modalRef} maxW="378px" w="90%" maxH="400px" h="90%" position="relative" top="110px">
            
            <ModalHeader fontFamily={'Kanit, sans-serif'}>
              <Image src={logostore} alt="Logo" width="120px" height="90px" position="relative" right="-105px" top="25px"/>
              <Text position="relative" top="50px" align="center" justify="center">ลืมรหัสผ่าน</Text> 
            </ModalHeader>
            <ModalBody align="center" justify="center">

            {/* <Box w="10px" h="10px"/> */}
            <Formik 
                initialValues={{ }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                  }, 1000)
                }}
              >
                {(props) => (
                  <Form>
                                  

                    <Box h="35px" >
                    <Text position="relative" top="50px" left="-80px" fontFamily={'Kanit, sans-serif'}>ระบุอีเมลเพื่อรีเซ็ตรหัสผ่าน</Text>
                    </Box>
                    <Box  position="relative" top="50px">
                      <Field name='email' >
                        {({ field, form }) => (
                          <FormControl isInvalid={form.errors.name && form.touched.name}>
                            <Input {...field} placeholder='อีเมล' fontFamily={'Kanit, sans-serif'}/>
                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Button
                      mt={4}
                      w="330px"
                      color="white"
                      fontSize="14px"
                      bg="#0F63E9"
                      isLoading={props.isSubmitting}
                      type='submit'
                      position="relative"
                      top="55px"
                      fontFamily={'Kanit, sans-serif'}
                    >
                      ดำเนินการต่อ
                    </Button>
                  </Form>
                )}
              </Formik>



            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
          </Modal>
        </Box>
    );
  };


  export const HeaderNotLoggedIn = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const LinkWithoutUnderline = {
      textDecoration: 'none',
    };
    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const Auth = false;
    return ( <>
    { Auth ? <HeaderLoggedIn/> : 
    <Flex as="header" align="center" py={2} px={320} borderBottom="1px" borderColor="gray.200" position={isScrolled ? 'fixed' : 'static'} top={isScrolled ? '0' : 'auto'} bg={isScrolled ? 'white' : 'transparent'} boxShadow={isScrolled ? '0px 1px 6px rgba(0, 0, 0, 0.1)' : 'none'} transition="all" zIndex="999">
      <Box w="5000px">
      <Flex align="center">
        <Link to='/' >
          <Image src={logostore} alt="Logo" width="60px" height="40px" />
        </Link>
        
        <Box p="1" ml="20px">
          <Menu>
            <MenuButton fontSize="18px" _hover={{ color: '#0F63E9' }} bg="white">
              <Flex justifyContent="column" alignItems="center">
                <Text fontFamily={'Kanit, sans-serif'}>หมวดหมู่สินค้า</Text>
                <Image src={under} alt="under" boxSize="20px" position="relative" top="2px"/>
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#EDF2F7' }}>
                Item 1
              </MenuItem>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#EDF2F7' }}>
                Item 2
              </MenuItem>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#EDF2F7' }}>
                Item 3
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        
        <Box p="2" ml="20px">
          <Menu>
            <MenuButton fontSize="18px" _hover={{ color: '#0F63E9' }} bg="white" >
              <Flex justifyContent="column" alignItems="center">
                <Text fontFamily={'Kanit, sans-serif'}>แบรนด์ยอดนิยม</Text>
                <Image src={under} alt="under" boxSize="20px" position="relative" top="2px"/>
              </Flex>
            </MenuButton>
            <MenuList >
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#EDF2F7' }}>Item 1</MenuItem>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#EDF2F7' }}>Item 2</MenuItem>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#EDF2F7' }}>Item 3</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box p="2" ml="20px">
          <Menu>
            <MenuButton fontSize="18px" _hover={{ color: '#0F63E9' }} bg="white" >
              <Flex justifyContent="column" alignItems="center">
                <Text fontFamily={'Kanit, sans-serif'}>บทความทั้งหมด</Text>
                <Image src={under} alt="under" boxSize="20px" position="relative" top="2px"/>
              </Flex>
            </MenuButton>
            <MenuList >
            <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#EDF2F7' }}>บทความทั้งหมด</MenuItem>
            </Link>
            <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#EDF2F7' }}>Hobby News</MenuItem>
            </Link>
            <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#EDF2F7' }}>Buying Guide</MenuItem>
            </Link>
            <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#EDF2F7' }}>Tips & Tricks</MenuItem>
            </Link>
            <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#EDF2F7' }}>Editor's Pick</MenuItem>
            </Link>
            <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#EDF2F7' }}>รีวิวสินค้า</MenuItem>
            </Link>
            <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#EDF2F7' }}>Best of Mercular</MenuItem>
            </Link>
            <Link to={'Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#EDF2F7' }}>เปรียบเทียบสินค้า</MenuItem>
            </Link>
            </MenuList>
          </Menu>
        </Box>

        <Box p="2" ml="20px">
          <Link to={'Login'}>
            <Menu>
              <MenuButton fontSize="18px" _hover={{ color: '#0F63E9' }} bg="white">
                <Flex justifyContent="column" alignItems="center">
                  <Text fontFamily={'Kanit, sans-serif'}>โปรโมชั่นประจำเดือน</Text>
                </Flex>
              </MenuButton>
            </Menu>
          </Link>
        </Box>
        
        <Box p="2" ml="20px">
          <Link to={'Login'}>
            <Menu>
              <MenuButton fontSize="18px" _hover={{ color: '#0F63E9' }} bg="white" >
                <Flex justifyContent="column" alignItems="center">
                  <Text fontFamily={'Kanit, sans-serif'}>สินค้าลดราคา</Text>
                </Flex>
              </MenuButton>
            </Menu>
          </Link>
        </Box>

        <SearchButtonWithModal />
        
        <Box p="1">
          <Link to={'Login'}>
            <Button w="40px" h="40px" borderRadius="50%" bg="white" border="none" p={0} _hover={{ bg: 'gray.200' }}>
              <Image src={favorite} alt="favorite" w="55%" h="55%" borderRadius="50%" />
            </Button>
          </Link>  
        </Box>

        <Box p="1">
          <Link to='/Cart'>
            <Button w="40px" h="40px" borderRadius="50%" bg="white" border="none" p={0} _hover={{ bg: 'gray.200' }}>
              <Image src={cartlogo} alt="cartlogo" w="65%" h="65%" borderRadius="50%" />
            </Button>
          </Link>
        </Box>

        
        <LoginButtonWithModal/>
        
        
        
      </Flex>
      </Box>
    </Flex>
    }
    </>
    
  );
};
export default HeaderNotLoggedIn;
