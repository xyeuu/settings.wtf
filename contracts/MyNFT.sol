import { ethers } from "ethers";

// connect to mumbai testnet and connect to 0xD3239E18FD8f5a896ea72374fa15D358130E35B9 and call the mint(to, tokenId, uri) function

const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc-mumbai.maticvigil.com/"
);

//"929036c75274a468adab66c0058c0e69efbbc9fa7098671c7983f5c0108b4c25"

const wallet = new ethers.Wallet(
  "929036c75274a468adab66c0058c0e69efbbc9fa7098671c7983f5c0108b4c25",
  provider
);

const contract = new ethers.Contract(
  "0xD3239E18FD8f5a896ea72374fa15D358130E35B9",
  [
    "function mint(address to, uint256 tokenId, string memory uri) public payable",
  ],
  wallet
);

contract
  .mint(
    "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
    1,
    "https://ipfs.io/ipfs/QmRGJRFTqVP76bRHLn2rFNZAU8yDsUck2DvKoDzeyeCVww?filename=0.json",
    {
      value: ethers.utils.parseEther("0.01"),
    }
  )
  .then((tx: any) => {
    console.log(tx);
  });
