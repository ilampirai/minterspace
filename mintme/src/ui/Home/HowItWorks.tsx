import { BsChevronDown as ChevronDownIcon } from "react-icons/bs"
import { Flex, Heading, Text, VStack, Image, Box, Center } from "@chakra-ui/react"
import { forwardRef, useRef } from "react"

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

export const HowItWorks = forwardRef<HTMLDivElement>(function HowItWorks(props, ref) {
  const scrollRef = useRef<HTMLDivElement>()
  return (
    <Box
      ref={ref}
      color="content.400"
      px="1rem"
      w="full"
      mt="2rem"
      py={{ base: "1rem" }}
      maxW={{ md: "800px", lg: "1000px" }}
    >
      <Heading
        fontWeight="bold"
        pt="1rem"
        mb="3rem"
        fontSize={{ base: "3xl", md: "5xl" }}
        textAlign="center"
      >
        How it works
      </Heading>
      <Center
        ref={scrollRef}
        gap={{ base: "2rem", md: "4rem" }}
        m="0 auto"
        position="relative"
        flexDir={{ base: "column", md: "row" }}
      >
        <Flex flex={1} justifyContent="flex-end">
          <Box
            as="video"
            src="/mintme_demo.mp4"
            loop
            autoPlay
            playsInline
            muted
            maxH="480px"
            p="1rem"
            rounded="lg"
            bg="white"
            shadow="base"
          />
        </Flex>

        <Box flex={1}>
          <VStack alignItems="flex-starts" gap="1.2rem">
            <Heading fontSize="2rem">Steps</Heading>

            <ListItem index="1" title="Generate">
              <Text>Create your own art with over powered A.I</Text>
            </ListItem>

            <ListItem index="2" title="Mint">
              <Text>Mint your new and unique image into niftory blockchain</Text>
            </ListItem>

            <ListItem index="3" title="Share">
              <Text>You can save it for your own collection or share it with your friends. Transfer of nft is never been easier</Text>
            </ListItem>
          </VStack>
        </Box>
      </Center>
    </Box>
  )
})
