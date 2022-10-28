import './sites.css'
import { useState } from 'react'
import Card from '../card/card'
import Modal from '../modal/modal'

const Sites = () => {
  const [modal, setModal] = useState('')
  const [edit, setEdit] = useState(false);

  const editModal = () => {
    setEdit(!edit);
    console.log(edit)
  }

  const sites = JSON.parse(localStorage.getItem("signup") || "[]")


  return (
    <div>
      <div className="siteContainer">
        <div className="marginContainer">
          <div className="sites">Sites</div>
          <div className="searchBar">
            <div className="search">
              <input type="text" placeholder="Search" className="searchInput" />
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
                <div className="mediaCount">07</div>
              </div>
            </div>

            <div className="socialMediaMobile">
              <div className="socialMedia">
                <div className="sites_1">Sites</div>
                <div className="mobileMedia">
                  <div className="media">Social Media</div>
                  <div className="mediaCount">07</div>
                </div>
              </div>
            </div>

            <div className="card">
              {/* <Card /> */}
              <div className="wrapContainer">
                {
                  sites.map((site: any) => {
                    return (
                      <>
                        <div className="cardContainer" >
                          <div className="cardMargin">
                            <div className="socialMediaLogo">
                              <div className="mediaLogo">
                                <img
                                  src={require('../../assets/icons/Facebook.png')}
                                  alt="icon"
                                />
                              </div>
                              <div className="sameLine">
                                <div className="socialMediaName">{site.sitename }</div>
                                <div className="copy">
                                  <div className="copyImg">
                                    {' '}
                                    <img
                                      src={require('../../assets/icons/copy.png')}
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="copyText" onClick={() => { navigator.clipboard.writeText(site.sitepassword) }}>copy password</div>
                                </div>
                              </div>
                            </div>
                            <div className="linkContainer" onClick={editModal}>
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
                  <Modal type="edit" />
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
