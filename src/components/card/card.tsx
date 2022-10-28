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
        {/* 88888888888888888888888888888888888888888888888888888888888888 */}
        <div className="cardContainer">
          <div className="socialMediaLogo">
            <div className="mediaLogo">
              <img
                src={require('../../assets/icons/Instagram.png')}
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
            <div className="socialMediaLink">www.instagram.com</div>
          </div>
        </div>
        {/* 888888888888888888888888888888888888888888888888888888888888 */}
        <div className="cardContainer">
          <div className="socialMediaLogo">
            <div className="mediaLogo">
              <img
                src={require('../../assets/icons/YouTube.png')}
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
            <div className="socialMediaLink">www.youtube.com</div>
          </div>
        </div>
        {/* 99999999999999999999999999999999999999999999999999999999999999999999 */}
        <div className="cardContainer">
          <div className="socialMediaLogo">
            <div className="mediaLogo">
              <img
                src={require('../../assets/icons/Pinterest.png')}
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
            <div className="socialMediaLink">www.pinterest.com</div>
          </div>
        </div>
        <div className="cardContainer">
          <div className="socialMediaLogo">
            <div className="mediaLogo">
              <img
                src={require('../../assets/icons/Pinterest.png')}
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
            <div className="socialMediaLink">www.pinterest.com</div>
          </div>
        </div>
        <div className="cardContainer">
          <div className="socialMediaLogo">
            <div className="mediaLogo">
              <img
                src={require('../../assets/icons/Pinterest.png')}
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
            <div className="socialMediaLink">www.pinterest.com</div>
          </div>
        </div>
        <div className="cardContainer">
          <div className="socialMediaLogo">
            <div className="mediaLogo">
              <img
                src={require('../../assets/icons/Pinterest.png')}
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
            <div className="socialMediaLink">www.pinterest.com</div>
          </div>
        </div>
        {/* 00000000000000000000000000000000000000000000000000000000000000000000000000000000 */}
        {/* <div className="addButton">
          <img src={require('../../assets/icons/add_btn.png')} alt="icon" />
        </div> */}
      </div>
    </div>
  )
}

export default Card
