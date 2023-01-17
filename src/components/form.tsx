import {
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
import { ethers } from "ethers";
import { useState, useEffect } from "react";

export default function Form() {
  const [mint, setMint] = useState(1);
  const [scale, setScale] = useState(1);
  const [step, setStep] = useState(1);
  const [font, setFont] = useState("Inter");
  const [fontSize, setFontSize] = useState("10");
  const [theme, setTheme] = useState("Light");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [nickname, setNickname] = useState("");
  const [sex, setSex] = useState("Man");
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("EN");
  const [chart, setChart] = useState("Line");
  const [network, setNetwork] = useState("ETH");
  const [assets, setAssets] = useState("Bitcoin");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isSubmitting) return;
    handleSubmit();
  }, [isSubmitting]);

  function handleSubmit() {
    if (mint === 2) {
      console.log("font: ", font);
      console.log("fontSize: ", fontSize);
      console.log("theme: ", theme);
      console.log("sex: ", sex);
      console.log("age: ", age);
      console.log("address: ", address);
      console.log("phoneNumber: ", phoneNumber);
      console.log("emailAddress: ", emailAddress);
      console.log("nickname: ", nickname);
      console.log("currency: ", currency);
      console.log("language: ", language);
      console.log("chart: ", chart);
      console.log("network: ", network);
      console.log("assets: ", assets);
    }
    // code pour envoyer les données à un serveur ou une autre logique
    setIsSubmitting(false);
  }

  // async function Mint() {
  //   if (typeof window.ethereum !== "undefined") {
  //     let accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     const contract = new ethers.Contract(
  //       "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  //       abi,
  //       signer
  //     );
  //     const transaction = await contract.mintNFT();
  //     await transaction.wait();
  //     console.log(`${transaction.hash} was mined!`);
  //   }
  // }

  // async function handleFormSubmit(event: { preventDefault: () => void; }) {
  //   event.preventDefault();
  //   setIsSubmitting(true);
  // }

  return (
    <Flex align="center" justifyContent="center" height="700px">
      <Box minW="555px" maxH="450px" /*borderWidth="1px"*/>
        {step === 1 && (
          <Flex align="center" mb="50">
            <Text fontSize="32px" color="black" fontWeight="bold">
              Interface
            </Text>
            <Flex align="center" marginLeft="220px">
              <Button
                backgroundColor="#FFFFFF"
                color="#1495D6"
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Skip Interface
              </Button>
              <Text fontSize="18px" fontWeight="semibold" marginLeft="50px">
                <span style={{ color: "#1495D6" }}>1</span>/3
              </Text>
            </Flex>
          </Flex>
        )}
        {step === 2 && (
          <Flex align="center" mb="50">
            <Text fontSize="32px" color="black" fontWeight="bold">
              Profil
            </Text>
            <Flex align="center" marginLeft="300px">
              <Button
                backgroundColor="#FFFFFF"
                color="#1495D6"
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                Skip Profil
              </Button>
              <Text fontSize="18px" fontWeight="semibold" marginLeft="50px">
                <span style={{ color: "#1495D6" }}>2</span>/3
              </Text>
            </Flex>
          </Flex>
        )}
        {step === 3 && (
          <Flex align="center" mb="50" /*justifyContent="space-between"*/>
            <Text fontSize="32px" color="black" fontWeight="bold">
              Tools
            </Text>
            <Text fontSize="18px" fontWeight="semibold" marginLeft="465px">
              <span style={{ color: "#1495D6" }}>3</span>/3
            </Text>
          </Flex>
        )}
        {step === 1 && (
          <>
            <Box paddingBottom="150px">
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
                  <option value="FontUltime">FontUltime</option>
                  <option value="FontDeLaMort">FontDeLaMort</option>
                </Select>
                <FormHelperText color="#1495D6">
                  Select your favourite font.
                </FormHelperText>
              </FormControl>
              <FormControl mt={5}>
                <FormLabel>Font size</FormLabel>
                <Select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  id="font-size-select"
                  borderColor="#1495D6"
                  borderWidth="2px"
                  color="black"
                >
                  <option value="10px">10</option>
                  <option value="11px">11</option>
                  <option value="12px">12</option>
                  <option value="13px">13</option>
                  <option value="14px">14</option>
                  <option value="15px">15</option>
                  <option value="16px">16</option>
                  <option value="20px">20</option>
                  <option value="24px">24</option>
                  <option value="32px">32</option>
                  <option value="36px">36</option>
                  <option value="40px">40</option>
                  <option value="48px">48</option>
                  <option value="64px">64</option>
                  <option value="96px">96</option>
                  <option value="128px">128</option>
                </Select>
                <FormHelperText color="#1495D6">
                  Select your favourite font size.
                </FormHelperText>
              </FormControl>

              <FormControl mt={5}>
                <FormLabel>Theme</FormLabel>
                <Select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  id="theme-select"
                  borderColor="#1495D6"
                  borderWidth="2px"
                  color="black"
                >
                  <option value="Light">Light</option>
                  <option value="Dark">Dark</option>
                </Select>
                <FormHelperText color="#1495D6">
                  Select your favourite theme.
                </FormHelperText>
              </FormControl>
              <Flex marginTop="50px" justifyContent="space-between">
                <Text
                  color="black"
                  // cursor="pointer"
                  // marginLeft="460px"
                  onClick={() => {
                    setStep(step - 1);
                  }}
                ></Text>

                <Button
                  _hover={{ backgroundColor: "#1495D6" }}
                  onMouseEnter={() => setScale(1.1)}
                  onMouseLeave={() => setScale(1)}
                  style={{ transform: `scale(${scale})` }}
                  backgroundColor="#1495D6"
                  color="white"
                  // backgroundSize="100px"
                  // marginLeft="460px"
                  onClick={() => {
                    setIsSubmitting(true);
                    setStep(step + 1);
                  }}
                >
                  Next
                </Button>
              </Flex>
            </Box>
          </>
        )}
        {step === 2 && (
          <>
            <Box paddingBottom="150px">
              <FormControl>
                <FormLabel>Sex</FormLabel>
                <Select
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  id="sex-select"
                  borderColor="#1495D6"
                  borderWidth="2px"
                  color="black"
                >
                  <option value="man">Man</option>
                  <option value="woman">Woman</option>
                </Select>
                <FormHelperText color="#1495D6">
                  Select your sex.
                </FormHelperText>
              </FormControl>
              <FormControl mt={5}>
                <FormLabel>Age</FormLabel>
                <Input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  id="age-select"
                  borderColor="#1495D6"
                  borderWidth="2px"
                  color="black"
                ></Input>
                <FormHelperText color="#1495D6">Inter your age.</FormHelperText>
              </FormControl>

              <FormControl mt={5}>
                <FormLabel>Address</FormLabel>
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="address-select"
                  borderColor="#1495D6"
                  borderWidth="2px"
                  color="black"
                ></Input>
                <FormHelperText color="#1495D6">
                  Inter your address.
                </FormHelperText>
              </FormControl>

              <FormControl mt={5}>
                <FormLabel>Phone number</FormLabel>
                <Input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  id="phone-number-select"
                  borderColor="#1495D6"
                  borderWidth="2px"
                  color="black"
                ></Input>
                <FormHelperText color="#1495D6">
                  Inter your phone number.
                </FormHelperText>
              </FormControl>

              <FormControl mt={5}>
                <FormLabel>Email address</FormLabel>
                <Input
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  id="email-address-select"
                  borderColor="#1495D6"
                  borderWidth="2px"
                  color="black"
                ></Input>
                <FormHelperText color="#1495D6">
                  Inter your email address.
                </FormHelperText>
              </FormControl>

              <FormControl mt={5}>
                <FormLabel>Nickname</FormLabel>
                <Input
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  id="nickname-select"
                  borderColor="#1495D6"
                  borderWidth="2px"
                  color="black"
                ></Input>
                <FormHelperText color="#1495D6">
                  Inter your nickname.
                </FormHelperText>
              </FormControl>
              <Flex marginTop="50px" justifyContent="space-between">
                <Button
                  color="black"
                  cursor="pointer"
                  // marginLeft="460px"
                  onClick={() => {
                    setStep(step - 1);
                  }}
                >
                  Back
                </Button>

                <Button
                  _hover={{ backgroundColor: "#1495D6" }}
                  onMouseEnter={() => setScale(1.1)}
                  onMouseLeave={() => setScale(1)}
                  style={{ transform: `scale(${scale})` }}
                  backgroundColor="#1495D6"
                  color="white"
                  backgroundSize="100px"
                  // marginLeft="460px"
                  onClick={() => {
                    setIsSubmitting(true);
                    setStep(step + 1);
                  }}
                >
                  Next
                </Button>
              </Flex>
            </Box>
          </>
        )}
        {step === 3 && (
          <Box paddingBottom="150px">
            <FormControl>
              <FormLabel>Currency</FormLabel>
              <Select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                id="currency-select"
                borderColor="#1495D6"
                borderWidth="2px"
                color="black"
              >
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </Select>
              <FormHelperText color="#1495D6">
                Select your favorite currency.
              </FormHelperText>
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Language</FormLabel>
              <Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                id="language-select"
                borderColor="#1495D6"
                borderWidth="2px"
                color="black"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </Select>
              <FormHelperText color="#1495D6">
                Select your favorite language.
              </FormHelperText>
            </FormControl>

            <FormControl mt={5}>
              <FormLabel>Chart</FormLabel>
              <Select
                value={chart}
                onChange={(e) => setChart(e.target.value)}
                id="chart-select"
                borderColor="#1495D6"
                borderWidth="2px"
                color="black"
              >
                <option value="Inter">Line</option>
                <option value="Open Sans">Candle</option>
              </Select>
              <FormHelperText color="#1495D6">
                Select your favorite chart.
              </FormHelperText>
            </FormControl>

            <FormControl mt={5}>
              <FormLabel>Network</FormLabel>
              <Select
                value={network}
                onChange={(e) => setNetwork(e.target.value)}
                id="network-select"
                borderColor="#1495D6"
                borderWidth="2px"
                color="black"
              >
                <option value="eth network">ETH</option>
                <option value="bsc">BSC</option>
                <option value="polygon network">Polygon</option>
              </Select>
              <FormHelperText color="#1495D6">
                Select your favourite network.
              </FormHelperText>
            </FormControl>

            <FormControl mt={5}>
              <FormLabel>Assets</FormLabel>
              <Select
                value={assets}
                onChange={(e) => setAssets(e.target.value)}
                id="assets-select"
                borderColor="#1495D6"
                borderWidth="2px"
                color="black"
              >
                <option value="bitcoin">Bitcoin</option>
                <option value="ethereum">Ethereum</option>
                <option value="bnb">BNB</option>
              </Select>
              <FormHelperText color="#1495D6">
                Select your favourite assets.
              </FormHelperText>
            </FormControl>

            <Flex marginTop="50px" justifyContent="space-between">
              <Button
                color="black"
                cursor="pointer"
                // marginLeft="460px"
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                Back
              </Button>

              <Button
                _hover={{ backgroundColor: "#1495D6" }}
                onMouseEnter={() => setScale(1.1)}
                onMouseLeave={() => setScale(1)}
                style={{ transform: `scale(${scale})` }}
                backgroundColor="#1495D6"
                color="white"
                // marginLeft="460px"
                onClick={() => {
                  setIsSubmitting(true);
                  setMint(2);
                }}
              >
                Mint
              </Button>
            </Flex>
          </Box>
        )}
        ;
      </Box>
    </Flex>
  );
}
