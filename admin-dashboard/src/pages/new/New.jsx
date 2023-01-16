import "./new.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"

function New() {
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top2">
          <h1>Add New User</h1>
        </div>
        <div className="bottom2">
          <div className="left2">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right2">
            <form>
            <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon2"/>
                </label>
                <input className="input2" type="file" id="file" style={{display: "none"}}/>
              </div>
              <div className="formInput">
                <label>Username</label>
                <input className="input2" type="text" placeholder="mick_vinu"/>
              </div>
              <div className="formInput">
                <label>Name and surname</label>
                <input className="input2" type="text" placeholder="Mick Vinu"/>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input className="input2" type="email" placeholder="mick10@gmail.com"/>
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input className="input2" type="text" placeholder="+94 111 6114"/>
              </div>
              <div className="formInput">
                <label>NIC number</label>
                <input className="input2" type="text" placeholder="973254508V"/>
              </div>
              <div className="formInput">
                <label>Password</label>
                <input className="input2" type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input className="input2" type="text" placeholder="Stanley road, Gampaha"/>
              </div> 
              <button className="button2">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
