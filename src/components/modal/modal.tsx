import { useState } from 'react';
import './modal.css'

const Modal = ({ type }: any) => {

  const [formData, setFormData] = useState({
    url: "",
    sitename: "",
    folder: "",
    username: "",
    sitepassword: "",
    notes: ""
  })

  const [siteData, setSiteData]: any = useState([])


  const getFormData = (e: any) => {
    e.preventDefault();
    setSiteData([...siteData, formData])
  }
  localStorage.setItem("signup",JSON.stringify(siteData))

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  return (
    <>
      {
        type === 'add' &&

        <div className="modalItem">
          <div className="addSiteModal">Add data</div>
          <div className="dashBoardForm">
            <form className="modalForm" onSubmit={getFormData}>
              <div className="url">
                <div className="classLabel">URL</div>

                <input type="text" className="inputStyle" name="url" value={formData.url} onChange={handleChange} />
              </div>
              <div className="firstLine">
                <div className="siteName">
                  <div className="classLabel">Site Name</div>

                  <input type="text" className="inputStyle" name="sitename" value={formData.sitename} onChange={handleChange} />
                </div>
                <div className="selectFolder">
                  <div className="classLabel">select/Folder</div>
                  <input type="text" className="inputStyle" name="folder" value={formData.folder} onChange={handleChange} />
                </div>
              </div>
              <div className="firstLine">
                <div className="userName">
                  <div className="classLabel">UserName</div>
                  <input type="text" className="inputStyle" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div className="sitePassword">
                  <div className="classLabel">site password</div>
                  <input type="text" className="inputStyle" name="sitepassword" value={formData.sitepassword} onChange={handleChange} />
                  <img
                    src={require('../../assets/icons/eye_on.png')}
                    alt="eye"
                    className="passwordEye"
                  />
                </div>
              </div>
              <div className="textArea">
                <div className="classLabel">notes</div>
                <textarea className="inputStyle" name="notes" onChange={handleChange} value={formData.notes} />
              </div>
              <div className="modalButton">
                <button className="modalButtons button2 " type="reset">
                  Reset
                </button>
                <button className="modalButtons button2 save" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      }

      {
        type === 'edit' &&
        <div className="modalItem">
          <div className="addSiteModal">Edit data</div>
          <div className="dashBoardForm">
            <form className="modalForm">
              <div className="url">
                <div className="classLabel">URL</div>

                <input type="text" className="inputStyle" />
              </div>
              <div className="firstLine">
                <div className="siteName">
                  <div className="classLabel">Site Name</div>

                  <input type="text" className="inputStyle" />
                </div>
                <div className="selectFolder">
                  <div className="classLabel">select/Folder</div>
                  <input type="text" className="inputStyle" />
                </div>
              </div>
              <div className="firstLine">
                <div className="userName">
                  <div className="classLabel">user siteName</div>
                  <input type="text" className="inputStyle" />
                </div>
                <div className="sitePassword">
                  <div className="classLabel">site password</div>
                  <input type="text" className="inputStyle" />
                  <img
                    src={require('../../assets/icons/eye_on.png')}
                    alt="eye"
                    className="passwordEye"
                  />
                </div>
              </div>
              <div className="textArea">
                <div className="classLabel">notes</div>
                <textarea className="inputStyle" />
              </div>
              <div className="modalButton">
                <button className="modalButtons button2 " type="reset">
                  Reset
                </button>
                <button className="modalButtons button2 save" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}

export default Modal
