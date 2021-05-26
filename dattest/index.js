const abiStr = '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
const erc20Address = "lat1fg3u5qy8rnu7gryjznnuvj8fewnvp9efj3zew0"
const rootAddr = "lat1k422xnhua76asazwvref57mm6454r5gamtvdgd"
const ONE_TOKEN = "1000000000000000000"
const HUNDRED_TOKEN = "100000000000000000000"
const THOUSANS_TOKEN = "1000000000000000000000"
const address = "lat1syf66lgsjh7nysn2dr0ddy42kgg8h583nx58su"
const IP = "http://192.168.1.49:6789"
const PRIVATE_KEY = "0x720fd94b1093d6fd58704491510f6e60869f721f7a40087d5d05f303a4bea403"
const CHAIN_ID = 100

var Web3 = require("web3");

const owner = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = web3.platon.accounts.privateKeyToAccount(privateKey).address;
    console.log("from", from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    contract.methods.owner().call(null, (error, result) => {
        console.log(result)
    });
}

const name = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = web3.platon.accounts.privateKeyToAccount(privateKey).address;
    console.log("from", from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    contract.methods.name().call(null, (error, result) => console.log(result));
}

const symbol = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = web3.platon.accounts.privateKeyToAccount(privateKey).address;
    console.log("from", from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    contract.methods.symbol().call(null, (error, result) => console.log(result));
}

const decimals = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = web3.platon.accounts.privateKeyToAccount(privateKey).address;
    console.log("from", from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    contract.methods.decimals().call(null, (error, result) => console.log(result));
}

const balanceOf = async function (addr) {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = web3.platon.accounts.privateKeyToAccount(privateKey).address;
    console.log("from", from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    contract.methods.balanceOf(addr).call(null, (error, result) => console.log(result));
}

const mint_fail_caller_not_owner = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = address;
    console.log("from", from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    try {
        await contract.methods.mint(address, HUNDRED_TOKEN).send({
            from: from,
        }).on('receipt', function(receipt) {
            console.log(receipt);
        }).on('error', console.error);
    }
    catch(e) {
        console.log("execution error", e)
    }

    await contract.methods.balanceOf(address).call(null, (error, result) => console.log("balance Of:" + address, result));
    await contract.methods.totalSupply().call(null, (error, result) => console.log("totalSupply", result));
}

const mint = async function (addr) {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = web3.platon.accounts.privateKeyToAccount(privateKey).address;
    console.log("from", from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    try {
        await contract.methods.mint(addr, HUNDRED_TOKEN).send({
            from: from,
        }).on('receipt', function(receipt) {
            console.log(receipt);
        }).on('error', console.error);
    }
    catch(e) {
        console.log("execution error", e)
    }

    await contract.methods.balanceOf(addr).call(null, (error, result) => console.log("balance Of:" + addr, result));
    await contract.methods.totalSupply().call(null, (error, result) => console.log("totalSupply", result));
}

const burn_fail_caller_not_owner = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = address;
    console.log("from",from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    try {
        await contract.methods.burn(address, ONE_TOKEN).send({
            from: from,
        }).on('receipt', function(receipt) {
            console.log(receipt);
        }).on('error', console.error);
    }
    catch(e) {
        console.log("execution error", e)
    }

    await contract.methods.balanceOf(address).call(null, (error, result) => console.log("balance Of:" + address, result));
    await contract.methods.totalSupply().call(null, (error, result) => console.log("totalSupply", result));
}

const burn_fail_balance_not_enough = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = web3.platon.accounts.privateKeyToAccount(privateKey).address;
    console.log("from",from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    try {
        await contract.methods.burn(address, HUNDRED_TOKEN).send({
            from: from,
        }).on('receipt', function(receipt) {
            console.log(receipt);
        }).on('error', console.error);
    }
    catch(e) {
        console.log("execution error", e)
    }

    await contract.methods.balanceOf(address).call(null, (error, result) => console.log("balance Of:" + address, result));
    await contract.methods.totalSupply().call(null, (error, result) => console.log("totalSupply", result));
}

const burn = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = web3.platon.accounts.privateKeyToAccount(privateKey).address;
    console.log("from",from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    try {
        await contract.methods.burn(address, ONE_TOKEN).send({
            from: from,
        }).on('receipt', function(receipt) {
            console.log(receipt);
        }).on('error', console.error);
    }
    catch(e) {
        console.log("execution error", e)
    }

    await contract.methods.balanceOf(address).call(null, (error, result) => console.log("balance Of:" + address, result));
    await contract.methods.totalSupply().call(null, (error, result) => console.log("totalSupply", result));
}

const transfer_fail_not_owner = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = address;
    console.log("from",from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    try {
        await contract.methods.transfer(address, ONE_TOKEN).send({
            from: from,
        }).on('receipt', function(receipt) {
            console.log(receipt);
        }).on('error', console.error);
    }
    catch(e) {
        console.log("execution error", e)
    }

    await contract.methods.balanceOf(address).call(null, (error, result) => console.log("balance Of:" + address, result));
    await contract.methods.balanceOf(rootAddr).call(null, (error, result) => console.log("balance Of:" + rootAddr, result));
}

const transfer = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = web3.platon.accounts.privateKeyToAccount(privateKey).address;
    console.log("from",from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    try {
        await contract.methods.transfer(address, ONE_TOKEN).send({
            from: from,
        }).on('receipt', function(receipt) {
            console.log(receipt);
        }).on('error', console.error);
    }
    catch(e) {
        console.log("execution error", e)
    }

    await contract.methods.balanceOf(address).call(null, (error, result) => console.log("balance Of:" + address, result));
    await contract.methods.balanceOf(rootAddr).call(null, (error, result) => console.log("balance Of:" + rootAddr, result));
}

const approve = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = web3.platon.accounts.privateKeyToAccount(privateKey).address;
    console.log("from",from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    try {
        await contract.methods.approve(address, ONE_TOKEN).send({
            from: from,
        }).on('receipt', function(receipt) {
            console.log(receipt);
        }).on('error', console.error);
    }
    catch(e) {
        console.log("execution error", e)
    }

    await contract.methods.allowance(rootAddr, address).call(null, (error, result) => console.log("allowance Of:" + rootAddr + " to " + address, result));
}

const transferFrom = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = web3.platon.accounts.privateKeyToAccount(privateKey).address;
    console.log("from",from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    try {
        await contract.methods.transferFrom(rootAddr, address, ONE_TOKEN).send({
            from: from,
        }).on('receipt', function(receipt) {
            console.log(receipt);
        }).on('error', console.error);
    }
    catch(e) {
        console.log("execution error", e)
    }

    await contract.methods.allowance(rootAddr, address).call(null, (error, result) => console.log("allowance Of:" + rootAddr + " to " + address, result));
    await contract.methods.balanceOf(address).call(null, (error, result) => console.log("balance Of:" + address, result));
}

const transferOwnership_fail_not_owner = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = address;
    console.log("from",from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    try {
        await contract.methods.transferOwnership(address).send({
            from: from,
        }).on('receipt', function(receipt) {
            console.log(receipt);
        }).on('error', console.error);
    }
    catch(e) {
        console.log("execution error", e)
    }

    contract.methods.owner().call(null, (error, result) => console.log(result));
}

const transferOwnership = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = web3.platon.accounts.privateKeyToAccount(privateKey).address;
    console.log("from",from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    try {
        await contract.methods.transferOwnership(address).send({
            from: from,
        }).on('receipt', function(receipt) {
            console.log(receipt);
        }).on('error', console.error);
    }
    catch(e) {
        console.log("execution error", e)
    }

    contract.methods.owner().call(null, (error, result) => console.log(result));
}

const renounceOwnership_fail_not_owner = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = address;
    console.log("from",from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    try {
        await contract.methods.renounceOwnership().send({
            from: from,
        }).on('receipt', function(receipt) {
            console.log(receipt);
        }).on('error', console.error);
    }
    catch(e) {
        console.log("execution error", e)
    }

    contract.methods.owner().call(null, (error, result) => console.log(result));
}

const renounceOwnership = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = web3.platon.accounts.privateKeyToAccount(privateKey).address;
    console.log("from",from)
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    try {
        await contract.methods.renounceOwnership().send({
            from: from,
        }).on('receipt', function(receipt) {
            console.log(receipt);
        }).on('error', console.error);
    }
    catch(e) {
        console.log("execution error", e)
    }

    contract.methods.owner().call(null, (error, result) => console.log(result));
}

const blockNumber = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = web3.platon.accounts.privateKeyToAccount(privateKey).address;
    console.log("from",from)
    let nonce = web3.utils.numberToHex(await web3.platon.getTransactionCount(from));
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    let data = contract.methods["BlockNumber"].apply(contract.methods, []).encodeABI();
    console.log("nonce", nonce)
    let tx = {
        from:from,
        to: erc20Address,
        // value: "1000000000000000000",
        chainId: 210309,
        data: data,
        gasPrice: "10000000000000", 
        gas: "2100000", 
        nonce: nonce,
    };
    let st = await web3.platon.call(tx);
    console.log(st);
}

const timeStamp = async function () {
    web3 = new Web3(IP);
    var privateKey = PRIVATE_KEY;
    // 主网地址
    let from = web3.platon.accounts.privateKeyToAccount(privateKey).address;
    console.log("from",from)
    let nonce = web3.utils.numberToHex(await web3.platon.getTransactionCount(from));
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    let data = contract.methods["timeStamp"].apply(contract.methods, []).encodeABI();
    console.log("nonce", nonce)
    let tx = {
        from:from,
        to: erc20Address,
        // value: "1000000000000000000",
        chainId: 210309,
        data: data,
        gasPrice: "10000000000000", 
        gas: "2100000", 
        nonce: nonce,
    };
    let st = await web3.platon.call(tx);
    console.log(st);
}

const BlockHash = async function () {
    web3 = new Web3(IP);
    var privateKey="0xcaf4a0d6f723ce3a396dd40511a1008a0d90e2ff202a8cadb29d13bec16d9a88";
    // 主网地址
    let from = web3.platon.accounts.privateKeyToAccount(privateKey).address;
    console.log("from",from)
    let nonce = web3.utils.numberToHex(await web3.platon.getTransactionCount(from));
    let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, {net_type: "lat"});
    let data = contract.methods["BlockHash"].apply(contract.methods, []).encodeABI();
    console.log("nonce", nonce)
    let tx = {
        from:from,
        to: erc20Address,
        // value: "1000000000000000000",
        chainId: 210309,
        data: data,
        gasPrice: "10000000000000", 
        gas: "2100000", 
        nonce: nonce,
    };
    let st = await web3.platon.call(tx);
    console.log(st);
}

owner()
// name()
// symbol()
// decimals()
// mint_fail_caller_not_owner()
// mint(address)
// burn_fail_caller_not_owner()
// burn_fail_balance_not_enough()
// burn()
// transfer_fail_not_owner()
// transfer()
// approve()
// transferFrom()
// transferOwnership_fail_not_owner()
// transferOwnership()
// renounceOwnership_fail_not_owner()
// renounceOwnership()
// balanceOf(rootAddr)

