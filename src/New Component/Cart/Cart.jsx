import React,{ useContext, useEffect, useState } from 'react';
import {Box, Text, Flex} from '@chakra-ui/react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';
import Cookies from 'js-cookie';
import { fetchUserData_API, fetchDetailCart_API, updateAmountCart_API, deleteProductCart_API } from '../../helper/fetchData';
import { setObjUserData } from '../../helper/setobjData';
import { bufferToImage } from '../../helper/bufferToImage';

const Cart = () => { // Change function name to start with an uppercase letter
    const {userData, setUserData} = useContext(Context);
    const [cartData, setCartData] = useState();
    const [totalPrice , setTotalPrice] = useState(0);
    useEffect(()=>{
        console.log(userData);
        Promise.all([fetchUserData_API(), fetchDetailCart_API()])
        .then(([resUserData,resDetailCart])=>{
            if(resUserData.data.status && resDetailCart.data.status){
                const objUserData = setObjUserData(resUserData.data.user);
                const json = JSON.stringify(objUserData);
                Cookies.set('userData', json);
                //store userData from fetching
                setUserData(objUserData);

                //stote cart 
                setCartData(resDetailCart.data.cartDetail);
                //use data cart in userData (using resDetailCart.data.cartDetail instead because asynchronous)
                //set total price default 
                const result = resDetailCart.data.cartDetail.reduce((prev,curr)=>{
                    return prev + (curr.price * curr.amount);
                }, 0);
                setTotalPrice(result)
            }else{
                console.warn("fetch error");
            }
        })
    },[])

    function fetchUpdateAmount(productId, amount){
        // update amount cart in database
        updateAmountCart_API(productId, amount).then((res)=>{
            if(res.data.status){
                console.log(res.data.message)
            }else{
                console.warn(res.status)
            }
        })

        // set **amount** cart for update total price 
        const updatedCart = cartData.map((cartProduct)=>{
            if(cartProduct.productId === productId){
                return {...cartProduct, amount : Number(amount)}
            }
            return {...cartProduct}
        })
        setCartData(updatedCart);
        

        //update total price
        setTotalPrice(updatedCart.reduce((prev,curr)=>{
            return prev + (curr.price * curr.amount);
        }, 0))
    }
    function deleteProductCart(productId){
        deleteProductCart_API(productId).then((res)=>{
            if(res.data.status){
                console.log(res.data.message)
            }else{
                console.warn(res.status)
            }
        })
        // delete 1 product in cart
        setCartData(cartData.filter((cartProduct)=> cartProduct.productId != productId))   
    }

  return (
    <Box w='1260px' h='800px' position="relative" right="-320px" bottom="-20px" fontFamily={'Kanit, sans-serif'} >
        <Box><Text fontSize="32" fontWeight="bold" letterSpacing="2px">ตะกร้าสินค้าของคุณ</Text></Box>

        <Flex h='200px' position="relative" bottom="-20px" >
        <Box>
        {
            cartData?.map((product)=>{
                console.log(product.productId)
                const urlImage = product.productImage ? bufferToImage(product.productImage.data, product.productImage.contentType) : "";
                return (
                    <Box w='705px' h='200px' borderTop="1px solid #D3D3D3" key={product.productId}>
                        <Box w='100px' h='25px'/>
                        <Flex>
                            <Box w='150px' h='150px' bg="gray.200" position="relative" right="-10px">
                                <img src={urlImage} alt={product.productName} />
                            </Box>
                            <Box w='240px' h='150px'  position="relative" right="-50px">
                                <Text>{product.brandName} {product.productName}</Text>
                                <Text color="gray">จาน, ผิวด้าน สีไลท์เทอร์ควอยซ์</Text>
                                <Text color="gray">26 ซม.</Text>
                                <NumberInput size='md' maxW={99} defaultValue={product.amount} max={product.quantity} min={1} position="relative" bottom="-35px" onChange={(value)=> {fetchUpdateAmount(product.productId,Number(value))}}>
                                    <NumberInputField />
                                    <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                                <div onClick={()=>{deleteProductCart(product.productId)}}>
                                    <Button position="relative" right="-110px" top="-5px" bg="white" fontSize="12px" rounded="20px" >ลบออก</Button>
                                </div>
                            </Box>
                            <Box w='100px' h='50px' position="relative" right="-220px"><Text display="flex" justifyContent="center">{product.price} บาท</Text></Box>
                        </Flex>
                    </Box>
                );
            })
        }
        </Box>
        {/* สินค้าตัวที่ 1 */}
          {/* <Box w='705px' h='200px' borderTop="1px solid #D3D3D3">
            <Box w='100px' h='25px'/>
              <Flex>
                <Box w='150px' h='150px' bg="gray.200" position="relative" right="-10px"></Box>
                <Box w='240px' h='150px'  position="relative" right="-50px">
                  <Text>FÄRGKLAR แฟรีคลาร์</Text>
                  <Text color="gray">จาน, ผิวด้าน สีไลท์เทอร์ควอยซ์</Text>
                  <Text color="gray">26 ซม.</Text>
                  <NumberInput size='md' maxW={99} defaultValue={1} max={100} min={1} position="relative" bottom="-35px" onChange={(value)=> {console.log(value)}}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Button position="relative" right="-110px" top="-5px" bg="white" fontSize="12px" rounded="20px">ลบออก</Button>
                </Box>
                
                <Box w='100px' h='50px' position="relative" right="-220px"><Text display="flex" justifyContent="center">399 บาท</Text></Box>
                
              </Flex>
            
          </Box> */}
          
        <Flex position="relative" right="-50px" >
          
        {/* รายละเอียดคำสั่งซื้อ */}
        
          <Box w='505px' h='500px'>
          <Box w="505px" h="10px" position="relative" top="-30px"><Text fontSize="18px" fontWeight="bold" letterSpacing="1px">สรุปคำสั่งซื้อ</Text></Box>
            <Box>
              <Flex>
                <Text color="#4E484E">สินค้า({cartData?.length})</Text>
                <Text color="#4E484E" position="relative" right="-390px">{totalPrice} บาท</Text>
              </Flex>
            </Box>
          <Box w="505px" h="15px"/>
          <Box >
            <Box w="505px" h="15px" borderTop="3px solid black"/>
            <Flex position="relative" bottom="-5px">
              <Box><Text fontSize="18px">ยอดสั่งซื้อรวมภาษีมูลค่าเพิ่ม</Text></Box>
              <Box position="relative" right="-213px"><Text fontSize="24px">{totalPrice} บาท</Text></Box>
            </Flex>
          </Box>
          <Text position="relative" bottom="-10px" color="#9AA5B8" fontSize="14px">เมื่อคลิก "ชำระเงิน" แสดงว่าคุณยอมรับ นโยบายความเป็นส่วนตัว</Text>
          <Link to="/PaymentPage" state={{totalPrice : totalPrice, cartData : cartData}}>
            <Button w="500px" h="60px" position="relative" right="-2px" bottom="-20px" rounded="100px" bg="#0F63EA" color="white" _hover={{ bgColor: '#0058A3' }} >ชำระเงิน</Button>
          </Link>
          </Box>
        </Flex>
        </Flex>

        {/* สินค้าตัวที่ 2 */}
        {/* <Box w='100px' h='25px'/>
        <Box w='705px' h='200px' borderTop="1px solid #D3D3D3">
            <Box w='100px' h='25px'></Box>
              <Flex>
                <Box w='150px' h='150px' bg="gray.200" position="relative" right="-10px"></Box>
                <Box w='240px' h='150px'  position="relative" right="-50px">
                  <Text>FÄRGKLAR แฟรีคลาร์</Text>
                  <Text color="gray">จาน, ผิวด้าน สีไลท์เทอร์ควอยซ์</Text>
                  <Text color="gray">26 ซม.</Text>
                  <NumberInput size='md' maxW={99} defaultValue={1} min={1} position="relative" bottom="-35px">
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Button position="relative" right="-110px" top="-5px" bg="white" fontSize="12px" rounded="20px">ลบออก</Button>
                </Box>
                <Box w='100px' h='50px' position="relative" right="-220px"><Text display="flex" justifyContent="center">399 บาท</Text></Box>
                
              </Flex>
            
          </Box> */}

        {/* สินค้าตัวที่ 3 */}
        {/* <Box w='100px' h='25px'/>
        <Box w='705px' h='200px' borderTop="1px solid #D3D3D3">
            <Box w='100px' h='25px'></Box>
              <Flex>
                <Box w='150px' h='150px' bg="gray.200" position="relative" right="-10px"></Box>
                <Box w='240px' h='150px'  position="relative" right="-50px">
                  <Text>FÄRGKLAR แฟรีคลาร์</Text>
                  <Text color="gray">จาน, ผิวด้าน สีไลท์เทอร์ควอยซ์</Text>
                  <Text color="gray">26 ซม.</Text>
                  <NumberInput size='md' maxW={99} defaultValue={1} min={1} position="relative" bottom="-35px">
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Button position="relative" right="-110px" top="-5px" bg="white" fontSize="12px" rounded="20px">ลบออก</Button>
                </Box>
                <Box w='100px' h='50px' position="relative" right="-220px"><Text display="flex" justifyContent="center">399 บาท</Text></Box>
                
              </Flex>
            
          </Box> */}

    </Box>
  );
};

export default Cart;
