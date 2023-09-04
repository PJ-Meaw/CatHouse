import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue, TabIndicator, Button, Image, Text } from '@chakra-ui/react';
import RightVector from '../assets/LeftVector.png'
import verticalimg1 from '../assets/verticalimg1.png';
import verticalimg2 from '../assets/verticalimg2.png';
import verticalimg3 from '../assets/verticalimg3.png';
import verticalimg4 from '../assets/verticalimg4.png';
import verticalimg5 from '../assets/verticalimg5.png';
import verticalimg6 from '../assets/verticalimg6.png';
import verticalimg7 from '../assets/verticalimg7.png';
import verticalimg8 from '../assets/verticalimg8.png';
import bigimg2 from '../assets/bigimg2.png';
import bigimg3 from '../assets/bigimg3.png';
import bigimg4 from '../assets/bigimg4.png';
import bigimg5 from '../assets/bigimg5.png';
import bigimg6 from '../assets/bigimg6.png';
import bigimg7 from '../assets/bigimg7.png';
import bigimg8 from '../assets/bigimg8.png';
import bigimg9 from '../assets/bigimg9.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';
import img13 from '../assets/img13.png';
import img14 from '../assets/img14.png';
import img15 from '../assets/img15.png';
import img16 from '../assets/img16.png';
import img17 from '../assets/img17.png';
import img18 from '../assets/img18.png';
import img19 from '../assets/img19.png';
import img20 from '../assets/img20.png';
import img21 from '../assets/img21.png';
import img22 from '../assets/img22.png';
import img23 from '../assets/img23.png';
import img24 from '../assets/img24.png';
import img25 from '../assets/img25.png';
import img26 from '../assets/img26.png';
import img27 from '../assets/img27.png';
import img28 from '../assets/img28.png';
import img29 from '../assets/img29.png';
import img30 from '../assets/img30.png';
import img31 from '../assets/img31.png';
import img32 from '../assets/img32.png';
import img33 from '../assets/img33.png';
import img34 from '../assets/img34.png';
import img35 from '../assets/img35.png';
import img36 from '../assets/img36.png';

const Article = () => {
  const activeTabColor = useColorModeValue('#0F63E9', '#0F63E9');
  const activeTabBgColor = useColorModeValue('#D8E6FB', '#D8E6FB');
  const LinkWithoutUnderline = {
    textDecoration: 'none',
  };
  return (

    <Flex align="center" justify="center" fontFamily={'Kanit, sans-serif'} minHeight="76vh">
      <Tabs position="relative" width="1320px" variant="unstyled">
        <Flex justify="space-between" align="center">
          <TabList >
            <Tab borderRadius="7px" _hover={{ color: activeTabColor, bg: activeTabBgColor}} colorScheme="#0F63E9" _selected={{ color: activeTabColor }} _focus={{ boxShadow: 'none' }}>บทความทั้งหมด</Tab>
            <Tab borderRadius="7px" _hover={{ color: activeTabColor, bg: activeTabBgColor}} colorScheme="#0F63E9" _selected={{ color: activeTabColor }} _focus={{ boxShadow: 'none' }}>Hobby News</Tab>
            <Tab borderRadius="7px" _hover={{ color: activeTabColor, bg: activeTabBgColor}} colorScheme="#0F63E9" _selected={{ color: activeTabColor }} _focus={{ boxShadow: 'none' }}>Buying Guide</Tab>
            <Tab borderRadius="7px" _hover={{ color: activeTabColor, bg: activeTabBgColor}} colorScheme="#0F63E9" _selected={{ color: activeTabColor }} _focus={{ boxShadow: 'none' }}>Tips & Tricks</Tab>
            <Tab borderRadius="7px" _hover={{ color: activeTabColor, bg: activeTabBgColor}} colorScheme="#0F63E9" _selected={{ color: activeTabColor }} _focus={{ boxShadow: 'none' }}>Editors's Pick</Tab>
            <Tab borderRadius="7px" _hover={{ color: activeTabColor, bg: activeTabBgColor}} colorScheme="#0F63E9" _selected={{ color: activeTabColor }} _focus={{ boxShadow: 'none' }}>รีวิวสินค้า</Tab>
            <Tab borderRadius="7px" _hover={{ color: activeTabColor, bg: activeTabBgColor}} colorScheme="#0F63E9" _selected={{ color: activeTabColor }} _focus={{ boxShadow: 'none' }}>Best of CatHouse</Tab>
            <Tab borderRadius="7px" _hover={{ color: activeTabColor, bg: activeTabBgColor}} colorScheme="#0F63E9" _selected={{ color: activeTabColor }} _focus={{ boxShadow: 'none' }}>เปรียบเทียบสินค้า</Tab>   
          </TabList>
            <Link to={'Login'}>
                <Button  colorScheme="white" color="#0F63E9" bgColor="white" _hover={{ bgColor: "#D8E6FB" }} _active={{ bgColor: "#0F63E9" }} _focus={{ boxShadow: "outline", borderColor: "transparent" }} rightIcon={<img src={RightVector} alt="RightVector" style={{ width: "16px", height: "16px", marginTop: "2px" }} />}>บทความทั้งหมด</Button>
            </Link>
        </Flex>
        <TabIndicator mt="-1.5px" height="2px" bg="#0F63E9" borderRadius="1px" />
        <TabPanels>
          <TabPanel>
              <Box width="1290px" height="500px" borderRadius="md" position="relative">
                <Flex align="center" justify="center">
                  <Box width="1290px" height="500px" borderRadius="md" position="relative">
                    <Flex height="100%">
                      <Box width="15%" height="100%" borderRadius="md">
                          <Link to={'Login'}>
                            <Image src={verticalimg1} alt="Image 9" borderRadius="md" objectFit="cover" width="100%" height="53.8vh" />
                          </Link>
                      </Box>
                      <Box width="1.5%" height="100%" borderRadius="md" />
                      <Box width="41%" height="100%" borderRadius="md">
                        <Box width="100%" height="67%" borderRadius="md">
                          <Link to={'Login'}>
                            <Image src={bigimg9} alt="Image 10" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                          </Link>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md"/>
                        <Box width="100%" height="29%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md">
                                <Link to={'Login'}>
                                  <Image src={img5} alt="Image 11" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                      </Box>
                      <Box width="1.5%" height="100%" borderRadius="md" />
                      <Box width="42%" height="100%" borderRadius="md">
                        <Box width="100%" height="30.67%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img6} alt="Image 12" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md" />
                        <Box width="100%" height="30.67%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img7} alt="Image 13" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md" />
                        <Box width="100%" height="30.67%" borderRadius="md">
                        <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img8} alt="Image 14" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                      <Text fontSize="12">วัน เดือน ปี</Text>
                                      <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                      <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                    </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box width="1290px" height="500px" borderRadius="md" position="relative">
                <Flex align="center" justify="center">
                  <Box width="1290px" height="500px" borderRadius="md" position="relative">
                    <Flex height="100%">
                      <Box width="15%" height="100%" borderRadius="md">
                          <Link to={'Login'}>
                            <Image src={verticalimg2} alt="Image 9" borderRadius="md" objectFit="cover" width="100%" height="53.8vh" />
                          </Link>
                      </Box>
                      <Box width="1.5%" height="100%" borderRadius="md" />
                      <Box width="41%" height="100%" borderRadius="md">
                        <Box width="100%" height="67%" borderRadius="md">
                          <Link to={'Login'}>
                            <Image src={bigimg8} alt="Image 10" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                          </Link>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md"/>
                        <Box width="100%" height="29%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md">
                                <Link to={'Login'}>
                                  <Image src={img9} alt="Image 11" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                      </Box>
                      <Box width="1.5%" height="100%" borderRadius="md" />
                      <Box width="42%" height="100%" borderRadius="md">
                        <Box width="100%" height="30.67%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img10} alt="Image 12" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md" />
                        <Box width="100%" height="30.67%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img11} alt="Image 13" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md" />
                        <Box width="100%" height="30.67%" borderRadius="md">
                        <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img12} alt="Image 14" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </TabPanel>
              <TabPanel>
              <Box width="1290px" height="500px" borderRadius="md" position="relative">
                <Flex align="center" justify="center">
                  <Box width="1290px" height="500px" borderRadius="md" position="relative">
                    <Flex height="100%">
                      <Box width="15%" height="100%" borderRadius="md">
                          <Link to={'Login'}>
                            <Image src={verticalimg3} alt="Image 9" borderRadius="md" objectFit="cover" width="100%" height="53.8vh" />
                          </Link>
                      </Box>
                      <Box width="1.5%" height="100%" borderRadius="md" />
                      <Box width="41%" height="100%" borderRadius="md">
                        <Box width="100%" height="67%" borderRadius="md">
                          <Link to={'Login'}>
                            <Image src={bigimg7} alt="Image 10" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                          </Link>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md"/>
                        <Box width="100%" height="29%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md">
                                <Link to={'Login'}>
                                  <Image src={img13} alt="Image 11" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                      </Box>
                      <Box width="1.5%" height="100%" borderRadius="md" />
                      <Box width="42%" height="100%" borderRadius="md">
                        <Box width="100%" height="30.67%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img14} alt="Image 12" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md" />
                        <Box width="100%" height="30.67%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img15} alt="Image 13" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md" />
                        <Box width="100%" height="30.67%" borderRadius="md">
                        <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img16} alt="Image 14" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box width="1290px" height="500px" borderRadius="md" position="relative">
                <Flex align="center" justify="center">
                  <Box width="1290px" height="500px" borderRadius="md" position="relative">
                    <Flex height="100%">
                      <Box width="15%" height="100%" borderRadius="md">
                          <Link to={'Login'}>
                            <Image src={verticalimg4} alt="Image 9" borderRadius="md" objectFit="cover" width="100%" height="53.8vh" />
                          </Link>
                      </Box>
                      <Box width="1.5%" height="100%" borderRadius="md" />
                      <Box width="41%" height="100%" borderRadius="md">
                        <Box width="100%" height="67%" borderRadius="md">
                          <Link to={'Login'}>
                            <Image src={bigimg6} alt="Image 10" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                          </Link>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md"/>
                        <Box width="100%" height="29%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md">
                                <Link to={'Login'}>
                                  <Image src={img17} alt="Image 11" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                      </Box>
                      <Box width="1.5%" height="100%" borderRadius="md" />
                      <Box width="42%" height="100%" borderRadius="md">
                        <Box width="100%" height="30.67%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img18} alt="Image 12" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md" />
                        <Box width="100%" height="30.67%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img19} alt="Image 13" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md" />
                        <Box width="100%" height="30.67%" borderRadius="md">
                        <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img20} alt="Image 14" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box width="1290px" height="500px" borderRadius="md" position="relative">
                <Flex align="center" justify="center">
                  <Box width="1290px" height="500px" borderRadius="md" position="relative">
                    <Flex height="100%">
                      <Box width="15%" height="100%" borderRadius="md">
                          <Link to={'Login'}>
                            <Image src={verticalimg5} alt="Image 9" borderRadius="md" objectFit="cover" width="100%" height="53.8vh" />
                          </Link>
                      </Box>
                      <Box width="1.5%" height="100%" borderRadius="md" />
                      <Box width="41%" height="100%" borderRadius="md">
                        <Box width="100%" height="67%" borderRadius="md">
                          <Link to={'Login'}>
                            <Image src={bigimg5} alt="Image 10" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                          </Link>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md"/>
                        <Box width="100%" height="29%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md">
                                <Link to={'Login'}>
                                  <Image src={img21} alt="Image 11" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                      </Box>
                      <Box width="1.5%" height="100%" borderRadius="md" />
                      <Box width="42%" height="100%" borderRadius="md">
                        <Box width="100%" height="30.67%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img22} alt="Image 12" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md" />
                        <Box width="100%" height="30.67%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img23} alt="Image 13" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md" />
                        <Box width="100%" height="30.67%" borderRadius="md">
                        <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img24} alt="Image 14" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box width="1290px" height="500px" borderRadius="md" position="relative">
                <Flex align="center" justify="center">
                  <Box width="1290px" height="500px" borderRadius="md" position="relative">
                    <Flex height="100%">
                      <Box width="15%" height="100%" borderRadius="md">
                          <Link to={'Login'}>
                            <Image src={verticalimg6} alt="Image 9" borderRadius="md" objectFit="cover" width="100%" height="53.8vh" />
                          </Link>
                      </Box>
                      <Box width="1.5%" height="100%" borderRadius="md" />
                      <Box width="41%" height="100%" borderRadius="md">
                        <Box width="100%" height="67%" borderRadius="md">
                          <Link to={'Login'}>
                            <Image src={bigimg4} alt="Image 10" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                          </Link>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md"/>
                        <Box width="100%" height="29%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md">
                                <Link to={'Login'}>
                                  <Image src={img25} alt="Image 11" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%" >
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                      </Box>
                      <Box width="1.5%" height="100%" borderRadius="md" />
                      <Box width="42%" height="100%" borderRadius="md">
                        <Box width="100%" height="30.67%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img26} alt="Image 12" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%" >
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md" />
                        <Box width="100%" height="30.67%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img27} alt="Image 13" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%" >
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md" />
                        <Box width="100%" height="30.67%" borderRadius="md">
                        <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img28} alt="Image 14" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%" >
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box width="1290px" height="500px" borderRadius="md" position="relative">
                <Flex align="center" justify="center">
                  <Box width="1290px" height="500px" borderRadius="md" position="relative">
                    <Flex height="100%">
                      <Box width="15%" height="100%" borderRadius="md">
                          <Link to={'Login'}>
                            <Image src={verticalimg7} alt="Image 9" borderRadius="md" objectFit="cover" width="100%" height="53.8vh" />
                          </Link>
                      </Box>
                      <Box width="1.5%" height="100%" borderRadius="md" />
                      <Box width="41%" height="100%" borderRadius="md">
                        <Box width="100%" height="67%" borderRadius="md">
                          <Link to={'Login'}>
                            <Image src={bigimg3} alt="Image 10" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                          </Link>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md"/>
                        <Box width="100%" height="29%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md">
                                <Link to={'Login'}>
                                  <Image src={img29} alt="Image 11" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                      </Box>
                      <Box width="1.5%" height="100%" borderRadius="md" />
                      <Box width="42%" height="100%" borderRadius="md">
                        <Box width="100%" height="30.67%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img30} alt="Image 12" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md" />
                        <Box width="100%" height="30.67%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img31} alt="Image 13" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md" />
                        <Box width="100%" height="30.67%" borderRadius="md">
                        <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img32} alt="Image 14" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%" >
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box width="1290px" height="500px" borderRadius="md" position="relative">
                <Flex align="center" justify="center">
                  <Box width="1290px" height="500px" borderRadius="md" position="relative">
                    <Flex height="100%">
                      <Box width="15%" height="100%" borderRadius="md">
                          <Link to={'Login'}>
                            <Image src={verticalimg8} alt="Image 9" borderRadius="md" objectFit="cover" width="100%" height="53.8vh" />
                          </Link>
                      </Box>
                      <Box width="1.5%" height="100%" borderRadius="md" />
                      <Box width="41%" height="100%" borderRadius="md">
                        <Box width="100%" height="67%" borderRadius="md">
                          <Link to={'Login'}>
                            <Image src={bigimg2} alt="Image 10" borderRadius="md" objectFit="contain" width="100%"  height="100%" />
                          </Link>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md"/>
                        <Box width="100%" height="29%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md">
                                <Link to={'Login'}>
                                  <Image src={img33} alt="Image 11" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%" >
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                      </Box>
                      <Box width="1.5%" height="100%" borderRadius="md" />
                      <Box width="42%" height="100%" borderRadius="md">
                        <Box width="100%" height="30.67%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img34} alt="Image 12" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md" />
                        <Box width="100%" height="30.67%" borderRadius="md">
                            <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img35} alt="Image 13" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                                <Box width="4%" height="100%" borderRadius="md"/>
                                <Box width="38%" height="100%" borderRadius="md">
                                  <Link to={'Login'} width="100%" height="100%">
                                    <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                        <Text fontSize="12">วัน เดือน ปี</Text>
                                        <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                        <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                      </Flex>
                                  </Link>
                                </Box>
                            </Flex>
                        </Box>
                        <Box width="100%" height="4%" borderRadius="md" />
                        <Box width="100%" height="30.67%" borderRadius="md">
                        <Flex height="100%">
                              <Box width="58%" height="100%" borderRadius="md"> 
                                <Link to={'Login'}>
                                  <Image src={img36} alt="Image 14" borderRadius="md" objectFit="cover" width="100%"  height="100%" />
                                </Link>
                              </Box>
                              <Box width="4%" height="100%" borderRadius="md"/>
                              <Box width="38%" height="100%" borderRadius="md">
                                <Link to={'Login'} width="100%" height="100%" >
                                  <Flex direction="column" borderRadius="md" width="100%" height="100%" _hover={{LinkWithoutUnderline, color: "#2663E9"}} _focus={LinkWithoutUnderline} _active={LinkWithoutUnderline}>
                                      <Text fontSize="12">วัน เดือน ปี</Text>
                                      <Text fontSize="18" fontWeight="bold">หัวข้ออออออออออออออออออออออออ</Text>
                                      <Text fontSize="12">รายละเอียดดดดดดดดดดดดดดดดดดดด</Text>
                                    </Flex>
                                </Link>
                              </Box>
                          </Flex>
                        </Box>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Article;