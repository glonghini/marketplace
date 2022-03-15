import { useEffect, useRef } from 'react'
import './Slider.css'

const Slider: React.FC = () => {
  var counter: number = 0
  const slider = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    var sliderInterval = setInterval(() => {
      //document.getElementById(String(counter))?.scrollIntoView()
      counter++
      if (counter > 3) counter = 0
      slider.current.scrollTo(counter*slider.current.clientWidth, 0)
      
    }, 2000)

    // cleaning the interval when unmounting
    return () => clearInterval(sliderInterval)
  }, [])

  return(
    <div ref={slider} id='slide' className='slider'>
      <div id='cont' className='container'>
        <div id='0' className='dummy-image red'></div>
        <div id='1' className='dummy-image pink'></div>
        <div id='2' className='dummy-image green'></div>
        <div id='3' className='dummy-image yellow'></div>
      </div>
    </div>
  )
}

export default Slider