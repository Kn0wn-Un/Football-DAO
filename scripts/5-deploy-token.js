import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0xaa001402c738D4aaeda41c2d6A62e07e2e717a9a");

(async ()=>{
  try{
    const tokenModule = await app.deployTokenModule({
      name: "FootballDAO Governance Token",
      symbol: "FOOTBALL",
    });

    console.log("Deployed Token Module, address", tokenModule.address);
  }catch(e){
    console.error(e);
  }
})();