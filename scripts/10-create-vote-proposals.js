import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule(
  "0xad9c41e76B878391D73bd9723190611065e46DA4",
);

const tokenModule = sdk.getTokenModule(
  "0x04073Aee295098023F268456e1cdE46dd1F6163c",
);


(async () => {
  try {
    const amount = 420_000;
    await voteModule.propose(
      "Should the DAO mint an additional " + amount + " tokens into the treasury?",
      [
        {
          nativeTokenValue: 0,
          transactionData: tokenModule.contract.interface.encodeFunctionData(
            "mint",
            [
              voteModule.address,
              ethers.utils.parseUnits(amount.toString(), 18),
            ]
          ),
          toAddress: tokenModule.address,
        },
      ]
    );

    console.log("✅ Successfully created proposal to mint tokens");
  } catch (error) {
    console.error("failed to create first proposal", error);
    process.exit(1);
  }

  try {
    const amount = 6_900;
    await voteModule.propose(
      "Should the DAO buy Ronaldo for " +
      amount + "?",
      [
        {
          nativeTokenValue: 0,
          transactionData: tokenModule.contract.interface.encodeFunctionData(
            "transfer",
            [
              process.env.WALLET_ADDRESS,
              ethers.utils.parseUnits(amount.toString(), 18),
            ]
          ),

          toAddress: tokenModule.address,
        },
      ]
    );

    console.log(
      "✅ Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!"
    );
  } catch (error) {
    console.error("failed to create first proposal", error);
  }
})();