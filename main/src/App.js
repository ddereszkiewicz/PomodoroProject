import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Navigation from './Nav.js'
import { useState } from 'react';
import TimerManager from './TimerManager.js'

function App() {
  const [cycles,setCycles] = useState(0)
  const [currentState,setCurrentState] = useState('work')
  const [workTime,setWorkTime] = useState({
    minutes: 25,
    seconds:0
  })
  const [shortBreakTime,setShortBreakTime] = useState({
    minutes: 5,
    seconds:0
  })
  const [longBreakTime, setLongBreakTime] = useState({
    minutes: 10,
    seconds:0
  })
  const changeMinutes = (time, setTime) => {
    if(time.seconds === 0){
      setTime((prev) => ({...prev, minutes: prev.minutes -1}))
    }
}
  useEffect(() => {
    changeMinutes(workTime,setWorkTime)
    changeMinutes(shortBreakTime,setShortBreakTime)
    changeMinutes(longBreakTime,setLongBreakTime)
  },[workTime,shortBreakTime,longBreakTime])
  return (
    <div className="App">
      <Navigation/>
      <TimerManager/>

    </div>
  );
}

export default App;
