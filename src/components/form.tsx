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
  Input,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Form() {
  const [step, setStep] = useState(1);
  const [font, setFont] = useState("Inter");
  const [fontSize, setFontSize] = useState("16px");
  const [theme, setTheme] = useState("light");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mail, setMail] = useState("");
  const [pseudos, setPseudos] = useState("");
  const [sexe, setSexe] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isSubmitting) return;
    handleSubmit();
  }, [isSubmitting]);

  function handleSubmit() {
    if (step === 1) {
      console.log("font: ", font);
      console.log("fontSize: ", fontSize);
      console.log("theme: ", theme);
    } else if (step === 2) {
      console.log("age: ", age);
      console.log("address: ", address);
      console.log("telephone: ", telephone);
      console.log("mail: ", mail);
      console.log("pseudos: ", pseudos);
      console.log("sexe: ", sexe);
    }
    // code pour envoyer les données à un serveur ou une autre logique
    setIsSubmitting(false);
  }

  return (
    <Center justifyContent="center" height="700px">
      <Box maxW="555px">
        <Flex align="center" mb="50">
          <Text fontSize="32px" color="black" fontWeight="bold">
            {step === 1 ? "Interface" : "Profil"}
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
        {step === 1 ? (
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
        ) : (
          <Box>
            <FormControl>
              <FormLabel>Sexe</FormLabel>
              <Select
                value={sexe}
                onChange={(e) => setSexe(e.target.value)}
                id="sexe-select"
                borderColor="#1495D6"
                borderWidth="2px"
                color="black"
              >
                <option value="Inter">Man</option>
                <option value="Open Sans">Woman</option>
              </Select>
              <FormHelperText color="#1495D6">Select your sexe.</FormHelperText>
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>age</FormLabel>
              <Input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                id="age-select"
                borderColor="#1495D6"
                borderWidth="2px"
                color="black"
              ></Input>
              <FormHelperText color="#1495D6">Select your age.</FormHelperText>
            </FormControl>

            <FormControl mt={5}>
              <FormLabel>address</FormLabel>
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                id="address-select"
                borderColor="#1495D6"
                borderWidth="2px"
                color="black"
              ></Input>
              <FormHelperText color="#1495D6">
                Select your address.
              </FormHelperText>
            </FormControl>
          </Box>
        )}
        <Button
          backgroundColor="#1495D6"
          color="white"
          marginLeft="460px"
          onClick={() => {
            setIsSubmitting(true);
            setStep(2);
          }}
        >
          Next
        </Button>
      </Box>
    </Center>
  );
}
