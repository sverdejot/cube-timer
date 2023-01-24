import './styles/scramble.css'

export function Scramble({scramble}) {
    return (
        <div className="scramble">
            <span style={{ display: 'inline-block', width: '80%'}}>
                {scramble}
            </span>
        </div>
    )
}