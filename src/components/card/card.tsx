import { useState } from 'react'
import './card.css'

const Card = () => {
 
  return (
    <div>
      <div className="wrapContainer">
        <div className="cardContainer">
          <div className="cardMargin">
            <div className="socialMediaLogo">
              <div className="mediaLogo">
                <img
                  src={require('../../assets/icons/Facebook.png')}
                  alt="icon"
                />
              </div>
              <div className="sameLine">
                <div className="socialMediaName">faceBook</div>
                <div className="copy">
                  <div className="copyImg">
                    {' '}
                    <img
                      src={require('../../assets/icons/copy.png')}
                      alt="icon"
                    />
                  </div>
                  <div className="copyText">copy password</div>
                </div>
              </div>
            </div>
            <div className="linkContainer">
              <div className="socialMediaLink">www.facebook.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
