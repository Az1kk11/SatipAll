import React, { useEffect, useState } from 'react'
import '../../styles/Clock.css'

function Clock() {
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()

  let interval;

  const countDown = () => {
    const destination = new Date('Oct 10, 2023')

    interval = setInterval(() => {
      const now = new Date().getTime()

      const defferent = destination - now

      const days = Math.floor(defferent / (1000 * 60 * 60 * 24))
      const hours = Math.floor(defferent % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      const minutes = Math.floor(defferent % (1000 * 60 * 60) / (1000 * 60))
      const seconds = Math.floor(defferent % (1000 * 60) / 1000)

      if (destination < 0) clearInterval(interval.current)
      else {
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      };
    });
  };

  useEffect(() => {
    countDown()
  }, []);

  return (
    <div className="clock_wrapper d-flex align-items-center gap-2">
      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <div className="text-white fs-3 mb-2">{days}</div>
          <div className="text-white fs-6">Kun</div>
        </div>
        <div className="text-white fs-3">:</div>
      </div>

      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <div className="text-white fs-3 mb-2">{hours}</div>
          <div className="text-white fs-6">saat</div>
        </div>
        <div className="text-white fs-3">:</div>
      </div>

      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <div className="text-white fs-3 mb-2">{minutes}</div>
          <div className="text-white fs-6">Minut</div>
        </div>
        <div className="text-white fs-3">:</div>
      </div>

      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <div className="text-white fs-3 mb-2">{seconds}</div>
          <div className="text-white fs-6">Sekund</div>
        </div>
      </div>
    </div>
  )
}

export default Clock