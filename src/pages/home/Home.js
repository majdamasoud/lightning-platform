import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';
import TopBar from '../../components/Topbar/TopBar';
import ContentCard from '../../components/contentCard/ContentCard';
import loop from '../../images/loop-studios.svg'

function Home() {
    let connected = true;
    return (
        <div className="home">
            <div className="topBar">
                {
                    connected ? <Link className="connectNav" to="/">Connect</Link> :
                        <div className="clientInfo">
                            <span>21,000,000 BTC</span>
                            <span>Name</span>
                        </div>
                }
            </div>
            <div className="content">
                <div className="postCard">
                    <div className="info">
                        <h3>Subject</h3>
                        <h5>UserName</h5>
                        <h5>Date</h5>
                    </div>
                    <div className="post">
                        <p>Donate pls</p>
                    </div>
                    <div className="interactWithPost">
                        <div className="satDisplay">
                            <span>Sats Collected</span>
                            <span className="line"></span>
                            <span>10000</span>
                        </div>
                        <button>Reward This Fella</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
