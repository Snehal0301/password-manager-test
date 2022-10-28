import { useEffect } from 'react' 
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/header'
import SideBar from '../../components/sideBar/sideBar'
import Sites from '../../components/sites/sites'
import './dashBoard.css'

const DashBoard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth')||'[]');
    if (auth != true) {
        navigate('/')
      }
    }, [])
    

  return (
    <div>
      <div className="dashBoardContainer">
        <div className="sideBarMenu">
          <SideBar />
        </div>

        <div className="dashBoardHeader">
          <Header />
        </div>

        <div className="dashBoardSites">
          <Sites />
        </div>
      </div>
    </div>
  )
}

export default DashBoard
