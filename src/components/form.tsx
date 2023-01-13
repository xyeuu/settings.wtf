import { Center, Button, Flex, Box, Text, Input } from "@chakra-ui/react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Form() {
  return (
    <Center h="100vh">
      <Box width="555px" height="375px" borderWidth="1px">
        <Flex width="100%" align="center" justifyContent={"space-between"}>
          <Text
            fontSize="30px"
            color="black"
            fontWeight="Bold"
            width="134px"
            height="36px"
          >
            Interact
          </Text>

          <Flex align={"center"}>
            <Button backgroundColor="#FFFFFF" color="#1495D6">
              Skip Interface
            </Button>

            <Text fontSize="18px">1/3</Text>
          </Flex>
        </Flex>

        <Box>
          <Box>
            <Text fontSize="14px" fontWeight="semibold">
              Font Size
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

          <Box>
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

          <Box>
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
        </Box>
      </Box>
    </Center>
  );
}
