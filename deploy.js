const ethers = require("ethers");
const fs = require("fs-extra");

async function main(){
    const provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");
    const wallet = new ethers.Wallet("0x5758aeaab84a7289fccf5249b0a5212640f95c8eda89d74418462255ef6c0a85", provider);
    const abi=fs.readFileSync("./storage_sol_SimpleStorage.abi", "utf8");
    const binary = fs.readFileSync("./storage_sol_SimpleStorage.bin","utf8");

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    const contract =await contractFactory.deploy({gasPrice: 1000000000}); //wait for contract to deploy
    console.log("Deploying, please wait.....");
    console.log(contract);
    const deploymentReceipt = await contract.deploymentTransaction.wait(1);
    console.log("Here's the deployment receipt");
    console.log(deploymentReceipt);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })