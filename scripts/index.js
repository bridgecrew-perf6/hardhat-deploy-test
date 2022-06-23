const { ethers } = require("hardhat");

async function main() {
    const accounts = await ethers.provider.listAccounts();
    const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

    const Box = await ethers.getContractFactory('Box');
    const box = await Box.attach(address);

    const value = await box.retrieve();
    console.log(accounts);
    console.log('Box value is', value.toString());

    await box.store(23);
    const value2 = await box.retrieve();
    console.log('Box value2 is', value.toString());
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});