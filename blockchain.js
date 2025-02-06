import { ethers } from 'ethers';
//import dotenv from 'dotenv';
//dotenv.config();
const RPC_URL = 'https://apechain.calderachain.xyz/http';
const NFT_CONTRACT_ADDRESS = '0xBeEFbD7867604B49703d9630517c4b330bEBC1cb';

const provider = new ethers.JsonRpcProvider(RPC_URL);
const contractAddress = NFT_CONTRACT_ADDRESS;

const abi = [
    "function balanceOf(address owner) view returns (uint256)"
  ];

const contract = new ethers.Contract(contractAddress, abi, provider);

/**
 * Fetches the balance of a given address.
 *
 * @param {string} address the address to fetch the balance for
 * @returns {Promise<number>} the balance of the given address
 * @throws if there is an error fetching the balance
 */
export async function getNftBalance(address) {
    try {
        // Call the balanceOf function on the contract
        const balance = await contract.balanceOf(address);

        // Return the balance
        return balance.toString();
    } catch (error) {
        // Log the error
        console.error('Error fetching balance:', error);

        // Throw the error
        //throw error;
    }
}
