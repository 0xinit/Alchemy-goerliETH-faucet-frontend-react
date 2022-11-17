import logo from './img/alchemy.png';
import './App.css';
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

function App() {

  const [haveMetamask, sethaveMetamask] = useState(true);
  const [currentAccount, setCurrentAccount] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  
    useEffect(() => {
      const { ethereum } = window; 
      const checkMetamaskAvailability = async () => {
        if (!ethereum) {
          sethaveMetamask(false);
        }
        sethaveMetamask(true);
      };
      checkMetamaskAvailability();
    }, []);
    
    // connect wallet
    const connectWallet = async () => {
      try {
        if (!ethereum) {
          alert("Get MetaMask!");
          return;
        }
  
        const accounts = await ethereum.request({ method: 'eth_requestAccounts', });

        setCurrentAccount(accounts[0]); 

        setIsConnected(true);
      } catch (error) {
        setIsConnected(false);
      }
    };


  return (
    <div className="App">
            {haveMetamask ? (
      <header className="App-header">
        {isConnected ? (
          <div className='geteth-bar'>
            <img src={logo} className="App-logo" alt="logo" />

            <input className='imput-wallet-address' placeholder='Enter Your Wallet Address (0x...)'></input>
            <h1 className='app-title-connected'>Alchemy University Goerli Faucet</h1>
            <button className='Send-eth-button'>Send Me ETH</button>
            </div>
            ) : (
              <div>
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className='app-title'>Alchemy University Goerli Faucet</h1>
              <button className="connect-bottom" onClick={connectWallet}>
                Connect Wallet
              </button>
              </div>
            )}
      </header>
      ) : (
      <h1 id='need-metamask'>Please Install MataMask</h1>
      )}
    </div>
  );
}

export default App;
