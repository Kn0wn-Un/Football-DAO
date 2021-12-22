import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const bundleDropModule = sdk.getBundleDropModule(
  "0x40EE90B58ea399B014B7d62699F92892e7ccf6D2",
);

const tokenModule = sdk.getTokenModule(
  "0x04073Aee295098023F268456e1cdE46dd1F6163c",
);

(async () => {
  try {
    const walletAddresses = await bundleDropModule.getAllClaimerAddresses("0");
  
    if (walletAddresses.length === 0) {
      console.log(
        "No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!",
      );
      process.exit(0);
    }
    
    const airdropTargets = walletAddresses.map((address) => {
      const randomAmount = 100;
      console.log("✅ Going to airdrop", randomAmount, "tokens to", address);
      
      const airdropTarget = {
        address,
        amount: ethers.utils.parseUnits(randomAmount.toString(), 18),
      };
  
      return airdropTarget;
    });
    
    // Call transferBatch on all our airdrop targets.
    console.log("🌈 Starting airdrop...")
    await tokenModule.transferBatch(airdropTargets);
    console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
  } catch (err) {
    console.error("Failed to airdrop tokens", err);
  }
})();