import React from 'react';
import Header from './Header';
import Banner from './Banner';
import SedRound from './SedRound';
import KeyPoint from './KeyPoint';
import ChainSupport from './ChainSupport';
import Feature from './Feature';
import TokenNomic from './TokenNomic';
import Distribute from './Distribute';
import RoadMap from './RoadMap';
import Team from './Team';
import Backer from './Backer';
import Footer from './Footer';
import Wallet from './Wallet';
import Dapp from './Dapp';
import AccessCode from './AccessCode';

export default function App() {
    return (
        <>
            <div className="GamfiBody">

                <section className="loader_first">
                    <div className="circular-spinner"></div>
                </section>

                {/* header */}
                <Header/>
                {/* banner */}
                <Banner/>
                {/* sedRound */}
                <SedRound/>
                {/* keypoint */}
                <KeyPoint/>
                {/* chainSupport */}
                <ChainSupport/>
                {/* feature */}
                <Feature/>
                {/* tokennomic */}
                <TokenNomic/>
                {/* distribute */}
                <Distribute/>
                {/* roadmap */}
                <RoadMap/>
                {/* team  */}
                <Team/>
                {/* backer */}
                <Backer/>

                {/* footer */}
                <Footer/>
            </div>

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