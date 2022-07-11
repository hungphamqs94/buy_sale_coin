import React from 'react';

import Wallet from './Wallet';
import Dapp from './Dapp';
import AccessCode from './AccessCode';
import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Exchange from './Exchange';
import NFTMarketPlace from './NFTMarketPlace';

export default function App() {
    return (
        <>
        <BrowserRouter>
          <Routes>
           <Route path="/" element={ <Home/> }>
            </Route>
            <Route path="/exchange" element={ <Exchange/> }>
            </Route>
            <Route path="/marketplace" element={ <NFTMarketPlace/> }>
            </Route>
            </Routes>
        </BrowserRouter>
            {/* wallet */}
            <Wallet/>
            {/* Dapp */}
            <Dapp/>

            {/* accesscode */}
            <AccessCode/>
            <input type="hidden" value="101000" class="dapp_ref_code" />
        </>
    )
}