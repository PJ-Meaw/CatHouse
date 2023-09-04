import React, { useEffect, useState, useRef } from 'react';
import logostore from '../assets/logo.png'
import fulllogostore from '../assets/fulllogo.png'
import search from '../assets/search.png'
import cartlogo from '../assets/cart.png'
import under from '../assets/under.png'
import profile from '../assets/profile.png'
import profilewhite from '../assets/profilewhite.png'
import favorite from '../assets/favorite.png'
import emailpic from '../assets/email.png'
import leftchevron from '../assets/leftchevron.png'
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

  export const HeaderLoggedIn = () => {
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

    return (
    <Flex as="header" align="center" py={2} px={320} borderBottom="1px" borderColor="gray.200" position={isScrolled ? 'fixed' : 'static'} top={isScrolled ? '0' : 'auto'} bg={isScrolled ? 'white' : 'transparent'} boxShadow={isScrolled ? '0px 1px 6px rgba(0, 0, 0, 0.1)' : 'none'} transition="all" zIndex="999">
      <Box w="5000px">
      <Flex align="center">
        <Link to={'/HomewithLogin'}>
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
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>
                Item 1
              </MenuItem>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>
                Item 2
              </MenuItem>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>
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
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>Item 1</MenuItem>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>Item 2</MenuItem>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>Item 3</MenuItem>
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
            <Link to={'/Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>บทความทั้งหมด</MenuItem>
            </Link>
            <Link to={'/Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>Hobby News</MenuItem>
            </Link>
            <Link to={'/Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>Buying Guide</MenuItem>
            </Link>
            <Link to={'/Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>Tips & Tricks</MenuItem>
            </Link>
            <Link to={'/Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>Editor's Pick</MenuItem>
            </Link>
            <Link to={'/Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>รีวิวสินค้า</MenuItem>
            </Link>
            <Link to={'/Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>Best of Mercular</MenuItem>
            </Link>
            <Link to={'/Login'} _hover={{LinkWithoutUnderline}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
              <MenuItem fontFamily={'Kanit, sans-serif'} fontSize="18px" _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>เปรียบเทียบสินค้า</MenuItem>
            </Link>
            </MenuList>
          </Menu>
        </Box>

        <Box p="2" ml="20px">
          <Link to={'/Login'}>
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
          <Link to={'/Login'}>
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
          <Link to='/WL'>
            <Button w="40px" h="40px" borderRadius="50%" bg="white" border="none" p={0} _hover={{ bg: 'gray.200' }}>
              <Image src={favorite} alt="favorite" w="55%" h="55%" borderRadius="50%" />
            </Button>
          </Link>  
        </Box>

        <Box p="1">
          <Link to={'Login'}>
            <Button w="40px" h="40px" borderRadius="50%" bg="white" border="none" p={0} _hover={{ bg: 'gray.200' }}>
              <Image src={cartlogo} alt="cartlogo" w="65%" h="65%" borderRadius="50%" />
            </Button>
          </Link>
        </Box>

        <Box p="1">
          {/* <Link to={'Login'}>
            <Button w="40px" h="40px" borderRadius="50%" bg="#0F63E9" border="none" p={0} _hover={{ bg: '#0F63E9' }}>
            </Button>
          </Link> */}
          <Menu>
            <MenuButton w="40px" h="40px" borderRadius="50%" bg="#0F63E9" border="none" p={0} _hover={{ bg: '#0F63E9' }}>
              <Image src={profilewhite} alt="profilewhite" w="65%" h="65%" borderRadius="50%" position="relative" left="6.5px" />
            </MenuButton>
            <MenuList fontFamily={'Kanit, sans-serif'}>
            < Link to='/Account' ><MenuItem _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>บัญชีของฉัน</MenuItem></Link>
              <Link to='/OL' ><MenuItem _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>รายการคำสั่งซื้อ</MenuItem></Link>
              <Link to='/WL' ><MenuItem _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>รายการสินค้าที่สนใจ</MenuItem></Link>
              <Link to='/' >
                <MenuItem _hover={{ color: '#0F63E9', bg: '#ECF3FD' }}>
                  ออกจากระบบ
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
          
        </Box>
        
      </Flex>
      </Box>
    </Flex>

  );
};
export default HeaderLoggedIn;