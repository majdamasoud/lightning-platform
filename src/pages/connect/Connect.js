import React from 'react'
import ConenctBox from '../../components/connectBox/ConenctBox.js'
import './connect.css'

function Connect() {
    return (
        <div className="connect">
            <div className="left">
                <section className="description">
                    <h1>Connect using your Lightning Node</h1>
                    <p>Lightning is an ever growing layer 2 solution built ontop of the Bitcoin Protcol. Become a part of the movement by creating your own node and connecting with us</p>
                </section>
            </div>
            <div className="right">
                <ConenctBox />
            </div>         
        </div>
    )
}

export default Connect
