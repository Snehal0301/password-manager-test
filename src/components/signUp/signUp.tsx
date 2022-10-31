import './signUp.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {encrypt,decrypt} from 'n-krypta'

const SignUp = () => {

  const secretKey = 'k'
  const text = '1234'
  const encryptedText = encrypt(text, secretKey)
  const decryptedText = decrypt(encryptedText, secretKey)
  console.log("encryptedText",encryptedText)
  console.log("decryptedText",decryptedText)

  const navigate = useNavigate()
  const [togglePin, setTogglePin] = useState<Boolean>(false)
  const onToggleChange = () => {
    setTogglePin(!togglePin)
  }

  const [toggleMPin, setToggleMPin] = useState<Boolean>(false)
  const onToggleMPinChange = () => {
    setToggleMPin(!toggleMPin)
  }

  const storeUsers = localStorage.getItem('users') || '[]'

  const signUpHandler = (event: any) => {
    event.preventDefault()

    const mobile = event.target.mobile.value;
    const pin = event.target.pin.value;
    const encryptedPin = encrypt(pin,secretKey)
    // const decryptedPin = decrypt(encryptedPin,secretKey)
    const mPin = event.target.mPin.value;
    const encryptedMPin = encrypt(mPin,secretKey)

    // const userData = {
    //   mobile,
    //   pin,
    //   mPin,
    // }
    const userData = {
      mobile,
      encryptedPin,
      encryptedMPin,
    }

    const previousData = JSON.parse(localStorage.getItem('users') || '[]')

    const arr: any[] = []

    previousData.map((user: any) => {
      if (userData.mobile === user.mobile) {
        arr.push('exist')
      }
    })

    if (arr.includes('exist')) {
      alert('user already exist')
    } else {
      if (mobile === '' && encryptedPin === '' && encryptedMPin === '') {
        alert('enter all fields')
      } else {
        if (encryptedPin === encryptedMPin) {
          previousData.push(userData)
          localStorage.setItem('users', JSON.stringify(previousData))
          localStorage.setItem('status','true')
          navigate('/')
        } else {
          alert('enter same pins')
        }
      }
    }
  }

  return (
    <div>
      <div className="leftContainer">
        <div className="signUpText">SIGN UP</div>
        <form className="formContainer" onSubmit={signUpHandler}>
          <div className="">
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="inputField_1"
              required
              minLength={10}
              maxLength={10}
              name="mobile"
            />
          </div>
          <div className="passwordPin_1">
            <input
              type={togglePin ? 'text' : 'password'}
              placeholder="Enter 4 digit Pin"
              className="inputField_1"
              required
              minLength={4}
              maxLength={4}
              name="pin"
            />
            <img
              src={require('../../assets/icons/eye_on.png')}
              alt="img"
              className="eyeIcon_1"
              onClick={onToggleChange}
            />
          </div>
          <div className="passwordPin_1">
            <input
              type={toggleMPin ? 'text' : 'password'}
              placeholder="Re Enter 4 digit Pin"
              className="inputField_1"
              required
              minLength={4}
              maxLength={4}
              name="mPin"
              // onClick={togglePin}
            />
            <img
              src={require('../../assets/icons/eye_on.png')}
              alt="img"
              className="eyeIcon_1"
              onClick={onToggleMPinChange}
            />
          </div>
          <button className="signUpButton">SIGN UP</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
