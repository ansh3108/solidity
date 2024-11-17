const ethers = require("ethers");
const fs = require("fs-extra");

async function main(){
    const provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
    const wallet = new ethers.Wallet("0x2ef7d6e3454757df132ed24d6c71d1b50dec4539f7263387b105ff2d8c42c8f9", provider);
    const abi=fs.readFileSync("./storage_sol_SimpleStorage.abi", "utf8");
    const binary = fs.readFileSync("./storage_sol_SimpleStorage.bin","utf8");
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying, please wait.....");
    const contract =await contractFactory.deploy(); //wait for contract to deploy
    console.log(contract);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })