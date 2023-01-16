import "./widget.css"
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({type}) => {
    let data;

    //temporary
    const amount = 100
    const diff = 20

        switch(type){
            case "user":
                data={
                    title: "FUEL FILLING STATIONS",
                    isMoney: false,
                    link: "See detailed info!",
                    icon: <PersonOutlinedIcon className="icon3" style={{
                        color:"crimson",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                    }}/>,
                };
                break;
                case "order":
                data={
                    title: "ORDERS ON PROCESS",
                    isMoney: false,
                    link: "View all orders",
                    icon: <ShoppingCartOutlinedIcon className="icon3" style={{
                        color:"goldenrod",
                        backgroundColor: "rgba(218, 165, 32, 0.2)",
                    }}/>,
                };
                break;
                case "earning":
                data={
                    title: "EARNINGS",
                    isMoney: true,
                    link: "View net earnings",
                    icon: <MonetizationOnOutlinedIcon className="icon3" style={{
                        color:"green",
                        backgroundColor: "rgba(0, 128, 0, 0.2)",
                    }}/>,
                };
                break;
                case "balance":
                data={
                    title: "BALANCE TO BE PAID",
                    isMoney: true,
                    link: "See details",
                    icon: <AccountBalanceWalletOutlinedIcon className="icon3" style={{
                        color:"purple",
                        backgroundColor: "rgba(128, 0, 128, 0.2)",
                    }}/>,
                };
                break;
                default:
                    break;
        }

  return (
    <div className="widget">
        <div className="left">
            <span className="heading">{data.title}</span>
            <span className="count">
                {data.isMoney && "$"} {amount}
            </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUp />
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  );
};

export default Widget;
