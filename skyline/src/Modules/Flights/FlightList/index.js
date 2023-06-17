import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../../Globals/Api/axios";

import axios from "axios";
// import configs from "../../../globals/config";
import Layout from "./../../../Shared/Layout";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import { visuallyHidden } from "@mui/utils";

function createData(
  _id,
  type,
  flightNo,
  classes,
  from,
  to,
  fromDate,
  toDate,
  date,
  price,
  isSelect
) {
  return {
    _id,
    type,
    flightNo,
    classes,
    from,
    to,
    fromDate,
    toDate,
    date,
    price,
    isSelect,
  };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "type",
    numeric: false,
    disablePadding: true,
    label: "type",
  },
  {
    id: "flightNo",
    numeric: false,
    disablePadding: true,
    label: "flight Number",
  },
  {
    id: "classes",
    numeric: false,
    disablePadding: false,
    label: "Classes",
  },
  {
    id: "from",
    numeric: false,
    disablePadding: false,
    label: "From",
  },
  {
    id: "to",
    numeric: false,
    disablePadding: false,
    label: "To",
  },
  {
    id: "toData",
    numeric: false,
    disablePadding: false,
    label: "To Data",
  },
  {
    id: "fromData",
    numeric: false,
    disablePadding: false,
    label: "From Data",
  },
  {
    id: "data",
    numeric: false,
    disablePadding: false,
    label: "Data",
  },
  {
    id: "price",
    numeric: false,
    disablePadding: false,
    label: "Price",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow style={{ backgroundColor: "#010e30" }}>
        <TableCell padding="checkbox" style={{ padding: "10px" }}>
          <Checkbox
            style={{ color: "white", padding: "10px" }}
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all flights",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ color: "white", textAlign: "center" }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              style={{ color: "white" }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  var { numSelected,rows,setRows } = props;

  const handleDelete = (event,rows,setRows) => {
    const updatedData = rows.filter((item) => !item.isSelect);
    const deletedData = rows.filter((item) => item.isSelect);

    setRows(updatedData);
    deletedData.map(async (e) => {
      // console.log(e._id)
        await axiosApi
          .delete(`/api/v1/flights/${e._id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("user"),
            },
            withCredential: true,
          })
          .catch((error) => {
            console.log(error.message);
            alert("Error submitting form");
          });
        });
      }
    

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        bgcolor: "#010e30",

        ...(numSelected > 0 && {
          bgcolor: "#010e30",
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="white"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        ></Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete" style={{ color: "white" }}>
          <IconButton onClick={(e) => handleDelete(e, rows, setRows)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list" style={{ color: "white" }}>
          <IconButton>
            <FilterAltIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function FlightList() {
  var [rows, setRows] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);

  const navigate = useNavigate();

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("_id");
  const [selected, setSelected] = useState([]);

  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (isCheckAll) {
      const updatedData = rows.map((item) => ({
        ...item,
        isSelect: true,
      }));
      setRows(updatedData);
      setIsCheckAll(!isCheckAll);
      const newSelected = rows.map((n) => n._id);
      setSelected(newSelected);
    } else {
        const updatedData = rows.map((item) => ({
          ...item,
          isSelect: false,
        }));
        setRows(updatedData);
        setIsCheckAll(!isCheckAll);
        setSelected( []);
      }
  };
  const handleClick = (event, _id) => {
    setRows((prevData) => {
      return prevData.map((item) => {
        if (item._id === _id) {
          return { ...item, isSelect: !item.isSelect };
        }
        return item;
      });
    });

    const selectedIndex = selected.indexOf(_id);

    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, _id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [rows, order, orderBy, page, rowsPerPage]
  );
  const getFlightList = async () => {
    const response = await axiosApi
      .get("/api/v1/flights", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .catch((err) => {
        console.error(`error${err}`);
      });

    const updatedRows = response.data.data.map((item) =>
      createData(
        item._id,
        item.type,
        item.flightNo,
        item.classes,
        item.from,
        item.to,
        item.toDate,
        item.fromDate,
        item.date,
        item.price,
        false
      )
    );

    setRows(updatedRows);
  };

  useEffect(() => {
    getFlightList();
  }, []);
  console.log("rows", rows);

  return (
    <Layout>
      <Paper sx={{ mb: 4, }}>
        <EnhancedTableToolbar numSelected={selected.length} rows={rows} setRows={setRows}/>
        <TableContainer component={Paper} style={{ overflowX: "scroll" }}>
          <Table
            sx={{  }}
            aria-label="Flight List"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row._id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row._id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox" style={{ padding: "10px" }}>
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        onClick={(event) => handleClick(event, row._id)}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.type}
                    </TableCell>

                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.flightNo}
                    </TableCell>

                    <TableCell
                      align="right"
                      onClick={(e) =>
                         navigate(`/Flight/FlightList/Details/${row._id}`)
                }
                    >
                      {row.classes}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={(e) =>
                        navigate(`/Flight/FlightList/Details/${row._id}`)
                      }
                    >
                      {row.from}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={(e) =>
                        navigate(`/Flight/FlightList/Details/${row._id}`)
                      }
                    >
                      {row.to}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={(e) =>
                        navigate(`/Flight/FlightList/Details/${row._id}`)
                      }
                    >
                      {row.fromDate}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={(e) =>
                        navigate(`/Flight/FlightList/Details/${row._id}`)
                      }
                    >
                      {row.toDate}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={(e) =>
                        navigate(`/Flight/FlightList/Details/${row._id}`)
                      }
                    >
                      {row.date}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={(e) =>
                        navigate(`/Flight/FlightList/Details/${row._id}`)
                      }
                    >
                      {row.price}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Layout>
  );
}
