const chai = require('chai')
const expect = chai.expect

const Web3 = require('web3');

const web3 = new Web3('http://192.168.1.64:6789');

const ownerAddress = "lat1k422xnhua76asazwvref57mm6454r5gamtvdgd"; // owner address
const erc20Address = "lat1fg3u5qy8rnu7gryjznnuvj8fewnvp9efj3zew0"; // contract address
const nonOwnerAddress = "lat1syf66lgsjh7nysn2dr0ddy42kgg8h583nx58su"; // test account address
const abiStr = '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]';
const ownerPrivateKey = "0x720fd94b1093d6fd58704491510f6e60869f721f7a40087d5d05f303a4bea403"; /// owner private key
const ONE_TOKEN = "1000000000000000000";
const nonOwnerPrivateKey = "0xfda1cb7c0c5eab6b56187879176d286546b28e26121556e8d1b8298196a1cfa0"; // non owner private key

let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, { net_type: "lat" });

// 合约的查询接口
describe('Token Info Test Cases', () => {
  // 验证智能合约 Owner
  describe('Owner', () => {
    const owner = "lat1k422xnhua76asazwvref57mm6454r5gamtvdgd";
    it("Token owner should equal " + owner, () => {
      return contract.methods.owner().call(null, (error, result) => {
        expect(result).to.equal(owner);
      });
    });
  });

  // 验证智能合约 Name
  describe('Name', () => {
    const name = "Dante Test";
    it("Token name should equal " + name, () => {
      return contract.methods.name().call(null, (error, result) => {
        expect(result).to.equal(name);
      });
    })
  });

  // 验证智能合约 Symbol
  describe('Symbol', () => {
    const symbol = "DAT-Test";
    it("Token symbol should equal " + symbol, () => {
      return contract.methods.symbol().call(null, (error, result) => {
        expect(result).to.equal(symbol);
      });
    })
  });

  // 验证智能合约 Decimals
  describe('Decimals', () => {
    const decimals = 18;
    it("Token decimals should equal " + decimals, () => {
      return contract.methods.decimals().call(null, (error, result) => {
        expect(parseInt(result)).to.equal(decimals);
      });
    })
  });

  // 测试 allowance
  describe('Allowance', () => {
    it("Allowance of {{ownerAddress}} to {{nonOwnerAddress}} should equal 0", async function () {
      this.timeout(0);
      await contract.methods.allowance(ownerAddress, nonOwnerAddress).call(null, (error, result) => {
        expect(parseInt(result)).to.equal(0);
      });
    });
  });

  // 验证智能合约某个账户的余额
  // describe('BalanceOf', () => {
  //   const balance = 208;
  //   it("The balance of nonOwnerAddress " + nonOwnerAddress + " should equal " + balance + " DAT", () => {
  //     return contract.methods.balanceOf(nonOwnerAddress).call(null, (error, result) => {
  //       expect(parseInt(result) / 1000000000000000000).to.equal(balance);
  //     });
  //   })
  // });
});

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// 合约的执行接口
describe('Token Action Test Cases', () => {
  // 测试 owner 账户转出 DAT
  describe('Transfer', () => {
    it("Transaction status should equal true", async function () {
      this.timeout(0);
      const signTx = await signTransaction("transfer", ownerPrivateKey, [nonOwnerAddress, ONE_TOKEN]);

      // 发送交易
      const receipt = await web3.platon.sendSignedTransaction(signTx.rawTransaction);
      console.log("transaction id: " + receipt.transactionHash, ", transaction status: " + receipt.status);
      expect(receipt.status).to.true;
    });
  });

  // 测试 owner 账户增发 DAT
  describe('Mint', () => {
    it("Transaction status should equal true", async function () {
      this.timeout(0);
      const signTx = await signTransaction("mint", ownerPrivateKey, [ownerAddress, ONE_TOKEN]);

      // 发送交易
      const receipt = await web3.platon.sendSignedTransaction(signTx.rawTransaction);
      console.log("transaction id: " + receipt.transactionHash, ", transaction status: " + receipt.status);
      expect(receipt.status).to.true;
    });
  });

  // 测试 owner 账户销毁 DAT
  describe('Burn', () => {
    it("Transaction status should equal true", async function () {
      this.timeout(0);
      const signTx = await signTransaction("burn", ownerPrivateKey, [ownerAddress, ONE_TOKEN]);

      // 发送交易
      const receipt = await web3.platon.sendSignedTransaction(signTx.rawTransaction);
      console.log("transaction id: " + receipt.transactionHash, ", transaction status: " + receipt.status);
      expect(receipt.status).to.true;
    });
  });


  // 测试 non owner 账户转出 DAT
  describe('Transfer by non owner', () => {
    it("Transaction should throw error", async function () {
      this.timeout(0);
      const signTx = await signTransaction("transfer", nonOwnerPrivateKey, [nonOwnerAddress, ONE_TOKEN]);
      // 发送交易
      try {
        const receipt = await web3.platon.sendSignedTransaction(signTx.rawTransaction);
        expect(1).to.equal(0);
      } catch (error) {
        console.log("transaction id: " + error.receipt.transactionHash, ", transaction status: " + error.receipt.status);
        expect(error).to.an("Error");
      }
    });
  });

  // 测试 non owner 账户增发 DAT
  describe('Mint by non owner', () => {
    it("Transaction should throw error", async function () {
      this.timeout(0);
      const signTx = await signTransaction("mint", nonOwnerPrivateKey, [nonOwnerAddress, ONE_TOKEN]);
      // 发送交易
      try {
        await web3.platon.sendSignedTransaction(signTx.rawTransaction);
        expect(1).to.equal(0);
      } catch (error) {
        console.log("transaction id: " + error.receipt.transactionHash, ", transaction status: " + error.receipt.status);
        expect(error).to.an("Error");
      }
    });
  });


  // 测试 non owner 账户销毁 DAT
  describe('Burn by non owner', () => {
    it("Transaction should throw error", async function () {
      this.timeout(0);
      let transactionId = "";
      const signTx = await signTransaction("burn", nonOwnerPrivateKey, [nonOwnerAddress, ONE_TOKEN]);
      // 发送交易
      try {
        await web3.platon.sendSignedTransaction(signTx.rawTransaction);
        expect(1).to.equal(0);
      } catch (error) {
        console.log("transaction id: " + error.receipt.transactionHash, ", transaction status: " + error.receipt.status);
        expect(error).to.an("Error");
      }
    });
  });

  // 测试 Approve
  describe('Approve', () => {
    it("Transaction should throw error", async function () {
      this.timeout(0);
      const signTx = await signTransaction("approve", ownerPrivateKey, [ownerAddress, ONE_TOKEN]);
      // 发送交易
      try {
        await web3.platon.sendSignedTransaction(signTx.rawTransaction);
        expect(1).to.equal(0);
      } catch (error) {
        console.log("transaction id: " + error.receipt.transactionHash, ", transaction status: " + error.receipt.status);
        expect(error).to.an("Error");
      }
    });
  });

  // 测试 transferFrom
  describe('transferFrom', () => {
    it("Transaction should throw error", async function () {
      this.timeout(0);
      const signTx = await signTransaction("transferFrom", ownerPrivateKey, [ownerAddress, nonOwnerAddress, ONE_TOKEN]);
      // 发送交易
      try {
        await web3.platon.sendSignedTransaction(signTx.rawTransaction);
        expect(1).to.equal(0);
      } catch (error) {
        console.log("transaction id: " + error.receipt.transactionHash, ", transaction status: " + error.receipt.status);
        expect(error).to.an("Error");
      }
    });
  });
});

//////////////////////////////////////////

// 通过私钥签名交易
async function signTransaction(actionName, privateKey, paramsArray) {
  let from = web3.platon.accounts.privateKeyToAccount(privateKey).address; // 私钥导出公钥
  let contract = new web3.platon.Contract(JSON.parse(abiStr), erc20Address, null); // 准备智能合约接口
  let nonce = web3.utils.numberToHex(await web3.platon.getTransactionCount(from)); // 获取 生成 nonce
  let data = contract.methods[actionName].apply(contract.methods, paramsArray).encodeABI(); // encode ABI

  // 准备交易数据
  let tx = {
    from: from,
    to: erc20Address,
    value: 0,
    chainId: 100,
    data: data,
    nonce: nonce,
    gas: "2100000"
  };

  // 签名交易
  let signTx = await web3.platon.accounts.signTransaction(tx, privateKey);
  return signTx;
}