import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";
import dotenv from "dotenv";
dotenv.config();

const PRIVATE_KEY = process.env['PRIVATE_KEY'];
const ALCHEMY_API_URL = process.env['ALCHEMY_API_URL'];
const WALLET_ADDRESS = process.env['WALLET_ADDRESS'];
if (!PRIVATE_KEY || PRIVATE_KEY  == "") {
  console.log("🛑 Private key not found.")
}
if (!ALCHEMY_API_URL || ALCHEMY_API_URL == "") {
  console.log("🛑 Alchemy API URL not found.")
}
if (!WALLET_ADDRESS || WALLET_ADDRESS == "") {
  console.log("🛑 Wallet Address not found.")
}

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    PRIVATE_KEY ,
    ethers.getDefaultProvider(ALCHEMY_API_URL),
  ),
);
(async () => {
  try {
    const apps = await sdk.getApps();
    console.log("Your app address is:", apps[0].address);
  } catch (err) {
    console.error("Failed to get apps from the sdk", err);
    process.exit(1);
  }
})()
export default sdk;