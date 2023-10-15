import React,{useState} from 'react';
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
  Button,
  Image,
  Text
} from '@chakra-ui/react';
// Import the missing useDisclosure hook
import { useDisclosure } from '@chakra-ui/react';
import favorite from './favorite.png'
import { useLocation } from 'react-router-dom';
import { dislikeProduct, likeProduct, addCart } from '../../helper/fetchData';
import Cookies from 'js-cookie';

const ProductDetail = ({product}) => {
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
            <Text fontWeight="bold">{product.brandName} {product.productName}</Text>
            <Text>
                {product?.productDescription?.detail ? product?.productDescription?.detail : "-"}
              {/* สำหรับตัดเหล็กเส้น และลวดสลิงในงานซ่อมแซม หรือ DIY ต่าง ๆ
              โดยคีมผลิตจากเหล็ก CRV ให้ความทนทาน
              ปากคีมชุบแข็งจึงไม่บิ่นเสียหายง่าย สามารถจับชิ้นงานได้แน่น */}
            </Text>
            <Text fontWeight="bold">คุณสมบัติ</Text>
            {product?.productDescription?.feature ? product?.productDescription?.feature : "-"}
            {/* <Text>เหมาะสำหรับตัดลวด และตัดแผ่นพลาสติก</Text>
            <Text>ปากคีมชุบแข็ง ทนทาน คมตัดได้ไม่กินชิ้นงาน</Text>
            <Text>ด้ามจับยางถนัดกระชับมือ ใช้งานสะดวก</Text> */}
            <Text fontWeight="bold">วิธีใช้งาน</Text>
            {product?.productDescription?.howToUse ? product?.productDescription?.howToUse : "-"}
            {/* <Text>
              เหมาะกับงานซ่อมแซม, งานเฟอร์นิเจอร์ หรือติดตั้งกับอุปกรณ์ทั่วไป
            </Text>
            <Text>
              ไม่ควรจับชิ้นงานที่ร้อน และชิ้นงานที่มีขนาดใหญ่
              เกินกว่าปากคีมจะขยายออก เพราะจะทำให้คีมเสียหาย
            </Text> */}
            <Text fontWeight="bold">คำแนะนำ</Text>
            <Text>
                {product?.productDescription?.suggestion ? product?.productDescription?.suggestion : "-"}
            </Text>
            <Text fontWeight="bold">ข้อควรระวัง</Text>
            {product?.productDescription?.warning ? product?.productDescription?.warning : "-"}
          </DrawerBody>

          <DrawerFooter fontFamily={'Kanit, sans-serif'}></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const ProductSize = ({product}) => {
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
            <Text>{product?.brandName ? product?.brandName : "-"}</Text>
            <Text fontWeight="bold">วัสดุหลัก</Text>
            <Text>{product?.productSpecification?.material ? product?.productSpecification?.material : "-"}</Text>
            <Text fontWeight="bold">ความสูง (ซม.)</Text>
            <Text>{product?.productSpecification?.height ? product?.productSpecification?.height : "-"}</Text>
            <Text fontWeight="bold">ความกว้าง (ซม.)</Text>
            <Text>{product?.productSpecification?.width ? product?.productSpecification?.width : "-"}</Text>
            <Text fontWeight="bold">ความลึก (ซม.)</Text>
            <Text>{product?.productSpecification?.depth ? product?.productSpecification?.depth : "-"}</Text>
            <Text fontWeight="bold">ขนาดสินค้า (นิ้ว)</Text>
            <Text>{product?.productSpecification?.size ? product?.productSpecification?.size : "-"}</Text>
          </DrawerBody>

          <DrawerFooter fontFamily={'Kanit, sans-serif'}></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const Product1 = () => {
  // Change function name to start with an uppercase letter
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { product, islike, urlImage } = useLocation().state;
  const [isBlue, setIsBlue] = useState(islike);
  const handleAddCart = () =>{
    addCart(product.productId).then((res)=>{
        alert(res.data.message);
    })
  }
  const handleClick = () => {
    if(isBlue){
        dislikeProduct(product.productId).then((res)=>{
            alert(res.data.message);
        })
    }else{
        likeProduct(product.productId).then((res)=>{
            alert(res.data.message);
        })
    }
    
    setIsBlue(!isBlue);
  };
  return (
    <Box w='1260px' h='1000px' position="relative" right="-320px" bottom="-10px" fontFamily={'Kanit, sans-serif'}>
      <Box w='1260px' h='50px'></Box>
      <Box w='1261px' h='1300px'>
        <Flex>
          <Box w="1040px" h="400px">
            <Flex>
              <Box w='400px' h='400px' bg="#DDDDDD" position="relative" right="-200px">
                <img src={urlImage} alt="" />
              </Box>
              {/* <Box w='400px' h='400px' bg="#DDDDDD" position="relative" right="-20px"></Box> */}
            </Flex>
            {/* <Flex position="relative" bottom="-20px">
              <Box w='400px' h='400px' bg="#DDDDDD"></Box>
              <Box w='400px' h='400px' bg="#DDDDDD" position="relative" right="-20px"></Box>
            </Flex> */}
            {/* <Flex position="relative" bottom="-40px">
              <Box w='400px' h='400px' bg="#DDDDDD"></Box>
              <Box w='400px' h='400px' bg="#DDDDDD" position="relative" right="-20px"></Box>
            </Flex> */}
          </Box>
          <Box w='440px' h='610px'>
            <Flex>
              <Text>{product.brandName}</Text>
              {  Cookies.get("email") &&
                <Box p="1" w="20px" h="20px" position="relative" right="-270px"  >
                    <Button w="40px" h="40px" borderRadius="50%" border="none" p={0} 
                    onClick={handleClick}
                    colorScheme={isBlue ? "red" : "white"}
                    >
                        <Image src={favorite} alt="favorite" w="55%" h="55%" borderRadius="50%" />
                    </Button> 
                </Box>
              }
            </Flex>
            
            <Text fontSize="22">{product.productName}</Text>
            <Text fontSize="20">{product.price} บาท</Text>
            <Box w='375px' h='250px' position="relative" bottom="-30px">
                {
                    product?.productDescription?.detail && <Text fontSize="18px">{product?.productDescription?.detail}</Text>

                }
              {/* <Text fontSize="18px">1.เหมาะสำหรับตัดลวด และตัดแผ่นพลาสติก</Text>
              <Text fontSize="18px">2.ปากคีมชุบแข็ง ทนทาน คมตัดได้ไม่กินชิ้นงาน</Text>
              <Text fontSize="18px">3.ด้ามจับยางถนัดกระชับมือ ใช้งานสะดวก</Text> */}
              <Button w="370px" h="60px" position="relative" right="-2px" bottom="-30px" rounded="100px" bg="#0F63EA" color="white" _hover={{ bgColor: '#0058A3' }}
                 onClick={handleAddCart}
              >
                เพิ่มสินค้าลงตะกร้า
              </Button>
            </Box>
            
          </Box>
        </Flex>
      </Box>
      <ProductDetail product = {product}/>
      <ProductSize product = {product} />
    </Box>
  );
};

export default Product1;
