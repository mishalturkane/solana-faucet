
import {
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';

function Navbar() {
  return (
   <nav className='w-full flex justify-between items-center p-4 bg-[#dadada]'>
    <a className='text-xl hover:text-green-600' href="/">solana faucet</a>
   <div className='gap-4 flex justify-between  items-center '>
     <a className='hover:text-[#9945FF]' href="/airdrop">airdrop</a>
    <a className='hover:text-[#9945FF]' href="">send transaction</a>
    <a className='hover:text-[#9945FF]' href="">view transaction history</a>
   </div>

        <div className='flex gap-4'>
                            <WalletMultiButton /> 
                           <WalletDisconnectButton />
                        </div>
   </nav>
  )
}

export default Navbar