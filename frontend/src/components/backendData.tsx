import React, { useState, useEffect } from "react";
import axios from "axios";
import TablePagination from '@mui/material/TablePagination';

const BackendData = () => {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:9000/users");
    console.log(response);
    setUser(response.data);
  };

  return (
    <div className="columns mt-6 is-centered">
      <div className="column is-half">
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Id</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>Email</th>
              <th>Organization</th>
              <th>Access</th>
            </tr>
          </thead>
          <tbody>
            {users.slice (page * rowsPerPage, page * rowsPerPage+ rowsPerPage)
            .map((user:any) => (
              <tr key={user.id} >
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.Org.orgName}</td>
                <td>Cafetaria</td>
                <td>
                  
                </td>
              </tr>
            ))}
          </tbody>
          <TablePagination
      rowsPerPageOptions={[5,10,15,20,30]}
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
        </table>
      </div>
    </div>
  );
};

export default BackendData;