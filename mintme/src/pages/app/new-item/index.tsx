import { Box, Center, Flex, Heading, VStack } from "@chakra-ui/react"
import { HowItWorks, SupportingResources, Showcase, LoginText } from "ui/Home"

import AppLayout from "../../../components/AppLayout"
import { CollectibleCreateForm } from "../../../components/form/CollectibleCreateForm"
import { Generateimage } from "../../../components/form/Generateimage"

const NewItemPage = () => {
  return (
    <>
      <AppLayout title="Create New NFT | MintMe" showSidebar={true}>
        <VStack w="full" p="1rem" my="3rem" gap="3rem">
          <Center px={{ base: "0", md: "1rem" }} w="full" flexDirection="column">
            <Center mb={{ base: "1rem", md: "4rem" }} px={{ base: "0", md: "1.4rem" }}>
              <Heading
                as="h3"
                fontWeight="700"
                textAlign="center"
                maxW="600"
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                New Item
              </Heading>
            </Center>

            <Center mb={{ base: "1rem", md: "4rem" }} px={{ base: "0", md: "1.4rem" }}>
			
              <Generateimage />  
              </Center>

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
