import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
  TablePagination,
  TableSortLabel,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Attendance {
  date: string;
  status: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  employeeID: string;
  attendance: Attendance[];
}

const EmployeesTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          "http://localhost:5000/api/emp/employees"
        );
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRowClick = (userId: string) => {
    navigate(`/user/${userId}`);
  };

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <div>
      <h1>Employees Details</h1>
      <TableContainer
        component={Paper}
        sx={{ width: "100%", overflow: "hidden" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Emp ID
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Email
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Phone
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow key={user._id} onClick={() => handleRowClick(user._id)} hover>
                  <TableCell>{user.employeeID}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phoneNumber}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ padding: "0 1rem" }}
        />
      </TableContainer>
    </div>
  );
};

export default EmployeesTable;
