import {
  Center,
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Select,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Form() {
  const [font, setFont] = useState("Inter");
  const [fontSize, setFontSize] = useState("16px");
  const [theme, setTheme] = useState("light");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isSubmitting) return;
    handleSubmit();
  }, [isSubmitting]);

  function handleSubmit() {
    console.log("font: ", font);
    console.log("fontSize: ", fontSize);
    console.log("theme: ", theme);
    // code pour envoyer les données à un serveur ou une autre logique
    setIsSubmitting(false);
  }

  return (
    <Center justifyContent="center" height="700px">
      <Box maxW="555px">
        <Flex align="center" mb="50">
          <Text fontSize="32px" color="black" fontWeight="bold">
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
          <FormControl>
            <FormLabel>Font</FormLabel>
            <Select
              value={font}
              onChange={(e) => setFont(e.target.value)}
              id="font-select"
              borderColor="#1495D6"
              borderWidth="2px"
              color="black"
            >
              <option value="Inter">Inter</option>
              <option value="Open Sans">Open Sans</option>
              <option value="Montserrat">Montserrat</option>
            </Select>
            <FormHelperText color="#1495D6">
              Select your preferred font.
            </FormHelperText>
          </FormControl>
          <FormControl mt={5}>
            <FormLabel>Font Size</FormLabel>
            <Select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              id="font-size-select"
              borderColor="#1495D6"
              borderWidth="2px"
              color="black"
            >
              <option value="12px">12</option>
              <option value="14px">14</option>
              <option value="16px">16</option>
              <option value="18px">18</option>
            </Select>
            <FormHelperText color="#1495D6">
              Select your preferred font size.
            </FormHelperText>
          </FormControl>

          <FormControl mt={5}>
            <FormLabel>Themes</FormLabel>
            <Select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              id="theme-select"
              borderColor="#1495D6"
              borderWidth="2px"
              color="black"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </Select>
            <FormHelperText color="#1495D6">
              Select your preferred theme.
            </FormHelperText>
          </FormControl>
        </Box>

        <Button
          backgroundColor="#1495D6"
          color="white"
          marginLeft="460px"
          onClick={() => setIsSubmitting(true)}
        >
          Next
        </Button>
      </Box>
    </Center>
  );
}
