import { useEffect, useState } from 'react'
import './styles/stopwatch.css'

export function Stopwatch() {
    const [running, setRunning] = useState(false)
    const [time, setTime]       = useState(0)
    const [timerId, setTimerId] = useState(0)

    // Add event listener on component render
    useEffect(() => {
        document.addEventListener('keyup', handleKeyUp)

        return () => {
            removeEventListener('keyup', handleKeyUp)
        }
    }, [])

    // Stopwatch logic based on running state
    useEffect(() => {
        if (running) {
            setTimerId(
                setInterval(() => {
                    setTime((time) => time + 1)
                }, 10)
            )
        }
        else {
            clearInterval(timerId)
        }
    }, [running])

    // Handle key events (reset stopwatch // start stopwatch)
    const handleKeyUp = (event: KeyboardEvent) => {
        if (event.key == " ") {
            setRunning((running) => {
                if (!running) {
                    setTime(0)
                }
                return !running
            })
        }
    }

    // Format time from ms to mm:ss:cs
    const formatTime = (cs: number) => {
        let seconds = Math.floor(cs / 100)
        let minutes = Math.floor(seconds / 60)

        seconds = seconds % 60
        minutes = minutes % 60

        return `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}:${('0' + cs).slice(-2)}`
    }
    
    return (
        <div style={{textAlign: 'center'}}>
            <span className="solve-time">
                {formatTime(time)}
            </span>
            <div className="solve-time-helper">
                <div style={{margin: '10px', fontSize: '24px'}}>
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