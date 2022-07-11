import React from "react";
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
export default function Home() {
    return (
        <div className="GamfiBody">
            <Header/>
            <Banner/>
            <SedRound/>
            <KeyPoint/>
            <ChainSupport/>
            <TokenNomic/>
            <Distribute/>
            <Feature/>
            <RoadMap/>
            <Team/>
            <Backer/>
            <Footer/>
        </div>
    )
}