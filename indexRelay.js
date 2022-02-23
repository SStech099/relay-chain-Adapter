const sdk = require('@defillama/sdk');
const { transformBscAddress, transformMaticAddress, transformAvaxAddress, transformHecoAddress 
} = require("../helper/portedTokens");


async function ethTvl(timestamp, block) {
    const balances = {};
    // const transform = await transformBscAddress();

    const collateralBalance = (await sdk.api.abi.call({
        abi: 'erc20:balanceOf',
        target: "0xF687e1481d85F8b9F4D1f4D4C15348CeF8E5a762",
        block, 
    })).output;

    await sdk.util.sumSingleBalance(balances, transform(0xF687e1481d85F8b9F4D1f4D4C15348CeF8E5a762), collateralBalance)
    return balances;

}
async function bnbTvl(timestamp, block, chainBlocks) {
    const balances = {};
    const transform = await transformBscAddress();

    const collateralBalance = (await sdk.api.abi.call({
        abi: 'erc20:balanceOf',
        chain: 'bsc',
        target: "0x3Ea1f65cf49297eA6d265291a2b09D0f2AE649D6",
        block: chainBlocks['bsc'],
    })).output;

    await sdk.util.sumSingleBalance(balances, transform(0x3Ea1f65cf49297eA6d265291a2b09D0f2AE649D6), collateralBalance)
    return balances;

}
async function avaxTvl(timestamp, block, chainBlocks) {
    const balances = {};
    const transform = await transformAvaxAddress();

    const collateralBalance = (await sdk.api.abi.call({
        abi: 'erc20:balanceOf',
        chain: 'avax',
        target: "0x43BEddB3199F2a635C85FfC4f1af228198D268Ab",
        block: chainBlocks['avax'],
    })).output;

    await sdk.util.sumSingleBalance(balances, transform(0x43BEddB3199F2a635C85FfC4f1af228198D268Ab), collateralBalance)
    return balances;

}
async function maticTvl(timestamp, block, chainBlocks) {
    const balances = {};
    const transform = await transformMaticAddress();

    const collateralBalance = (await sdk.api.abi.call({
        abi: 'erc20:balanceOf',
        chain: 'polygon',
        target: "0x3Ea1f65cf49297eA6d265291a2b09D0f2AE649D6",
        block: chainBlocks['polygon'],
    })).output;

    await sdk.util.sumSingleBalance(balances, transform(0x3Ea1f65cf49297eA6d265291a2b09D0f2AE649D6), collateralBalance)
    return balances;
}
async function hecoTvl(timestamp, block, chainBlocks) {
    const balances = {};
    const transform = await transformHecoAddress();

    const collateralBalance = (await sdk.api.abi.call({
        abi: 'erc20:balanceOf',
        chain: 'heco',
        target: "0xA21D529B86ef6B71C0caaE4669726755876a0Dc0",
        block: chainBlocks['heco'],
    })).output;

    await sdk.util.sumSingleBalance(balances, transform(0xA21D529B86ef6B71C0caaE4669726755876a0Dc0), collateralBalance)
    return balances;
}
async function movrTvl(timestamp, block, chainBlocks) {
    const balances = {};
    const transform = await transformMovrAddress();

    const collateralBalance = (await sdk.api.abi.call({
        abi: 'erc20:balanceOf',
        chain: 'movr',
        target: "0x3e3f619940d9a20DbcF3F7c0c7958f4A67Fac688",
        block: chainBlocks['movr'],
    })).output;

    await sdk.util.sumSingleBalance(balances, transform(0x3e3f619940d9a20DbcF3F7c0c7958f4A67Fac688), collateralBalance)
    return balances;
}
async function ftmTvl(timestamp, block, chainBlocks) {
    const balances = {};
    const transform = await transformFtmAddress();

    const collateralBalance = (await sdk.api.abi.call({
        abi: 'erc20:balanceOf',
        chain: 'ftm',
        target: "0x502B4683D213C68507fc6d19417df0bB7995b23B",
        block: chainBlocks['ftm'],
    })).output;

    await sdk.util.sumSingleBalance(balances, transform(0x502B4683D213C68507fc6d19417df0bB7995b23B), collateralBalance)
    return balances;
}
async function sdnTvl(timestamp, block, chainBlocks) {
    const balances = {};
    const transform = await transformSdnAddress();

    const collateralBalance = (await sdk.api.abi.call({
        abi: 'erc20:balanceOf',
        chain: 'heco',
        target: "0x074412fae37D4C3de9964980352faD07aacDd674",
        block: chainBlocks['sdn'],
    })).output;

    await sdk.util.sumSingleBalance(balances, transform(0x074412fae37D4C3de9964980352faD07aacDd674), collateralBalance)
    return balances;
}
async function iotxTvl(timestamp, block, chainBlocks) {
    const balances = {};
    const transform = await transformIotxAddress();

    const collateralBalance = (await sdk.api.abi.call({
        abi: 'erc20:balanceOf',
        chain: 'iotx',
        target: "0xEfB3E6a5cCe777AE472D1255D712407fd22A9547",
        block: chainBlocks['iotx'],
    })).output;

    await sdk.util.sumSingleBalance(balances, transform(0xEfB3E6a5cCe777AE472D1255D712407fd22A9547), collateralBalance)
    return balances;
}
async function oneTvl(timestamp, block, chainBlocks) {
    const balances = {};
    const transform = await transformOneAddress();

    const collateralBalance = (await sdk.api.abi.call({
        abi: 'erc20:balanceOf',
        chain: 'one',
        target: "0xa0026a3047bDf539f6Bf405aF576BE2038faC5A8",
        block: chainBlocks['one'],
    })).output;

    await sdk.util.sumSingleBalance(balances, transform(0xa0026a3047bDf539f6Bf405aF576BE2038faC5A8), collateralBalance)
    return balances;
}
async function croTvl(timestamp, block, chainBlocks) {
    const balances = {};
    const transform = await transformCroAddress();

    const collateralBalance = (await sdk.api.abi.call({
        abi: 'erc20:balanceOf',
        chain: 'cro',
        target: "0x3f1B059d94551c9300176ceB55FD23aF0e4E2E29",
        block: chainBlocks['cro'],
    })).output;

    await sdk.util.sumSingleBalance(balances, transform(0x3f1B059d94551c9300176ceB55FD23aF0e4E2E29), collateralBalance)
    return balances;
}


module.exports = {
    ethereum: {
        tvl: ethTvl
    },
    binance: {
        tvl: bnbTvl
    },
    avax: {
        tvl: avaxTvl
    },
    polygon: {
        tvl: maticTvl
    },
    heco: {
        tvl: hecoTvl
    },
    moonriver: {
        tvl: movrTvl
    },
    fantom: {
        tvl: ftmTvl
    },
    shiden: {
        tvl: sdnTvl
    },
    iotex: {
        tvl: iotxTvl
    },
    harmony: {
        tvl: oneTvl
    },
    crochain: {
        tvl: croTvl
    },
    tvl: sdk.util.sumChainTvls([ethTvl, bnbTvl, avaxTvl, maticTvl, hecoTvl, movrTvl, ftmTvl, sdnTvl, iotxTvl, oneTvl, croTvl]),
}