import { Box, Center, Flex, Heading, SimpleGrid, Text, VStack,Image } from "@chakra-ui/react"
import { useRef } from "react"

const LinkTable = {
  test: [
    {
      url: "https://mint.test.niftory.com/app/collection/6872680e-4746-45bf-99fb-4a01b6987eb8?nftId=1381e6aa-17b4-4c1b-8436-6c92efb0751d",
      image: "/images/ai_conference.png",
    },
    {
      url: "https://mint.test.niftory.com/app/collection/5f1e2545-0db1-453c-a6cc-63029916f043?nftId=46692d08-9564-43b8-9be0-6691d4fded6d",
      image: "/images/robotica.png",
    },

    {
      url: "https://mint.test.niftory.com/app/collection/d2856642-ef50-4708-9019-e8f0b86004c9?nftId=edb23981-8ee4-431c-9403-de049afa7efe",
      image: "/images/painting.png",
    },
  ],
  development: [
    {
      url: "https://mint.test.niftory.com/app/collection/6872680e-4746-45bf-99fb-4a01b6987eb8?nftId=1381e6aa-17b4-4c1b-8436-6c92efb0751d",
      image: "/mintme/1.png",
    },
    {
      url: "https://mint.test.niftory.com/app/collection/5f1e2545-0db1-453c-a6cc-63029916f043?nftId=46692d08-9564-43b8-9be0-6691d4fded6d",
      image: "/mintme/2.png",
    },

    {
      url: "https://mint.test.niftory.com/app/collection/d2856642-ef50-4708-9019-e8f0b86004c9?nftId=edb23981-8ee4-431c-9403-de049afa7efe",
      image: "/mintme/3.png",
    },

    {
      url: "https://mint.test.niftory.com/app/collection/d2856642-ef50-4708-9019-e8f0b86004c9?nftId=edb23981-8ee4-431c-9403-de049afa7efe",
      image: "/mintme/4.png",
    },

    {
      url: "https://mint.test.niftory.com/app/collection/d2856642-ef50-4708-9019-e8f0b86004c9?nftId=edb23981-8ee4-431c-9403-de049afa7efe",
      image: "/mintme/5.png",
    },

    {
      url: "https://mint.test.niftory.com/app/collection/d2856642-ef50-4708-9019-e8f0b86004c9?nftId=edb23981-8ee4-431c-9403-de049afa7efe",
      image: "/mintme/6.png",
    },
  ],

  production: [
    {
      url: "https://mint.test.niftory.com/app/collection/6872680e-4746-45bf-99fb-4a01b6987eb8?nftId=1381e6aa-17b4-4c1b-8436-6c92efb0751d",
      image: "/images/ai_conference.png",
    },
    {
      url: "https://mint.test.niftory.com/app/collection/5f1e2545-0db1-453c-a6cc-63029916f043?nftId=46692d08-9564-43b8-9be0-6691d4fded6d",
      image: "/images/robotica.png",
    },
    {
      url: "https://mint.test.niftory.com/app/collection/d2856642-ef50-4708-9019-e8f0b86004c9?nftId=edb23981-8ee4-431c-9403-de049afa7efe",
      image: "/images/painting.png",
    },
  ],
}

export const Showcase = () => {
  const gridRef = useRef<HTMLDivElement>()
  return (
    <Flex flexDir="column" my={{ base: "2rem", md: "6rem" }} px="1rem">
      <Heading fontSize={{ base: "4xl", md: "5xl" }} textAlign="center" pb="1rem">
      Artworks powered by AI
      </Heading>
     
      {/*
      <SimpleGrid   columns={3} spacing={5}  maxW="1600px">
        
        
      {LinkTable[process.env.NEXT_PUBLIC_ENV ?? "test"].map((item) => ( <Box bg='tomato'  h="320px"></Box> ))}


        
      </SimpleGrid>
     */}
     
    
     
      <SimpleGrid   columns={{ base: 1, md: 2, md: 3 }}       >
        {LinkTable[process.env.NEXT_PUBLIC_ENV ?? "test"].map((item) => (
          <Box
             
            rounded="lg"
            shadow="base"
             
           
            m='5'
             
             
            
            
          >
        <Image src={`${item.image}`} alt='AI'  borderRadius="xl"  />

          </Box> 
        ))}
        </SimpleGrid> 
    </Flex>
  )
}
