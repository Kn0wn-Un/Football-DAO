import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x40EE90B58ea399B014B7d62699F92892e7ccf6D2",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Football Team Manager",
        description: "This NFT will give you access to FootballDAO!",
        image: readFileSync("scripts/assets/manager.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()