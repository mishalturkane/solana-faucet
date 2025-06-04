import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function Balance() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function getBalance() { 
        if (wallet.publicKey) {

            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
        }
    }
    
    getBalance();
    return (  <div className="flex justify-center items-center mt-6">
  <div className="w-fit flex p-4 rounded-md flex-col border border-gray-400 justify-center items-center">
        <p>SOL Balance:</p> <div id="balance"></div>
    </div>
    </div>
    )
};