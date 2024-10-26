import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const TableComp = ({Data}:any) => {
    const columns = [
        { field: 'VIN', headerName: 'VIN', width: 150 },
        { field: 'County', headerName: 'County', width: 100 },
        { field: 'City', headerName: 'City', width: 100 },
        { field: 'State', headerName: 'State', width: 70 },
        { field: 'Postal Code', headerName: 'Postal Code', width: 100 },
        { field: 'Model Year', headerName: 'Model Year', width: 120 },
        { field: 'Make', headerName: 'Make', width: 100 },
        { field: 'Model', headerName: 'Model', width: 100 },
        { field: 'Vehicle Location', headerName: 'Vehicle Location', width: 130 },
        { field: 'Electric Range', headerName: 'Electric Range', width: 130 },
        { field: 'Electric Range', headerName: 'Electric Range', width: 130 },
        // Add other columns as necessary
      ];
  
      
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ];
    const paginationModel = { page: 0, pageSize: 5 };
  return (
    <>
   <Typography> Table Data</Typography>
    <Paper sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={Data}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      getRowId={(row) => row.VIN}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      sx={{ border: 0 }}
    />
  </Paper>
  </>
  )
}

export default TableComp