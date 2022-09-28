# **Uniswap clone** 

## Project deployed

 [Live version here](https://fraanfx-uniswapclone.netlify.app/).

---

## **Do you want to try it?**

Swap the diferents token in the live site

### Steps to get WETH on Goerli Network

1. Create a [Metamask Wallet](https://metamask.io/download/).

2. Log on your metamask wallet, then go on the top-right corner click on Ethereum Mainnet and click `Show/Hide test networks` or on metamask wallet settings toogle the testnetwork options.

3. Click again on the top-right corner Ethereum Mainnet and switch it to Goerli Network.

4. Register on [Alchemy](https://www.alchemy.com/).

5. Login with [Alchemy account](https://www.alchemy.com/) on [Goerly Faucet](https://goerlifaucet.com/)

6. Paste you Goerli ETH Testnet direction on the field and collect the Goerli WETH.

7. Log in with your Metamask wallet in [Live version](https://fraanfx-uniswapclone.netlify.app/).

---

## **Technologies schema**

```
DEX Clone Technologies Tree schema
│
├── Frontend
│   │ 
│   ├── ReactJS
│   │     ├── Create custom hooks
│   │     ├── Fetching Smart contracts data.
│   │     ├── Use React Hooks like { useState, useEffect and useRef }
│   │     ├── Use Web3 libraries
│   │     └── Build and deploy on netlify
│   │ 
│   ├── UseDApp ETH Framework
│   │     ├── Utility functions
│   │     ├── Serve data from ABI's
│   │     └── Connecion with Metamask
│   │ 
│   └── Tailwind
│       └── Custom Responsive CSS
│
└── Backend
    ├── Alchemy ── Get acces to Goerli Chain (ETH Testnet Blockchain).
    │
    ├── JS with CRANQ ── Compile and deploy Smart Contracts, setup contract.
    │     │ 
    │     └── Node JS server 
    │           │              
    │           │                                  
    │           │                         
    │           ├── Config ──> Create compile an deploy  ──> Compile and deploy routes
    │           │                       (ABI, Address, Contract)        │ 
    │           │                                                       │ 
    │           │                                                       │
    │           └── Liquidities Store ──> Set up liquidity pairs ───────└──> Add liquidites──> [Router address] (Connection with Front end)     
    │
    │  
    │
    └── Create ERC20 Tokens on Goerli Testnet with Smart Contract Tools
           ├── FraanFX (FFX)
           ├── FraanFX Cash (FFXC)
           └── Box FraanFX (BOXF)
```




