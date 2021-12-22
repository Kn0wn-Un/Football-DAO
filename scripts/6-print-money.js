import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js"

const tokenModule = sdk.getTokenModule("0x04073Aee295098023F268456e1cdE46dd1F6163c");

(async ()=>{
  try {
    const amount = 1_000_000;
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();

    console.log("✅ There now is",ethers.utils.formatUnits(totalSupply, 18),
      "$FOOTBALL in circulation")
  } catch(e) {
    console.error("Failed to print money", error);
  }
})();