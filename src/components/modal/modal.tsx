import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './modal.css'

const Modal = ({ type, content, id }: any) => {

  // let modalState = 'false'

  // getModalState(modalState)
  const navigate = useNavigate();

  const [togglePin, setTogglePin] = useState<Boolean>(false)
  const onToggleChange = () => {
    setTogglePin(!togglePin)
  }

  const [formData, setFormData] = useState({
    url: "",
    sitename: "",
    folder: "",
    username: "",
    sitepassword: "",
    notes: ""
  })
  const [editformData, setEditFormData] = useState({
    url: "",
    sitename: "",
    folder: "",
    username: "",
    sitepassword: "",
    notes: ""
  })

  // const [siteData, setSiteData]: any = useState([])

  const currentUser = JSON.parse(localStorage.getItem('curentuser') || '[]');

  const res = JSON.parse(localStorage.getItem(JSON.stringify(currentUser)) || '[]');

  if (JSON.stringify(res) === JSON.stringify([])) {
    localStorage.setItem(JSON.stringify(currentUser), '[]')
  }

  const getFormData = (e: any) => {
    e.preventDefault();
    const siteData = JSON.parse(localStorage.getItem(currentUser) || '[]')
    const newData = [...siteData, formData]
    localStorage.setItem(currentUser, JSON.stringify(newData))
    console.log("sitedata", siteData)
    window.location.reload();
  }

  const getEditForm = (e: any) => {
    e.preventDefault();
    const formData = {
      url: e.target.url.value,
      sitename: e.target.sitename.value,
      folder: e.target.folder.value,
      username: e.target.username.value,
      sitepassword: e.target.sitepassword.value,
      notes: e.target.notes.value
    }
    const currentUser = JSON.parse(localStorage.getItem('curentuser') || '[]');

    const res = JSON.parse(localStorage.getItem(currentUser) || '[]');
    console.log(res[id])
    res[id] = formData
    localStorage.setItem(currentUser, JSON.stringify(res))
    window.location.reload();
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleEditModal = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value)
    setEditFormData((prev) => {
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

                <input type="text" className="inputStyle" name="url" value={formData.url} onChange={handleChange} pattern="^(https?:\\/\\/)?'+
                  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
                  '((\\d{1, 3}\\.){3}\\d{1, 3}))'+
                  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
                  '(\\?[;&a-z\\d%_.~+=-]*)?'+
                  '(\\#[-a-z\\d_]*)?$','i'" required />
              </div>
              <div className="firstLine">
                <div className="siteName">
                  <div className="classLabel">Site Name</div>

                  <input type="text" className="inputStyle" name="sitename" value={formData.sitename} onChange={handleChange} required />
                </div>
                <div className="selectFolder">
                  <div className="classLabel">select/Folder</div>
                  <input type="text" className="inputStyle" name="folder" value={formData.folder} onChange={handleChange} required />
                  {/* <select name="folder" className='selectCategory' value={formData.folder} onChange={handleChange}>
                      <option value="Social Media">Social Media</option>
                      <option value="Finance">Finance</option>
                      <option value="Banking">Banking</option>
                  </select> */}
                </div>
              </div>
              <div className="firstLine">
                <div className="userName">
                  <div className="classLabel">UserName</div>
                  <input type="text" className="inputStyle" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="sitePassword">
                  <div className="classLabel">site password</div>
                  <input type={togglePin ? 'text' : 'password'} className="inputStyle" name="sitepassword" value={formData.sitepassword} onChange={handleChange} required />
                  <img
                    src={require('../../assets/icons/eye_on.png')}
                    alt="eye"
                    className="passwordEye"
                    onClick={onToggleChange}
                  />
                </div>
              </div>
              <div className="textArea">
                <div className="classLabel">notes</div>
                <textarea className="inputStyle" name="notes" onChange={handleChange} value={formData.notes} required />
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
            <form className="modalForm" onSubmit={getEditForm}>
              <div className="url">
                <div className="classLabel">URL</div>

                <input type="text" className="inputStyle" name="url" value={editformData.url ? editformData.url : content.url} onChange={handleEditModal} pattern="^(https?:\\/\\/)?'+
                  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
                  '((\\d{1, 3}\\.){3}\\d{1, 3}))'+
                  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
                  '(\\?[;&a-z\\d%_.~+=-]*)?'+
                  '(\\#[-a-z\\d_]*)?$','i'" required />
              </div>
              <div className="firstLine">
                <div className="siteName">
                  <div className="classLabel">Site Name</div>
                  <input type="text" className="inputStyle" name="sitename" value={editformData.sitename ? editformData.sitename : content.sitename} onChange={handleEditModal} required />
                </div>
                <div className="selectFolder">
                  <div className="classLabel">select/Folder</div>
                  <input type="text" className="inputStyle" name="folder" value={editformData.folder ? editformData.folder : content.folder} onChange={handleEditModal} required />
                  {/* <select name="folder" className='selectCategory' value={editformData.folder} onChange={handleChange}>
                      <option value="Social Media">Social Media</option>
                      <option value="Finance">Finance</option>
                      <option value="Banking">Banking</option>
                    </select> */}
                </div>
              </div>
              <div className="firstLine">
                <div className="userName">
                  <div className="classLabel">user siteName</div>
                  <input type="text" className="inputStyle" name="username" value={editformData.username ? editformData.username : content.username} onChange={handleEditModal} required />
                </div>
                <div className="sitePassword">
                  <div className="classLabel">site password</div>
                    <input type={togglePin ? 'text' : 'password'} className="inputStyle" name="sitepassword" value={editformData.sitepassword ? editformData.sitepassword : content.sitepassword} onChange={handleEditModal} required />
                  <img
                    src={require('../../assets/icons/eye_on.png')}
                    alt="eye"
                    className="passwordEye"
                    onClick={onToggleChange}
                  />
                </div>
              </div>
              <div className="textArea">
                <div className="classLabel">notes</div>

                <textarea className="inputStyle" name="notes" value={editformData.notes ? editformData.notes : content.notes} onChange={handleEditModal} required />
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
