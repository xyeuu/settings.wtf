import { Link, Image, Flex, Button } from "@chakra-ui/react";
import { InjectedConnector } from "@wagmi/core";
import { useState } from "react";
import { useAccount, useConnect } from "wagmi";

export default function Header() {
  const [scale, setScale] = useState(1);
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  return (
    <header>
      <Flex
        paddingLeft="1em"
        paddingRight="1em"
        paddingTop="1em"
        justifyContent="space-between"
        width="100%"
      >
        <Link href="/logofeeswtf.png">
          <Image src="/logofeeswtf.png" width="128px" height="24px" />
        </Link>
        <Button
          backgroundColor="#1495D6"
          borderRadius="0.5em"
          fontSize="15"
          color="white"
          fontWeight="500"
          fontFamily="Cabin, Arial, sans-serif!important"
          width="128px"
          height="40px"
          _hover={{ backgroundColor: "#1495D6" }}
          onMouseEnter={() => setScale(1.1)}
          onMouseLeave={() => setScale(1)}
          style={{ transform: `scale(${scale})` }}
          onClick={() => connect()}
        >
          {address || "Connect Wallet"}
        </Button>
      </Flex>
    </header>
  );
}
