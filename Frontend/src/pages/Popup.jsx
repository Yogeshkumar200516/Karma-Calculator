import React from 'react'
import '../Styles/Finish.css'
import Alert from '../assets/videos/Finish.mp4'
import Success from '../assets/images/Success.png'
function Popup() {
  return (
    <div className='Finish-div'>

      <div className='total-div'>
        <div> <video
        className='video'
        src={Alert}
        muted
        autoPlay
        poster={Success}
        width="119"
        height="119"
    >
        Your browser does not support the video tag.
    </video>
	</div>
        <div className='formsub'>Form Submitted Successfully</div>
      </div>
      
    </div>
  )
}

export default Popup
