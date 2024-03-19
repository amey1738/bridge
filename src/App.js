import './App.css';
import Navbar from './componants/Navbar/Navbar';
import Bridge from './screens/Bridge';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  const [walletAddress, setWalletAddress] = useState("Connect Wallet");

  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');

  const [tokenBalance, setTokenBalance] = useState('');

  // const getCurrentWalletConnected = async () => {
  //   if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
  
  //     if(window.ethereum){
  //       try {
  //         /* get provider */
  //         const provider  = new  BrowserProvider(window.ethereum);
         
  //         /* accounts */
  //         const accounts = await provider.send("eth_requestAccounts", []);
           
  //         // if (accounts.length > 0) {
  //          /* get signer */
  //          const signer = await provider.getSigner();
  //          console.log(signer);
   
  //          setSigner(await provider.getSigner());
   
  //         /* local contract */
  //          setFcContract(faucetContract(provider));
          
  //          setAccount(accounts[0]);
  //          setWalletAddress(accounts[0]);
  //          console.log(accounts[0]);
      
  //         //  getTokenBalance(accounts[0]);
   
  //       //  }
  //       //   else {
  //       //    alert('Please login to metamask');
  //       //    console.log("Connect to MetaMask using the Connect button");
  //       //  }
  //      } catch (err) {
  //        console.error(err.message);
  //      }
  //     } 
      
  //   } else {
  //     /* MetaMask is not installed */
  //     console.log("Please install MetaMask");
  //   }
  // };
  
  const getCurrentWalletConnected = async () => {}

  return (
    <Router>
    <Navbar connectWalletClick={getCurrentWalletConnected} walletAddress={walletAddress} tokenBalance={tokenBalance} />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Bridge />} />
      
      </Routes>
    </main>
  </Router>
  );
}

export default App;
