import { DisplayState, formatTime } from './helpers'
import { FaPause, FaPlay, FaUndo } from 'react-icons/fa'

interface DisplayProps {
  displayState: DisplayState
  reset: () => void
  startStop: (displayState: DisplayState) => void
}

const Display: React.FC<DisplayProps> = ({
  displayState,
  reset,
  startStop,
}) => {
  return (
    <div className="display">
      <p id="timer-label">{displayState.timeType}</p>
      <p
        id="time-left"
        style={{
          color: `${displayState.timerRunning ? 'black' : 'darkred'}`,
          opacity: `${displayState.timerRunning ? '1' : '.5'}`,
        }}
      >
        {formatTime(displayState.time)}
      </p>
      <div id="controls">
        <button id="start_stop" onClick={() => startStop(displayState)}>
          {displayState.timerRunning ? <FaPause /> : <FaPlay />}
          {displayState.timerRunning ? 'Pause' : 'Start'}
        </button>
        <button id="reset" onClick={reset}>
          <FaUndo />
          {` Reset`}
        </button>
      </div>
    </div>
  )
}

export default Display
