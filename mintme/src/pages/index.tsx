import AppLayout from "../components/AppLayout"
import { useAuthContext } from "../hooks/useAuthContext"
import { Image,Center, Flex, Heading, Box, VStack, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { CollectibleCreateForm } from "../components/form/CollectibleCreateForm"
import { LoginText } from "../ui/Home/LoginText"
import { GetNftSetsQuery } from "../../generated/graphql"
import { useBackendClient } from "../graphql/backendClient"
import { Showcase } from "ui/Home/Showcase"
import { HowItWorks } from "ui/Home/HowItWorks"

import { BsChevronDown as ChevronDownIcon } from "react-icons/bs"
import { useRef } from "react"
import { SupportingResources } from "ui/Home/SupportingResources"

const HomePage = () => {
  const scrollRef = useRef<HTMLDivElement>()

  return (
    <AppLayout  showSidebar={true}>
      <Center py={{ base: "1rem" }} flexDir="column" position="relative">

      <Box px="1rem">
          <Center >
             
               <Image
                boxSize={{ md: "150" }}
                src="/mintme/MinterSpace_logo3.png"
                alt="logo"
                 
                w={{ base: "6rem", md: "13rem" }}
                py="4px"
              />
             
          </Center>
          </Box>

     
        
      <Box h="100%" w="100%" bg="page.background" color="page.text"  >
        <Box as="section" maxW="5xl" mx="auto"   px={{ base: "6", md: "8" }}>
          <strong>Minterspace</strong>
          <br />
          <p dir="ltr"> Welcome to our NFT Generator's</p>
          <br />
          <p dir="ltr">
            where we use stable diffusion technology to create stunning and unique art that can be owned, traded, and collected by anyone. Our stable diffusion model is a breakthrough in speed and quality, empowering billions of people to create stunning art within seconds, and it can run on consumer GPUs, making it accessible to a wider audience.
          </p>
          <br />
          <p dir="ltr">
           Our stable diffusion model builds upon the work of other teams and developers in the generative AI field, such as CompVis, Runway, OpenAI, and Google Brain. We are proud to be part of a cooperative field of AI media generation, where collaboration and sharing of knowledge are crucial to advancing technology and making it more accessible to everyone.
          </p>
          <br />
          <p dir="ltr">
           At our NFT Generator, we're excited to incorporate stable diffusion into our platform to create one-of-a-kind digital assets. Our open model approach ensures that anyone can create and own their own NFTs, regardless of their artistic background or technical knowledge. We offer pre-existing templates or the ability to upload your own image to create a unique NFT, with our stable diffusion algorithm guaranteeing that each NFT is truly unique.
          </p>
          <br />
          <p dir="ltr">
          Our platform is also designed to be open, allowing anyone to create and transfer NFTs. We believe that this creates a thriving marketplace that benefits everyone involved, from artists looking to monetize their work to collectors looking to add to their collection.
          </p>
          <br />
          <p dir="ltr">
          Join our community of creators and collectors today and start generating your own unique NFTs using stable diffusion technology and our open model approach. With our platform, anyone can own and appreciate digital art like never before.
           </p>
          <br />
          
        </Box>
      </Box>
        
        
        
        <Box px="1rem">
         {/* <Center m="1.4rem">
            <Heading
              as="h3"
              fontWeight="400"
              textAlign="center"
              maxW="600"
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              Mint your digital assets in seconds for free
            </Heading>
          </Center>
          <Flex
            minW={{ base: "280px", md: "600px" }}
            rounded="xl"
            alignItems="center"
            justifyContent="center"
            minH={{ base: "250px" }}
          >
            <CollectibleCreateForm />
          </Flex> */}

          <LoginText />
        </Box>
        <VStack
          mt="2rem"
          cursor="pointer"
          spacing="0.3rem"
          onClick={() => {
            scrollRef?.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
          }}
        >
          <Text fontWeight="extrabold">LEARN MORE</Text>
          <ChevronDownIcon size="1.2rem" />
        </VStack>
        <HowItWorks ref={scrollRef} />
        {/*<SupportingResources /> */}
        <Showcase />
      </Center>
    </AppLayout>
  )
}

export default HomePage
