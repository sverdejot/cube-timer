import './styles/solve.css'

export function SolveTime() {
    return (
        <div style={{textAlign: 'center'}}>
            <span className="solve-time">
                00:00:00
            </span>
            <div className="solve-time-helper">
                <div style={{margin: '10px 10px', fontSize: '24px'}}>
                    <span>Hit spacebar to start the timer</span>
                </div>
                <div>
                    <label>
                        <input type="checkbox" />
                        Add inspection time
                    </label>
                </div>
            </div>
        </div>
    )
}