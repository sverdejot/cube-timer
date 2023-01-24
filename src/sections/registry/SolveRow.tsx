import trashLogo from './assets/trash.svg'

export function SolveRow({time, scramble, ts}: {time: number, scramble: string, ts: number}) {
    return (
        <tr>
            <td>
                {ts}
            </td>
            <td>
                {scramble}
            </td>
            <td>
                {time}
            </td>
            <td>
                <a href="#">
                <img src={trashLogo} className="logo trash" alt="Trash icon"/>
                </a>
            </td>
        </tr>
    )
}