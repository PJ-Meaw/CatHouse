import React from 'react';
import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button, // Import Button component
  Input, // Import Input component
  Text
} from '@chakra-ui/react';
// Import the missing useDisclosure hook
import { useDisclosure } from '@chakra-ui/react';

const ProductDetail = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
        <Button ref={btnRef} colorScheme='white' color="black" onClick={onOpen} w='1030px' h='115px' borderBottom="1px" borderColor="#DDDDDD" rounded="none" position="relative" top="-800px">
            <Text fontSize="24" position="relative" left="-430px">รายละเอียดสินค้า</Text>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="md"
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader fontFamily={'Kanit, sans-serif'}>รายละเอียดสินค้า</DrawerHeader>

            <DrawerBody fontFamily={'Kanit, sans-serif'}>
              <Text fontWeight="bold">คีมตัดเหล็กและลวดสลิง ANTON</Text>
              <Text>สำหรับตัดเหล็กเส้น และลวดสลิงในงานซ่อมแซม หรือ DIY ต่าง ๆ โดยคีมผลิตจากเหล็ก CRV ให้ความทนทาน ปากคีมชุบแข็งจึงไม่บิ่นเสียหายง่าย สามารถจับชิ้นงานได้แน่น</Text>
              <Text fontWeight="bold">คุณสมบัติ</Text>
              <Text>เหมาะสำหรับตัดลวด และตัดแผ่นพลาสติก</Text>
              <Text>ปากคีมชุบแข็ง ทนทาน คมตัดได้ไม่กินชิ้นงาน</Text>
              <Text>ด้ามจับยางถนัดกระชับมือ ใช้งานสะดวก</Text>
              <Text fontWeight="bold" >วิธีใช้งาน</Text>
              <Text>เหมาะกับงานซ่อมแซม, งานเฟอร์นิเจอร์ หรือติดตั้งกับอุปกรณ์ทั่วไป</Text>
              <Text>ไม่ควรจับชิ้นงานที่ร้อน และชิ้นงานที่มีขนาดใหญ่ เกินกว่าปากคีมจะขยายออก เพราะจะทำให้คีมเสียหาย</Text>
              <Text fontWeight="bold" >คำแนะนำ</Text>
              <Text>ควรใช้ผ้าชุบน้ำมันกันสนิมเช็ดส่วนที่เป็นโลหะทุกครั้งหลังใช้งาน</Text>
              <Text fontWeight="bold">ข้อควรระวัง</Text>
              <Text>ห้ามดัดแปลง แก้ไขสินค้า หรือนำไปใช้งานผิดประเภท</Text>
              <Text>ห้ามใช้สารเคมีที่มีฤทธิ์เป็นกรด และด่างทำความสะอาด</Text>
              <Text>จัดเก็บในที่แห้ง และพ้นมือเด็ก</Text>
            </DrawerBody>

            <DrawerFooter fontFamily={'Kanit, sans-serif'}>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
};

const ProductSize = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
        <>
        <Button ref={btnRef} colorScheme='white' color="black" onClick={onOpen} w='1030px' h='115px' borderBottom="1px" borderColor="#DDDDDD" rounded="none" position="relative" top="-800px">
            <Text fontSize="24" position="relative" left="-450px">ข้อมูลจำเพาะ</Text>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="md"
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader fontFamily={'Kanit, sans-serif'}>ข้อมูลจำเพาะ</DrawerHeader>

            <DrawerBody fontFamily={'Kanit, sans-serif'}>
              <Text fontWeight="bold">แบรนด์</Text>
              <Text>ANTON</Text>
              <Text fontWeight="bold">วัสดุหลัก</Text>
              <Text>เหล็ก</Text>
              <Text fontWeight="bold">ความสูง (ซม.)</Text>
              <Text>9</Text>
              <Text fontWeight="bold">ความกว้าง (ซม.)</Text>
              <Text>26.5</Text>
              <Text fontWeight="bold">ความลึก (ซม.)</Text>
              <Text>1.5</Text>
              <Text fontWeight="bold">ขนาดสินค้า (นิ้ว)</Text>
              <Text>0</Text>

            </DrawerBody>

            <DrawerFooter fontFamily={'Kanit, sans-serif'}>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
};

const Product1 = () => { // Change function name to start with an uppercase letter
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box w='1260px' h='1700px' position="relative" right="-320px" bottom="-10px" fontFamily={'Kanit, sans-serif'}>
      <Box w='1260px' h='30px' bg="blue.200"></Box>
      <Box w='1260px' h='50px'></Box>
      <Box w='1260px' h='2100px'>
        <Flex>
          <Box w='1040px' h='2100px'>
            <Flex>
              <Box w='400px' h='400px' bg="orange.200"></Box>
              <Box w='400px' h='400px' bg="orange.200" position="relative" right="-20px"></Box>
            </Flex>
            <Flex position="relative" bottom="-20px">
              <Box w='400px' h='400px' bg="orange.200"></Box>
              <Box w='400px' h='400px' bg="orange.200" position="relative" right="-20px"></Box>
            </Flex>
            <Flex position="relative" bottom="-40px">
              <Box w='400px' h='400px' bg="orange.200"></Box>
              <Box w='400px' h='400px' bg="orange.200" position="relative" right="-20px"></Box>
            </Flex>
          </Box>
          <Box w='440px' h='610px' bg="orange.200">
            <Text>ANTON</Text>
            <Text fontSize="22">คีมตัดเหล็กและลวดสลิง ANTON</Text>
            <Text fontSize="20">390บาท</Text>
            <Box w='375px' h='250px' bg="gray" position="relative" bottom="-30px">

            </Box>
            <Box w='375px' h='55px' bg="blue" position="relative" bottom="-60px">

            </Box>
          </Box>
        </Flex>
      </Box>
      <ProductDetail/>
      <ProductSize/>
    </Box>
  );
};

export default Product1;
