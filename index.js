const sdk = require("@defillama/sdk");
const { transformBscAddress } = require('../helper/portedTokens');
const Web3 = require('Web3');
// const {calculateUsdUniTvl} = require('../helper/getUsdUniTvl')

//var web3 = new Web3('https://matic-mainnet.chainstacklabs.com');

const usdtEth = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const daiEth = "0x6b175474e89094c44da98b954eedeac495271d0f";
const wbtcEth ="0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";
const usdcEth = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const wethEth = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const relayEth = "0x5D843Fa9495d23dE997C394296ac7B4D721E841c";


const usdtBsc = "0x55d398326f99059fF775485246999027B3197955";
const daiBsc = "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3";
const usdcBsc = "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d";
const busdBsc="0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
const ethBsc="0x2170Ed0880ac9A755fd29B2688956BD959F933F8";
const wbnbBsc = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
const relayBsc = "0xE338D4250A4d959F88Ff8789EaaE8c32700BD175";


const daiAvax= "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70";
const wavax ="0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7";
const wbtcAvax="0x50b7545627a5162F82A992c33b87aDc75187B218";
const usdcAvax="0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664";
const usdtAvax ="0xc7198437980c041c805A1EDcbA50c1Ce5db95118";


const wHeco ="0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F";
const wbtcHeco="0x66a79D23E58475D2738179Ca52cd0b41d73f0BEa";
const ethHeco="0x64FF637fB478863B7468bc97D30a5bF3A428a1fD";
const usdcHeco="0x9362Bbef4B8313A8Aa9f0c9808B80577Aa26B73B";
const daiHeco="0x3D760a45D0887DFD89A2F5385a236B29Cb46ED2a";
const husdHeco="0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047";


const miMatic ="0xa3Fa99A148fA48D14Ed51d610c367C61876997F1";
const wmatic ="0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270";
const wethMatic ="0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";
const wbtcMatic="0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6";
const usdcMatic="0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
const daiMatic="0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";
const usdtMatic="0xc2132D05D31c914a87C6611C10748AEb04B58e8F";


const usdtMovr = "0xB44a9B6905aF7c801311e8F4E76932ee959c663C";
const daiMovr = "0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844";
const usdcMovr = "0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D";
const wbtcMovr = "0xE6a991Ffa8CfE62B0bf6BF72959A3d4f11B2E0f5";
const wethMovr = "0x3Ca3fEFA944753b43c751336A5dF531bDD6598B6";
const relayMovr = "0xAd7F1844696652ddA7959a49063BfFccafafEfe7";
const wMOVR = "0x98878B06940aE243284CA214f92Bb71a2b032B8A0";

const usdtFantom = "0x1B27A9dE6a775F98aaA5B90B62a4e2A0B84DbDd9"; 
const relayFantom = "0x338003E074DabFec661E1901bdB397aF9Cab6A76";
const daiFantom = "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e";
const usdcFantom = "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75";


const usdtHarmony = "0x224e64ec1bdce3870a6a6c777edd450454068fec"; 
const relayHarmony = "0x0e4d3a20b757cea2a0910129991b9d42cc2be188";
const daiHarmony = "0xEf977d2f931C1978Db5F6747666fa1eACB0d0339";
const usdcHarmony = "0x985458e523db3d53125813ed68c274899e9dfab4";
const busdHarmony = "0xe176ebe47d621b984a73036b9da5d834411ef734";

const wsdnSdn = "0x1a6a12953d5439e8965d94d3d8452464fbd53e30";


const usdcMetis = "0xea32a96608495e54156ae48931a7c20f0dcc1a21";
const usdtMetis = "0xbb06dca3ae6887fabf931640f67cab3e3a16f4dc"; 
const relayMetis = "0xfe282Af5f9eB59C30A3f78789EEfFA704188bdD4";


const woneOne = "0x005cac9eed29ccec0f9cca3a0a2052deff584667";


// crocAddr


const ethAddr = "0xF687e1481d85F8b9F4D1f4D4C15348CeF8E5a762";
const bscAddr = "0x3Ea1f65cf49297eA6d265291a2b09D0f2AE649D6";
const avaxAddr ="0x43BEddB3199F2a635C85FfC4f1af228198D268Ab";
const hecoAddr ="0xA21D529B86ef6B71C0caaE4669726755876a0Dc0";
const polyAddr ="0x3Ea1f65cf49297eA6d265291a2b09D0f2AE649D6";
const movrAddr = "0x3e3f619940d9a20DbcF3F7c0c7958f4A67Fac688";
const ftmAddr = "0x502B4683D213C68507fc6d19417df0bB7995b23B";
// const sdnAddr = "0x074412fae37D4C3de9964980352faD07aacDd674";
// const iotexAddr = "0xEfB3E6a5cCe777AE472D1255D712407fd22A9547";
const harmonyAddr = "0xa0026a3047bDf539f6Bf405aF576BE2038faC5A8";
const metisAddr = "0x6A7b82e91E16934EaE0123179b1498F1f2aef45a";


async function ethTvl(timestamp, ethBlock) {
    let balances = {};
    let tokenBalance;
    tokenBalance  = (
        await sdk.api.abi.call({
          target: usdtEth,
          abi: 'erc20:balanceOf',
          params: ethAddr,
          block: ethBlock,
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "ethereum:"+usdtEth, tokenBalance)

    tokenBalance = (
        await sdk.api.abi.call({
          target: daiEth,
          abi: 'erc20:balanceOf',
          params: ethAddr,
          block: ethBlock,
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "ethereum:"+daiEth,tokenBalance)

    tokenBalance = (
        await sdk.api.abi.call({
          target: wethEth,
          abi: 'erc20:balanceOf',
          params: ethAddr,
          block: ethBlock,
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "ethereum:"+wethEth, tokenBalance)

    tokenBalance = (
        await sdk.api.abi.call({
          target: usdcEth,
          abi: 'erc20:balanceOf',
          params: ethAddr,
          block: ethBlock,
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "ethereum:"+usdcEth, tokenBalance)

    tokenBalance= (
        await sdk.api.abi.call({
          target: relayEth,
          abi: 'erc20:balanceOf',
          params: ethAddr,
          block: ethBlock,
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "ethereum:"+relayEth, tokenBalance)   
    
    tokenBalance= (
      await sdk.api.abi.call({
        target: wbtcEth,
        abi: 'erc20:balanceOf',
        params: ethAddr,
        block: ethBlock,
      })
    ).output;
  await sdk.util.sumSingleBalance(balances, "ethereum:"+wbtcEth, tokenBalance) 
      return balances
  };

async function bscTvl(timestamp, ethBlock, chainBlocks) {
    let balances = {};
    let tokenBalance;
    tokenBalance= (
        await sdk.api.abi.call({
          target: usdtBsc,
          chain: 'bsc',
          abi: 'erc20:balanceOf',
          params: bscAddr,
          block: chainBlocks['bsc'],
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "bsc:"+usdtBsc, tokenBalance)

    tokenBalance = (
        await sdk.api.abi.call({
          target: daiBsc,
          chain: 'bsc',
          abi: 'erc20:balanceOf',
          params: bscAddr,
          block: chainBlocks['bsc'],
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "bsc:"+daiBsc, tokenBalance)

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

    tokenBalance = (
        await sdk.api.abi.call({
          target: relayBsc,
          chain: 'bsc',
          abi: 'erc20:balanceOf',
          params: bscAddr,
          block: chainBlocks['bsc'],
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "bsc:"+relayBsc,tokenBalance)


    tokenBalance = (
      await sdk.api.abi.call({
        target: busdBsc,
        chain: 'bsc',
        abi: 'erc20:balanceOf',
        params: bscAddr,
        block: chainBlocks['bsc'],
      })
    ).output;
  await sdk.util.sumSingleBalance(balances, "bsc:"+busdBsc,tokenBalance)

  tokenBalance = (
    await sdk.api.abi.call({
      target: ethBsc,
      chain: 'bsc',
      abi: 'erc20:balanceOf',
      params: bscAddr,
      block: chainBlocks['bsc'],
    })
  ).output;
  await sdk.util.sumSingleBalance(balances, "bsc:"+ethBsc,tokenBalance)

      return balances
  };

async function avaxTvl(timestamp, ethBlock, chainBlocks) {
    let balances = {};
    let tokenBalance;
    tokenBalance= (
        await sdk.api.abi.call({
          target: daiAvax,
          chain: 'avax',
          abi: 'erc20:balanceOf',
          params: avaxAddr,
          block: chainBlocks['avax'],
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "avax:"+daiAvax, tokenBalance)


    tokenBalance= (
      await sdk.api.abi.call({
        target: wavax,
        chain: 'avax',
        abi: 'erc20:balanceOf',
        params: avaxAddr,
        block: chainBlocks['avax'],
      })
    ).output;
  await sdk.util.sumSingleBalance(balances, "avax:"+wavax, tokenBalance)

  tokenBalance= (
    await sdk.api.abi.call({
      target: wbtcAvax,
      chain: 'avax',
      abi: 'erc20:balanceOf',
      params: avaxAddr,
      block: chainBlocks['avax'],
    })
  ).output;
await sdk.util.sumSingleBalance(balances, "avax:"+wbtcAvax, tokenBalance)

tokenBalance= (
  await sdk.api.abi.call({
    target: usdcAvax,
    chain: 'avax',
    abi: 'erc20:balanceOf',
    params: avaxAddr,
    block: chainBlocks['avax'],
  })
).output;
await sdk.util.sumSingleBalance(balances, "avax:"+usdcAvax, tokenBalance)

tokenBalance= (
  await sdk.api.abi.call({
    target: usdtAvax,
    chain: 'avax',
    abi: 'erc20:balanceOf',
    params: avaxAddr,
    block: chainBlocks['avax'],
  })
).output;
await sdk.util.sumSingleBalance(balances, "avax:"+usdtAvax, tokenBalance)
   

    return balances
  };

async function hecoTvl(timestamp, ethBlock, chainBlocks) {
    let balances = {};
    let tokenBalance;
    tokenBalance= (
        await sdk.api.abi.call({
          target: wHeco,
          chain: 'heco',
          abi: 'erc20:balanceOf',
          params: hecoAddr,
          block: chainBlocks['heco'],
        })
      ).output;
    await sdk.util.sumSingleBalance(balances, "heco:"+wHeco, tokenBalance)

    tokenBalance= (
      await sdk.api.abi.call({
        target: daiHeco,
        chain: 'heco',
        abi: 'erc20:balanceOf',
        params: hecoAddr,
        block: chainBlocks['heco'],
      })
    ).output;
  await sdk.util.sumSingleBalance(balances, "heco:"+daiHeco, tokenBalance)

  tokenBalance= (
    await sdk.api.abi.call({
      target: wbtcHeco,
      chain: 'heco',
      abi: 'erc20:balanceOf',
      params: hecoAddr,
      block: chainBlocks['heco'],
    })
  ).output;
await sdk.util.sumSingleBalance(balances, "heco:"+wbtcHeco, tokenBalance)

tokenBalance= (
  await sdk.api.abi.call({
    target: ethHeco,
    chain: 'heco',
    abi: 'erc20:balanceOf',
    params: hecoAddr,
    block: chainBlocks['heco'],
  })
).output;
await sdk.util.sumSingleBalance(balances, "heco:"+ethHeco, tokenBalance)

tokenBalance= (
  await sdk.api.abi.call({
    target: usdcHeco,
    chain: 'heco',
    abi: 'erc20:balanceOf',
    params: hecoAddr,
    block: chainBlocks['heco'],
  })
).output;
await sdk.util.sumSingleBalance(balances, "heco:"+usdcHeco, tokenBalance)

tokenBalance= (
  await sdk.api.abi.call({
    target: husdHeco,
    chain: 'heco',
    abi: 'erc20:balanceOf',
    params: hecoAddr,
    block: chainBlocks['heco'],
  })
).output;
await sdk.util.sumSingleBalance(balances, "heco:"+husdHeco, tokenBalance)


    return balances
};


 async function polygonTvl(timestamp, ethBlock, chainBlocks) {
  
  let balances = {};
  let tokenBalance;
  tokenBalance= (
      await sdk.api.abi.call({
        target: miMatic,
        chain: 'polygon',
        abi: 'erc20:balanceOf',
        params: polyAddr,
        block: chainBlocks['polygon'],
      })
    ).output;
  await sdk.util.sumSingleBalance(balances, "polygon:"+miMatic, tokenBalance)

  tokenBalance= (
    await sdk.api.abi.call({
      target: wmatic,
      chain: 'polygon',
      abi: 'erc20:balanceOf',
      params: polyAddr,
      block: chainBlocks['polygon'],
    })
  ).output;
await sdk.util.sumSingleBalance(balances, "polygon:"+wmatic, tokenBalance)

tokenBalance= (
  await sdk.api.abi.call({
    target: wethMatic,
    chain: 'polygon',
    abi: 'erc20:balanceOf',
    params: polyAddr,
    block: chainBlocks['polygon'],
  })
).output;
await sdk.util.sumSingleBalance(balances, "polygon:"+wethMatic, tokenBalance)

tokenBalance= (
  await sdk.api.abi.call({
    target: wbtcMatic,
    chain: 'polygon',
    abi: 'erc20:balanceOf',
    params: polyAddr,
    block: chainBlocks['polygon'],
  })
).output;
await sdk.util.sumSingleBalance(balances, "polygon:"+wbtcMatic, tokenBalance)

tokenBalance= (
  await sdk.api.abi.call({
    target: usdcMatic,
    chain: 'polygon',
    abi: 'erc20:balanceOf',
    params: polyAddr,
    block: chainBlocks['polygon'],
  })
).output;
await sdk.util.sumSingleBalance(balances, "polygon:"+usdcMatic, tokenBalance)

tokenBalance= (
  await sdk.api.abi.call({
    target: usdtMatic,
    chain: 'polygon',
    abi: 'erc20:balanceOf',
    params: polyAddr,
    block: chainBlocks['polygon'],
  })
).output;
await sdk.util.sumSingleBalance(balances, "polygon:"+usdtMatic, tokenBalance)

tokenBalance= (
  await sdk.api.abi.call({
    target: daiMatic,
    chain: 'polygon',
    abi: 'erc20:balanceOf',
    params: polyAddr,
    block: chainBlocks['polygon'],
  })
).output;
await sdk.util.sumSingleBalance(balances, "polygon:"+daiMatic, tokenBalance)


  return balances
};

// async function movrTvl(timestamp, ethBlock, chainBlocks) {
//   let balances = {};
//   let tokenBalance;
//   tokenBalance= (
//       await sdk.api.abi.call({
//         target: usdtMovr,
//         chain: 'movr',
//         abi: 'erc20:balanceOf',
//         params: movrAddr,
//         block: chainBlocks['movr'],
//       })
//     ).output;
//   await sdk.util.sumSingleBalance(balances, "movr:"+usdtMovr, tokenBalance)

//   tokenBalance = (
//       await sdk.api.abi.call({
//         target: daiMovr,
//         chain: 'movr',
//         abi: 'erc20:balanceOf',
//         params: movrAddr,
//         block: chainBlocks['movr'],
//       })
//     ).output;
//   await sdk.util.sumSingleBalance(balances, "movr:"+daiMovr, tokenBalance)

//   balances[usdcMovr] = (
//       await sdk.api.abi.call({
//         target: usdcMovr,
//         chain: 'movr',
//         abi: 'erc20:balanceOf',
//         params: movrAddr,
//         block: chainBlocks['movr'],
//       })
//     ).output;
//   await sdk.util.sumSingleBalance(balances, "movr:"+usdcMovr, balances[usdcMovr]) 
  
//   balances[wethMovr] = (
//       await sdk.api.abi.call({
//         target: wethMovr,
//         chain: 'movr',
//         abi: 'erc20:balanceOf',
//         params: movrAddr,
//         block: chainBlocks['movr'],
//       })
//     ).output;
//   await sdk.util.sumSingleBalance(balances, "movr:"+wethMovr, balances[wethMovr])

//   tokenBalance = (
//       await sdk.api.abi.call({
//         target: relayMovr,
//         chain: 'movr',
//         abi: 'erc20:balanceOf',
//         params: movrAddr,
//         block: chainBlocks['movr'],
//       })
//     ).output;
//   await sdk.util.sumSingleBalance(balances, "movr:"+relayMovr,tokenBalance)


//   tokenBalance = (
//     await sdk.api.abi.call({
//       target: wbtcMovr,
//       chain: 'movr',
//       abi: 'erc20:balanceOf',
//       params: movrAddr,
//       block: chainBlocks['movr'],
//     })
//   ).output;
// await sdk.util.sumSingleBalance(balances, "movr:"+wbtcMovr,tokenBalance)

// tokenBalance = (
//   await sdk.api.abi.call({
//     target: wmovrMovr,
//     chain: 'movr',
//     abi: 'erc20:balanceOf',
//     params: movrAddr,
//     block: chainBlocks['movr'],
//   })
// ).output;
// await sdk.util.sumSingleBalance(balances, "movr:"+wmovrMovr,tokenBalance)
// return balances
// }


async function tvlFantom(unixTimestamp, ethBlock, chainBlocks) {
  const block = chainBlocks["fantom"]

  const balances = {}
  
  balances[usdcEth] = (
    await sdk.api.abi.call({
      abi: 'erc20:balanceOf',
      target: usdcFantom,
      params: ftmAddr,
      block: block,
      chain: "fantom",
    })
  ).output;

  balances[daiEth] = (
    await sdk.api.abi.call({
      abi: 'erc20:balanceOf',
      target: daiFantom,
      params: ftmAddr,
      block: block,
      chain: "fantom",
    })
  ).output;

  balances[usdtEth] = (
    await sdk.api.abi.call({
      abi: 'erc20:balanceOf',
      target: usdtFantom,
      params: ftmAddr,
      block: block,
      chain: "fantom",
    })
  ).output;

  balances[relayEth] = (
    await sdk.api.abi.call({
      abi: 'erc20:balanceOf',
      target: relayFantom,
      params: ftmAddr,
      block: block,
      chain: "fantom",
    })
  ).output;

  return balances
}

async function tvlharmony(unixTimestamp, ethBlock, chainBlocks) {
  const block = chainBlocks["harmony"]

  const balances = {}
  
  balances[usdcEth] = (
    await sdk.api.abi.call({
      abi: 'erc20:balanceOf',
      target: usdcHarmony,
      params: harmonyAddr,
      block: block,
      chain: "harmony",
    })
  ).output;
  balances[daiEth] = (
    await sdk.api.abi.call({
      abi: 'erc20:balanceOf',
      target: daiHarmony,
      params: harmonyAddr,
      block: block,
      chain: "harmony",
    })
  ).output;
  balances[relayEth] = (
    await sdk.api.abi.call({
      abi: 'erc20:balanceOf',
      target: relayHarmony,
      params: harmonyAddr,
      block: block,
      chain: "harmony",
    })
  ).output;
  balances[usdtEth] = (
    await sdk.api.abi.call({
      abi: 'erc20:balanceOf',
      target: usdtHarmony,
      params: harmonyAddr,
      block: block,
      chain: "harmony",
    })
  ).output;
  balances[busdHarmony] = (
    await sdk.api.abi.call({
      abi: 'erc20:balanceOf',
      target: busdHarmony,
      params: harmonyAddr,
      block: block,
      chain: "harmony",
    })
  ).output;

  return balances
  } 

async function tvlMetis(unixTimestamp, ethBlock, chainBlocks) {
  const block = chainBlocks["metis"]

  const balances = {}
  
  balances[usdcEth] = (
    await sdk.api.abi.call({
      abi: 'erc20:balanceOf',
      target: usdcMetis,
      params: metisAddr,
      block: block,
      chain: "metis",
    })
  ).output;

  balances[usdtEth] = (
    await sdk.api.abi.call({
      abi: 'erc20:balanceOf',
      target: usdtMetis,
      params: metisAddr,
      block: block,
      chain: "metis",
    })
  ).output;

  balances[relayEth] = (
    await sdk.api.abi.call({
      abi: 'erc20:balanceOf',
      target: relayMetis,
      params: metisAddr,
      block: block,
      chain: "metis",
    })
  ).output;
  return balances
  }

 module.exports = {
  ethereum: {
    ethTvl,  
},
bsc: {
    bscTvl,
},
avax:{
  avaxTvl,
},
heco:{
  hecoTvl,
},
polygon:{
  polygonTvl,
}, 
// movr:{
//   movrTvl,
// }, 
ftm:{
  tvlFantom,
}, 
// shiden:{
//   sdnTvl,
// }, 
harmony :{
  tvlharmony,
},
metis :{
  tvlMetis,
},

tvl: sdk.util.sumChainTvls([tvlMetis, ethTvl, bscTvl, avaxTvl, hecoTvl, polygonTvl, tvlFantom, tvlharmony]),
  
}; 
