import "./table.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id: 112367,
            fuelTypes: "Petrol",
            petrolStation: "Jaffna",
            date: "10 November",
            amount: 100,
            method: "Online",
            status: "Approved"
        },
        {
            id: 112317,
            fuelTypes: "Diesel",
            petrolStation: "Colombo",
            date: "10 April",
            amount: 500,
            method: "Online",
            status: "Approved"
        },
        {
            id: 112357,
            fuelTypes: "Petrol",
            petrolStation: "Kandy",
            date: "10 October",
            amount: 300,
            method: "Online",
            status: "Approved"
        },
        {
            id: 102367,
            fuelTypes: "Kerosene",
            petrolStation: "Kalutara",
            date: "10 March",
            amount: 200,
            method: "Online",
            status: "Approved"
        }
        
    ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Petrol Station ID</TableCell>
            <TableCell className="tableCell">Fuel Type</TableCell>
            <TableCell className="tableCell">Name of Petrol Station</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount(in .oz)</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.fuelTypes}</TableCell>
              <TableCell className="tableCell">{row.petrolStation}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
}

export default List
