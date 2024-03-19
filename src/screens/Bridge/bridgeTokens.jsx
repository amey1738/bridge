import React from 'react';

import { LuSettings2 } from "react-icons/lu";
import { LuBookmarkMinus } from "react-icons/lu";
import Dropdown from '../../componants/dropdown/dropdown';
import TextField from '../../componants/textField/textField';
import RoundedButton from '../../componants/roundedButton/roundedButton';
import { BiTransfer } from "react-icons/bi";

import './bridge.css';




const BridgeTokens = () => {

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'rgb(248,248,248)',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        
      }}>

      <div
        style={{
          backgroundColor: '#fff',
          padding: '32px',
          borderRadius: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '600px',
          marginLeft: '10%',
          marginRight: '10%',
          marginTop : '10%',
          textAlign: 'center',
        }}>

        <div className='title-part'>
          <h2>Bridge tokens</h2>
        
          <div class="icon-container">
            <i class="item"><LuBookmarkMinus/></i>
            <i class="item"><LuSettings2/></i>
          </div>
        </div>

        <div class="subtitle-section">
        <p>Transfer your tokens from one network to another.</p>
        </div>


        <div style={{ display: 'flex', justifyContent : 'space-between' }} > 


 
        {/* from section */}

        <div style={{ width: '40%',}} >

          <div className='network-selection-container'>
              <h3>From this network:</h3>
              <Dropdown options={options}  />
            </div>

          <div className='network-selection-container' >
          <div style={{ height: '20px' }}></div>
            <h3>You send</h3>
            <TextField/>
          </div>
        
        </div>
       
       <div 
       style={{ 
        width: '20%', 
        alignItems : 'center', 
        display: 'flex',
        justifyContent: 'center',
        }}>
          <BiTransfer style={{fontSize : '26px' , marginTop: '20px'}}/>
       </div>


        {/* to section */}

        <div style={{ width: '40%',}} >

          <div className='network-selection-container'>
              <h3>To this network:</h3>
              <Dropdown options={options}  />
            </div>

          <div className='network-selection-container' >
          <div style={{ height: '20px' }}></div>
            <h3>You receive</h3>
            <TextField/>
          </div>
        
        </div>

        </div>

      </div>

        {/* second box */}

      <div
        style={{
          padding: '32px',
          borderRadius: '20px',
          backgroundColor : 'rgb(240,240,240)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '600px',
          marginLeft: '10%',
          marginRight: '10%',
          marginTop : '20px',
          marginBottom : '10%',
          textAlign: 'center',
        }}>
          
          <div 
          style={{ 
            display: 'flex', 
            justifyContent : 'space-between',
            alignItems : 'center',
            
            }} >

            <div style={{
              display : 'flex',
              alignItems : 'start',
              flexDirection : 'column',
              flexFlow : 'column-wrap',
              justifyContent : 'start',
              flex : '20%',
              
              }}>
              
              <div style={{height:'24px'}}>
                <p style={{color: 'grey' , fontSize: '18px' }}>Total(send + gas)</p>
              </div>
              
              <div className='bottom-items'>
              <h3 style={{height : '10px'}}>$0.00</h3>
              </div>

              <div className='bottom-items'>
              <p style={{color: 'grey', textAlign : 'start' , fontSize: '12px' , height : '10px'}}>Includes a 0.875% MetaMask fee</p>
              </div>
                            
              
            </div>
            
            
            <div style={{ flex: '10%' , marginLeft:'20px',}}>
            <RoundedButton title={'Connect Wallet'}/>
            </div>
            

          </div>

        </div>
        {/* <p style={{color: 'grey' , fontSize: '12px', fontWeight : 'bold'}}>By confirming, you agree to</p> */}


    </div>
  );
};



export default BridgeTokens;


