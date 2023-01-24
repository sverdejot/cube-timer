import { SolveRow } from "./SolveRow"

import './styles/registry.css'

const responses = [
    {
        "id": "ff7954ac-7483-4652-92a0-1404325ce97c",
        "scramble": "R' F2 U' B2 D2 F2 U' F2 U' R2 D B2 R B2 L2 B R D F",
        "time": 15.98,
        "ts": 1673712761000
    }
]

export function TimesRegistry({solves}: {solves: Array<any>}) {
    return (
        <>
            <header>
                <div className="registry-title">
                    <span>Times registry</span>
                </div>
            </header>
            <section>
                <table className="registry-table">
                    <thead>
                        <tr>                      
                            <th>
                                Date
                            </th>
                            <th>
                                Scramble
                            </th>
                            <th>
                                Solve time
                            </th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="registry-table-body">
                        {
                            responses.map(({time, scramble, ts}: {time: number, scramble: string, ts: number}) => (
                                <SolveRow time={time} scramble={scramble} ts={ts}/>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}