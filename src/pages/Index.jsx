import { Container, Text, VStack, Box, Image, Heading, Button, Flex } from "@chakra-ui/react";
import { FaDog, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to Dog Haven</Heading>
          <Text fontSize="xl">Find your perfect furry friend today!</Text>
        </Box>
        
        <Box width="100%" textAlign="center">
          <Image src="/images/hero-dog.jpg" alt="Hero Dog" borderRadius="md" boxShadow="lg" />
        </Box>
        
        <Box textAlign="center">
          <Heading as="h2" size="xl" mb={4}>Why Choose Us?</Heading>
          <Text fontSize="lg">We offer a wide variety of dog breeds, ensuring you find the perfect match for your family.</Text>
        </Box>
        
        <Flex justifyContent="center" width="100%" mt={8}>
          <Button leftIcon={<FaDog />} colorScheme="teal" size="lg" mr={4}>
            View Dogs
          </Button>
          <Button leftIcon={<FaShoppingCart />} colorScheme="orange" size="lg">
            Shop Accessories
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;