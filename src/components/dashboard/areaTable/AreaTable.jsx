/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import AreaTableAction from "./AreaTableAction";
import { useStateManager } from "../../../dataProvider/stateManager";
import { ThemeContext } from "../../../context/ThemeContext";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2e2e48", // Dark background color for the DataGrid
    },
    text: {
      primary: "#ffffff", // White text color for the DataGrid
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "& .MuiDataGrid-cell": {
            color: "#ffffff", // Set the text color for cells
          },
        },
      },
    },
  },
  overrides: {
    MuiDataGridCell: {
      root: {
        "&.MuiDataGrid-cell--actions": {
          color: "#ffffff", // White text color for action column
          "& .MuiIconButton-label": {
            color: "#ffffff !important", // Icon color for action column
          },
        },
      },
    },
  },
});  

const TABLE_HEADS = [
  { field: "country", headerName: "Country", width: 200 },
  { field: "cases", headerName: "Confirmed", width: 150 },
  { field: "recovered", headerName: "Recovered", width: 150 },
  { field: "tests", headerName: "Tested", width: 150 },
  { field: "deaths", headerName: "Deaths", width: 150 },
  {
    field: "activePerOneMillion",
    headerName: "Active Per Million",
    width: 200,
  },
  { field: "casesPerOneMillion", headerName: "Cases Per Million", width: 200 },
  {
    field: "criticalPerOneMillion",
    headerName: "Critical Per Million",
    width: 200,
  },
  {
    field: "deathsPerOneMillion",
    headerName: "Deaths Per Million",
    width: 200,
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 150,
    renderCell: (params) => (
      <AreaTableAction
        theme={params.theme}
        rowData={params.row}
        onClick={() => handleActionFilter(params)}
      />
    ),
  },
];

const ROWS_PER_PAGE = 20;

const AreaTable = () => {
  const { countriesData } = useStateManager();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [numericFilter, setNumericFilter] = useState(null);
  const { theme } = useContext(ThemeContext);

  const appliedTheme = theme === "dark" ? darkTheme : lightTheme;

  const totalPages = Math.ceil(countriesData.length / ROWS_PER_PAGE);

  const filteredData = countriesData.filter((country) => {
    // Filter by country name
    const nameMatch = country.country
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    // Filter by numeric value
    const numericMatch =
      numericFilter === null || country.cases === numericFilter;
    return nameMatch && numericMatch;
  });

  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;
  const slicedData = filteredData.slice(startIndex, endIndex);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleActionFilter = (params) => {
    // Filter by numeric value in action column
    const numericValue = parseFloat(params.row.cases);
    setNumericFilter(isNaN(numericValue) ? null : numericValue);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  //   const getRowClassName = (params) => {
  //     console.log("Row index:", params.api.getRowIndex(params.row));
  //     return params.api.getRowIndex(params.row) % 2 === 0 ? 'alternate-row' : '';
  // };

  return (
    <MuiThemeProvider theme={appliedTheme}>
      <div style={{ width: "100%" }}>
        <div style={{ overflowX: "auto" }}>
          <div style={{ minWidth: 1200 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <TextField
                type="text"
                placeholder="Search by country name"
                value={searchQuery}
                onChange={handleSearch}
                variant="filled"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {/* <Typography variant="h4" component="h2" style={{ marginLeft: "10rem",fontSize:'2rem' }}>Countrywise Data</Typography> */}
            </div>

            <DataGrid
              rows={slicedData}
              columns={TABLE_HEADS}
              pagination
              pageSize={ROWS_PER_PAGE}
              rowCount={filteredData.length}
              paginationMode="server"
              autoHeight={true}
              page={currentPage - 1}
              onPageChange={(newPage) => handleChangePage(newPage + 1)}
              getRowClassName={(params) =>
                params.indexRelativeToCurrentPage % 2 === 0
                  ? "Mui-even"
                  : "Mui-odd"
              }
              sx={{
                "& .MuiDataGrid-row": {
                  "&:nth-of-type(odd)": {
                    // backgroundColor: 'lightblue', // Change to your desired background color for odd rows
                  },
                  "&:nth-of-type(even)": {
                    backgroundColor: "gray", // Change to your desired background color for even rows
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default AreaTable;
