import "./list.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List = () => {
  return (
    <div className="list1">
      <Sidebar />
      <div className="listContainer1">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List
