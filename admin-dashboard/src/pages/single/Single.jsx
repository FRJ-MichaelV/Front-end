import "./single.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top1">
          <div className="left1">
            <div className="editButton1">Edit</div>
            <h1 className="title3">Information</h1>
            <div className="item1">
              <img
                src="https://gearbox.imgix.net/https%3A%2F%2Fix-www.imgix.net%2Fsolutions%2Fwindmills.jpg?q=75&auto=format&fm=pjpg&fit=crop&w=456&h=342&ixlib=js-2.0.0&s=0213793bd6afa303564c7356a07a9243"
                alt=""
                className="itemImg1"
              />
              <div className="details">
                <h1 className="itemTitle1">Michael Vinushan</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">albert10@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">077 1112940</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">No.2, Odakkarai road, Jaffna</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">SriLanka</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right1">
            <Chart aspect={3/1} title="Fuel Stock Delivery ( Last 6 Months )"/>
          </div>
        </div>
        <div className="bottom11">
          <h1 className="title3">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single;
