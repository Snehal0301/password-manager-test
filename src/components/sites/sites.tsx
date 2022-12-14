import './sites.css'
import { useState } from 'react'
import Card from '../card/card'
import Modal from '../modal/modal'

const Sites = (props: any) => {
  const [modal, setModal] = useState('')
  const [edit, setEdit] = useState(false);
  const [search, setSearch] = useState("");
  const [specificUser, setSpecificUser] = useState('')
  const [siteId, setSiteId] = useState(0)

  const editModal = (id: number) => {
    setEdit(!edit);
    setSiteId(id);
    setSpecificUser(JSON.parse(localStorage.getItem(currentUser) || '[]')[id])
  }

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
  }

  const copyPassword = (site: any) => {
    navigator.clipboard.writeText(site.sitepassword)
    alert("PASSWORD COPIED")
  }

  const currentUser = JSON.parse(localStorage.getItem('curentuser') || '');

  const sites = JSON.parse(localStorage.getItem(currentUser) || "[]")

  const getModalState = (state: any) => {
    setModal(state)
  }
  return (
    <div>
      <div className="siteContainer">
        <div className="marginContainer">
          <div className="sites">Sites</div>
          <div className="searchBar">
            <div className="search">
              <input type="text" placeholder="Search" className="searchInput" onChange={handleSearch} />
              <img
                src={require('../../assets/icons/search.png')}
                alt="icon"
                className="searchImage"
              />
            </div>
            <div className="plus">
              <img
                src={require('../../assets/icons/add_btn.png')}
                alt="icon"
                onClick={() => {
                  setModal('false')
                }}
              />
            </div>
          </div>
        </div>
        {sites.length === 0 ? (
          <div className="center">
            <div className="addSiteContainer">
              <div className="addSites">
                Please Click on the “+” symbol to add sites
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="socialMediaDesktop">
              <div className="socialMedia">
                <div className="media">Social Media</div>
                <div className="mediaCount">
                  {sites.length < 10
                    ? `0${sites.length}`
                    : sites.length}
                </div>
              </div>
            </div>

            <div className="socialMediaMobile">
              <div className="socialMedia">
                <div className="sites_1">Sites</div>
                <div className="mobileMedia">
                  <div className="media">Social Media</div>
                  <div className="mediaCount">
                    {sites.length < 10
                      ? `0${sites.length}`
                      : sites.length}
                  </div>
                </div>
              </div>

            </div>
            {
              props.mobilesearch &&
              <div className="search-mobile-input">
                <input type="text" placeholder="Search" className="searchInput mobile-input" onChange={handleSearch} />
              </div>
            }

            <div className="card">
              <div className="wrapContainer">
                {
                  sites.filter((site: any) => {
                    return search.toLowerCase() === '' ? site : site.sitename.toLowerCase().includes(search.toLowerCase())
                  }).map((site: any, id: number) => {
                    return (
                      <>
                        <div className="cardContainer" >
                          <div className="cardMargin">
                            <div className="socialMediaLogo">
                              <div className="mediaLogo">
                                <img
                                  src={`https://app.outboundsales.io/api/logo/${site.sitename}.com`}
                                  height="50px"
                                  width="50px"
                                  alt={site.sitename}
                                  style={{
                                    backgroundPosition: 'center',
                                    borderRadius: '50%',
                                    backgroundSize: 'cover'
                                  }}
                                />
                              </div>
                              <div className="sameLine">
                                <div className="socialMediaName">{site.sitename}</div>
                                <div className="copy">
                                  <div className="copyImg">
                                    {' '}
                                    <img
                                      src={require('../../assets/icons/copy.png')}
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="copyText" onClick={
                                    () => copyPassword(site)
                                  }>copy password</div>
                                </div>
                              </div>
                            </div>
                            <div className="linkContainer" onClick={() => editModal(id)}>
                              <div className="socialMediaLink">{site.url}</div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
            <div className="addButton">
              <img
                src={require('../../assets/icons/add_btn.png')}
                alt="icon"
                onClick={() => {
                  setModal('false')
                }}
              />
            </div>
          </div>
        )}
      </div>

      {modal ? (
        <div className="modal">
          <div className="overlay">
            <div className="modelInfo">
              <div className="modalContent">
                <Modal type="add" />
                <button className="close-modal">
                  <img
                    src={require('../../assets/icons/close_btn.png')}
                    alt="drop"
                    className="closeImg"
                    onClick={() => {
                      setModal('')
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}

      {
        edit ?
          <div className="modal">
            <div className="overlay">
              <div className="modelInfo">
                <div className="modalContent">
                  <Modal type="edit" content={specificUser} id={siteId} />
                  <button className="close-modal">
                    <img
                      src={require('../../assets/icons/close_btn.png')}
                      alt="drop"
                      className="closeImg"
                      onClick={() => {
                        setEdit(false)
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          : ""
      }
    </div>
  )
}

export default Sites
