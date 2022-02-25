const sdk = require("@defillama/sdk");
const { transformBscAddress } = require('../helper/portedTokens');

const usdtEth = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const daiEth = "0x6b175474e89094c44da98b954eedeac495271d0f";
const usdcEth = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const wethEth = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const relayEth = "0x5D843Fa9495d23dE997C394296ac7B4D721E841c";

const usdtBsc = "0x55d398326f99059fF775485246999027B3197955";
const daiBsc = "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3";
const usdcBsc = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
const wbnbBsc = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
const relayBsc = "0xE338D4250A4d959F88Ff8789EaaE8c32700BD175";

const ethAddr = "0xF687e1481d85F8b9F4D1f4D4C15348CeF8E5a762";
const bscAddr = "0x3Ea1f65cf49297eA6d265291a2b09D0f2AE649D6";


async function ethTvl(timestamp, ethBlock) {
    let balances = {};
      balances[usdtEth] = (
        await sdk.api.abi.call({
          target: usdtEth,
          abi: 'erc20:balanceOf',
          params: ethAddr,
          block: ethBlock,
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "ethereum:"+usdtEth, balances[usdtEth])

    balances[daiEth] = (
        await sdk.api.abi.call({
          target: daiEth,
          abi: 'erc20:balanceOf',
          params: ethAddr,
          block: ethBlock,
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "ethereum:"+daiEth, balances[usdtEth])

    balances[wethEth] = (
        await sdk.api.abi.call({
          target: wethEth,
          abi: 'erc20:balanceOf',
          params: ethAddr,
          block: ethBlock,
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "ethereum:"+wethEth, balances[usdtEth])

    balances[usdcEth] = (
        await sdk.api.abi.call({
          target: usdcEth,
          abi: 'erc20:balanceOf',
          params: ethAddr,
          block: ethBlock,
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "ethereum:"+usdcEth, balances[usdtEth])

    balances[relayEth] = (
        await sdk.api.abi.call({
          target: relayEth,
          abi: 'erc20:balanceOf',
          params: ethAddr,
          block: ethBlock,
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "ethereum:"+relayEth, balances[usdtEth])    
        console.log(balances)
      return balances
  };

  async function bscTvl(timestamp, ethBlock, chainBlocks) {
    let balances = {};
      balances[usdtBsc] = (
        await sdk.api.abi.call({
          target: usdtBsc,
          chain: 'bsc',
          abi: 'erc20:balanceOf',
          params: bscAddr,
          block: chainBlocks['bsc'],
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "ethereum:"+usdtBsc, balances[usdtBsc])

    balances[daiBsc] = (
        await sdk.api.abi.call({
          target: daiBsc,
          chain: 'bsc',
          abi: 'erc20:balanceOf',
          params: bscAddr,
          block: chainBlocks['bsc'],
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "bsc:"+daiBsc, balances[daiBsc])

    balances[usdcBsc] = (
        await sdk.api.abi.call({
          target: usdcBsc,
          chain: 'bsc',
          abi: 'erc20:balanceOf',
          params: bscAddr,
          block: chainBlocks['bsc'],
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "bsc:"+usdcBsc, balances[usdcBsc]) 
    
    balances[wbnbBsc] = (
        await sdk.api.abi.call({
          target: wbnbBsc,
          chain: 'bsc',
          abi: 'erc20:balanceOf',
          params: bscAddr,
          block: chainBlocks['bsc'],
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "bsc:"+wbnbBsc, balances[wbnbBsc])

    balances[relayBsc] = (
        await sdk.api.abi.call({
          target: relayBsc,
          chain: 'bsc',
          abi: 'erc20:balanceOf',
          params: bscAddr,
          block: chainBlocks['bsc'],
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "bsc:"+relayBsc, balances[relayBsc])

        console.log(balances)
      return balances
  };
module.exports = {
    ethereum: {
        ethTvl,  
    },
    bsc: {
        bscTvl,
    },
    tvl: sdk.util.sumChainTvls([ethTvl, bscTvl]),
  };

