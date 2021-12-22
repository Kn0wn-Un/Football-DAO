import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
  "0xaa001402c738D4aaeda41c2d6A62e07e2e717a9a",
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "FOOTBALLDAO's Proposals",
      votingTokenAddress: "0x04073Aee295098023F268456e1cdE46dd1F6163c",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24 * 60 * 60,

      votingQuorumFraction: 0,

      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.log("Failed to deploy vote module", err);
  }
})();