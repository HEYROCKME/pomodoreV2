import { useState, useEffect } from 'react'
import './App.css'
import { DisplayState } from './helpers'
import TimeSetter from './TimeSetter'
import Display from './Display'
// import bellSound from './assets/bell.mp3'

import bellSound from './assets/bell.mp3'

// Default settings
const defaultBreakTime = 5 * 60
const defaultSessionTime = 25 * 60
const min = 60
const max = 60 * 60
const interval = 60

function App() {
  const [breakTime, setBreakTime] = useState(defaultBreakTime)
  const [sessionTime, setSessionTime] = useState(defaultSessionTime)
  const [displayState, setDisplayState] = useState<DisplayState>({
    time: sessionTime,
    timeType: 'Session',
    timerRunning: false,
  })

  useEffect(() => {
    let timerID: number
    if (!displayState.timerRunning) return

    if (displayState.timerRunning) {
      timerID = window.setInterval(countDown, 1000)
    }
    return () => {
      window.clearInterval(timerID)
    }
  }, [displayState.timerRunning])

  useEffect(() => {
    if (displayState.time.toString() === '00:00' || displayState.time < 0) {
      const audio = document.getElementById('beep') as HTMLAudioElement
      audio.play().catch((err) => {
        console.log(err)
      })
      setDisplayState((prev) => ({
        ...prev,
        timeType: prev.timeType == 'Session' ? 'Break' : 'Session',
        time: prev.timeType == 'Session' ? breakTime : sessionTime,
      }))
    }
  }, [displayState, breakTime, sessionTime])

  const startStop = () => {
    console.log('startStop')
    setDisplayState((prev) => ({
      ...prev,
      timerRunning: !prev.timerRunning,
    }))
  }
  const reset = () => {
    setBreakTime(defaultBreakTime)
    setSessionTime(defaultSessionTime)
    setDisplayState({
      time: defaultSessionTime,
      timeType: 'Session',
      timerRunning: false,
    })

    const audio = document.getElementById('beep') as HTMLAudioElement
    audio.pause()
    audio.currentTime = 0
    console.log('reset')
  }

  const changeBreakTime = (time: number) => {
    if (displayState.timerRunning) return
    setBreakTime(time)
  }

  const changeSessionTime = (time: number) => {
    if (displayState.timerRunning) return
    setSessionTime(time)
    setDisplayState({
      time: time,
      timeType: 'Session',
      timerRunning: false,
    })
  }

  const countDown = () => {
    setDisplayState((prev) => ({
      ...prev,
      time: prev.time - 1,
    }))
  }

  return (
    <>
      <div className="clock">
        <h1>Pomodore V2</h1>
        {/* setters - */}
        <Display
          displayState={displayState}
          reset={reset}
          startStop={startStop}
        />
        <section className="setters">
          <div className="break">
            <p id="break-label">Break Length</p>
            <TimeSetter
              time={breakTime}
              setTime={changeBreakTime}
              min={min}
              max={max}
              interval={interval}
              type="break"
            />
          </div>
          <div className="session">
            <p id="session-label">Session Length</p>
            <TimeSetter
              time={sessionTime}
              setTime={changeSessionTime}
              min={min}
              max={max}
              interval={interval}
              type="session"
            />
          </div>
        </section>

        <audio id="beep" src={bellSound} />
      </div>
    </>
  )
}

export default App
