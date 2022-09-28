import { Goerli } from "@usedapp/core";
import { SC_ROUTER_ADDRESS, SC_CHAIN_ID } from "./dataConfig";


export const ROUTER_ADDRESS = SC_ROUTER_ADDRESS;


export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: SC_CHAIN_ID,
  },
};