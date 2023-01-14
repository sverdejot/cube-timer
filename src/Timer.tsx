import React from "react";

import './styles/card.css'

import { Header } from "./Header";
import { SolveTime } from "./SolveTime";
import { Scramble } from "./Scramble";
import { TimesTable } from "./TimesTable";

const response = {
    "userId": "7200bb99-b07f-4a8e-8e49-fc6c1970da3b",
    "useInspection": true,
    "solves": [
        {
            "ts": 1673722953,
            "scramble": "U D2 B L2 B' U2 B' L2 D2 B' L2 D2 F L' B U' B F' D2 B' F'",
            "solveTime": 15.02
        },
        {
            "ts": 1642183353,
            "scramble": "U D2 B L2 B' U2 B' L2 D2 B' L2 D2 F L' B U' B F' D2 B' F'",
            "solveTime": 18.98
        }
    ]
}

export function Timer() {
    return (
        <div className="card">
            <Header/>

            <section>
                <div style={{textAlign: 'center'}}>           
                    <span className="title">
                        <span style={{ color: '#004E90' }}>R</span>
                        <span style={{ color: '#FFE156' }}>u</span>
                        <span style={{ color: '#BC2C1A' }}>b</span>
                        <span style={{ color: '#1A936F' }}>i</span>
                        <span style={{ color: '#FAAF37' }}>k</span>
                        <span style={{ color: '#ABABAB' }}>'s </span>
                        Cube Timer
                    </span>
                </div>
            </section>

            <section>
                <Scramble/>
            </section>
            
            <section>
                <SolveTime/>
            </section>

            <section>
                <TimesTable/>
            </section>
                     
        </div>
    )
}