import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

interface TimeSetterProps {
  time: number
  setTime: (time: number) => void
  min: number
  max: number
  interval: number
  type: 'break' | 'session'
}

const TimeSetter: React.FC<TimeSetterProps> = ({
  time,
  setTime,
  min,
  max,
  interval,
  type,
}) => {
  return (
    <div>
      {/* Button increases timer by 60 sec */}
      <button
        onClick={() => (time < max ? setTime(time + interval) : null)}
        id={`${type}-increment`}
      >
        <FaArrowUp />
      </button>

      {/* Display Time set */}

      <span id={`${type}-length`}>{time / interval}</span>

      {/* Button decreases timer by 60 sec */}
      <button
        onClick={() => (time > min ? setTime(time - interval) : null)}
        id={`${type}-decrement`}
      >
        <FaArrowDown />
      </button>
    </div>
  )
}

export default TimeSetter
