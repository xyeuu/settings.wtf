import Head from "next/head";
import Header from "../components/header";
import Form from "../components/form";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
import React, { useEffect, useState } from "react";
import WalletBalance from "../components/walletBalance";
import { ethers } from "ethers";
import { useSigner } from "wagmi";

export default function Home() {
  const signer = useSigner();

  const [totalMinted, setTotalMinted] = useState(0);

  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    setTotalMinted(parseInt(count));
  };

  return (
    <div>
      <WalletBalance />
      {Array(totalMinted + 1)
        .fill(0)
        .map((_, i) => (
          <div key={i}>
            <NFTImage tokenId={i} getCount={undefined} />
          </div>
        ))}
    </div>
  );
}

function NFTImage({ tokenId, getCount }) {
  const contentId = "QmRGJRFTqVP76bRHLn2rFNZAU8yDsUck2DvKoDzeyeCVww";
  const metadataURI = `${contentId}/${tokenId}.json`;
  const signer = useSigner();

  const [isMinted, setIsMinted] = useState(false);

  useEffect(() => {
    getMintedStatus();
  }, [isMinted]);

  const getMintedStatus = async () => {
    const result = await contract.isContentOwned(tokenId);
    console.log(result);
    setIsMinted(result);
  };

  const mintToken = async () => {
    const contractAddress = "0xD3239E18FD8f5a896ea72374fa15D358130E35B9";

    if (!signer) {
      return;
    }
    const contract = new ethers.Contract(
      contractAddress,
      [
        "function mint(address to, uint256 tokenId, string memory uri) public payable",
      ],
      signer as unknown as ethers.Signer
    );
  };

  async function getURI() {
    const uri = await contract.tokenURI(tokenId);
  }

  return (
    <div>
      <h5>ID #{tokenId}</h5>
      {isMinted ? (
        <button onClick={mintToken}>Mint</button>
      ) : (
        <button onClick={getURI}>Taken! SHow URI</button>
      )}
    </div>
  );
}
