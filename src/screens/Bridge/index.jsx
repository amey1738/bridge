import React, { useState } from 'react';
import './bridge.css';
import BridgeTokens from './bridgeTokens';

const networks = [
  { id: 1, name: 'Network 1' },
  { id: 2, name: 'Network 2' },
  { id: 3, name: 'Network 3' },
  // Add more networks as needed
];

const Bridge = () => {
  const [fromNetwork, setFromNetwork] = useState(networks[0].id);
  const [toNetwork, setToNetwork] = useState(networks[1].id);
  const [amount, setAmount] = useState(0);

  const handleFromNetworkChange = (e) => {
    setFromNetwork(parseInt(e.target.value));
  };

  const handleToNetworkChange = (e) => {
    setToNetwork(parseInt(e.target.value));
  };

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value));
  };

  return (
    <div style={{backgroundColor : 'rgb(248,248,248)'}}><BridgeTokens/></div>
        
  );
  
};

export default Bridge;