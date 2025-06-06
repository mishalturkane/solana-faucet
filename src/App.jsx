
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';

import {Airdrop} from './Airdrop';
import {Balance} from './Balance';
import { SendTokens } from './SendTokens';
import { SignMessage } from './SignMessage';
import { Transaction } from './Transaction';
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Navbar from './Navbar';

function App() {


  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  
                    <div>
                      <Navbar/>
                
                    
                      <Airdrop>

                      </Airdrop>
                      <Balance></Balance>
                      <SendTokens></SendTokens>
                      <SignMessage></SignMessage>
                      <Transaction />
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  );
}

export default App
