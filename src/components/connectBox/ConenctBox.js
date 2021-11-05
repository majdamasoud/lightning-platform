import React from 'react'
import './connectBox.css'

function ConenctBox() {
    return (
        <section className="connectBox">
            <h1>Fill in the information below</h1>
            <section className="connectInfo">
                <div>
                    <label>Username</label>
                    <input type="text" class="text-username" placeholder="Nakamoto2008"></input>
                </div>
                <div>
                    <label>LND Host</label>
                    <input type="text" class="text-lndhost" placeholder="127.0.0.1:10001"></input>
                </div>
                <div>
                    <label>TLS Certificate</label>
                    <input type="text" class="text-tls" placeholder="Ex: 4942416749514259476c4c7a577a6e6f4550564158..."></input>
                </div>
                <div>
                    <label>Macaroon</label>
                    <input type="text" class="text-macaroon" placeholder="Ex: 0201036c6e64024f030a10e9366194c29d06acac69..."></input>
                    <p className="instr">Open a Terminal and enter{' '}
                        <code>
                            lncli bakemacaroon info:read offchain:read invoices:read invoices:write
                            message:read message:write
                        </code>{' '}
                        to bake a macaroon with only limited access to get node info, create
                        invoices, and sign/verify messages.
                    </p>
                </div>
                <div>
                    <button className="connectButton">CONNECT</button>
                </div>
            </section>
        </section>
    )
}

export default ConenctBox
