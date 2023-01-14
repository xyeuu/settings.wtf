import { Center, Button, Flex, Box, Text, Input } from "@chakra-ui/react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Form() {
  return (
    <Center h="100vh">
      <Box maxW="100%" /*borderWidth="1px"*/>
        <Flex align="center">
          <Text
            // marginRight="100%"
            fontSize="32px"
            color="black"
            fontWeight="Bold"
          >
            Interface
          </Text>

          <Flex align="center" marginLeft="180px">
            <Button backgroundColor="#FFFFFF" color="#1495D6">
              Skip Interface
            </Button>

            <Text fontSize="18px" fontWeight="semibold" marginLeft="50px">
              <span style={{ color: "#1495D6" }}>1</span>/3
            </Text>
          </Flex>
        </Flex>

        <Box>
          <Box mb={9} mt={50}>
            <Text fontSize="14px" fontWeight="semibold">
              Font
            </Text>

            <Input
              type=""
              borderWidth="2px"
              border="2px"
              borderColor="#1495D6"
              width="117px"
              height="31px"
              color="#1495D6"
            />
          </Box>

          <Box mb={9} mt={5}>
            <Text fontSize="14px" fontWeight="semibold">
              Font Size
            </Text>

            <Input
              type=""
              borderWidth="2px"
              borderColor="#1495D6"
              width="117px"
              height="31px"
              color="#1495D6"
            />
          </Box>

          <Box mb={9} mt={5} alignItems="center">
            <Text fontSize="14px" fontWeight="semibold">
              Themes
            </Text>

            <Input
              type=""
              borderWidth="2px"
              borderColor="#1495D6"
              width="117px"
              height="31px"
              color="#1495D6"
            />
          </Box>
        </Box>

        <Button backgroundColor="#1495D6" color="white" marginLeft="460px">
          Next
        </Button>
      </Box>
    </Center>
  );
}
