import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React from 'react';

export function SignMessage() {
    const { publicKey, signMessage } = useWallet();

    async function onClick() {
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');
        
        const message = document.getElementById("message").value;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
        alert('success', `Message signature: ${bs58.encode(signature)}`);
    };

    return (
       <div className="w-full flex flex-col justify-center items-center">
          <input
  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
  id="message"
  type="text"
  placeholder="message"
/>

            <button
        className="bg-black py-2 px-3 mt-4 hover:cursor-pointer text-white rounded-md "
        onClick={onClick}
      >
       sign message
      </button>
        </div>
    );
};