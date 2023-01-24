import './styles/times.css'

interface TimesTable {
    last: Number;
    avg5: Number;
    avg12: Number;
}

export function TimesTable({last, avg5, avg12}: TimesTable) {
    return (
        <div className="times-table" style={{display: 'flex'}}>
            <table className="avg-table">
                <thead className="avg-table-head">
                    <tr>
                        <th>
                            Last
                        </th>
                        <th>
                            Avg (5)
                        </th>
                        <th>
                            Avg (12)
                        </th>
                    </tr>
                </thead>
                <tbody className="avg-table-body">
                    <tr>
                        <td>
                            <>
                            {last}s
                            </>
                        </td>
                        <td>
                            <>
                            {avg5}s
                            </>
                        </td>
                        <td>
                            <>
                                {avg12}s
                            </>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}