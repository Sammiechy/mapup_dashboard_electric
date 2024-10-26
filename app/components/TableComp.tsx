import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const TableComp = ({Data}) => {
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