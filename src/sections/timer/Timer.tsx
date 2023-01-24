import './styles/timer.css'

import { Header } from "./Header";
import { Scramble } from "./Scramble";
import { TimesTable } from "./TimesTable";
import { Stopwatch } from './Stopwatch';

export function Timer() {
    
    const handleStopWatch = function({running}: {running: Boolean}) {
        if (running) {
            
        }
    }

    return (
        <>
            <Header />

            <section>
                <div style={{ textAlign: 'center' }}>
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
                <Scramble scramble={"U D R U B' U2 F' D2 R U F2 U' L2 U2 R2 B2 L2 B2 U' L2 B2"} />
            </section>

            <section>
                <Stopwatch/>
            </section>

            <section>
                <TimesTable last={15.58} avg5={19.56} avg12={21.36}/>
            </section>
        </>
    )
}