const ethers = require("ethers");
const fs = require("fs-extra");

async function main(){
    const provider = new ethers.providers.JsonRpcProvider("http://0.0.0.0:8545/");
    const wallet = new ethers.Wallet("0xaf5a10b38ad3e3fa6efb03d514e161a65227fe174aa3d611f84140e1f1fef7cf", provider);
}