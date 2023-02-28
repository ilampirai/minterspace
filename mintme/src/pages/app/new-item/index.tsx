import { Box, Center, Flex, Heading, Spacer,VStack ,SimpleGrid,Text} from "@chakra-ui/react"
import { HowItWorks, SupportingResources, Showcase, LoginText } from "ui/Home"

import AppLayout from "../../../components/AppLayout"
import { CollectibleCreateForm } from "../../../components/form/CollectibleCreateForm"
import { Generateimage } from "../../../components/form/Generateimage"
import { useRef } from "react"
 
const ListItem = ({ index, title, children }) => {
  return (
    <Flex direction="column" gap="0.4rem">
      <Flex gap="0.6rem" alignItems="center" fontWeight="bold">
        <Center rounded="full" h="40px" w="40px" color="white" fontSize="xl" bgColor="content.400">
          {index}
        </Center>
        <Text fontSize="2rem">{title}</Text>
      </Flex>
      {children}
    </Flex>
  )
}

const NewItemPage = () => {
  const scrollRef = useRef<HTMLDivElement>()
  return (
    <>
      <AppLayout title="Create New NFT | Minterspace" showSidebar={true}>
        <VStack w="full" p="1rem" my="1rem" gap="1rem">
          <Center px={{ base: "0", md: "1rem" }} w="full" flexDirection="column">
             
              <Heading
                as="h5"
                fontWeight="700"
                textAlign="center"
                maxW="600"
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                Generate Your Unique NFT Here
              </Heading>


              <SimpleGrid columns={2} spacing={10}  minW={{ base: "100%", md: "800px" }}>
             

                <Flex
                 
                  alignItems="center"
                  bgColor="white" shadow="lg"
                  justifyContent="center"
                  minH={{ base: "150px" }}
                  my='5'
                  borderRadius="xl" p={{ base: "1rem" }}
                >
          
                  <Generateimage /> 
                  
                  </Flex>


                  <Flex
                 
                  alignItems="center"
                  bgColor="white" shadow="lg"
                  justifyContent="center"
                  minH={{ base: "150px" }}
                  my='5'
                  borderRadius="xl" p={{ base: "1rem" }}
                >
          
          <Box flex={1}>
          <VStack alignItems="flex-starts" gap="1.2rem">
            <Heading fontSize="1rem">Steps</Heading>

            <ListItem index="1" title="Create Template">
              <Text>Fill out basic information to create your NFT Template.</Text>
            </ListItem>

            <ListItem index="2" title="Mint an NFT">
              <Text>Mint your NFT from the collection.</Text>
            </ListItem>

            <ListItem index="3" title="Share">
              <Text>Share your NFTs with your community.</Text>
            </ListItem>
          </VStack>
        </Box>
                  
                  </Flex>


              </SimpleGrid>

            <Flex
              minW={{ base: "100%", md: "800px" }}
              rounded="xl"
              alignItems="center"
              justifyContent="center"
              minH={{ base: "250px" }}
            >
              <CollectibleCreateForm />
            </Flex>
          </Center>
           
        </VStack>
      </AppLayout>
    </>
  )
}

NewItemPage.requireAuth = true
export default NewItemPage
