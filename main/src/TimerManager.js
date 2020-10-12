import React from 'react'
import { useEffect } from 'react'
import Timer from './Timer'

const TimerManager = ({initialTime}) => {
    const [workTime,setWorkTime] = useState({
        minutes: initialTime.workTime,
        seconds:0
      })
      const [shortBreakTime,setShortBreakTime] = useState({
        minutes: initialTime.shortBreakTime,
        seconds:0
      })
      const [longBreakTime, setLongBreakTime] = useState({
        minutes: initialTime.longBreakTime,
        seconds:0
      })
      const changeMinutes = (time, setTime) => {
        if(time.seconds === 0){
          setTime((prev) => ({...prev, minutes: prev.minutes -1}))
        }
    }
        useEffect(() => {
            setWorkTime({
                minutes: initialTime.workTime,
                seconds:0
              })
            setShortBreakTime({
                minutes: initialTime.shortBreakTime,
                seconds:0
              })
            setLongBreakTime(
                {
                    minutes: initialTime.longBreakTime,
                    seconds:0
                  }
            )
        },[initialTime])
      useEffect(() => {
        changeMinutes(workTime,setWorkTime)
        changeMinutes(shortBreakTime,setShortBreakTime)
        changeMinutes(longBreakTime,setLongBreakTime)
      },[workTime,shortBreakTime,longBreakTime])
    
    
    return ( 
    
    <div className='timerWrapper'>
    <nav>
        <button>Work</button>
        <button>Short break</button>
        <button>Long Break</button>
    </nav>
           <Timer/>    
    </div> );
}
 
export default Timer;