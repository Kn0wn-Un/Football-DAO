import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xaa001402c738D4aaeda41c2d6A62e07e2e717a9a");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "FootballDAO Membership",
      description: "A membership NFT for members of FootballDAO.",
      image: readFileSync("scripts/assets/manager.jpg"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()