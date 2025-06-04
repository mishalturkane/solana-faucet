import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function Airdrop() {
  const wallet = useWallet();

  const { connection } = useConnection();

  async function sendAirdropToUser() {
    const amount = document.getElementById("publicKey").value;
    await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
    alert("airdrop sended");
  }
  return (
   <div className="flex justify-center items-center mt-6">
  <div className="w-fit flex p-4 rounded-md flex-col border border-gray-400 justify-center items-center">
    <input
      className="border border-gray-300 rounded-md px-3 py-2 mt-6 focus:outline-none focus:ring-2 focus:ring-purple-500"
      id="publicKey"
      type="text"
      placeholder="Amount"
    />

    <button
      className="bg-black py-2 px-3 mt-4 hover:cursor-pointer text-white rounded-md "
      onClick={sendAirdropToUser}
    >
      send Airdrop
    </button>
  </div>
</div>

  );
}
