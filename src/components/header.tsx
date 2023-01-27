import { Link, Image, Flex } from "@chakra-ui/react";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    <header>
      <Flex
        paddingLeft="1em"
        paddingRight="1em"
        paddingTop="1em"
        justifyContent="space-between"
      >
        <Link href="/lozi4.png">
          <Image src="/lozi4.png" width="128px" height="24px" />
        </Link>
        <ConnectButton
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
          chainStatus="icon"
        />
      </Flex>
    </header>
  );
}
