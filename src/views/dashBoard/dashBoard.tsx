import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/header'
import SideBar from '../../components/sideBar/sideBar'
import Sites from '../../components/sites/sites'
import './dashBoard.css'

const DashBoard = () => {

  const navigate = useNavigate();
  const [search, setSearch] = useState("")
  const [mobilesearch, setMobileSearch] = useState(false)

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth') || '[]');
    if (auth != true) {
      navigate('/')
    }
  }, [])

  const getSearch = (value: any) => {
    console.log("from dashboard", value)
    setSearch(search)
  }

  const getMobileSearch = (data: any) => {
    setMobileSearch(data)
  }


  return (
    <div>
      <div className="dashBoardContainer">
        <div className="sideBarMenu">
          <SideBar />
        </div>

        <div className="dashBoardHeader">
          <Header getSearch={getSearch} getMobileSearch={getMobileSearch} />
        </div>

        <div className="dashBoardSites">
          <Sites mobilesearch={mobilesearch} />
        </div>
      </div>
    </div>
  )
}

export default DashBoard
