import "./sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SystemSecurityUpdateWarningIcon from '@mui/icons-material/SystemSecurityUpdateWarning';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Admin</span>
        </div>
        <hr/>
        <div className="center">
            <ul>
                <h4>MAIN</h4>
                <li>
                    <DashboardIcon className="icon1"/>
                    <span>Dashboard</span>
                </li>
                <h4>LISTS</h4>
                <li>
                    <PeopleIcon className="icon1"/>
                    <span>Users</span>
                </li>
                <li>
                    <Inventory2Icon className="icon1"/>
                    <span>Stock of Fuel</span>
                </li>
                <li>
                    <ListAltIcon className="icon1"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className="icon1"/>
                    <span>Delivery</span>
                </li>
                <h4>USEFUL</h4>
                <li>
                    <QueryStatsIcon className="icon1"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsIcon className="icon1"/>
                    <span>Notifications</span>
                </li>
                <h4>SERVICE</h4>
                <li>
                    <SystemSecurityUpdateWarningIcon className="icon1"/>
                    <span>System Health</span>
                </li>
                <li>
                    <WebStoriesIcon className="icon1"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className="icon1"/>
                    <span>Settings</span>
                </li>
                <h4>USER</h4>
                <li>
                    <AccountCircleIcon className="icon1"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className="icon1"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom1">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar
