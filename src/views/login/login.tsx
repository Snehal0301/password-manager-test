import Logo from "../../components/logo/logo";
import SignIn from "../../components/signIn/signIn";
import Toast from "../../components/toast/toast";
import { useState, useEffect } from 'react'
import "./login.css";

const Login = () => {
  const [toast, setToast] = useState(false)
  const status = localStorage.getItem('status')
  useEffect(() => {
    if (status == 'true') {
      setToast(true)
    }
    localStorage.setItem('status','false')
    setTimeout(()=>setToast(false),2000)

  }, [])

  return (
    <div>
      <div className="container">
        <div className="toast">
          {toast && <Toast/>}
        </div>
        <div className="loginContainer">
          <Logo />
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Login;
