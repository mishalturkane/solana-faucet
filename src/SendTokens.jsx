import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

export function SendTokens() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendTokens() {
    let to = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;
    const transaction = new Transaction();
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(to),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    );

    await wallet.sendTransaction(transaction, connection);
    alert("Sent " + amount + " SOL to " + to);
  }

  return (
    <div className="flex justify-center items-center mt-6">
      <div className="w-[250px] h-[250px] flex p-4 rounded-md flex-col border border-gray-400 justify-center items-center">
        <input
          className="border border-gray-300 rounded-md px-3 py-2 mt-6 focus:outline-none focus:ring-2 focus:ring-purple-500"
          id="to"
          type="text"
          placeholder="to"
        />
        <input
          className="border border-gray-300 rounded-md px-3 py-2 mt-6 focus:outline-none focus:ring-2 focus:ring-purple-500"
          id="amount"
          type="number"
          placeholder="Amount"
        />
        <button
          className="bg-black py-2 px-3 mt-4 hover:cursor-pointer text-white rounded-md "
          onClick={sendTokens}
        >
          send Token
        </button>
      </div>
    </div>
  );
}
